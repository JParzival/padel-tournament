var RacketApp = globalThis.RacketApp || (globalThis.RacketApp = {});
if (globalThis.window) globalThis.window.RacketApp = RacketApp;

function createRoundRobinMatches(group) {
  const matches = [];
  for (let i = 0; i < group.teamIds.length; i += 1) {
    for (let j = i + 1; j < group.teamIds.length; j += 1) {
      matches.push({
        id: uid("match"),
        groupId: group.id,
        order: matches.length + 1,
        homeTeamId: group.teamIds[i],
        awayTeamId: group.teamIds[j],
        sets: createEmptySets(),
      });
    }
  }
  return matches;
}
function calculateStandings(group) {
  const rows = new Map();

  group.teamIds.forEach((teamId) => {
    rows.set(teamId, {
      teamId,
      played: 0,
      won: 0,
      lost: 0,
      setsWon: 0,
      setsLost: 0,
      setDiff: 0,
      gamesWon: 0,
      gamesLost: 0,
      gameDiff: 0,
      points: 0,
    });
  });

  group.matches.filter(hasResult).forEach((match) => {
    ensureMatchShape(match);
    const home = rows.get(match.homeTeamId);
    const away = rows.get(match.awayTeamId);
    if (!home || !away) return;
    const score = getMatchScore(match);
    const winnerTeamId = getMatchWinner(match);

    home.played += 1;
    away.played += 1;

    home.setsWon += score.homeSets;
    home.setsLost += score.awaySets;
    away.setsWon += score.awaySets;
    away.setsLost += score.homeSets;
    home.gamesWon += score.homeGames;
    home.gamesLost += score.awayGames;
    away.gamesWon += score.awayGames;
    away.gamesLost += score.homeGames;

    if (winnerTeamId === match.homeTeamId) {
      home.won += 1;
      home.points += 3;
      away.lost += 1;
    } else if (winnerTeamId === match.awayTeamId) {
      away.won += 1;
      away.points += 3;
      home.lost += 1;
    }
  });

  rows.forEach((row) => {
    row.setDiff = row.setsWon - row.setsLost;
    row.gameDiff = row.gamesWon - row.gamesLost;
  });

  return [...rows.values()].sort((a, b) => {
    return (
      b.points - a.points ||
      b.setDiff - a.setDiff ||
      b.gameDiff - a.gameDiff ||
      b.gamesWon - a.gamesWon ||
      getTeamName(a.teamId).localeCompare(getTeamName(b.teamId), "es")
    );
  });
}
function getQualifierPairings(competition, perGroup) {
  const groups = competition.groups.map((group, groupIndex) => ({
    groupIndex,
    groupName: group.name,
    qualifiers: calculateStandings(group)
      .slice(0, perGroup)
      .map((row, rankIndex) => ({
        teamId: row.teamId,
        groupIndex,
        groupName: group.name,
        rankIndex,
        label: `${group.name} ${rankIndex + 1}o`,
        points: row.points,
        setDiff: row.setDiff,
        gameDiff: row.gameDiff,
        gamesWon: row.gamesWon,
      })),
  }));

  if (groups.length < 2) {
    return seedGlobalPairings(groups.flatMap((group) => group.qualifiers));
  }

  const available = new Map();
  groups.forEach((group) => {
    available.set(
      group.groupIndex,
      new Map(group.qualifiers.map((qualifier) => [qualifier.rankIndex, qualifier])),
    );
  });

  const pairings = [];

  groups.forEach((group) => {
    group.qualifiers.forEach((home) => {
      if (available.get(group.groupIndex)?.get(home.rankIndex)?.teamId !== home.teamId) return;

      available.get(group.groupIndex).delete(home.rankIndex);
      const oppositeRank = perGroup - home.rankIndex - 1;
      const rivals = groups
        .filter((candidateGroup) => candidateGroup.groupIndex !== group.groupIndex)
        .map((candidateGroup) => available.get(candidateGroup.groupIndex)?.get(oppositeRank))
        .filter(Boolean);
      const rival = pickRival(rivals);

      if (rival) {
        available.get(rival.groupIndex).delete(rival.rankIndex);
      }

      pairings.push([home, rival || null]);
    });
  });

  const leftovers = [...available.values()].flatMap((rankMap) => [...rankMap.values()]);
  return [...pairings, ...seedGlobalPairings(leftovers)];
}

function getDirectKnockoutPairings(competition) {
  const seeds = getAssignedEligibleParticipantIds(competition)
    .sort((a, b) => getTeamName(a).localeCompare(getTeamName(b), "es"))
    .map((teamId, index) => ({
      teamId,
      groupIndex: 0,
      groupName: "Eliminatoria",
      rankIndex: index,
      label: `${getParticipantSingular(competition)} ${index + 1}`,
      points: 0,
      setDiff: 0,
      gameDiff: 0,
      gamesWon: 0,
    }));

  return seedGlobalPairings(seeds);
}

function seedGlobalPairings(qualifiers) {
  const sorted = [...qualifiers].sort(compareQualifiers);
  const pairings = [];

  while (sorted.length) {
    pairings.push([sorted.shift(), sorted.pop() || null]);
  }

  return pairings;
}

function pickRival(rivals) {
  if (!rivals.length) return null;
  return rivals[Math.floor(Math.random() * rivals.length)];
}

function compareQualifiers(a, b) {
  return (
    b.points - a.points ||
    b.setDiff - a.setDiff ||
    b.gameDiff - a.gameDiff ||
    b.gamesWon - a.gamesWon ||
    getTeamName(a.teamId).localeCompare(getTeamName(b.teamId), "es")
  );
}

function buildKnockoutRounds(pairings) {
  const qualifierCount = pairings.flat().filter((entry) => entry?.teamId).length;
  const slotCount = nextPowerOfTwo(qualifierCount);
  const slots = pairings.flat();
  while (slots.length < slotCount) slots.push(null);
  const roundCount = Math.log2(slotCount);
  const rounds = [];

  for (let roundIndex = 0; roundIndex < roundCount; roundIndex += 1) {
    const matchCount = slotCount / 2 ** (roundIndex + 1);
    rounds.push({
      name: getRoundName(roundIndex, roundCount),
      matches: Array.from({ length: matchCount }, (_, matchIndex) => {
        const firstRound = roundIndex === 0;
        const homeSlot = slots[matchIndex * 2];
        const awaySlot = slots[matchIndex * 2 + 1];

        return {
          id: uid("ko"),
          order: matchIndex + 1,
          homeTeamId: firstRound ? homeSlot?.teamId || null : null,
          awayTeamId: firstRound ? awaySlot?.teamId || null : null,
          homeLabel: firstRound ? homeSlot?.label || "Bye" : `Ganador ${matchIndex * 2 + 1}`,
          awayLabel: firstRound ? awaySlot?.label || "Bye" : `Ganador ${matchIndex * 2 + 2}`,
          sets: createEmptySets(),
          winnerTeamId: null,
        };
      }),
    });
  }

  return rounds;
}
function getRoundName(roundIndex, roundCount) {
  const remaining = roundCount - roundIndex;
  if (remaining === 1) return "Final";
  if (remaining === 2) return "Semifinales";
  if (remaining === 3) return "Cuartos";
  return `Ronda ${roundIndex + 1}`;
}

function getMatchWinner(match) {
  ensureMatchShape(match);
  if (match.homeTeamId && !match.awayTeamId) return match.homeTeamId;
  if (!match.homeTeamId && match.awayTeamId) return match.awayTeamId;
  if (!hasResult(match)) return null;
  const score = getMatchScore(match);
  return score.homeSets > score.awaySets ? match.homeTeamId : match.awayTeamId;
}

function hasResult(match) {
  const score = getMatchScore(match);
  return score.homeSets >= 2 || score.awaySets >= 2;
}

function hasAnySet(match) {
  ensureMatchShape(match);
  return match.sets.some((set) => Number.isFinite(set.home) || Number.isFinite(set.away));
}

function getMatchScore(match) {
  ensureMatchShape(match);
  const score = { homeSets: 0, awaySets: 0, homeGames: 0, awayGames: 0 };

  for (const set of match.sets) {
    if (score.homeSets >= 2 || score.awaySets >= 2) break;
    if (!Number.isFinite(set.home) || !Number.isFinite(set.away) || set.home === set.away) continue;

      score.homeGames += set.home;
      score.awayGames += set.away;
      if (set.home > set.away) {
        score.homeSets += 1;
      } else {
        score.awaySets += 1;
      }
  }

  return score;
}

function ensureMatchShape(match) {
  if (Array.isArray(match.sets)) {
    while (match.sets.length < 3) match.sets.push({ home: null, away: null });
    match.sets = match.sets.slice(0, 3).map((set) => ({
      home: Number.isFinite(set.home) ? set.home : null,
      away: Number.isFinite(set.away) ? set.away : null,
    }));
    return match;
  }

  match.sets = migrateLegacyScore(match);
  return match;
}

function migrateLegacyScore(match) {
  const homeScore = Number.isFinite(match.homeScore) ? match.homeScore : null;
  const awayScore = Number.isFinite(match.awayScore) ? match.awayScore : null;
  const sets = createEmptySets();

  if (homeScore === null || awayScore === null || homeScore === awayScore) return sets;

  sets[0] = { home: homeScore, away: awayScore };
  sets[1] = homeScore > awayScore ? { home: 6, away: 4 } : { home: 4, away: 6 };
  return sets;
}

function createEmptySets() {
  return [
    { home: null, away: null },
    { home: null, away: null },
    { home: null, away: null },
  ];
}

function normalizeScore(value) {
  if (value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : null;
}
function getTeamName(teamId) {
  if (!teamId) return "Bye";
  return state.teams.find((team) => team.id === teamId)?.name || "Participante eliminado";
}

function getTeam(teamId) {
  return state.teams.find((team) => team.id === teamId) || null;
}

function nextPowerOfTwo(number) {
  return 2 ** Math.ceil(Math.log2(number));
}

function clamp(number, min, max) {
  return Math.min(max, Math.max(min, number));
}

function normalizeSport(value) {
  return SPORT_OPTIONS.some((option) => option.value === value) ? value : DEFAULT_SPORT;
}

function normalizePlayMode(value) {
  return PLAY_MODE_OPTIONS.some((option) => option.value === value) ? value : DEFAULT_PLAY_MODE;
}

function normalizeCompetitionFormat(value) {
  return COMPETITION_FORMAT_OPTIONS.some((option) => option.value === value) ? value : DEFAULT_COMPETITION_FORMAT;
}

function normalizeParticipantType(value) {
  return PARTICIPANT_TYPE_OPTIONS.some((option) => option.value === value) ? value : DEFAULT_PARTICIPANT_TYPE;
}

function hasGroupStage(competition) {
  return competition?.format === "groups" || competition?.format === "groups-knockout";
}

function hasKnockoutStage(competition) {
  return competition?.format === "knockout" || competition?.format === "groups-knockout";
}

function getOptionLabel(options, value) {
  return options.find((option) => option.value === value)?.label || value;
}

function getSportLabel(competition) {
  return getOptionLabel(SPORT_OPTIONS, normalizeSport(competition?.sport));
}

function getPlayModeLabel(competition) {
  return getOptionLabel(PLAY_MODE_OPTIONS, normalizePlayMode(competition?.playMode));
}

function getCompetitionFormatLabel(competition) {
  return getOptionLabel(COMPETITION_FORMAT_OPTIONS, normalizeCompetitionFormat(competition?.format));
}

function getParticipantTypeLabel(type) {
  return getOptionLabel(PARTICIPANT_TYPE_OPTIONS, normalizeParticipantType(type));
}

function getRequiredParticipantType(competition) {
  return normalizePlayMode(competition?.playMode) === "singles" ? "individual" : "team";
}

function getRequiredParticipantTypeLabel(competition) {
  return getParticipantTypeLabel(getRequiredParticipantType(competition)).toLowerCase();
}

function getEligibleParticipantsForCompetition(competition) {
  const requiredType = getRequiredParticipantType(competition);
  return state.teams.filter((team) => normalizeParticipantType(team.type) === requiredType);
}

function getFilteredParticipants(typeFilter = "all", search = "") {
  const normalizedFilter = typeFilter === "individual" || typeFilter === "team" ? typeFilter : "all";
  const query = normalizeSearchText(search);

  return state.teams.filter((participant) => {
    const typeMatches = normalizedFilter === "all" || normalizeParticipantType(participant.type) === normalizedFilter;
    if (!typeMatches) return false;
    if (!query) return true;
    return getParticipantSearchText(participant).includes(query);
  });
}

function getParticipantSearchText(participant) {
  return normalizeSearchText(
    [
      participant.name,
      getParticipantTypeLabel(participant.type),
      getParticipantCardMeta(participant),
      ...(participant.players || []).map((player) => player.name),
      participant.notes,
    ].join(" "),
  );
}

function normalizeSearchText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getAssignedEligibleParticipantIds(competition) {
  const eligibleIds = new Set(getEligibleParticipantsForCompetition(competition).map((participant) => participant.id));
  return competition.teamIds.filter((teamId) => eligibleIds.has(teamId));
}

function getParticipantAssignmentMeta(participant) {
  if (normalizeParticipantType(participant.type) === "individual") return "(individual)";
  return `(${formatPlayerCount(participant.players.length)})`;
}

function getParticipantCardMeta(participant) {
  if (normalizeParticipantType(participant.type) === "individual") return "Participante individual";
  return participant.players.map((player) => player.name).join(" - ") || "Sin jugadores";
}

function getPlayerPhoto(player) {
  return player?.photo || DEFAULT_AVATAR;
}

function getParticipantPlural(competition) {
  return normalizePlayMode(competition?.playMode) === "singles" ? "personas" : "parejas/equipos";
}

function getParticipantSingular(competition) {
  return normalizePlayMode(competition?.playMode) === "singles" ? "persona" : "pareja/equipo";
}

function formatParticipantCount(competition, count) {
  return `${count} ${count === 1 ? getParticipantSingular(competition) : getParticipantPlural(competition)}`;
}

function formatPlayerCount(count) {
  return `${count} ${count === 1 ? "jugador" : "jugadores"}`;
}
function formatDiff(number) {
  if (number > 0) return `+${number}`;
  return String(number);
}

Object.assign(RacketApp, { domain: { createRoundRobinMatches, calculateStandings, getQualifierPairings, getDirectKnockoutPairings, seedGlobalPairings, pickRival, compareQualifiers, buildKnockoutRounds, getRoundName, getMatchWinner, hasResult, hasAnySet, getMatchScore, ensureMatchShape, migrateLegacyScore, createEmptySets, normalizeScore, getTeamName, getTeam, nextPowerOfTwo, clamp, normalizeSport, normalizePlayMode, normalizeCompetitionFormat, normalizeParticipantType, hasGroupStage, hasKnockoutStage, getOptionLabel, getSportLabel, getPlayModeLabel, getCompetitionFormatLabel, getParticipantTypeLabel, getRequiredParticipantType, getRequiredParticipantTypeLabel, getEligibleParticipantsForCompetition, getFilteredParticipants, getParticipantSearchText, normalizeSearchText, getAssignedEligibleParticipantIds, getParticipantAssignmentMeta, getParticipantCardMeta, getPlayerPhoto, getParticipantPlural, getParticipantSingular, formatParticipantCount, formatPlayerCount, formatDiff } });
