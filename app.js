const STORAGE_KEY = "padelTournamentControl.v1";
const LANG_STORAGE_KEY = "padelTournamentControl.lang";

const UI_COPY = {
  es: {
    appEyebrow: "Panel de torneos",
    appTitle: "Control de Torneos de Raqueta",
    adminMode: "Administración",
    publicMode: "Vista pública",
    exportData: "Exportar datos",
    importData: "Importar datos",
  },
  en: {
    appEyebrow: "Tournament panel",
    appTitle: "Racket Sports Tournament Control",
    adminMode: "Admin",
    publicMode: "Public view",
    exportData: "Export data",
    importData: "Import data",
  },
};

const DEFAULT_SPORT = "padel";
const DEFAULT_PLAY_MODE = "doubles";
const DEFAULT_COMPETITION_FORMAT = "groups-knockout";
const DEFAULT_PARTICIPANT_TYPE = "team";
const DEFAULT_AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' rx='48' fill='%23d9f1ed'/%3E%3Ccircle cx='48' cy='35' r='16' fill='%230f766e'/%3E%3Cpath d='M20 82c4-18 17-28 28-28s24 10 28 28' fill='%230b5d56'/%3E%3C/svg%3E";

const SPORT_OPTIONS = [
  { value: "ping-pong", label: "Ping-pong" },
  { value: "tennis", label: "Tenis" },
  { value: "padel", label: "Pádel" },
];

const PLAY_MODE_OPTIONS = [
  { value: "doubles", label: "Parejas/equipos" },
  { value: "singles", label: "Individual" },
];

const COMPETITION_FORMAT_OPTIONS = [
  { value: "groups-knockout", label: "Grupos + eliminatoria" },
  { value: "groups", label: "Solo grupos" },
  { value: "knockout", label: "Solo eliminatoria" },
];

const PARTICIPANT_TYPE_OPTIONS = [
  { value: "team", label: "Equipo" },
  { value: "individual", label: "Persona individual" },
];

const TEXT_TRANSLATIONS_ES_EN = {
    "Panel de torneos": "Tournament panel",
    "Panel de torneo": "Tournament panel",
    "Control de Torneos de Raqueta": "Racket Sports Tournament Control",
    "Control de Torneo de Padel": "Racket Sports Tournament Control",
    Administración: "Admin",
    "Vista pública": "Public view",
    Resumen: "Overview",
    Equipos: "Teams",
    Participantes: "Participants",
    Competiciones: "Competitions",
    Grupos: "Groups",
    Eliminatorias: "Knockout",
    Cuadro: "Bracket",
    Datos: "Data",
    "Exportar datos": "Export data",
    "Importar datos": "Import data",
    "Resumen del torneo": "Tournament overview",
    "Gestiona equipos, fases de grupos, resultados y cuadros eliminatorios desde un único panel.":
      "Manage teams, group stages, results and knockout brackets from one panel.",
    "Gestiona participantes, fases de grupos, resultados y cuadros eliminatorios desde un único panel.":
      "Manage participants, group stages, results and knockout brackets from one panel.",
    "Equipos registrados": "Registered teams",
    "Participantes registrados": "Registered participants",
    "Competiciones creadas": "Competitions created",
    "Partidos con resultado": "Matches with results",
    "Sin competición seleccionada": "No competition selected",
    "Categoría sin especificar": "Unspecified category",
    "Fase de grupos creada": "Group stage created",
    "Cuadro creado": "Bracket created",
    "Crea una competición para empezar a organizar los equipos.": "Create a competition to start organizing teams.",
    "Crea una competición para empezar a organizar los participantes.": "Create a competition to start organizing participants.",
    "Siguiente paso recomendado": "Recommended next step",
    "Da de alta los primeros equipos con sus jugadores.": "Register the first teams with their players.",
    "Da de alta los primeros participantes con sus jugadores.": "Register the first participants with their players.",
    "Crea una competición y asígnale los equipos inscritos.": "Create a competition and assign registered teams.",
    "Crea una competición y asígnale participantes inscritos.": "Create a competition and assign registered participants.",
    "Genera la eliminatoria directa desde los participantes asignados.": "Generate the direct knockout bracket from the assigned participants.",
    "Genera los grupos para crear automáticamente los partidos de liga.": "Generate the groups to automatically create round-robin matches.",
    "Cuando tengas clasificaciones, genera el cuadro eliminatorio desde la sección Eliminatorias.":
      "Once standings are available, generate the knockout bracket from the Knockout section.",
    "El torneo ya tiene estructura completa. Actualiza resultados y revisa la vista pública.":
      "The tournament structure is complete. Update results and review the public view.",
    "Accesos rápidos": "Quick links",
    "Alta y control de equipos participantes con listado de jugadores.": "Register and manage participating teams and their players.",
    "Alta y control de personas, parejas o equipos participantes.": "Register and manage participating people, pairs or teams.",
    "Nuevo equipo": "New team",
    "Nuevo participante": "New participant",
    "Tipo de participante": "Participant type",
    "Equipo o pareja": "Team or pair",
    "Persona individual": "Individual person",
    "Nombre del equipo": "Team name",
    "Nombre del participante": "Participant name",
    "Nombre del equipo o jugador": "Team or player name",
    "Foto del jugador": "Player photo",
    "Si no subes foto, usaremos un avatar por defecto.": "If you do not upload a photo, a default avatar will be used.",
    "Subir foto": "Upload photo",
    "Sin foto": "No photo",
    Jugadores: "Players",
    Participante: "Participant",
    "Jugadores o integrantes": "Players or members",
    "Jugadores del equipo o pareja": "Team or pair players",
    "Añadir jugador": "Add player",
    Quitar: "Remove",
    "Eliminar jugador": "Remove player",
    "Añade cada integrante por separado para evitar errores de formato.": "Add each member separately to avoid formatting errors.",
    "Notas internas": "Internal notes",
    "Guardar equipo": "Save team",
    "Guardar participante": "Save participant",
    "Participante guardado": "Participant saved",
    "Participante eliminado": "Participant deleted",
    "Equipos registrados": "Registered teams",
    "Filtrar por tipo": "Filter by type",
    Todos: "All",
    "Equipos y parejas": "Teams and pairs",
    "Personas individuales": "Individual people",
    Buscar: "Search",
    "Buscar por nombre o integrante": "Search by name or member",
    "Sin resultados": "No results",
    "Ajusta el filtro o la búsqueda para ver participantes.": "Adjust the filter or search to show participants.",
    total: "total",
    Eliminar: "Delete",
    "Sin jugadores": "No players",
    "Participante individual": "Individual participant",
    "Todavía no hay equipos": "There are no teams yet",
    "Todavía no hay participantes": "There are no participants yet",
    "Crea el primer equipo para poder inscribirlo en una competición.": "Create the first team so it can be entered in a competition.",
    "Crea el primer participante para poder inscribirlo en una competición.": "Create the first participant so they can be entered in a competition.",
    "Crea competiciones, asigna equipos inscritos y deja preparada la fase de grupos.":
      "Create competitions, assign registered teams and prepare the group stage.",
    "Crea competiciones por deporte, modalidad y formato de torneo.": "Create competitions by sport, mode and tournament format.",
    "Nueva competición": "New competition",
    Nombre: "Name",
    Categoría: "Category",
    Deporte: "Sport",
    Modalidad: "Mode",
    "Formato de competición": "Competition format",
    "Ping-pong": "Ping-pong",
    Tenis: "Tennis",
    Pádel: "Padel",
    "Parejas/equipos": "Pairs/teams",
    Individual: "Singles",
    "Grupos + eliminatoria": "Groups + knockout",
    "Solo grupos": "Groups only",
    "Solo eliminatoria": "Knockout only",
    "Número de grupos": "Number of groups",
    "Solo se usará en formatos con fase de grupos.": "Only used for formats with a group stage.",
    "Crear competición": "Create competition",
    Seleccionar: "Select",
    Seleccionada: "Selected",
    "Sin competiciones": "No competitions",
    "Crea una competición para agrupar equipos y resultados.": "Create a competition to group teams and results.",
    "Crea una competición para agrupar participantes y resultados.": "Create a competition to group participants and results.",
    "Sin categoría": "No category",
    "grupos previstos": "planned groups",
    "Selecciona o crea una competición": "Select or create a competition",
    "Cuando exista una competición podrás asignarle equipos.": "Once a competition exists, you can assign teams to it.",
    "Cuando exista una competición podrás asignarle participantes.": "Once a competition exists, you can assign participants to it.",
    "No hay equipos disponibles": "No teams available",
    "No hay participantes disponibles": "No participants available",
    "Da de alta equipos antes de asignarlos a una competición.": "Register teams before assigning them to a competition.",
    "Da de alta participantes antes de asignarlos a una competición.": "Register participants before assigning them to a competition.",
    "Da de alta participantes de tipo equipo o pareja para esta modalidad.": "Register team or pair participants for this mode.",
    "Da de alta participantes de tipo persona individual para esta modalidad.": "Register individual person participants for this mode.",
    "Marca los equipos que entran en esta competición. Al generar grupos se repartirán automáticamente.":
      "Select the teams entering this competition. When groups are generated, teams will be distributed automatically.",
    "Guardar asignación": "Save assignment",
    "Fase de grupos": "Group stage",
    "Selecciona una competición para ver sus grupos.": "Select a competition to view its groups.",
    "Esta competición está configurada como eliminatoria directa.": "This competition is configured as a direct knockout.",
    "Sin fase de grupos": "No group stage",
    "El formato elegido no incluye grupos ni cruces de liga.": "The selected format does not include groups or round-robin match-ups.",
    "Sin competición": "No competition",
    "Todavía no hay competiciones creadas.": "No competitions have been created yet.",
    "Consulta grupos, resultados y clasificaciones actualizadas.": "View groups, results and updated standings.",
    "Genera partidos de liga, apunta resultados y revisa clasificaciones calculadas.":
      "Generate round-robin matches, enter results and review calculated standings.",
    "Generar grupos y partidos": "Generate groups and matches",
    "Asigna al menos dos equipos a la competición para generar partidos.": "Assign at least two teams to the competition to generate matches.",
    "Asigna al menos dos participantes a la competición para generar partidos.": "Assign at least two participants to the competition to generate matches.",
    "Generar grupos reparte equipos y crea todos los cruces de liga. Si ya había resultados, se pedirá confirmación antes de sobrescribir.":
      "Generating groups distributes teams and creates all round-robin matches. If results already exist, confirmation will be requested before overwriting.",
    "Generar grupos reparte participantes y crea todos los cruces de liga. Si ya había resultados, se pedirá confirmación antes de sobrescribir.":
      "Generating groups distributes participants and creates all round-robin match-ups. If results already exist, confirmation will be requested before overwriting.",
    "Grupos pendientes": "Groups pending",
    "La organización aún no ha publicado la fase de grupos.": "The organizer has not published the group stage yet.",
    "Genera los grupos cuando tengas los equipos asignados.": "Generate the groups once teams are assigned.",
    "Genera los grupos cuando tengas los participantes asignados.": "Generate the groups once participants are assigned.",
    "Cuadro eliminatorio": "Knockout bracket",
    "Selecciona una competición para ver su cuadro.": "Select a competition to view its bracket.",
    "Consulta el cuadro y el avance de cada ronda.": "View the bracket and round progression.",
    "Genera el cuadro desde la clasificación de grupos y apunta resultados de eliminatoria.":
      "Generate the bracket from group standings and enter knockout results.",
    "Generar cuadro": "Generate bracket",
    "Esta competición está configurada solo con fase de grupos.": "This competition is configured as group stage only.",
    "Sin eliminatoria": "No knockout stage",
    "El formato elegido no incluye cuadro eliminatorio.": "The selected format does not include a knockout bracket.",
    "El cuadro directo se genera con los participantes asignados y después permite ajustar cruces en la primera ronda.":
      "The direct bracket is generated from assigned participants and then allows first-round match-ups to be adjusted.",
    "Se empareja el mejor de un grupo contra el peor clasificado de otro, el segundo contra el penúltimo y así sucesivamente. Con más de dos grupos, el grupo rival se elige aleatoriamente.":
      "The best player/team from one group is paired with the lowest-ranked qualifier from another, second with second-lowest, and so on. With more than two groups, the rival group is selected at random.",
    "Clasificados por grupo": "Qualifiers per group",
    "Generar eliminatoria": "Generate knockout",
    "Imprimir / PDF": "Print / PDF",
    "PDF multipágina": "Multipage PDF",
    "Exportar grupos PDF": "Export groups PDF",
    "Exportar grupos y cruces como PDF": "Export groups and match-ups as PDF",
    "Imprimir cuadro o guardarlo como PDF": "Print bracket or save it as PDF",
    "Preparar PDF multipágina para cuadros grandes": "Prepare a multipage PDF for large brackets",
    "No hay cuadro para exportar": "There is no bracket to export",
    "No hay grupos para exportar": "There are no groups to export",
    "Preparando impresión del cuadro": "Preparing bracket print",
    "Preparando PDF multipágina": "Preparing multipage PDF",
    "Preparando PDF de grupos": "Preparing groups PDF",
    "Página": "Page",
    "de": "of",
    "Rondas": "Rounds",
    "Cruces del grupo": "Group match-ups",
    "Cuadro eliminatorio": "Knockout bracket",
    "Después de generar el cuadro puedes arrastrar equipos en la primera ronda para ajustar cruces manualmente.":
      "After generating the bracket, you can drag teams in the first round to adjust match-ups manually.",
    "Después de generar el cuadro puedes arrastrar participantes en la primera ronda para ajustar cruces manualmente.":
      "After generating the bracket, you can drag participants in the first round to adjust match-ups manually.",
    "Primero genera la fase de grupos para obtener clasificados.": "First generate the group stage to get qualifiers.",
    "Asigna al menos dos participantes a la competición para generar la eliminatoria.": "Assign at least two participants to generate the knockout bracket.",
    "Cuadro pendiente": "Bracket pending",
    "La organización aún no ha publicado la eliminatoria.": "The organizer has not published the knockout bracket yet.",
    "Genera el cuadro cuando tengas clasificaciones.": "Generate the bracket once standings are available.",
    "Genera el cuadro cuando la competición tenga participantes suficientes.": "Generate the bracket once the competition has enough participants.",
    Finalizado: "Finished",
    Pendiente: "Pending",
    "Sin resultado": "No result",
    "Limpiar resultado": "Clear result",
    "Marcador al mejor de tres sets": "Best-of-three sets score",
    "Set 1": "Set 1",
    "Set 2": "Set 2",
    "Set 3": "Set 3",
    Final: "Final",
    Semifinales: "Semifinals",
    Cuartos: "Quarterfinals",
    "Vista pública": "Public view",
    "Panel de consulta para jugadores y público, sin controles de edición.":
      "Read-only panel for players and spectators.",
    Formato: "Format",
    "Rondas de cuadro": "Bracket rounds",
    "Sin competiciones publicadas": "No published competitions",
    "Cuando la administración cree una competición aparecerá aquí.": "When the admin creates a competition, it will appear here.",
    "Copia de seguridad, restauración y datos de ejemplo para pruebas.": "Backups, restore and sample data for testing.",
    Copias: "Backups",
    "Los datos se guardan automáticamente en este navegador. Exporta un JSON para conservar una copia o moverlo a otro equipo.":
      "Data is saved automatically in this browser. Export a JSON file to keep a backup or move it to another device.",
    "Exportar JSON": "Export JSON",
    "Importar JSON": "Import JSON",
    Pruebas: "Testing",
    "Carga equipos, grupos y un cuadro de ejemplo para revisar la aplicación rápidamente.":
      "Load teams, groups and a sample bracket to review the app quickly.",
    "Carga participantes, grupos y un cuadro de ejemplo para revisar la aplicación rápidamente.":
      "Load participants, groups and a sample bracket to review the app quickly.",
    "Cargar ejemplo": "Load sample",
    Reiniciar: "Reset",
    "Elimina todos los datos guardados en este navegador.": "Delete all data saved in this browser.",
    "Borrar todo": "Delete all",
    "Guardado": "Saved",
    "El equipo necesita nombre y jugadores": "The team needs a name and players",
    "El participante necesita nombre e integrantes": "The participant needs a name and members",
    "El equipo necesita al menos dos integrantes": "The team needs at least two members",
    "Foto adjunta": "Photo attached",
    "Equipo guardado": "Team saved",
    "Equipo eliminado": "Team deleted",
    "La competición necesita nombre": "The competition needs a name",
    "Competición creada": "Competition created",
    "Competición eliminada": "Competition deleted",
    "Asignación guardada": "Assignment saved",
    "Grupos generados": "Groups generated",
    "Resultado actualizado": "Result updated",
    "Resultado limpiado": "Result cleared",
    "Cuadro generado": "Bracket generated",
    "Eliminatoria actualizada": "Knockout updated",
    "Cruce actualizado": "Match-up updated",
    "Datos importados": "Data imported",
    "Datos borrados": "Data deleted",
    "Ejemplo cargado": "Sample loaded",
    "Exportación preparada": "Export ready",
    "No se pudo mover el equipo": "The team could not be moved",
    "No se pudo mover el participante": "The participant could not be moved",
    "Esta competición no tiene fase de grupos": "This competition has no group stage",
    "Esta competición no tiene eliminatoria": "This competition has no knockout stage",
    "Hacen falta al menos dos clasificados": "At least two qualifiers are required",
    "Hacen falta al menos dos participantes o clasificados": "At least two participants or qualifiers are required",
    "No se pudo importar el archivo": "The file could not be imported",
    "Cambiar equipos no borra automáticamente los grupos existentes, pero puede dejarlos desactualizados. ¿Guardar igualmente?":
      "Changing teams does not automatically delete existing groups, but may leave them outdated. Save anyway?",
    "Cambiar participantes no borra automáticamente los grupos existentes, pero puede dejarlos desactualizados. ¿Guardar igualmente?":
      "Changing participants does not automatically delete existing groups, but may leave them outdated. Save anyway?",
    "Esto sustituirá grupos, partidos y eliminatoria de esta competición. ¿Continuar?":
      "This will replace groups, matches and the knockout bracket for this competition. Continue?",
    "Esto sustituirá el cuadro eliminatorio actual. ¿Continuar?": "This will replace the current knockout bracket. Continue?",
    "¿Borrar todos los equipos, competiciones y resultados guardados?": "Delete all saved teams, competitions and results?",
    "¿Borrar todos los participantes, competiciones y resultados guardados?": "Delete all saved participants, competitions and results?",
    "Esto sustituirá los datos actuales por un ejemplo. ¿Continuar?": "This will replace the current data with sample data. Continue?",
    "Seleccionar competición": "Select competition",
    "Por definir": "To be decided",
    "Equipo eliminado": "Deleted team",
    "Participante eliminado": "Deleted participant",
    "Bye": "Bye",
};

const PLACEHOLDER_TRANSLATIONS = {
  en: {
    "Ej. Smash Center A": "E.g. Smash Center A",
    "Ej. Laura Martín o Smash Center A": "E.g. Laura Martin or Smash Center A",
    "Jugador 1": "Player 1",
    "Jugador 2": "Player 2",
    "Buscar por nombre o integrante": "Search by name or member",
    "Un jugador por línea, o separados por coma": "One player per line, or comma-separated",
    "Una persona en individual; dos en parejas, separados por coma o línea": "One person for singles; two for pairs, comma-separated or one per line",
    "Teléfono, observaciones, disponibilidad...": "Phone, notes, availability...",
    "Ej. Liga Primavera 2026": "E.g. Spring League 2026",
    "Ej. Open Ping-pong Primavera": "E.g. Spring Ping-pong Open",
    "Ej. Masculina 3a, Mixta, Femenina...": "E.g. Men's 3rd, Mixed, Women's...",
    "Ej. Absoluta, mixto, sub-18...": "E.g. Open, mixed, under-18...",
  },
};

const TEXT_TRANSLATIONS_EN_ES = Object.fromEntries(
  Object.entries(TEXT_TRANSLATIONS_ES_EN).map(([es, en]) => [en, es]),
);

const adminSections = [
  { id: "dashboard", label: "Resumen" },
  { id: "teams", label: "Participantes" },
  { id: "competitions", label: "Competiciones" },
  { id: "groups", label: "Grupos" },
  { id: "bracket", label: "Eliminatorias" },
  { id: "data", label: "Datos" },
];

const publicSections = [
  { id: "public-overview", label: "Resumen" },
  { id: "public-groups", label: "Grupos" },
  { id: "public-bracket", label: "Eliminatorias" },
];

let state = loadState();
let ui = {
  mode: "admin",
  section: "dashboard",
  selectedCompetitionId: state.competitions[0]?.id || "",
  qualifiersPerGroup: 2,
  participantFilter: "all",
  participantSearch: "",
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
    "print-groups-pdf": () => printGroupsAsPdf(),
    "print-bracket-pdf": () => printBracketAsPdf(),
    "print-bracket-multipage-pdf": () => printBracketMultipagePdf(),
    "add-player-field": () => addPlayerField(),
    "remove-player-field": () => removePlayerField(target),
    "export-data": exportData,
    "trigger-import": () => importFile.click(),
    "reset-data": resetData,
    "load-demo": loadDemoData,
  };

  actions[action]?.();
});

document.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (event.target.id === "teamForm") await addTeam(new FormData(event.target));
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

  if (target.id === "competitionFormat") {
    syncCompetitionFormatFields();
    return;
  }

  if (target.id === "participantType") {
    syncParticipantForm();
    return;
  }

  if (target.id === "participantFilter") {
    ui.participantFilter = target.value;
    render();
    return;
  }

  if (target.matches("[data-player-photo-input]")) {
    updatePhotoInputStatus(target);
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

document.addEventListener("input", (event) => {
  const target = event.target;
  if (target.id !== "participantSearch") return;

  ui.participantSearch = target.value;
  const cursorPosition = target.selectionStart ?? ui.participantSearch.length;
  render();
  restoreParticipantSearchFocus(cursorPosition);
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
    showToast("No se pudo mover el participante");
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

function t(key) {
  return UI_COPY[ui.lang]?.[key] || UI_COPY.es[key] || key;
}

function applyTranslations(root = document.body) {
  renderStaticChrome();
  translateTextNodes(root);
  root.querySelectorAll?.("[placeholder]").forEach((element) => {
    const translation = translatePlaceholder(element.getAttribute("placeholder"));
    if (translation) element.setAttribute("placeholder", translation);
  });
  root.querySelectorAll?.("[aria-label]").forEach((element) => {
    const translation = translateText(element.getAttribute("aria-label"));
    if (translation) element.setAttribute("aria-label", translation);
  });
}

function renderStaticChrome() {
  document.title = t("appTitle");
  const eyebrow = document.querySelector(".eyebrow");
  const title = document.querySelector(".brand h1");
  const adminButton = document.querySelector('[data-mode="admin"]');
  const publicButton = document.querySelector('[data-mode="public"]');
  const exportButton = document.querySelector('[data-action="export-data"]');
  const importLabel = document.querySelector(".file-label");

  if (eyebrow) eyebrow.textContent = t("appEyebrow");
  if (title) title.textContent = t("appTitle");
  if (adminButton) adminButton.textContent = t("adminMode");
  if (publicButton) publicButton.textContent = t("publicMode");
  if (exportButton) exportButton.textContent = t("exportData");
  if (importLabel?.firstChild) importLabel.firstChild.nodeValue = `\n              ${t("importData")}\n              `;
}

function translatePlaceholder(value) {
  const text = String(value ?? "");
  if (ui.lang === "en") return PLACEHOLDER_TRANSLATIONS.en[text] || translateGeneratedText(text) || "";

  const reverse = Object.fromEntries(Object.entries(PLACEHOLDER_TRANSLATIONS.en).map(([es, en]) => [en, es]));
  return reverse[text] || translateGeneratedText(text) || "";
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

  const dictionary = ui.lang === "en" ? TEXT_TRANSLATIONS_ES_EN : TEXT_TRANSLATIONS_EN_ES;
  const exact = dictionary[trimmed];
  if (exact) return text.replace(trimmed, exact);

  const generated = translateGeneratedText(trimmed);
  return generated ? text.replace(trimmed, generated) : "";
}

function translateGeneratedText(text) {
  if (ui.lang === "es") {
    const groupMatchEn = text.match(/^Group ([A-Z])$/);
    if (groupMatchEn) return `Grupo ${groupMatchEn[1]}`;

    const groupMatchOrderEn = text.match(/^Group ([A-Z]) - Match (\d+)$/);
    if (groupMatchOrderEn) return `Grupo ${groupMatchOrderEn[1]} - Partido ${groupMatchOrderEn[2]}`;

    const playerPlaceholderEn = text.match(/^Player (\d+)$/);
    if (playerPlaceholderEn) return `Jugador ${playerPlaceholderEn[1]}`;

    const photoAttachedEn = text.match(/^Photo attached: (.+)$/);
    if (photoAttachedEn) return `Foto adjunta: ${photoAttachedEn[1]}`;

    const roundMatchEn = text.match(/^Round (\d+)$/);
    if (roundMatchEn) return `Ronda ${roundMatchEn[1]}`;

    const perGroupMatchEn = text.match(/^(\d+) per group$/);
    if (perGroupMatchEn) return `${perGroupMatchEn[1]} por grupo`;

    const directPersonSeedEn = text.match(/^person (\d+)$/);
    if (directPersonSeedEn) return `persona ${directPersonSeedEn[1]}`;

    const directPairSeedEn = text.match(/^pair\/team (\d+)$/);
    if (directPairSeedEn) return `pareja/equipo ${directPairSeedEn[1]}`;

    const totalMatchEn = text.match(/^(\d+) total$/);
    if (totalMatchEn) return `${totalMatchEn[1]} total`;

    const teamCountMatchEn = text.match(/^(\d+) teams$/);
    if (teamCountMatchEn) return `${teamCountMatchEn[1]} equipos`;

    const participantCountMatchEn = text.match(/^(\d+) participants$/);
    if (participantCountMatchEn) return `${participantCountMatchEn[1]} participantes`;

    const pairsCountMatchEn = text.match(/^(\d+) pairs\/teams$/);
    if (pairsCountMatchEn) return `${pairsCountMatchEn[1]} parejas/equipos`;

    const singlePairCountMatchEn = text.match(/^1 pair\/team$/);
    if (singlePairCountMatchEn) return "1 pareja/equipo";

    const peopleCountMatchEn = text.match(/^(\d+) people$/);
    if (peopleCountMatchEn) return `${peopleCountMatchEn[1]} personas`;

    const singlePersonCountMatchEn = text.match(/^1 person$/);
    if (singlePersonCountMatchEn) return "1 persona";

    const groupCountMatchEn = text.match(/^(\d+) groups$/);
    if (groupCountMatchEn) return `${groupCountMatchEn[1]} grupos`;

    const plannedGroupsMatchEn = text.match(/^(\d+) planned groups$/);
    if (plannedGroupsMatchEn) return `${plannedGroupsMatchEn[1]} grupos previstos`;

    const bracketRoundCountMatchEn = text.match(/^(\d+) bracket rounds$/);
    if (bracketRoundCountMatchEn) return `${bracketRoundCountMatchEn[1]} rondas de cuadro`;

    const matchCountLineEn = text.match(/^(.+) - (\d+) matches$/);
    if (matchCountLineEn) {
      return `${translateGeneratedText(matchCountLineEn[1]) || matchCountLineEn[1]} - ${matchCountLineEn[2]} partidos`;
    }

    const assignedGroupsMatchEn = text.match(/^(.+) assigned - (\d+) planned groups$/);
    if (assignedGroupsMatchEn) {
      return `${translateGeneratedText(assignedGroupsMatchEn[1]) || assignedGroupsMatchEn[1]} asignados - ${assignedGroupsMatchEn[2]} grupos previstos`;
    }

    const playerCountMatchEn = text.match(/^(\d+) players$/);
    if (playerCountMatchEn) return `${playerCountMatchEn[1]} jugadores`;

    const singlePlayerCountMatchEn = text.match(/^1 player$/);
    if (singlePlayerCountMatchEn) return "1 jugador";

    const playersMatchEn = text.match(/^\((\d+) players\)$/);
    if (playersMatchEn) return `(${playersMatchEn[1]} jugadores)`;

    const singlePlayersMatchEn = text.match(/^\(1 player\)$/);
    if (singlePlayersMatchEn) return "(1 jugador)";

    if (text.startsWith("Winner: ")) return text.replace("Winner: ", "Gana ");
    if (text.startsWith("Advances: ")) return text.replace("Advances: ", "Avanza ");
    if (text.startsWith("Participants in ")) return text.replace("Participants in ", "Participantes en ");
    if (text.startsWith("Match ")) return text.replace("Match ", "Partido ");
    if (text.startsWith("Winner of match ")) return text.replace("Winner of match ", "Ganador partido ");
    if (text.startsWith("Delete ") && text.endsWith(" and all its results?")) {
      return text.replace(/^Delete "(.+)" and all its results\?$/, '¿Eliminar "$1" y todos sus resultados?');
    }
    if (text.startsWith("Assign ") && text.endsWith(" from Competitions.")) {
      return text
        .replace(/^Assign (.+) to (.+) from Competitions\.$/, "Asigna $1 a $2 desde Competiciones.")
        .replace("pairs/teams", "parejas/equipos")
        .replace("pair/team", "pareja/equipo")
        .replace("people", "personas")
        .replace("person", "persona")
        .replace("participants", "participantes");
    }
    if (text.startsWith("Select the ") && text.endsWith(" entering this competition.")) {
      return text
        .replace(/^Select the (.+) entering this competition\.$/, "Marca las $1 que entran en esta competición.")
        .replace("pairs/teams", "parejas/equipos")
        .replace("pair/team", "pareja/equipo")
        .replace("people", "personas")
        .replace("person", "persona")
        .replace("participants", "participantes");
    }

    return "";
  }

  const groupMatch = text.match(/^Grupo ([A-Z])$/);
  if (groupMatch) return `Group ${groupMatch[1]}`;

  const groupMatchOrder = text.match(/^Grupo ([A-Z]) - Partido (\d+)$/);
  if (groupMatchOrder) return `Group ${groupMatchOrder[1]} - Match ${groupMatchOrder[2]}`;

  const playerPlaceholder = text.match(/^Jugador (\d+)$/);
  if (playerPlaceholder) return `Player ${playerPlaceholder[1]}`;

  const photoAttached = text.match(/^Foto adjunta: (.+)$/);
  if (photoAttached) return `Photo attached: ${photoAttached[1]}`;

  const roundMatch = text.match(/^Ronda (\d+)$/);
  if (roundMatch) return `Round ${roundMatch[1]}`;

  const perGroupMatch = text.match(/^(\d+) por grupo$/);
  if (perGroupMatch) return `${perGroupMatch[1]} per group`;

  const directPersonSeed = text.match(/^persona (\d+)$/);
  if (directPersonSeed) return `person ${directPersonSeed[1]}`;

  const directPairSeed = text.match(/^pareja\/equipo (\d+)$/);
  if (directPairSeed) return `pair/team ${directPairSeed[1]}`;

  const totalMatch = text.match(/^(\d+) total$/);
  if (totalMatch) return `${totalMatch[1]} total`;

  const teamCountMatch = text.match(/^(\d+) equipos$/);
  if (teamCountMatch) return `${teamCountMatch[1]} teams`;

  const participantCountMatch = text.match(/^(\d+) participantes$/);
  if (participantCountMatch) return `${participantCountMatch[1]} participants`;

  const pairsCountMatch = text.match(/^(\d+) parejas\/equipos$/);
  if (pairsCountMatch) return `${pairsCountMatch[1]} pairs/teams`;

  const singlePairCountMatch = text.match(/^1 pareja\/equipo$/);
  if (singlePairCountMatch) return "1 pair/team";

  const peopleCountMatch = text.match(/^(\d+) personas$/);
  if (peopleCountMatch) return `${peopleCountMatch[1]} people`;

  const singlePersonCountMatch = text.match(/^1 persona$/);
  if (singlePersonCountMatch) return "1 person";

  const groupCountMatch = text.match(/^(\d+) grupos$/);
  if (groupCountMatch) return `${groupCountMatch[1]} groups`;

  const plannedGroupsMatch = text.match(/^(\d+) grupos previstos$/);
  if (plannedGroupsMatch) return `${plannedGroupsMatch[1]} planned groups`;

  const bracketRoundCountMatch = text.match(/^(\d+) rondas de cuadro$/);
  if (bracketRoundCountMatch) return `${bracketRoundCountMatch[1]} bracket rounds`;

  const matchCountLine = text.match(/^(.+) - (\d+) partidos$/);
  if (matchCountLine) {
    return `${translateGeneratedText(matchCountLine[1]) || matchCountLine[1]} - ${matchCountLine[2]} matches`;
  }

  const assignedGroupsMatch = text.match(/^(.+) asignados - (\d+) grupos previstos$/);
  if (assignedGroupsMatch) {
    return `${translateGeneratedText(assignedGroupsMatch[1]) || assignedGroupsMatch[1]} assigned - ${assignedGroupsMatch[2]} planned groups`;
  }

  const playerCountMatch = text.match(/^(\d+) jugadores$/);
  if (playerCountMatch) return `${playerCountMatch[1]} players`;

  const singlePlayerCountMatch = text.match(/^1 jugador$/);
  if (singlePlayerCountMatch) return "1 player";

  const playersMatch = text.match(/^\((\d+) jugadores\)$/);
  if (playersMatch) return `(${playersMatch[1]} players)`;

  const singlePlayersMatch = text.match(/^\(1 jugador\)$/);
  if (singlePlayersMatch) return "(1 player)";

  if (text.startsWith("Gana ")) return text.replace("Gana ", "Winner: ");
  if (text.startsWith("Avanza ")) return text.replace("Avanza ", "Advances: ");
  if (text.startsWith("Participantes en ")) return text.replace("Participantes en ", "Participants in ");
  if (text.startsWith("Partido ")) return text.replace("Partido ", "Match ");
  if (text.startsWith("Ganador partido ")) return text.replace("Ganador partido ", "Winner of match ");
  if (text.startsWith("¿Eliminar ") && text.endsWith(" y todos sus resultados?")) {
    return text.replace(/^¿Eliminar "(.+)" y todos sus resultados\?$/, 'Delete "$1" and all its results?');
  }
  if (text.includes("está inscrito en competiciones")) {
    return text.replace(
      /^"(.+)" está inscrito en competiciones\. Al eliminarlo se quitará también de grupos y cuadros\. ¿Continuar\?$/,
      '"$1" is entered in competitions. Deleting it will also remove it from groups and brackets. Continue?',
    );
  }
  if (text.startsWith("Asigna ") && text.endsWith(" desde Competiciones.")) {
    return text
      .replace(/^Asigna (.+) a (.+) desde Competiciones\.$/, "Assign $1 to $2 from Competitions.")
      .replace("parejas/equipos", "pairs/teams")
      .replace("pareja/equipo", "pair/team")
      .replace("personas", "people")
      .replace("persona", "person")
      .replace("participantes", "participants");
  }
  if (text.startsWith("Marca las ") && text.endsWith(" que entran en esta competición.")) {
    return text
      .replace(/^Marca las (.+) que entran en esta competición\.$/, "Select the $1 entering this competition.")
      .replace("parejas/equipos", "pairs/teams")
      .replace("pareja/equipo", "pair/team")
      .replace("personas", "people")
      .replace("persona", "person")
      .replace("participantes", "participants");
  }

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
  savedState.teams.forEach((team) => {
    team.type = normalizeParticipantType(team.type || (team.players?.length === 1 ? "individual" : DEFAULT_PARTICIPANT_TYPE));
    team.players ||= [];
    team.players.forEach((player) => {
      player.photo ||= "";
    });
  });

  savedState.competitions.forEach((competition) => {
    competition.sport = normalizeSport(competition.sport);
    competition.playMode = normalizePlayMode(competition.playMode);
    competition.format = normalizeCompetitionFormat(competition.format);
    competition.teamIds ||= [];
    competition.groupCount = clamp(Number(competition.groupCount) || 1, 1, 16);
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
            <label for="teamName">Nombre del equipo o jugador</label>
            <input id="teamName" name="name" placeholder="Ej. Laura Martín o Smash Center A" required />
          </div>
          <div class="field individual-photo-field hidden" data-individual-photo-field>
            <label for="individualPhoto">Foto del jugador</label>
            <input id="individualPhoto" name="individualPhoto" type="file" accept="image/*" />
            <span class="field-hint">Si no subes foto, usaremos un avatar por defecto.</span>
          </div>
          <div class="field participant-players-field" data-participant-players-field>
            <label>Jugadores del equipo o pareja</label>
            <div class="dynamic-player-list" data-player-list>
              ${renderPlayerInput("Jugador 1")}
              ${renderPlayerInput("Jugador 2")}
            </div>
            <button class="small-button" type="button" data-action="add-player-field">Añadir jugador</button>
            <span class="field-hint">Añade cada integrante por separado para evitar errores de formato.</span>
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
      <label class="photo-upload">
        <input class="player-photo-input" name="playerPhotos" type="file" accept="image/*" aria-label="Foto del jugador" data-player-photo-input />
        <span class="photo-upload-label">Subir foto</span>
        <span class="photo-upload-status" data-photo-status>Sin foto</span>
      </label>
      <button class="small-button" type="button" data-action="remove-player-field" aria-label="Eliminar jugador">Quitar</button>
    </div>
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
        ? `<div class="bracket">${competition.knockout.rounds.map((round, roundIndex) => renderBracketRound(competition, round, roundIndex, readOnly)).join("")}</div>`
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

function ensureVisibleSection() {
  const sections = getVisibleSections();
  if (sections.some((section) => section.id === ui.section)) return;
  ui.section = ui.mode === "admin" ? "dashboard" : "public-overview";
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
  const individualPhotoField = document.querySelector("[data-individual-photo-field]");
  const playersField = document.querySelector("[data-participant-players-field]");
  const playerInputs = [...document.querySelectorAll("[data-player-input]")];
  const playerPhotoInputs = [...document.querySelectorAll("[name='playerPhotos']")];
  const isIndividual = typeSelect?.value === "individual";

  individualPhotoField?.classList.toggle("hidden", !isIndividual);
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

function formatDiff(number) {
  if (number > 0) return `+${number}`;
  return String(number);
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `torneo-raqueta-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("Exportación preparada");
}

function printGroupsAsPdf() {
  const competition = getSelectedCompetition();

  if (!competition?.groups.length) {
    showToast("No hay grupos para exportar");
    return;
  }

  document.querySelector(".group-print-root")?.remove();
  const printRoot = document.createElement("div");
  printRoot.className = "group-print-root";
  printRoot.innerHTML = renderPrintableGroupPages(competition);
  document.body.appendChild(printRoot);
  applyTranslations(printRoot);

  const cleanup = () => {
    document.body.classList.remove("print-groups");
    printRoot.remove();
  };

  document.body.classList.add("print-groups");
  window.addEventListener("afterprint", cleanup, { once: true });
  showToast("Preparando PDF de grupos");
  setTimeout(() => window.print(), 80);
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

function printBracketAsPdf() {
  const competition = getSelectedCompetition();
  const bracket = document.querySelector(".bracket");

  if (!competition?.knockout.rounds.length || !bracket) {
    showToast("No hay cuadro para exportar");
    return;
  }

  document.querySelector(".print-bracket-title")?.remove();
  const title = document.createElement("div");
  title.className = "print-bracket-title";
  title.innerHTML = `
    <strong>${escapeHtml(competition.name)}</strong>
    <span>${escapeHtml(competition.category || localizeMessage("Cuadro eliminatorio"))}</span>
  `;
  bracket.before(title);

  const cleanup = () => {
    document.body.classList.remove("print-bracket-only");
    title.remove();
  };

  document.body.classList.add("print-bracket-only");
  window.addEventListener("afterprint", cleanup, { once: true });
  showToast("Preparando impresión del cuadro");
  setTimeout(() => window.print(), 80);
}

function printBracketMultipagePdf() {
  const competition = getSelectedCompetition();

  if (!competition?.knockout.rounds.length) {
    showToast("No hay cuadro para exportar");
    return;
  }

  document.querySelector(".multipage-print-root")?.remove();
  const chunks = getPrintRoundChunks(competition.knockout.rounds);
  const printRoot = document.createElement("div");
  printRoot.className = "multipage-print-root";
  printRoot.innerHTML = renderPrintableBracketPages(competition, chunks);
  document.body.appendChild(printRoot);
  applyTranslations(printRoot);

  const cleanup = () => {
    document.body.classList.remove("print-bracket-multipage");
    printRoot.remove();
  };

  document.body.classList.add("print-bracket-multipage");
  window.addEventListener("afterprint", cleanup, { once: true });
  showToast("Preparando PDF multipágina");
  setTimeout(() => window.print(), 80);
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
          <div class="bracket print-bracket-slice">
            ${chunk.rounds.map((round, localIndex) => renderPrintableBracketRound(competition, round, localIndex)).join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function renderPrintableBracketRound(competition, round, localIndex) {
  const roundGap = 16 + localIndex * 28;
  return `
    <section class="bracket-round" style="--round-gap: ${roundGap}px; --round-offset: ${localIndex * 24}px; --connector-height: ${94 + roundGap / 2}px">
      <h3>${escapeHtml(round.name)}</h3>
      ${round.matches.map((match) => renderBracketMatch(competition, match, localIndex, true)).join("")}
    </section>
  `;
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

function importData(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!imported || !Array.isArray(imported.teams) || !Array.isArray(imported.competitions)) {
        throw new Error("Formato no válido");
      }

      state = migrateState({
        version: imported.version || 1,
        teams: imported.teams,
        competitions: imported.competitions,
        savedAt: imported.savedAt || new Date().toISOString(),
      });
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
  if (!askConfirm("¿Borrar todos los participantes, competiciones y resultados guardados?")) return;
  state = createEmptyState();
  ui.selectedCompetitionId = "";
  localStorage.removeItem(STORAGE_KEY);
  showToast("Datos borrados");
  render();
}

function loadDemoData() {
  if ((state.teams.length || state.competitions.length) && !askConfirm("Esto sustituirá los datos actuales por un ejemplo. ¿Continuar?")) {
    return;
  }

  const teamNames = [
    ["Smash Norte", "Laura Martín", "Ana Soler"],
    ["Cristal Racket", "Marta Ruiz", "Irene Santos"],
    ["Víbora Club", "Nerea Cano", "Paula Gil"],
    ["Bandeja 7", "Elena Mora", "Sara Vega"],
    ["Punto de Oro", "Carlos Vidal", "Javier León"],
    ["Red Court", "Pablo Sanz", "Diego Molina"],
    ["Zona 20x10", "Mario Casas", "Rubén Prieto"],
    ["La Reja", "Andrés Nieto", "Hugo Marín"],
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
    name: "Open Raqueta Primavera",
    category: "Mixta absoluta",
    sport: "padel",
    playMode: "doubles",
    format: "groups-knockout",
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
  toast.textContent = localizeMessage(message);
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}

function localizeMessage(message) {
  return translateText(message) || message;
}

function askConfirm(message) {
  return confirm(localizeMessage(message));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
