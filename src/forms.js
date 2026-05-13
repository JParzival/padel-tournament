var RacketApp = globalThis.RacketApp || (globalThis.RacketApp = {});
if (globalThis.window) globalThis.window.RacketApp = RacketApp;

async function addTeam(formData) {
  const name = String(formData.get("name") || "").trim();
  const type = normalizeParticipantType(String(formData.get("type") || ""));
  const players =
    type === "individual"
      ? await buildIndividualPlayer(name, formData.get("individualPhoto"))
      : await buildTeamPlayers(formData.getAll("players"), formData.getAll("playerPhotos"));
  const notes = String(formData.get("notes") || "").trim();

  if (!name || !players.length) return showToast("El participante necesita nombre e integrantes");
  if (type === "team" && players.length < 2) return showToast("El equipo necesita al menos dos integrantes");

  state.teams.push({
    id: uid("team"),
    type,
    name,
    players,
    notes,
    createdAt: new Date().toISOString(),
  });

  saveState("Participante guardado");
  render();
}

async function buildIndividualPlayer(name, photoFile) {
  const photo = await readImageFileAsDataUrl(photoFile);
  return name ? [{ id: uid("player"), name, photo }] : [];
}

async function buildTeamPlayers(playerNames, photoFiles) {
  const players = [];

  for (const [index, playerName] of playerNames.entries()) {
    const name = String(playerName || "").trim();
    if (!name) continue;
    players.push({
      id: uid("player"),
      name,
      photo: await readImageFileAsDataUrl(photoFiles[index]),
    });
  }

  return players;
}

function readImageFileAsDataUrl(file) {
  if (!file || typeof file !== "object" || !file.size) return Promise.resolve("");

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => resolve("");
    reader.readAsDataURL(file);
  });
}

function deleteTeam(teamId) {
  const team = state.teams.find((item) => item.id === teamId);
  if (!team) return;

  const used = state.competitions.some((competition) => competition.teamIds.includes(teamId));
  if (used && !askConfirm(`"${team.name}" está inscrito en competiciones. Al eliminarlo se quitará también de grupos y cuadros. ¿Continuar?`)) {
    return;
  }

  state.teams = state.teams.filter((item) => item.id !== teamId);
  state.competitions.forEach((competition) => {
    competition.teamIds = competition.teamIds.filter((id) => id !== teamId);
    competition.groups.forEach((group) => {
      group.teamIds = group.teamIds.filter((id) => id !== teamId);
      group.matches = group.matches.filter((match) => match.homeTeamId !== teamId && match.awayTeamId !== teamId);
    });
    competition.knockout.rounds.forEach((round) => {
      round.matches.forEach((match) => {
        if (match.homeTeamId === teamId) match.homeTeamId = null;
        if (match.awayTeamId === teamId) match.awayTeamId = null;
        if (match.winnerTeamId === teamId) match.winnerTeamId = null;
      });
    });
  });

  saveState("Participante eliminado");
  render();
}

function addCompetition(formData) {
  const name = String(formData.get("name") || "").trim();
  const category = String(formData.get("category") || "").trim();
  const sport = normalizeSport(String(formData.get("sport") || ""));
  const playMode = normalizePlayMode(String(formData.get("playMode") || ""));
  const format = normalizeCompetitionFormat(String(formData.get("format") || ""));
  const groupCount = format === "knockout" ? 1 : clamp(Number(formData.get("groupCount") || 1), 1, 16);

  if (!name) return showToast("La competición necesita nombre");

  const competition = {
    id: uid("competition"),
    name,
    category,
    sport,
    playMode,
    format,
    groupCount,
    teamIds: [],
    groups: [],
    knockout: { rounds: [] },
    createdAt: new Date().toISOString(),
  };

  state.competitions.push(competition);
  ui.selectedCompetitionId = competition.id;
  saveState("Competición creada");
  render();
}

function deleteCompetition(competitionId) {
  const competition = state.competitions.find((item) => item.id === competitionId);
  if (!competition) return;

  if (!askConfirm(`¿Eliminar "${competition.name}" y todos sus resultados?`)) return;

  state.competitions = state.competitions.filter((item) => item.id !== competitionId);
  ui.selectedCompetitionId = state.competitions[0]?.id || "";
  saveState("Competición eliminada");
  render();
}

function saveTeamAssignment(competitionId) {
  const competition = getCompetition(competitionId);
  if (!competition) return;

  const selectedTeamIds = [...document.querySelectorAll("[data-team-assignment]:checked")].map((input) => input.value);
  const changed = selectedTeamIds.join("|") !== competition.teamIds.join("|");
  const hasGenerated = competition.groups.length || competition.knockout.rounds.length;

  if (changed && hasGenerated && !askConfirm("Cambiar participantes no borra automáticamente los grupos existentes, pero puede dejarlos desactualizados. ¿Guardar igualmente?")) {
    return;
  }

  competition.teamIds = selectedTeamIds;
  saveState("Asignación guardada");
  render();
}

function generateGroups(competitionId) {
  const competition = getCompetition(competitionId);
  const assignedParticipantIds = competition ? getAssignedEligibleParticipantIds(competition) : [];
  if (!competition || assignedParticipantIds.length < 2) return;
  if (!hasGroupStage(competition)) {
    showToast("Esta competición no tiene fase de grupos");
    return;
  }

  if (competition.groups.some((group) => group.matches.some(hasResult)) || competition.knockout.rounds.length) {
    const ok = askConfirm("Esto sustituirá grupos, partidos y eliminatoria de esta competición. ¿Continuar?");
    if (!ok) return;
  }

  const shuffled = [...assignedParticipantIds].sort((a, b) => getTeamName(a).localeCompare(getTeamName(b), "es"));
  const groupCount = Math.min(competition.groupCount, shuffled.length);
  const groups = Array.from({ length: groupCount }, (_, index) => ({
    id: uid("group"),
    name: `Grupo ${String.fromCharCode(65 + index)}`,
    teamIds: [],
    matches: [],
  }));

  shuffled.forEach((teamId, index) => {
    groups[index % groupCount].teamIds.push(teamId);
  });

  groups.forEach((group) => {
    group.matches = createRoundRobinMatches(group);
  });

  competition.groups = groups;
  competition.knockout = { rounds: [] };
  saveState("Grupos generados");
  render();
}
function updateGroupScore(input) {
  const competition = getCompetition(input.dataset.competitionId);
  if (!competition) return;

  const match = competition.groups
    .flatMap((group) => group.matches)
    .find((item) => item.id === input.dataset.matchId);

  if (!match) return;

  ensureMatchShape(match);
  match.sets[Number(input.dataset.setIndex)][input.dataset.side] = normalizeScore(input.value);
  saveState("Resultado actualizado");
  render();
}

function clearGroupResult(competitionId, matchId) {
  const competition = getCompetition(competitionId);
  if (!competition) return;

  const match = competition.groups.flatMap((group) => group.matches).find((item) => item.id === matchId);
  if (!match) return;

  match.sets = createEmptySets();
  match.homeScore = null;
  match.awayScore = null;
  saveState("Resultado limpiado");
  render();
}

function generateBracket(competitionId) {
  const competition = getCompetition(competitionId);
  const assignedParticipantIds = competition ? getAssignedEligibleParticipantIds(competition) : [];
  if (!competition || !hasKnockoutStage(competition)) {
    showToast("Esta competición no tiene eliminatoria");
    return;
  }

  if (hasGroupStage(competition) && !competition.groups.length) return;
  if (!hasGroupStage(competition) && assignedParticipantIds.length < 2) return;

  if (competition.knockout.rounds.length && !askConfirm("Esto sustituirá el cuadro eliminatorio actual. ¿Continuar?")) {
    return;
  }

  const pairings = hasGroupStage(competition)
    ? getQualifierPairings(competition, ui.qualifiersPerGroup)
    : getDirectKnockoutPairings(competition);
  if (pairings.flat().filter((entry) => entry?.teamId).length < 2) {
    showToast("Hacen falta al menos dos participantes o clasificados");
    return;
  }

  competition.knockout = { rounds: buildKnockoutRounds(pairings) };
  updateKnockoutAdvancement(competition);
  saveState("Cuadro generado");
  render();
}
function updateBracketScore(input) {
  const competition = getCompetition(input.dataset.competitionId);
  if (!competition) return;

  const round = competition.knockout.rounds[Number(input.dataset.roundIndex)];
  const match = round?.matches.find((item) => item.id === input.dataset.matchId);
  if (!match) return;

  ensureMatchShape(match);
  match.sets[Number(input.dataset.setIndex)][input.dataset.side] = normalizeScore(input.value);
  match.winnerTeamId = getMatchWinner(match);
  updateKnockoutAdvancement(competition);
  saveState("Eliminatoria actualizada");
  render();
}

function clearBracketResult(competitionId, matchId) {
  const competition = getCompetition(competitionId);
  if (!competition) return;

  const match = competition.knockout.rounds.flatMap((round) => round.matches).find((item) => item.id === matchId);
  if (!match) return;

  match.sets = createEmptySets();
  match.homeScore = null;
  match.awayScore = null;
  match.winnerTeamId = getMatchWinner(match);
  updateKnockoutAdvancement(competition);
  saveState("Resultado limpiado");
  render();
}

function updateKnockoutAdvancement(competition) {
  const rounds = competition.knockout.rounds;

  rounds.forEach((round) => {
    round.matches.forEach((match) => {
      match.winnerTeamId = getMatchWinner(match);
    });
  });

  for (let roundIndex = 1; roundIndex < rounds.length; roundIndex += 1) {
    const previousRound = rounds[roundIndex - 1];
    const round = rounds[roundIndex];

    round.matches.forEach((match, matchIndex) => {
      const homeSource = previousRound.matches[matchIndex * 2];
      const awaySource = previousRound.matches[matchIndex * 2 + 1];
      const nextHome = homeSource?.winnerTeamId || null;
      const nextAway = awaySource?.winnerTeamId || null;
      const changed = match.homeTeamId !== nextHome || match.awayTeamId !== nextAway;

      match.homeTeamId = nextHome;
      match.awayTeamId = nextAway;
      match.homeLabel = homeSource ? `Ganador partido ${homeSource.order}` : "Por definir";
      match.awayLabel = awaySource ? `Ganador partido ${awaySource.order}` : "Por definir";

      if (changed) {
        match.sets = createEmptySets();
        match.homeScore = null;
        match.awayScore = null;
        match.winnerTeamId = null;
      }
      match.winnerTeamId = getMatchWinner(match);
    });
  }
}

function swapBracketSlots(source, target) {
  if (source.competitionId !== target.competitionId) return;
  if (source.matchId === target.matchId && source.side === target.side) return;

  const competition = getCompetition(source.competitionId);
  const firstRound = competition?.knockout.rounds[0];
  if (!firstRound) return;

  const sourceMatch = firstRound.matches.find((match) => match.id === source.matchId);
  const targetMatch = firstRound.matches.find((match) => match.id === target.matchId);
  if (!sourceMatch || !targetMatch) return;

  const sourceTeamKey = `${source.side}TeamId`;
  const targetTeamKey = `${target.side}TeamId`;
  const sourceLabelKey = `${source.side}Label`;
  const targetLabelKey = `${target.side}Label`;

  const sourceTeam = sourceMatch[sourceTeamKey];
  const sourceLabel = sourceMatch[sourceLabelKey];

  sourceMatch[sourceTeamKey] = targetMatch[targetTeamKey];
  sourceMatch[sourceLabelKey] = targetMatch[targetLabelKey];
  targetMatch[targetTeamKey] = sourceTeam;
  targetMatch[targetLabelKey] = sourceLabel;

  competition.knockout.rounds.forEach((round) => {
    round.matches.forEach((match) => {
      match.sets = createEmptySets();
      match.homeScore = null;
      match.awayScore = null;
      match.winnerTeamId = null;
    });
  });

  updateKnockoutAdvancement(competition);
  saveState("Cruce actualizado");
  render();
}
function syncCompetitionFormatFields() {
  const formatSelect = document.querySelector("#competitionFormat");
  const groupField = document.querySelector("[data-group-count-field]");
  const groupInput = document.querySelector("#competitionGroups");
  const isKnockoutOnly = formatSelect?.value === "knockout";

  groupField?.classList.toggle("hidden", isKnockoutOnly);
  if (groupInput) groupInput.disabled = isKnockoutOnly;
}

function syncParticipantForm() {
  const typeSelect = document.querySelector("#participantType");
  const nameLabel = document.querySelector("[data-participant-name-label]");
  const individualPhotoField = document.querySelector("[data-individual-photo-field]");
  const individualPhotoInput = document.querySelector("[name='individualPhoto']");
  const playersField = document.querySelector("[data-participant-players-field]");
  const playerInputs = [...document.querySelectorAll("[data-player-input]")];
  const playerPhotoInputs = [...document.querySelectorAll("[name='playerPhotos']")];
  const isIndividual = typeSelect?.value === "individual";

  if (nameLabel) nameLabel.textContent = localizeMessage(isIndividual ? "Nombre del jugador" : "Nombre del equipo");
  individualPhotoField?.classList.toggle("hidden", !isIndividual);
  if (individualPhotoInput) individualPhotoInput.disabled = !isIndividual;
  playersField?.classList.toggle("hidden", isIndividual);
  playerInputs.forEach((input) => {
    input.disabled = isIndividual;
    input.required = !isIndividual;
  });
  playerPhotoInputs.forEach((input) => {
    input.disabled = isIndividual;
  });
}

function updatePhotoInputStatus(input) {
  const wrapper = input.closest(".photo-upload");
  const status = wrapper?.querySelector("[data-photo-status]");
  if (!status) return;

  const fileName = input.files?.[0]?.name || "";
  status.textContent = fileName ? `Foto adjunta: ${fileName}` : "Sin foto";
  wrapper.classList.toggle("has-file", Boolean(fileName));
}

function addPlayerField() {
  const list = document.querySelector("[data-player-list]");
  if (!list) return;
  const index = list.querySelectorAll("[data-player-input]").length + 1;
  list.insertAdjacentHTML("beforeend", renderPlayerInput(`Jugador ${index}`));
  syncParticipantForm();
  applyTranslations(list);
}

function removePlayerField(button) {
  const row = button.closest(".player-input-row");
  const list = document.querySelector("[data-player-list]");
  if (!row || !list || list.querySelectorAll(".player-input-row").length <= 1) return;
  row.remove();
  syncParticipantForm();
}

Object.assign(RacketApp, { forms: { addTeam, buildIndividualPlayer, buildTeamPlayers, readImageFileAsDataUrl, deleteTeam, addCompetition, deleteCompetition, saveTeamAssignment, generateGroups, updateGroupScore, clearGroupResult, generateBracket, updateBracketScore, clearBracketResult, updateKnockoutAdvancement, swapBracketSlots, syncCompetitionFormatFields, syncParticipantForm, updatePhotoInputStatus, addPlayerField, removePlayerField } });
