var RacketApp = globalThis.RacketApp || (globalThis.RacketApp = {});
if (globalThis.window) globalThis.window.RacketApp = RacketApp;

function render() {
  ensureSelectedCompetition();
  ensureVisibleSection();
  renderModeButtons();
  renderLanguageButtons();
  renderNav();

  const viewMap = {
    dashboard: renderDashboard,
    teams: renderTeams,
    competitions: renderCompetitions,
    groups: () => renderGroupStage(false),
    bracket: () => renderBracket(false),
    data: renderData,
    "public-overview": renderPublicOverview,
    "public-groups": () => renderGroupStage(true),
    "public-bracket": () => renderBracket(true),
  };

  app.innerHTML = viewMap[ui.section]?.() || renderDashboard();
  applyTranslations();
}

function renderModeButtons() {
  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === ui.mode);
  });
}

function renderLanguageButtons() {
  document.documentElement.lang = ui.lang;
  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === ui.lang);
  });
}

function getVisibleSections() {
  const sections = ui.mode === "admin" ? adminSections : publicSections;
  const competition = getSelectedCompetition();
  return sections.filter((section) => isSectionEnabledForCompetition(section.id, competition));
}

function isSectionEnabledForCompetition(sectionId, competition) {
  if (!competition) return true;
  if (sectionId === "groups" || sectionId === "public-groups") return hasGroupStage(competition);
  if (sectionId === "bracket" || sectionId === "public-bracket") return hasKnockoutStage(competition);
  return true;
}

function renderNav() {
  const sections = getVisibleSections();
  sectionNav.innerHTML = sections
    .map(
      (section) => `
        <button class="nav-button ${section.id === ui.section ? "active" : ""}"
          type="button"
          data-section="${section.id}">
          ${section.label}
        </button>
      `,
    )
    .join("");
}

function renderDashboard() {
  const selected = getSelectedCompetition();
  const selectedParticipantIds = selected ? getAssignedEligibleParticipantIds(selected) : [];
  const matches = state.competitions.flatMap((competition) => [
    ...competition.groups.flatMap((group) => group.matches),
    ...competition.knockout.rounds.flatMap((round) => round.matches),
  ]);
  const played = matches.filter((match) => hasResult(match)).length;

  return `
    ${sectionHeader(
      "Resumen del torneo",
      "Gestiona participantes, fases de grupos, resultados y cuadros eliminatorios desde un único panel.",
      renderCompetitionSelect("competitionSelect"),
    )}
    <div class="grid three">
      <section class="panel metric">
        <strong>${state.teams.length}</strong>
        <span>Participantes registrados</span>
      </section>
      <section class="panel metric">
        <strong>${state.competitions.length}</strong>
        <span>Competiciones creadas</span>
      </section>
      <section class="panel metric">
        <strong>${played}</strong>
        <span>Partidos con resultado</span>
      </section>
    </div>

    <div class="grid two" style="margin-top: 16px">
      <section class="panel">
        <h2>${selected ? escapeHtml(selected.name) : "Sin competición seleccionada"}</h2>
        ${
          selected
            ? `
              <p class="status-line">${escapeHtml(selected.category || "Categoría sin especificar")} - ${escapeHtml(formatParticipantCount(selected, selectedParticipantIds.length))}</p>
              <div class="tag-row">
                <span class="tag">${escapeHtml(getSportLabel(selected))}</span>
                <span class="tag">${escapeHtml(getPlayModeLabel(selected))}</span>
                <span class="tag">${escapeHtml(getCompetitionFormatLabel(selected))}</span>
                ${hasGroupStage(selected) ? `<span class="tag">${selected.groups.length ? "Fase de grupos creada" : "Grupos pendientes"}</span>` : ""}
                ${hasKnockoutStage(selected) ? `<span class="tag">${selected.knockout.rounds.length ? "Cuadro creado" : "Cuadro pendiente"}</span>` : ""}
              </div>
            `
            : `<p class="status-line">Crea una competición para empezar a organizar los participantes.</p>`
        }
      </section>
      <section class="court-strip" aria-hidden="true"></section>
    </div>

    <div class="grid two" style="margin-top: 16px">
      <section class="panel">
        <h2>Siguiente paso recomendado</h2>
        ${renderNextStep(selected)}
      </section>
      <section class="panel">
        <h2>Accesos rápidos</h2>
        <div class="toolbar">
          <button class="ghost-button" type="button" data-section="teams">Participantes</button>
          <button class="ghost-button" type="button" data-section="competitions">Competiciones</button>
          ${!selected || hasGroupStage(selected) ? `<button class="ghost-button" type="button" data-section="groups">Grupos</button>` : ""}
          ${!selected || hasKnockoutStage(selected) ? `<button class="ghost-button" type="button" data-section="bracket">Eliminatorias</button>` : ""}
        </div>
      </section>
    </div>
  `;
}

function renderNextStep(competition) {
  if (!state.teams.length) {
    return `<p class="status-line">Da de alta los primeros participantes con sus jugadores.</p>`;
  }
  if (!competition) {
    return `<p class="status-line">Crea una competición y asígnale participantes inscritos.</p>`;
  }
  if (!getAssignedEligibleParticipantIds(competition).length) {
    return `<p class="status-line">Asigna ${escapeHtml(getParticipantPlural(competition))} a ${escapeHtml(competition.name)} desde Competiciones.</p>`;
  }
  if (hasGroupStage(competition) && !competition.groups.length) {
    return `<p class="status-line">Genera los grupos para crear automáticamente los partidos de liga.</p>`;
  }
  if (hasKnockoutStage(competition) && !competition.knockout.rounds.length) {
    return hasGroupStage(competition)
      ? `<p class="status-line">Cuando tengas clasificaciones, genera el cuadro eliminatorio desde la sección Eliminatorias.</p>`
      : `<p class="status-line">Genera la eliminatoria directa desde los participantes asignados.</p>`;
  }
  return `<p class="status-line">El torneo ya tiene estructura completa. Actualiza resultados y revisa la vista pública.</p>`;
}

function renderTeams() {
  const visibleParticipants = getFilteredParticipants(ui.participantFilter, ui.participantSearch);

  return `
    ${sectionHeader("Participantes", "Alta y control de personas, parejas o equipos participantes.")}
    <div class="grid two">
      <section class="panel">
        <h2>Nuevo participante</h2>
        <form id="teamForm" class="form-grid">
          <div class="field">
            <label for="participantType">Tipo de participante</label>
            <select id="participantType" name="type" required>
              ${PARTICIPANT_TYPE_OPTIONS.map((option) => `<option value="${option.value}">${escapeHtml(option.label)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="teamName" data-participant-name-label>Nombre del equipo</label>
            <input id="teamName" name="name" placeholder="Ej. Laura Martín o Smash Center A" required />
          </div>
          <div class="field individual-photo-field hidden" data-individual-photo-field>
            <label>Foto del jugador</label>
            ${renderPhotoUpload("individualPhoto", "individualPhoto")}
          </div>
          <div class="field participant-players-field" data-participant-players-field>
            <label>Jugadores del equipo o pareja</label>
            <div class="dynamic-player-list" data-player-list>
              ${renderPlayerInput("Jugador 1")}
              ${renderPlayerInput("Jugador 2")}
            </div>
            <button class="small-button" type="button" data-action="add-player-field">Añadir jugador</button>
          </div>
          <div class="field">
            <label for="teamNotes">Notas internas</label>
            <textarea id="teamNotes" name="notes" placeholder="Teléfono, observaciones, disponibilidad..."></textarea>
          </div>
          <button class="primary-button" type="submit">Guardar participante</button>
        </form>
      </section>

      <section class="panel">
        <div class="item-title">
          <h2>Participantes registrados</h2>
          <span class="tag">${visibleParticipants.length} de ${state.teams.length} total</span>
        </div>
        ${renderParticipantFilters()}
        ${
          visibleParticipants.length
            ? `<div class="list">${visibleParticipants.map(renderTeamCard).join("")}</div>`
            : state.teams.length
              ? emptyState("Sin resultados", "Ajusta el filtro o la búsqueda para ver participantes.")
              : emptyState("Todavía no hay participantes", "Crea el primer participante para poder inscribirlo en una competición.")
        }
      </section>
    </div>
  `;
}

function renderParticipantFilters() {
  return `
    <div class="participant-filter-bar">
      <div class="field">
        <label for="participantFilter">Filtrar por tipo</label>
        <select id="participantFilter">
          <option value="all" ${ui.participantFilter === "all" ? "selected" : ""}>Todos</option>
          <option value="team" ${ui.participantFilter === "team" ? "selected" : ""}>Equipos y parejas</option>
          <option value="individual" ${ui.participantFilter === "individual" ? "selected" : ""}>Personas individuales</option>
        </select>
      </div>
      <div class="field">
        <label for="participantSearch">Buscar</label>
        <input id="participantSearch" type="search" value="${escapeHtml(ui.participantSearch)}" placeholder="Buscar por nombre o integrante" />
      </div>
    </div>
  `;
}

function restoreParticipantSearchFocus(cursorPosition) {
  const searchInput = document.querySelector("#participantSearch");
  if (!searchInput) return;

  searchInput.focus?.();
  searchInput.setSelectionRange?.(cursorPosition, cursorPosition);
}

function renderTeamCard(team) {
  return `
    <article class="item-card">
      <div class="item-title">
        <div class="participant-title">
          ${renderParticipantAvatarGroup(team)}
          <h3>${escapeHtml(team.name)}</h3>
        </div>
        <button class="small-button" type="button" data-action="delete-team" data-id="${team.id}">Eliminar</button>
      </div>
      <span class="tag">${escapeHtml(getParticipantTypeLabel(team.type))}</span>
      ${renderParticipantMembers(team)}
      ${team.notes ? `<p class="status-line">${escapeHtml(team.notes)}</p>` : ""}
    </article>
  `;
}

function renderParticipantAvatarGroup(team) {
  const players = team.players?.length ? team.players : [{ name: team.name }];
  return `
    <div class="avatar-stack">
      ${players.slice(0, 3).map((player) => renderPlayerAvatar(player)).join("")}
    </div>
  `;
}

function renderParticipantIdentity(teamId, options = {}) {
  const team = getTeam(teamId);
  const label = getTeamName(teamId);
  const alignClass = options.align === "away" ? " away" : "";

  return `
    <span class="participant-identity${alignClass}">
      ${team ? renderParticipantAvatarGroup(team) : ""}
      <span class="team-name${alignClass}">${escapeHtml(label)}</span>
    </span>
  `;
}

function renderParticipantMembers(team) {
  if (normalizeParticipantType(team.type) === "individual") return `<p class="meta">Participante individual</p>`;
  const players = team.players || [];
  if (!players.length) return `<p class="meta">Sin jugadores</p>`;

  return `
    <div class="member-list">
      ${players.map((player) => `<span class="member-pill">${renderPlayerAvatar(player)} ${escapeHtml(player.name)}</span>`).join("")}
    </div>
  `;
}

function renderPlayerAvatar(player) {
  const src = getPlayerPhoto(player);
  return `<img class="player-avatar" src="${escapeHtml(src)}" alt="${escapeHtml(player?.name || "Jugador")}" loading="lazy" />`;
}

function renderPlayerInput(placeholder, value = "") {
  return `
    <div class="player-input-row">
      <input name="players" placeholder="${escapeHtml(placeholder)}" value="${escapeHtml(value)}" data-player-input required />
      ${renderPhotoUpload("playerPhotos", "", "player-photo-input")}
      <button class="small-button" type="button" data-action="remove-player-field" aria-label="Eliminar jugador">Quitar</button>
    </div>
  `;
}

function renderPhotoUpload(name, id = "", className = "") {
  return `
    <label class="photo-upload">
      <input ${id ? `id="${escapeHtml(id)}"` : ""} class="${escapeHtml(className)}" name="${escapeHtml(name)}" type="file" accept="image/*" aria-label="Foto del jugador" data-player-photo-input />
      <span class="photo-upload-label">Subir foto</span>
      <span class="photo-upload-status" data-photo-status>Sin foto</span>
    </label>
  `;
}

function renderCompetitions() {
  const selected = getSelectedCompetition();

  return `
    ${sectionHeader(
      "Competiciones",
      "Crea competiciones por deporte, modalidad y formato de torneo.",
      renderCompetitionSelect("competitionSelect"),
    )}
    <div class="grid two">
      <section class="panel">
        <h2>Nueva competición</h2>
        <form id="competitionForm" class="form-grid">
          <div class="field">
            <label for="competitionName">Nombre</label>
            <input id="competitionName" name="name" placeholder="Ej. Open Ping-pong Primavera" required />
          </div>
          <div class="field">
            <label for="competitionCategory">Categoría</label>
            <input id="competitionCategory" name="category" placeholder="Ej. Absoluta, mixto, sub-18..." />
          </div>
          <div class="field">
            <label for="competitionSport">Deporte</label>
            <select id="competitionSport" name="sport" required>
              ${SPORT_OPTIONS.map((option) => `<option value="${option.value}">${escapeHtml(option.label)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="competitionPlayMode">Modalidad</label>
            <select id="competitionPlayMode" name="playMode" required>
              ${PLAY_MODE_OPTIONS.map((option) => `<option value="${option.value}">${escapeHtml(option.label)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="competitionFormat">Formato de competición</label>
            <select id="competitionFormat" name="format" required>
              ${COMPETITION_FORMAT_OPTIONS.map((option) => `<option value="${option.value}">${escapeHtml(option.label)}</option>`).join("")}
            </select>
          </div>
          <div class="field" data-group-count-field>
            <label for="competitionGroups">Número de grupos</label>
            <input id="competitionGroups" name="groupCount" type="number" min="1" max="16" value="2" required />
            <span class="field-hint">Solo se usará en formatos con fase de grupos.</span>
          </div>
          <button class="primary-button" type="submit">Crear competición</button>
        </form>
      </section>

      <section class="panel">
        <div class="item-title">
          <h2>Competiciones</h2>
          <span class="tag">${state.competitions.length} total</span>
        </div>
        ${
          state.competitions.length
            ? `<div class="list">${state.competitions.map(renderCompetitionCard).join("")}</div>`
            : emptyState("Sin competiciones", "Crea una competición para agrupar participantes y resultados.")
        }
      </section>
    </div>

    <div style="margin-top: 16px">
      ${
        selected
          ? renderTeamAssignment(selected)
          : emptyState("Selecciona o crea una competición", "Cuando exista una competición podrás asignarle participantes.")
      }
    </div>
  `;
}

function renderCompetitionCard(competition) {
  const isSelected = competition.id === ui.selectedCompetitionId;
  const assignedParticipantIds = getAssignedEligibleParticipantIds(competition);
  return `
    <article class="item-card">
      <div class="item-title">
        <h3>${escapeHtml(competition.name)}</h3>
        <span class="tag">${escapeHtml(formatParticipantCount(competition, assignedParticipantIds.length))}</span>
      </div>
      <p class="meta">${escapeHtml(competition.category || "Sin categoría")} - ${escapeHtml(getSportLabel(competition))} - ${escapeHtml(getPlayModeLabel(competition))}</p>
      <div class="tag-row">
        <span class="tag">${escapeHtml(getCompetitionFormatLabel(competition))}</span>
        ${hasGroupStage(competition) ? `<span class="tag">${competition.groupCount} grupos previstos</span>` : ""}
      </div>
      <div class="toolbar" style="margin-top: 12px">
        <button class="${isSelected ? "primary-button" : "ghost-button"}" type="button" data-action="select-competition" data-id="${competition.id}">
          ${isSelected ? "Seleccionada" : "Seleccionar"}
        </button>
        <button class="small-button" type="button" data-action="delete-competition" data-id="${competition.id}">
          Eliminar
        </button>
      </div>
    </article>
  `;
}

function renderTeamAssignment(competition) {
  const eligibleParticipants = getEligibleParticipantsForCompetition(competition);
  const hasAnyParticipant = state.teams.length > 0;
  return `
    <section class="panel">
      <div class="section-header">
        <div>
          <h2>Participantes en ${escapeHtml(competition.name)}</h2>
          <p>Marca las ${escapeHtml(getParticipantPlural(competition))} que entran en esta competición.</p>
        </div>
        <button class="primary-button" type="button" data-action="save-team-assignment" data-competition-id="${competition.id}">
          Guardar asignación
        </button>
      </div>
      ${
        eligibleParticipants.length
          ? `
            <div class="team-picker">
              ${eligibleParticipants
                .map(
                  (team) => `
                    <label class="check-row">
                      <input type="checkbox" data-team-assignment value="${team.id}" ${competition.teamIds.includes(team.id) ? "checked" : ""} />
                      <span>${escapeHtml(team.name)} <span class="meta">${escapeHtml(getParticipantAssignmentMeta(team))}</span></span>
                    </label>
                  `,
                )
                .join("")}
            </div>
          `
          : emptyState(
              "No hay participantes disponibles",
              hasAnyParticipant
                ? `Da de alta participantes de tipo ${getRequiredParticipantTypeLabel(competition)} para esta modalidad.`
                : "Da de alta participantes antes de asignarlos a una competición.",
            )
      }
    </section>
  `;
}

function renderGroupStage(readOnly) {
  const competition = getSelectedCompetition();

  if (!competition) {
    return `
      ${sectionHeader(readOnly ? "Grupos" : "Fase de grupos", "Selecciona una competición para ver sus grupos.")}
      ${emptyState("Sin competición", "Todavía no hay competiciones creadas.")}
    `;
  }

  if (!hasGroupStage(competition)) {
    return `
      ${sectionHeader(
        readOnly ? "Grupos" : "Fase de grupos",
        "Esta competición está configurada como eliminatoria directa.",
        renderCompetitionSelect(readOnly ? "publicCompetitionSelect" : "competitionSelect"),
      )}
      ${emptyState("Sin fase de grupos", "El formato elegido no incluye grupos ni cruces de liga.")}
    `;
  }

  const assignedParticipantIds = getAssignedEligibleParticipantIds(competition);

  return `
    ${sectionHeader(
      readOnly ? "Grupos" : "Fase de grupos",
      readOnly
        ? "Consulta grupos, resultados y clasificaciones actualizadas."
        : "Genera partidos de liga, apunta resultados y revisa clasificaciones calculadas.",
      renderCompetitionSelect(readOnly ? "publicCompetitionSelect" : "competitionSelect"),
    )}
    ${
      readOnly
        ? ""
        : `
          <section class="panel" style="margin-bottom: 16px">
            <div class="section-header">
              <div>
                <h2>${escapeHtml(competition.name)}</h2>
                <p>${escapeHtml(formatParticipantCount(competition, assignedParticipantIds.length))} asignados - ${competition.groupCount} grupos previstos</p>
              </div>
              <button class="primary-button" type="button" data-action="generate-groups" data-competition-id="${competition.id}" ${assignedParticipantIds.length < 2 ? "disabled" : ""}>
                Generar grupos y partidos
              </button>
            </div>
            ${
              assignedParticipantIds.length < 2
                ? `<div class="notice">Asigna al menos dos participantes a la competición para generar partidos.</div>`
                : `<p class="status-line">Generar grupos reparte participantes y crea todos los cruces de liga. Si ya había resultados, se pedirá confirmación antes de sobrescribir.</p>`
            }
          </section>
        `
    }
    ${competition.groups.length ? renderGroupExportTools() : ""}
    ${
      competition.groups.length
        ? `<div class="groups-layout">${competition.groups.map((group) => renderGroup(competition, group, readOnly)).join("")}</div>`
        : emptyState("Grupos pendientes", readOnly ? "La organización aún no ha publicado la fase de grupos." : "Genera los grupos cuando tengas los participantes asignados.")
    }
  `;
}

function renderGroup(competition, group, readOnly) {
  const standings = calculateStandings(group);

  return `
    <section class="group-panel">
      <div class="section-header">
        <div>
          <h2>${escapeHtml(group.name)}</h2>
          <p>${escapeHtml(formatParticipantCount(competition, group.teamIds.length))} - ${group.matches.length} partidos</p>
        </div>
      </div>
      ${renderStandingsTable(standings)}
      <div class="matches-grid">
        ${group.matches.map((match) => renderGroupMatch(competition, group, match, readOnly)).join("")}
      </div>
    </section>
  `;
}

function renderStandingsTable(standings) {
  return `
    <div class="standing-table">
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Participante</th>
            <th class="numeric">PJ</th>
            <th class="numeric">PG</th>
            <th class="numeric">PP</th>
            <th class="numeric">SF</th>
            <th class="numeric">SC</th>
            <th class="numeric">DS</th>
            <th class="numeric">JF</th>
            <th class="numeric">JC</th>
            <th class="numeric">DJ</th>
            <th class="numeric">Pts</th>
          </tr>
        </thead>
        <tbody>
          ${standings
            .map(
              (row, index) => `
                <tr>
                  <td>${index + 1}</td>
                  <td>${renderParticipantIdentity(row.teamId)}</td>
                  <td class="numeric">${row.played}</td>
                  <td class="numeric">${row.won}</td>
                  <td class="numeric">${row.lost}</td>
                  <td class="numeric">${row.setsWon}</td>
                  <td class="numeric">${row.setsLost}</td>
                  <td class="numeric">${formatDiff(row.setDiff)}</td>
                  <td class="numeric">${row.gamesWon}</td>
                  <td class="numeric">${row.gamesLost}</td>
                  <td class="numeric">${formatDiff(row.gameDiff)}</td>
                  <td class="numeric"><strong>${row.points}</strong></td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderGroupMatch(competition, group, match, readOnly) {
  ensureMatchShape(match);
  const home = getTeamName(match.homeTeamId);
  const away = getTeamName(match.awayTeamId);
  const winner = getMatchWinner(match);

  return `
    <article class="match-card">
      <div class="match-meta">
        <span>${escapeHtml(group.name)}</span>
        <span>${hasResult(match) ? "Finalizado" : "Pendiente"}</span>
      </div>
      <div class="match-teams">
        ${renderParticipantIdentity(match.homeTeamId)}
        <span class="versus">vs</span>
        ${renderParticipantIdentity(match.awayTeamId, { align: "away" })}
      </div>
      ${
        readOnly
          ? renderReadOnlyScore(match)
          : `
            ${renderSetInputs(match, "group", competition.id, null, home, away, true)}
            <button class="small-button" type="button" data-action="clear-group-result" data-competition-id="${competition.id}" data-id="${match.id}" ${hasResult(match) ? "" : "disabled"}>
              Limpiar resultado
            </button>
          `
      }
      ${winner ? `<span class="winner">Gana ${escapeHtml(getTeamName(winner))}</span>` : ""}
    </article>
  `;
}

function renderBracket(readOnly) {
  const competition = getSelectedCompetition();

  if (!competition) {
    return `
      ${sectionHeader(readOnly ? "Cuadro" : "Eliminatorias", "Selecciona una competición para ver su cuadro.")}
      ${emptyState("Sin competición", "Todavía no hay competiciones creadas.")}
    `;
  }

  if (!hasKnockoutStage(competition)) {
    return `
      ${sectionHeader(
        readOnly ? "Eliminatorias" : "Eliminatorias",
        "Esta competición está configurada solo con fase de grupos.",
        renderCompetitionSelect(readOnly ? "publicCompetitionSelect" : "competitionSelect"),
      )}
      ${emptyState("Sin eliminatoria", "El formato elegido no incluye cuadro eliminatorio.")}
    `;
  }

  const hasGroups = competition.groups.length > 0;
  const assignedParticipantIds = getAssignedEligibleParticipantIds(competition);
  const canGenerateBracket = hasGroupStage(competition) ? hasGroups : assignedParticipantIds.length >= 2;

  return `
    ${sectionHeader(
      readOnly ? "Cuadro eliminatorio" : "Eliminatorias",
      readOnly
        ? "Consulta el cuadro y el avance de cada ronda."
        : "Genera el cuadro desde la clasificación de grupos y apunta resultados de eliminatoria.",
      renderCompetitionSelect(readOnly ? "publicCompetitionSelect" : "competitionSelect"),
    )}

    ${
      readOnly
        ? ""
        : `
          <section class="panel" style="margin-bottom: 16px">
            <div class="section-header">
              <div>
                <h2>Generar cuadro</h2>
                <p>${escapeHtml(getBracketGenerationHelp(competition))}</p>
              </div>
              <div class="toolbar">
                ${
                  hasGroupStage(competition)
                    ? `
                      <select id="qualifiersPerGroup" aria-label="Clasificados por grupo">
                        ${[1, 2, 3, 4]
                          .map((number) => `<option value="${number}" ${ui.qualifiersPerGroup === number ? "selected" : ""}>${number} por grupo</option>`)
                          .join("")}
                      </select>
                    `
                    : ""
                }
                <button class="primary-button" type="button" data-action="generate-bracket" data-competition-id="${competition.id}" ${canGenerateBracket ? "" : "disabled"}>
                  Generar eliminatoria
                </button>
              </div>
            </div>
            ${renderBracketGenerationStatus(competition)}
          </section>
        `
    }

    ${competition.knockout.rounds.length ? renderBracketExportTools() : ""}

    ${
      competition.knockout.rounds.length
        ? renderBracketGrid(competition, competition.knockout.rounds, readOnly)
        : emptyState("Cuadro pendiente", readOnly ? "La organización aún no ha publicado la eliminatoria." : "Genera el cuadro cuando la competición tenga participantes suficientes.")
    }
  `;
}

function getBracketGenerationHelp(competition) {
  if (!hasGroupStage(competition)) {
    return "El cuadro directo se genera con los participantes asignados y después permite ajustar cruces en la primera ronda.";
  }

  return "Se empareja el mejor de un grupo contra el peor clasificado de otro, el segundo contra el penúltimo y así sucesivamente. Con más de dos grupos, el grupo rival se elige aleatoriamente.";
}

function renderBracketGenerationStatus(competition) {
  const assignedParticipantIds = getAssignedEligibleParticipantIds(competition);

  if (hasGroupStage(competition) && !competition.groups.length) {
    return `<div class="notice">Primero genera la fase de grupos para obtener clasificados.</div>`;
  }

  if (!hasGroupStage(competition) && assignedParticipantIds.length < 2) {
    return `<div class="notice">Asigna al menos dos participantes a la competición para generar la eliminatoria.</div>`;
  }

  return `<p class="status-line">Después de generar el cuadro puedes arrastrar participantes en la primera ronda para ajustar cruces manualmente.</p>`;
}

function renderBracketExportTools() {
  return `
    <section class="panel export-panel">
      <div class="toolbar">
        <button class="ghost-button" type="button" data-action="print-bracket-pdf" aria-label="Imprimir cuadro o guardarlo como PDF">
          Imprimir / PDF
        </button>
        <button class="ghost-button" type="button" data-action="print-bracket-multipage-pdf" aria-label="Preparar PDF multipágina para cuadros grandes">
          PDF multipágina
        </button>
      </div>
    </section>
  `;
}

function renderGroupExportTools() {
  return `
    <section class="panel export-panel">
      <div class="toolbar">
        <button class="ghost-button" type="button" data-action="print-groups-pdf" aria-label="Exportar grupos y cruces como PDF">
          Exportar grupos PDF
        </button>
      </div>
    </section>
  `;
}

function getBracketLayout(rounds) {
  const rowCount = Math.max(1, rounds[0]?.matches?.length || 0);
  const roundLayouts = rounds.map((round, roundIndex) => {
    const rowSpan = 2 ** roundIndex;
    return {
      round,
      roundIndex,
      column: roundIndex * 2 + 1,
      matches: round.matches.map((match, matchIndex) => ({
        match,
        gridRow: matchIndex * rowSpan + 2,
        rowSpan,
      })),
    };
  });
  const connectorLayouts = rounds.slice(1).map((round, index) => {
    const parentSpan = 2 ** (index + 1);
    return {
      column: index * 2 + 2,
      connectors: round.matches.map((match, matchIndex) => ({
        id: `${match.id}-connector`,
        gridRow: matchIndex * parentSpan + 2,
        rowSpan: parentSpan,
      })),
    };
  });

  return {
    rowCount,
    columnCount: Math.max(1, rounds.length * 2 - 1),
    columns: rounds.map((_, index) => (index === rounds.length - 1 ? "minmax(var(--bracket-round-width), 1fr)" : "minmax(var(--bracket-round-width), 1fr) var(--bracket-connector-width)")).join(" "),
    rounds: roundLayouts,
    connectors: connectorLayouts,
  };
}

function renderBracketGrid(competition, rounds, readOnly) {
  const layout = getBracketLayout(rounds);
  const children = layout.rounds
    .map((roundLayout, index) => `${renderBracketRound(competition, roundLayout.round, roundLayout.roundIndex, readOnly, roundLayout)}${layout.connectors[index] ? renderBracketConnectorColumn(layout.connectors[index]) : ""}`)
    .join("");

  return `<div class="bracket" style="--bracket-row-count: ${layout.rowCount}; --bracket-column-count: ${layout.columnCount}; grid-template-columns: ${escapeHtml(layout.columns)};">${children}</div>`;
}

function renderBracketRound(competition, round, roundIndex, readOnly, layoutRound = null) {
  const matchLayouts = layoutRound?.matches || getBracketLayout([round]).rounds[0].matches;
  return `
    <section class="bracket-round" style="grid-column: ${layoutRound?.column || 1}">
      <h3>${escapeHtml(round.name)}</h3>
      ${matchLayouts.map(({ match, gridRow, rowSpan }) => renderBracketMatch(competition, match, roundIndex, readOnly, `grid-row: ${gridRow} / span ${rowSpan}`)).join("")}
    </section>
  `;
}

function renderBracketConnectorColumn(layoutConnector) {
  return `
    <section class="bracket-connectors" aria-hidden="true" style="grid-column: ${layoutConnector.column}">
      ${layoutConnector.connectors
        .map(
          (connector) => `
            <div class="bracket-connector" style="grid-row: ${connector.gridRow} / span ${connector.rowSpan}">
              <span class="connector-arm top"></span>
              <span class="connector-arm bottom"></span>
              <span class="connector-arm middle"></span>
            </div>
          `,
        )
        .join("")}
    </section>
  `;
}

function renderBracketMatch(competition, match, roundIndex, readOnly, layoutStyle = "") {
  ensureMatchShape(match);
  const home = match.homeTeamId ? getTeamName(match.homeTeamId) : match.homeLabel || "Por definir";
  const away = match.awayTeamId ? getTeamName(match.awayTeamId) : match.awayLabel || "Por definir";
  const winner = getMatchWinner(match);
  const canScore = Boolean(match.homeTeamId && match.awayTeamId);
  const editableSlots = !readOnly && roundIndex === 0;

  return `
    <article class="match-card bracket-match" ${layoutStyle ? `style="${layoutStyle}"` : ""}>
      <div class="match-meta">
        <span>Partido ${match.order}</span>
        <span>${hasResult(match) ? "Finalizado" : winner && !canScore ? "Bye" : "Pendiente"}</span>
      </div>
      <div class="bracket-teams">
        ${renderBracketSlot(competition, match, "home", home, editableSlots)}
        ${renderBracketSlot(competition, match, "away", away, editableSlots)}
      </div>
      ${
        readOnly
          ? renderReadOnlyScore(match)
          : `
            ${renderSetInputs(match, "bracket", competition.id, roundIndex, home, away, canScore)}
            <button class="small-button" type="button" data-action="clear-bracket-result" data-competition-id="${competition.id}" data-id="${match.id}" ${hasResult(match) ? "" : "disabled"}>
              Limpiar resultado
            </button>
          `
      }
      ${winner ? `<span class="winner">Avanza ${escapeHtml(getTeamName(winner))}</span>` : ""}
    </article>
  `;
}

function renderBracketSlot(competition, match, side, label, editable) {
  const teamId = side === "home" ? match.homeTeamId : match.awayTeamId;
  const seedLabel = side === "home" ? match.homeLabel : match.awayLabel;

  return `
    <div class="bracket-slot ${teamId ? "" : "bye"}"
      ${editable ? `draggable="true" data-bracket-slot data-competition-id="${competition.id}" data-match-id="${match.id}" data-side="${side}"` : ""}>
      <span class="seed-label">${escapeHtml(seedLabel || "")}</span>
      ${teamId ? renderParticipantIdentity(teamId) : `<span class="team-name">${escapeHtml(label)}</span>`}
    </div>
  `;
}

function renderSetInputs(match, scope, competitionId, roundIndex, home, away, enabled) {
  ensureMatchShape(match);
  const scoreAttr = scope === "group" ? "data-group-score" : "data-bracket-score";
  const roundAttr = scope === "bracket" ? `data-round-index="${roundIndex}"` : "";

  return `
    <div class="set-board" aria-label="Marcador al mejor de tres sets">
      <div class="set-row set-head">
        <span></span>
        <span>Set 1</span>
        <span>Set 2</span>
        <span>Set 3</span>
      </div>
      ${["home", "away"]
        .map(
          (side) => `
            <div class="set-row">
              <span class="set-team">${escapeHtml(side === "home" ? home : away)}</span>
              ${[0, 1, 2]
                .map(
                  (setIndex) => `
                    <input type="number" min="0" value="${match.sets[setIndex]?.[side] ?? ""}"
                      aria-label="${escapeHtml(side === "home" ? home : away)} set ${setIndex + 1}"
                      ${scoreAttr} data-side="${side}" data-set-index="${setIndex}"
                      data-competition-id="${competitionId}" ${roundAttr} data-match-id="${match.id}"
                      ${enabled ? "" : "disabled"} />
                  `,
                )
                .join("")}
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderReadOnlyScore(match) {
  ensureMatchShape(match);
  if (!hasAnySet(match)) return `<span class="score-pill">Sin resultado</span>`;
  const summary = match.sets
    .filter((set) => Number.isFinite(set.home) || Number.isFinite(set.away))
    .map((set) => `${set.home ?? "-"}-${set.away ?? "-"}`)
    .join(" / ");
  return `<span class="score-pill">${escapeHtml(summary)}</span>`;
}

function renderPublicOverview() {
  const competition = getSelectedCompetition();
  const publicSelect = renderCompetitionSelect("publicCompetitionSelect");

  return `
    ${sectionHeader("Vista pública", "Panel de consulta para jugadores y público, sin controles de edición.", publicSelect)}
    ${
      competition
        ? `
          <div class="grid three">
            <section class="panel metric">
              <strong>${getAssignedEligibleParticipantIds(competition).length}</strong>
              <span>Participantes</span>
            </section>
            <section class="panel metric">
              <strong>${escapeHtml(getSportLabel(competition))}</strong>
              <span>Deporte</span>
            </section>
            <section class="panel metric">
              <strong>${escapeHtml(getCompetitionFormatLabel(competition))}</strong>
              <span>Formato</span>
            </section>
          </div>
          <div class="grid two" style="margin-top: 16px">
            <section class="panel">
              <h2>${escapeHtml(competition.name)}</h2>
              <p class="status-line">${escapeHtml(competition.category || "Categoría sin especificar")}</p>
              <div class="tag-row">
                <span class="tag">${escapeHtml(getPlayModeLabel(competition))}</span>
                ${hasGroupStage(competition) ? `<span class="tag">${competition.groups.length} grupos</span>` : ""}
                ${hasKnockoutStage(competition) ? `<span class="tag">${competition.knockout.rounds.length} rondas de cuadro</span>` : ""}
                ${getAssignedEligibleParticipantIds(competition).map((teamId) => `<span class="tag">${escapeHtml(getTeamName(teamId))}</span>`).join("")}
              </div>
            </section>
            <section class="court-strip" aria-hidden="true"></section>
          </div>
        `
        : emptyState("Sin competiciones publicadas", "Cuando la administración cree una competición aparecerá aquí.")
    }
  `;
}

function renderData() {
  return `
    ${sectionHeader("Datos", "Copia de seguridad, restauración y datos de ejemplo para pruebas.")}
    <div class="grid two">
      <section class="panel">
        <h2>Copias</h2>
        <p class="status-line">Los datos se guardan automáticamente en este navegador. Exporta un JSON para conservar una copia o moverlo a otro equipo.</p>
        <div class="toolbar" style="margin-top: 12px">
          <button class="primary-button" type="button" data-action="export-data">Exportar JSON</button>
          <button class="ghost-button" type="button" data-action="trigger-import">Importar JSON</button>
        </div>
      </section>
      <section class="panel">
        <h2>Pruebas</h2>
        <p class="status-line">Carga participantes, grupos y un cuadro de ejemplo para revisar la aplicación rápidamente.</p>
        <div class="toolbar" style="margin-top: 12px">
          <button class="ghost-button" type="button" data-action="load-demo">Cargar ejemplo</button>
        </div>
      </section>
      <section class="panel danger-zone">
        <h2>Reiniciar</h2>
        <p class="status-line">Elimina todos los datos guardados en este navegador.</p>
        <button class="danger-button" type="button" data-action="reset-data">Borrar todo</button>
      </section>
    </div>
  `;
}

function sectionHeader(title, text, actions = "") {
  return `
    <div class="section-header">
      <div>
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(text)}</p>
      </div>
      ${actions ? `<div class="toolbar">${actions}</div>` : ""}
    </div>
  `;
}

function emptyState(title, text) {
  return `
    <div class="empty-state">
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(text)}</p>
    </div>
  `;
}

function renderCompetitionSelect(id) {
  if (!state.competitions.length) return "";

  return `
    <select id="${id}" class="competition-select" aria-label="Seleccionar competición">
      ${state.competitions
        .map(
          (competition) => `
            <option value="${competition.id}" ${competition.id === ui.selectedCompetitionId ? "selected" : ""}>
              ${escapeHtml(competition.name)}
            </option>
          `,
        )
        .join("")}
    </select>
  `;
}
function renderPrintableGroupPages(competition) {
  return competition.groups
    .map(
      (group, pageIndex) => `
        <section class="print-page group-print-page">
          <div class="print-bracket-title">
            <strong>${escapeHtml(competition.name)} - ${escapeHtml(group.name)}</strong>
            <span>${escapeHtml(getPrintableGroupMeta(competition, group, pageIndex + 1, competition.groups.length))}</span>
          </div>
          ${renderStandingsTable(calculateStandings(group))}
          <h3 class="print-section-title">Cruces del grupo</h3>
          <div class="print-match-list">
            ${group.matches.map((match) => renderPrintableGroupMatch(competition, group, match)).join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function getPrintableGroupMeta(competition, group, pageNumber, pageCount) {
  const stage = `${getSportLabel(competition)} - ${getPlayModeLabel(competition)} - ${getCompetitionFormatLabel(competition)}`;
  if (ui.lang === "en") {
    const participantCount = translateGeneratedText(formatParticipantCount(competition, group.teamIds.length)) || formatParticipantCount(competition, group.teamIds.length);
    const stageLabel = stage
      .split(" - ")
      .map((part) => translateText(part) || part)
      .join(" - ");
    return `Page ${pageNumber} of ${pageCount} - ${participantCount} - ${group.matches.length} matches - ${stageLabel}`;
  }
  return `Página ${pageNumber} de ${pageCount} - ${formatParticipantCount(competition, group.teamIds.length)} - ${group.matches.length} partidos - ${stage}`;
}

function renderPrintableGroupMatch(competition, group, match) {
  ensureMatchShape(match);
  const home = getTeamName(match.homeTeamId);
  const away = getTeamName(match.awayTeamId);
  const winner = getMatchWinner(match);
  const result = hasAnySet(match)
    ? match.sets
        .filter((set) => Number.isFinite(set.home) || Number.isFinite(set.away))
        .map((set) => `${set.home ?? "-"}-${set.away ?? "-"}`)
        .join(" / ")
    : "Sin resultado";

  return `
    <article class="print-match-row">
      <span class="seed-label">${escapeHtml(group.name)} - Partido ${match.order}</span>
      <strong>${escapeHtml(home)} vs ${escapeHtml(away)}</strong>
      <span>${escapeHtml(result)}</span>
      <span>${winner ? `Gana ${escapeHtml(getTeamName(winner))}` : "Pendiente"}</span>
    </article>
  `;
}
function getPrintRoundChunks(rounds, roundsPerPage = getPrintRoundsPerPage(rounds)) {
  const pageSize = clamp(Number(roundsPerPage) || 1, 1, Math.max(rounds.length, 1));
  const chunks = [];

  for (let index = 0; index < rounds.length; index += pageSize) {
    chunks.push({
      startIndex: index,
      endIndex: Math.min(index + pageSize - 1, rounds.length - 1),
      rounds: rounds.slice(index, index + pageSize),
    });
  }

  return chunks;
}

function getPrintRoundsPerPage(rounds) {
  const roundCount = rounds.length;
  const firstRoundMatchCount = rounds[0]?.matches?.length || 0;

  if (roundCount <= 3 && firstRoundMatchCount <= 8) return 3;
  if (firstRoundMatchCount >= 16) return 1;
  return 2;
}

function renderPrintableBracketPages(competition, chunks) {
  return chunks
    .map(
      (chunk, pageIndex) => `
        <section class="print-page">
          <div class="print-bracket-title">
            <strong>${escapeHtml(competition.name)}</strong>
            <span>${escapeHtml(getPrintPageMeta(chunk, pageIndex, chunks.length))}</span>
          </div>
          ${renderBracketGrid(competition, chunk.rounds, true)}
        </section>
      `,
    )
    .join("");
}

function renderPrintableBracketRound(competition, round, localIndex) {
  return renderBracketRound(competition, round, localIndex, true);
}

function getPrintPageMeta(chunk, pageIndex, pageCount) {
  const range = getPrintRoundRangeLabel(chunk);
  if (ui.lang === "en") return `Page ${pageIndex + 1} of ${pageCount} - Rounds: ${translateText(range) || range}`;
  return `Página ${pageIndex + 1} de ${pageCount} - Rondas: ${range}`;
}

function getPrintRoundRangeLabel(chunk) {
  const first = chunk.rounds[0]?.name || "";
  const last = chunk.rounds[chunk.rounds.length - 1]?.name || first;
  return first === last ? first : `${first} - ${last}`;
}

Object.assign(RacketApp, { render: { render, renderModeButtons, renderLanguageButtons, getVisibleSections, isSectionEnabledForCompetition, renderNav, renderDashboard, renderNextStep, renderTeams, renderParticipantFilters, restoreParticipantSearchFocus, renderTeamCard, renderParticipantAvatarGroup, renderParticipantIdentity, renderParticipantMembers, renderPlayerAvatar, renderPlayerInput, renderPhotoUpload, renderCompetitions, renderCompetitionCard, renderTeamAssignment, renderGroupStage, renderGroup, renderStandingsTable, renderGroupMatch, renderBracket, getBracketGenerationHelp, renderBracketGenerationStatus, renderBracketExportTools, renderGroupExportTools, getBracketLayout, renderBracketGrid, renderBracketRound, renderBracketConnectorColumn, renderBracketMatch, renderBracketSlot, renderSetInputs, renderReadOnlyScore, renderPublicOverview, renderData, sectionHeader, emptyState, renderCompetitionSelect, renderPrintableGroupPages, getPrintableGroupMeta, renderPrintableGroupMatch, getPrintRoundChunks, getPrintRoundsPerPage, renderPrintableBracketPages, renderPrintableBracketRound, getPrintPageMeta, getPrintRoundRangeLabel } });
