var RacketApp = globalThis.RacketApp || (globalThis.RacketApp = {});
if (globalThis.window) globalThis.window.RacketApp = RacketApp;

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

Object.assign(RacketApp, { i18n: { getInitialLang, setLanguage, t, applyTranslations, renderStaticChrome, translatePlaceholder, translateTextNodes, translateText, translateGeneratedText, UI_COPY, TEXT_TRANSLATIONS_ES_EN, TEXT_TRANSLATIONS_EN_ES, PLACEHOLDER_TRANSLATIONS } });
