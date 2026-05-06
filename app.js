const STORAGE_KEY = "padelTournamentControl.v1";
const LANG_STORAGE_KEY = "padelTournamentControl.lang";

const TEXT_TRANSLATIONS = {
  en: {
    "Panel de torneo": "Tournament panel",
    "Control de Torneo de Padel": "Padel Tournament Control",
    Administracion: "Admin",
    "Vista publica": "Public view",
    Resumen: "Overview",
    Equipos: "Teams",
    Competiciones: "Competitions",
    Grupos: "Groups",
    Eliminatorias: "Knockout",
    Cuadro: "Bracket",
    Datos: "Data",
    "Exportar datos": "Export data",
    "Importar datos": "Import data",
    "Resumen del torneo": "Tournament overview",
    "Gestiona equipos, fases de grupos, resultados y cuadros eliminatorios desde un unico panel.":
      "Manage teams, group stages, results and knockout brackets from one panel.",
    "Equipos registrados": "Registered teams",
    "Competiciones creadas": "Competitions created",
    "Partidos con resultado": "Matches with results",
    "Sin competicion seleccionada": "No competition selected",
    "Crea una competicion para empezar a organizar los equipos.": "Create a competition to start organizing teams.",
    "Siguiente paso recomendado": "Recommended next step",
    "Da de alta los primeros equipos con sus jugadores.": "Register the first teams with their players.",
    "Accesos rapidos": "Quick links",
    "Alta y control de equipos participantes con listado de jugadores.": "Register and manage participating teams and their players.",
    "Nuevo equipo": "New team",
    "Nombre del equipo": "Team name",
    Jugadores: "Players",
    "Notas internas": "Internal notes",
    "Guardar equipo": "Save team",
    "Equipos registrados": "Registered teams",
    total: "total",
    Eliminar: "Delete",
    "Todavia no hay equipos": "There are no teams yet",
    "Crea el primer equipo para poder inscribirlo en una competicion.": "Create the first team so it can be entered in a competition.",
    "Crea competiciones, asigna equipos inscritos y deja preparada la fase de grupos.":
      "Create competitions, assign registered teams and prepare the group stage.",
    "Nueva competicion": "New competition",
    Nombre: "Name",
    Categoria: "Category",
    "Numero de grupos": "Number of groups",
    "Crear competicion": "Create competition",
    Seleccionar: "Select",
    Seleccionada: "Selected",
    "Selecciona o crea una competicion": "Select or create a competition",
    "Cuando exista una competicion podras asignarle equipos.": "Once a competition exists, you can assign teams to it.",
    "No hay equipos disponibles": "No teams available",
    "Da de alta equipos antes de asignarlos a una competicion.": "Register teams before assigning them to a competition.",
    "Guardar asignacion": "Save assignment",
    "Fase de grupos": "Group stage",
    "Selecciona una competicion para ver sus grupos.": "Select a competition to view its groups.",
    "Sin competicion": "No competition",
    "Todavia no hay competiciones creadas.": "No competitions have been created yet.",
    "Consulta grupos, resultados y clasificaciones actualizadas.": "View groups, results and updated standings.",
    "Genera partidos de liga, apunta resultados y revisa clasificaciones calculadas.":
      "Generate round-robin matches, enter results and review calculated standings.",
    "Generar grupos y partidos": "Generate groups and matches",
    "Grupos pendientes": "Groups pending",
    "La organizacion aun no ha publicado la fase de grupos.": "The organizer has not published the group stage yet.",
    "Genera los grupos cuando tengas los equipos asignados.": "Generate the groups once teams are assigned.",
    "Cuadro eliminatorio": "Knockout bracket",
    "Selecciona una competicion para ver su cuadro.": "Select a competition to view its bracket.",
    "Consulta el cuadro y el avance de cada ronda.": "View the bracket and round progression.",
    "Genera el cuadro desde la clasificacion de grupos y apunta resultados de eliminatoria.":
      "Generate the bracket from group standings and enter knockout results.",
    "Generar cuadro": "Generate bracket",
    "Generar eliminatoria": "Generate knockout",
    "Cuadro pendiente": "Bracket pending",
    "La organizacion aun no ha publicado la eliminatoria.": "The organizer has not published the knockout bracket yet.",
    "Genera el cuadro cuando tengas clasificaciones.": "Generate the bracket once standings are available.",
    Finalizado: "Finished",
    Pendiente: "Pending",
    "Sin resultado": "No result",
    "Limpiar resultado": "Clear result",
    "Set 1": "Set 1",
    "Set 2": "Set 2",
    "Set 3": "Set 3",
    Final: "Final",
    Semifinales: "Semifinals",
    Cuartos: "Quarterfinals",
    "Vista publica": "Public view",
    "Panel de consulta para jugadores y publico, sin controles de edicion.":
      "Read-only panel for players and spectators.",
    "Sin competiciones publicadas": "No published competitions",
    "Cuando la administracion cree una competicion aparecera aqui.": "When the admin creates a competition, it will appear here.",
    "Copia de seguridad, restauracion y datos de ejemplo para pruebas.": "Backups, restore and sample data for testing.",
    Copias: "Backups",
    "Exportar JSON": "Export JSON",
    "Importar JSON": "Import JSON",
    Pruebas: "Testing",
    "Cargar ejemplo": "Load sample",
    Reiniciar: "Reset",
    "Borrar todo": "Delete all",
    "Guardado": "Saved",
    "Equipo guardado": "Team saved",
    "Competicion creada": "Competition created",
    "Asignacion guardada": "Assignment saved",
    "Grupos generados": "Groups generated",
    "Resultado actualizado": "Result updated",
    "Resultado limpiado": "Result cleared",
    "Cuadro generado": "Bracket generated",
    "Eliminatoria actualizada": "Knockout updated",
    "Cruce actualizado": "Match-up updated",
    "Datos importados": "Data imported",
    "Datos borrados": "Data deleted",
    "Ejemplo cargado": "Sample loaded",
    "Exportacion preparada": "Export ready",
  },
};

const PLACEHOLDER_TRANSLATIONS = {
  en: {
    "Ej. Smash Center A": "E.g. Smash Center A",
    "Un jugador por linea, o separados por coma": "One player per line, or comma-separated",
    "Telefono, observaciones, disponibilidad...": "Phone, notes, availability...",
    "Ej. Liga Primavera 2026": "E.g. Spring League 2026",
    "Ej. Masculina 3a, Mixta, Femenina...": "E.g. Men's 3rd, Mixed, Women's...",
  },
};

const adminSections = [
  { id: "dashboard", label: "Resumen" },
  { id: "teams", label: "Equipos" },
  { id: "competitions", label: "Competiciones" },
  { id: "groups", label: "Grupos" },
  { id: "bracket", label: "Eliminatorias" },
  { id: "data", label: "Datos" },
];

const publicSections = [
  { id: "public-overview", label: "Resumen" },
  { id: "public-groups", label: "Grupos" },
  { id: "public-bracket", label: "Cuadro" },
];

let state = loadState();
let ui = {
  mode: "admin",
  section: "dashboard",
  selectedCompetitionId: state.competitions[0]?.id || "",
  qualifiersPerGroup: 2,
  lang: getInitialLang(),
};

const app = document.querySelector("#app");
const sectionNav = document.querySelector("#sectionNav");
const importFile = document.querySelector("#importFile");

document.addEventListener("DOMContentLoaded", render);

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action], [data-section], [data-mode]");
  if (!target) return;

  if (target.dataset.mode) {
    ui.mode = target.dataset.mode;
    ui.section = ui.mode === "admin" ? "dashboard" : "public-overview";
    render();
    return;
  }

  if (target.dataset.section) {
    ui.section = target.dataset.section;
    render();
    return;
  }

  const action = target.dataset.action;
  const id = target.dataset.id;
  const competitionId = target.dataset.competitionId || ui.selectedCompetitionId;

  const actions = {
    "set-lang": () => setLanguage(target.dataset.lang),
    "delete-team": () => deleteTeam(id),
    "select-competition": () => {
      ui.selectedCompetitionId = id;
      render();
    },
    "delete-competition": () => deleteCompetition(id),
    "save-team-assignment": () => saveTeamAssignment(competitionId),
    "generate-groups": () => generateGroups(competitionId),
    "clear-group-result": () => clearGroupResult(competitionId, id),
    "generate-bracket": () => generateBracket(competitionId),
    "clear-bracket-result": () => clearBracketResult(competitionId, id),
    "export-data": exportData,
    "trigger-import": () => importFile.click(),
    "reset-data": resetData,
    "load-demo": loadDemoData,
  };

  actions[action]?.();
});

document.addEventListener("submit", (event) => {
  event.preventDefault();

  if (event.target.id === "teamForm") addTeam(new FormData(event.target));
  if (event.target.id === "competitionForm") addCompetition(new FormData(event.target));
});

document.addEventListener("change", (event) => {
  const target = event.target;

  if (target.id === "competitionSelect" || target.id === "publicCompetitionSelect") {
    ui.selectedCompetitionId = target.value;
    render();
    return;
  }

  if (target.id === "qualifiersPerGroup") {
    ui.qualifiersPerGroup = Number(target.value);
    return;
  }

  if (target.matches("[data-group-score]")) {
    updateGroupScore(target);
    return;
  }

  if (target.matches("[data-bracket-score]")) {
    updateBracketScore(target);
  }
});

document.addEventListener("dragstart", (event) => {
  const slot = event.target.closest("[data-bracket-slot]");
  if (!slot) return;

  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData(
    "application/json",
    JSON.stringify({
      competitionId: slot.dataset.competitionId,
      matchId: slot.dataset.matchId,
      side: slot.dataset.side,
    }),
  );
});

document.addEventListener("dragover", (event) => {
  const slot = event.target.closest("[data-bracket-slot]");
  if (!slot) return;
  event.preventDefault();
  slot.classList.add("drag-over");
});

document.addEventListener("dragleave", (event) => {
  event.target.closest("[data-bracket-slot]")?.classList.remove("drag-over");
});

document.addEventListener("drop", (event) => {
  const slot = event.target.closest("[data-bracket-slot]");
  if (!slot) return;

  event.preventDefault();
  slot.classList.remove("drag-over");

  try {
    const source = JSON.parse(event.dataTransfer.getData("application/json"));
    swapBracketSlots(source, {
      competitionId: slot.dataset.competitionId,
      matchId: slot.dataset.matchId,
      side: slot.dataset.side,
    });
  } catch {
    showToast("No se pudo mover el equipo");
  }
});

importFile.addEventListener("change", importData);

function getInitialLang() {
  try {
    const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
    return savedLang === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

function setLanguage(lang) {
  ui.lang = lang === "en" ? "en" : "es";
  localStorage.setItem(LANG_STORAGE_KEY, ui.lang);
  render();
}

function applyTranslations(root = document.body) {
  if (ui.lang === "es") return;

  translateTextNodes(root);
  root.querySelectorAll?.("[placeholder]").forEach((element) => {
    const translation = PLACEHOLDER_TRANSLATIONS.en[element.getAttribute("placeholder")];
    if (translation) element.setAttribute("placeholder", translation);
  });
  root.querySelectorAll?.("[aria-label]").forEach((element) => {
    const translation = translateText(element.getAttribute("aria-label"));
    if (translation) element.setAttribute("aria-label", translation);
  });
}

function translateTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const translated = translateText(node.nodeValue);
    if (translated) node.nodeValue = translated;
  });
}

function translateText(value) {
  const text = String(value ?? "");
  const trimmed = text.trim();
  if (!trimmed) return "";

  const exact = TEXT_TRANSLATIONS.en[trimmed];
  if (exact) return text.replace(trimmed, exact);

  const generated = translateGeneratedText(trimmed);
  return generated ? text.replace(trimmed, generated) : "";
}

function translateGeneratedText(text) {
  const groupMatch = text.match(/^Grupo ([A-Z])$/);
  if (groupMatch) return `Group ${groupMatch[1]}`;

  const roundMatch = text.match(/^Ronda (\d+)$/);
  if (roundMatch) return `Round ${roundMatch[1]}`;

  const perGroupMatch = text.match(/^(\d+) por grupo$/);
  if (perGroupMatch) return `${perGroupMatch[1]} per group`;

  const totalMatch = text.match(/^(\d+) total$/);
  if (totalMatch) return `${totalMatch[1]} total`;

  const teamCountMatch = text.match(/^(\d+) equipos$/);
  if (teamCountMatch) return `${teamCountMatch[1]} teams`;

  const playersMatch = text.match(/^\((\d+) jugadores\)$/);
  if (playersMatch) return `(${playersMatch[1]} players)`;

  if (text.startsWith("Gana ")) return text.replace("Gana ", "Winner: ");
  if (text.startsWith("Avanza ")) return text.replace("Avanza ", "Advances: ");
  if (text.startsWith("Partido ")) return text.replace("Partido ", "Match ");
  if (text.startsWith("Ganador partido ")) return text.replace("Ganador partido ", "Winner of match ");

  return "";
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createEmptyState();
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.teams) || !Array.isArray(parsed.competitions)) {
      return createEmptyState();
    }
    return migrateState(parsed);
  } catch {
    return createEmptyState();
  }
}

function createEmptyState() {
  return {
    version: 1,
    teams: [],
    competitions: [],
    savedAt: new Date().toISOString(),
  };
}

function migrateState(savedState) {
  savedState.competitions.forEach((competition) => {
    competition.groups ||= [];
    competition.knockout ||= { rounds: [] };
    competition.groups.forEach((group) => {
      group.matches ||= [];
      group.matches.forEach(ensureMatchShape);
    });
    competition.knockout.rounds ||= [];
    competition.knockout.rounds.forEach((round) => {
      round.matches ||= [];
      round.matches.forEach(ensureMatchShape);
    });
  });
  return savedState;
}

function saveState(message = "Guardado") {
  state.savedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  showToast(message);
}

function uid(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function render() {
  ensureSelectedCompetition();
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

function renderNav() {
  const sections = ui.mode === "admin" ? adminSections : publicSections;
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
  const matches = state.competitions.flatMap((competition) => [
    ...competition.groups.flatMap((group) => group.matches),
    ...competition.knockout.rounds.flatMap((round) => round.matches),
  ]);
  const played = matches.filter((match) => hasResult(match)).length;

  return `
    ${sectionHeader(
      "Resumen del torneo",
      "Gestiona equipos, fases de grupos, resultados y cuadros eliminatorios desde un unico panel.",
      renderCompetitionSelect("competitionSelect"),
    )}
    <div class="grid three">
      <section class="panel metric">
        <strong>${state.teams.length}</strong>
        <span>Equipos registrados</span>
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
        <h2>${selected ? escapeHtml(selected.name) : "Sin competicion seleccionada"}</h2>
        ${
          selected
            ? `
              <p class="status-line">${escapeHtml(selected.category || "Categoria sin especificar")} - ${selected.teamIds.length} equipos - ${selected.groups.length} grupos</p>
              <div class="tag-row">
                <span class="tag">${selected.groups.length ? "Fase de grupos creada" : "Grupos pendientes"}</span>
                <span class="tag">${selected.knockout.rounds.length ? "Cuadro creado" : "Cuadro pendiente"}</span>
              </div>
            `
            : `<p class="status-line">Crea una competicion para empezar a organizar los equipos.</p>`
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
        <h2>Accesos rapidos</h2>
        <div class="toolbar">
          <button class="ghost-button" type="button" data-section="teams">Equipos</button>
          <button class="ghost-button" type="button" data-section="competitions">Competiciones</button>
          <button class="ghost-button" type="button" data-section="groups">Grupos</button>
          <button class="ghost-button" type="button" data-section="bracket">Eliminatorias</button>
        </div>
      </section>
    </div>
  `;
}

function renderNextStep(competition) {
  if (!state.teams.length) {
    return `<p class="status-line">Da de alta los primeros equipos con sus jugadores.</p>`;
  }
  if (!competition) {
    return `<p class="status-line">Crea una competicion y asignale los equipos inscritos.</p>`;
  }
  if (!competition.teamIds.length) {
    return `<p class="status-line">Asigna equipos a ${escapeHtml(competition.name)} desde Competiciones.</p>`;
  }
  if (!competition.groups.length) {
    return `<p class="status-line">Genera los grupos para crear automaticamente los partidos de liga.</p>`;
  }
  if (!competition.knockout.rounds.length) {
    return `<p class="status-line">Cuando tengas clasificaciones, genera el cuadro eliminatorio desde la seccion Eliminatorias.</p>`;
  }
  return `<p class="status-line">El torneo ya tiene estructura completa. Actualiza resultados y revisa la vista publica.</p>`;
}

function renderTeams() {
  return `
    ${sectionHeader("Equipos", "Alta y control de equipos participantes con listado de jugadores.")}
    <div class="grid two">
      <section class="panel">
        <h2>Nuevo equipo</h2>
        <form id="teamForm" class="form-grid">
          <div class="field">
            <label for="teamName">Nombre del equipo</label>
            <input id="teamName" name="name" placeholder="Ej. Smash Center A" required />
          </div>
          <div class="field">
            <label for="teamPlayers">Jugadores</label>
            <textarea id="teamPlayers" name="players" placeholder="Un jugador por linea, o separados por coma" required></textarea>
          </div>
          <div class="field">
            <label for="teamNotes">Notas internas</label>
            <textarea id="teamNotes" name="notes" placeholder="Telefono, observaciones, disponibilidad..."></textarea>
          </div>
          <button class="primary-button" type="submit">Guardar equipo</button>
        </form>
      </section>

      <section class="panel">
        <div class="item-title">
          <h2>Equipos registrados</h2>
          <span class="tag">${state.teams.length} total</span>
        </div>
        ${
          state.teams.length
            ? `<div class="list">${state.teams.map(renderTeamCard).join("")}</div>`
            : emptyState("Todavia no hay equipos", "Crea el primer equipo para poder inscribirlo en una competicion.")
        }
      </section>
    </div>
  `;
}

function renderTeamCard(team) {
  return `
    <article class="item-card">
      <div class="item-title">
        <h3>${escapeHtml(team.name)}</h3>
        <button class="small-button" type="button" data-action="delete-team" data-id="${team.id}">Eliminar</button>
      </div>
      <p class="meta">${team.players.map((player) => escapeHtml(player.name)).join(" - ") || "Sin jugadores"}</p>
      ${team.notes ? `<p class="status-line">${escapeHtml(team.notes)}</p>` : ""}
    </article>
  `;
}

function renderCompetitions() {
  const selected = getSelectedCompetition();

  return `
    ${sectionHeader(
      "Competiciones",
      "Crea competiciones, asigna equipos inscritos y deja preparada la fase de grupos.",
      renderCompetitionSelect("competitionSelect"),
    )}
    <div class="grid two">
      <section class="panel">
        <h2>Nueva competicion</h2>
        <form id="competitionForm" class="form-grid">
          <div class="field">
            <label for="competitionName">Nombre</label>
            <input id="competitionName" name="name" placeholder="Ej. Liga Primavera 2026" required />
          </div>
          <div class="field">
            <label for="competitionCategory">Categoria</label>
            <input id="competitionCategory" name="category" placeholder="Ej. Masculina 3a, Mixta, Femenina..." />
          </div>
          <div class="field">
            <label for="competitionGroups">Numero de grupos</label>
            <input id="competitionGroups" name="groupCount" type="number" min="1" max="16" value="2" required />
          </div>
          <button class="primary-button" type="submit">Crear competicion</button>
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
            : emptyState("Sin competiciones", "Crea una competicion para agrupar equipos y resultados.")
        }
      </section>
    </div>

    <div style="margin-top: 16px">
      ${
        selected
          ? renderTeamAssignment(selected)
          : emptyState("Selecciona o crea una competicion", "Cuando exista una competicion podras asignarle equipos.")
      }
    </div>
  `;
}

function renderCompetitionCard(competition) {
  const isSelected = competition.id === ui.selectedCompetitionId;
  return `
    <article class="item-card">
      <div class="item-title">
        <h3>${escapeHtml(competition.name)}</h3>
        <span class="tag">${competition.teamIds.length} equipos</span>
      </div>
      <p class="meta">${escapeHtml(competition.category || "Sin categoria")} - ${competition.groupCount} grupos previstos</p>
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
  return `
    <section class="panel">
      <div class="section-header">
        <div>
          <h2>Equipos en ${escapeHtml(competition.name)}</h2>
          <p>Marca los equipos que entran en esta competicion. Al generar grupos se repartiran automaticamente.</p>
        </div>
        <button class="primary-button" type="button" data-action="save-team-assignment" data-competition-id="${competition.id}">
          Guardar asignacion
        </button>
      </div>
      ${
        state.teams.length
          ? `
            <div class="team-picker">
              ${state.teams
                .map(
                  (team) => `
                    <label class="check-row">
                      <input type="checkbox" data-team-assignment value="${team.id}" ${competition.teamIds.includes(team.id) ? "checked" : ""} />
                      <span>${escapeHtml(team.name)} <span class="meta">(${team.players.length} jugadores)</span></span>
                    </label>
                  `,
                )
                .join("")}
            </div>
          `
          : emptyState("No hay equipos disponibles", "Da de alta equipos antes de asignarlos a una competicion.")
      }
    </section>
  `;
}

function renderGroupStage(readOnly) {
  const competition = getSelectedCompetition();

  if (!competition) {
    return `
      ${sectionHeader(readOnly ? "Grupos" : "Fase de grupos", "Selecciona una competicion para ver sus grupos.")}
      ${emptyState("Sin competicion", "Todavia no hay competiciones creadas.")}
    `;
  }

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
                <p>${competition.teamIds.length} equipos asignados - ${competition.groupCount} grupos previstos</p>
              </div>
              <button class="primary-button" type="button" data-action="generate-groups" data-competition-id="${competition.id}" ${competition.teamIds.length < 2 ? "disabled" : ""}>
                Generar grupos y partidos
              </button>
            </div>
            ${
              competition.teamIds.length < 2
                ? `<div class="notice">Asigna al menos dos equipos a la competicion para generar partidos.</div>`
                : `<p class="status-line">Generar grupos reparte equipos y crea todos los cruces de liga. Si ya habia resultados, se pedira confirmacion antes de sobrescribir.</p>`
            }
          </section>
        `
    }
    ${
      competition.groups.length
        ? `<div class="groups-layout">${competition.groups.map((group) => renderGroup(competition, group, readOnly)).join("")}</div>`
        : emptyState("Grupos pendientes", readOnly ? "La organizacion aun no ha publicado la fase de grupos." : "Genera los grupos cuando tengas los equipos asignados.")
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
          <p>${group.teamIds.length} equipos - ${group.matches.length} partidos</p>
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
            <th>Equipo</th>
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
                  <td><strong>${escapeHtml(getTeamName(row.teamId))}</strong></td>
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
        <span class="team-name">${escapeHtml(home)}</span>
        <span class="versus">vs</span>
        <span class="team-name away">${escapeHtml(away)}</span>
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
      ${sectionHeader(readOnly ? "Cuadro" : "Eliminatorias", "Selecciona una competicion para ver su cuadro.")}
      ${emptyState("Sin competicion", "Todavia no hay competiciones creadas.")}
    `;
  }

  const hasGroups = competition.groups.length > 0;

  return `
    ${sectionHeader(
      readOnly ? "Cuadro eliminatorio" : "Eliminatorias",
      readOnly
        ? "Consulta el cuadro y el avance de cada ronda."
        : "Genera el cuadro desde la clasificacion de grupos y apunta resultados de eliminatoria.",
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
                <p>Se empareja el mejor de un grupo contra el peor clasificado de otro, el segundo contra el penultimo y asi sucesivamente. Con mas de dos grupos, el grupo rival se elige aleatoriamente.</p>
              </div>
              <div class="toolbar">
                <select id="qualifiersPerGroup" aria-label="Clasificados por grupo">
                  ${[1, 2, 3, 4]
                    .map((number) => `<option value="${number}" ${ui.qualifiersPerGroup === number ? "selected" : ""}>${number} por grupo</option>`)
                    .join("")}
                </select>
                <button class="primary-button" type="button" data-action="generate-bracket" data-competition-id="${competition.id}" ${hasGroups ? "" : "disabled"}>
                  Generar eliminatoria
                </button>
              </div>
            </div>
            ${hasGroups ? `<p class="status-line">Despues de generar el cuadro puedes arrastrar equipos en la primera ronda para ajustar cruces manualmente.</p>` : `<div class="notice">Primero genera la fase de grupos para obtener clasificados.</div>`}
          </section>
        `
    }

    ${
      competition.knockout.rounds.length
        ? `<div class="bracket">${competition.knockout.rounds.map((round, roundIndex) => renderBracketRound(competition, round, roundIndex, readOnly)).join("")}</div>`
        : emptyState("Cuadro pendiente", readOnly ? "La organizacion aun no ha publicado la eliminatoria." : "Genera el cuadro cuando tengas clasificaciones.")
    }
  `;
}

function renderBracketRound(competition, round, roundIndex, readOnly) {
  const roundGap = 16 + roundIndex * 44;
  return `
    <section class="bracket-round" style="--round-gap: ${roundGap}px; --round-offset: ${roundIndex * 42}px; --connector-height: ${94 + roundGap / 2}px">
      <h3>${escapeHtml(round.name)}</h3>
      ${round.matches.map((match) => renderBracketMatch(competition, match, roundIndex, readOnly)).join("")}
    </section>
  `;
}

function renderBracketMatch(competition, match, roundIndex, readOnly) {
  ensureMatchShape(match);
  const home = match.homeTeamId ? getTeamName(match.homeTeamId) : match.homeLabel || "Por definir";
  const away = match.awayTeamId ? getTeamName(match.awayTeamId) : match.awayLabel || "Por definir";
  const winner = getMatchWinner(match);
  const canScore = Boolean(match.homeTeamId && match.awayTeamId);
  const editableSlots = !readOnly && roundIndex === 0;

  return `
    <article class="match-card bracket-match">
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
      <span class="team-name">${escapeHtml(label)}</span>
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
    ${sectionHeader("Vista publica", "Panel de consulta para jugadores y publico, sin controles de edicion.", publicSelect)}
    ${
      competition
        ? `
          <div class="grid three">
            <section class="panel metric">
              <strong>${competition.teamIds.length}</strong>
              <span>Equipos</span>
            </section>
            <section class="panel metric">
              <strong>${competition.groups.length}</strong>
              <span>Grupos</span>
            </section>
            <section class="panel metric">
              <strong>${competition.knockout.rounds.length}</strong>
              <span>Rondas de cuadro</span>
            </section>
          </div>
          <div class="grid two" style="margin-top: 16px">
            <section class="panel">
              <h2>${escapeHtml(competition.name)}</h2>
              <p class="status-line">${escapeHtml(competition.category || "Categoria sin especificar")}</p>
              <div class="tag-row">
                ${competition.teamIds.map((teamId) => `<span class="tag">${escapeHtml(getTeamName(teamId))}</span>`).join("")}
              </div>
            </section>
            <section class="court-strip" aria-hidden="true"></section>
          </div>
        `
        : emptyState("Sin competiciones publicadas", "Cuando la administracion cree una competicion aparecera aqui.")
    }
  `;
}

function renderData() {
  return `
    ${sectionHeader("Datos", "Copia de seguridad, restauracion y datos de ejemplo para pruebas.")}
    <div class="grid two">
      <section class="panel">
        <h2>Copias</h2>
        <p class="status-line">Los datos se guardan automaticamente en este navegador. Exporta un JSON para conservar una copia o moverlo a otro equipo.</p>
        <div class="toolbar" style="margin-top: 12px">
          <button class="primary-button" type="button" data-action="export-data">Exportar JSON</button>
          <button class="ghost-button" type="button" data-action="trigger-import">Importar JSON</button>
        </div>
      </section>
      <section class="panel">
        <h2>Pruebas</h2>
        <p class="status-line">Carga equipos, grupos y un cuadro de ejemplo para revisar la aplicacion rapidamente.</p>
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
    <select id="${id}" class="competition-select" aria-label="Seleccionar competicion">
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

function addTeam(formData) {
  const name = String(formData.get("name") || "").trim();
  const players = String(formData.get("players") || "")
    .split(/[\n,]+/)
    .map((player) => player.trim())
    .filter(Boolean)
    .map((player) => ({ id: uid("player"), name: player }));
  const notes = String(formData.get("notes") || "").trim();

  if (!name || !players.length) return showToast("El equipo necesita nombre y jugadores");

  state.teams.push({
    id: uid("team"),
    name,
    players,
    notes,
    createdAt: new Date().toISOString(),
  });

  saveState("Equipo guardado");
  render();
}

function deleteTeam(teamId) {
  const team = state.teams.find((item) => item.id === teamId);
  if (!team) return;

  const used = state.competitions.some((competition) => competition.teamIds.includes(teamId));
  if (used && !confirm(`"${team.name}" esta inscrito en competiciones. Al eliminarlo se quitara tambien de grupos y cuadros. Continuar?`)) {
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

  saveState("Equipo eliminado");
  render();
}

function addCompetition(formData) {
  const name = String(formData.get("name") || "").trim();
  const category = String(formData.get("category") || "").trim();
  const groupCount = clamp(Number(formData.get("groupCount") || 1), 1, 16);

  if (!name) return showToast("La competicion necesita nombre");

  const competition = {
    id: uid("competition"),
    name,
    category,
    groupCount,
    teamIds: [],
    groups: [],
    knockout: { rounds: [] },
    createdAt: new Date().toISOString(),
  };

  state.competitions.push(competition);
  ui.selectedCompetitionId = competition.id;
  saveState("Competicion creada");
  render();
}

function deleteCompetition(competitionId) {
  const competition = state.competitions.find((item) => item.id === competitionId);
  if (!competition) return;

  if (!confirm(`Eliminar "${competition.name}" y todos sus resultados?`)) return;

  state.competitions = state.competitions.filter((item) => item.id !== competitionId);
  ui.selectedCompetitionId = state.competitions[0]?.id || "";
  saveState("Competicion eliminada");
  render();
}

function saveTeamAssignment(competitionId) {
  const competition = getCompetition(competitionId);
  if (!competition) return;

  const selectedTeamIds = [...document.querySelectorAll("[data-team-assignment]:checked")].map((input) => input.value);
  const changed = selectedTeamIds.join("|") !== competition.teamIds.join("|");
  const hasGenerated = competition.groups.length || competition.knockout.rounds.length;

  if (changed && hasGenerated && !confirm("Cambiar equipos no borra automaticamente los grupos existentes, pero puede dejarlos desactualizados. Guardar igualmente?")) {
    return;
  }

  competition.teamIds = selectedTeamIds;
  saveState("Asignacion guardada");
  render();
}

function generateGroups(competitionId) {
  const competition = getCompetition(competitionId);
  if (!competition || competition.teamIds.length < 2) return;

  if (competition.groups.some((group) => group.matches.some(hasResult)) || competition.knockout.rounds.length) {
    const ok = confirm("Esto sustituira grupos, partidos y eliminatoria de esta competicion. Continuar?");
    if (!ok) return;
  }

  const shuffled = [...competition.teamIds].sort((a, b) => getTeamName(a).localeCompare(getTeamName(b), "es"));
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

function generateBracket(competitionId) {
  const competition = getCompetition(competitionId);
  if (!competition || !competition.groups.length) return;

  if (competition.knockout.rounds.length && !confirm("Esto sustituira el cuadro eliminatorio actual. Continuar?")) {
    return;
  }

  const pairings = getQualifierPairings(competition, ui.qualifiersPerGroup);
  if (pairings.flat().filter((entry) => entry?.teamId).length < 2) {
    showToast("Hacen falta al menos dos clasificados");
    return;
  }

  competition.knockout = { rounds: buildKnockoutRounds(pairings) };
  updateKnockoutAdvancement(competition);
  saveState("Cuadro generado");
  render();
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

function getCompetition(competitionId) {
  return state.competitions.find((competition) => competition.id === competitionId);
}

function getSelectedCompetition() {
  return getCompetition(ui.selectedCompetitionId);
}

function ensureSelectedCompetition() {
  if (!state.competitions.length) {
    ui.selectedCompetitionId = "";
    return;
  }

  if (!getSelectedCompetition()) {
    ui.selectedCompetitionId = state.competitions[0].id;
  }
}

function getTeamName(teamId) {
  if (!teamId) return "Bye";
  return state.teams.find((team) => team.id === teamId)?.name || "Equipo eliminado";
}

function nextPowerOfTwo(number) {
  return 2 ** Math.ceil(Math.log2(number));
}

function clamp(number, min, max) {
  return Math.min(max, Math.max(min, number));
}

function formatDiff(number) {
  if (number > 0) return `+${number}`;
  return String(number);
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `torneo-padel-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("Exportacion preparada");
}

function importData(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!imported || !Array.isArray(imported.teams) || !Array.isArray(imported.competitions)) {
        throw new Error("Formato no valido");
      }

      state = {
        version: imported.version || 1,
        teams: imported.teams,
        competitions: imported.competitions,
        savedAt: imported.savedAt || new Date().toISOString(),
      };
      ui.selectedCompetitionId = state.competitions[0]?.id || "";
      saveState("Datos importados");
      render();
    } catch {
      showToast("No se pudo importar el archivo");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function resetData() {
  if (!confirm("Borrar todos los equipos, competiciones y resultados guardados?")) return;
  state = createEmptyState();
  ui.selectedCompetitionId = "";
  localStorage.removeItem(STORAGE_KEY);
  showToast("Datos borrados");
  render();
}

function loadDemoData() {
  if ((state.teams.length || state.competitions.length) && !confirm("Esto sustituira los datos actuales por un ejemplo. Continuar?")) {
    return;
  }

  const teamNames = [
    ["Smash Norte", "Laura Martin", "Ana Soler"],
    ["Cristal Padel", "Marta Ruiz", "Irene Santos"],
    ["Vibora Club", "Nerea Cano", "Paula Gil"],
    ["Bandeja 7", "Elena Mora", "Sara Vega"],
    ["Punto de Oro", "Carlos Vidal", "Javier Leon"],
    ["Red Padel", "Pablo Sanz", "Diego Molina"],
    ["Zona 20x10", "Mario Casas", "Ruben Prieto"],
    ["La Reja", "Andres Nieto", "Hugo Marin"],
  ];

  state = createEmptyState();
  state.teams = teamNames.map(([name, playerA, playerB]) => ({
    id: uid("team"),
    name,
    players: [
      { id: uid("player"), name: playerA },
      { id: uid("player"), name: playerB },
    ],
    notes: "",
    createdAt: new Date().toISOString(),
  }));

  const competition = {
    id: uid("competition"),
    name: "Open Primavera",
    category: "Mixta absoluta",
    groupCount: 2,
    teamIds: state.teams.map((team) => team.id),
    groups: [],
    knockout: { rounds: [] },
    createdAt: new Date().toISOString(),
  };
  state.competitions.push(competition);
  ui.selectedCompetitionId = competition.id;
  generateGroups(competition.id);

  const demoCompetition = getCompetition(competition.id);
  demoCompetition.groups.forEach((group, groupIndex) => {
    group.matches.forEach((match, matchIndex) => {
      if (matchIndex < 3) {
        match.sets = [
          { home: 6 + ((groupIndex + matchIndex) % 2), away: 3 + ((groupIndex + matchIndex) % 3) },
          { home: 6, away: 4 },
          { home: null, away: null },
        ];
      }
    });
  });

  competition.knockout = { rounds: buildKnockoutRounds(getQualifierPairings(demoCompetition, 2)) };
  updateKnockoutAdvancement(competition);
  saveState("Ejemplo cargado");
  render();
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
