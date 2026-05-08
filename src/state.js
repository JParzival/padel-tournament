var RacketApp = globalThis.RacketApp || (globalThis.RacketApp = {});
if (globalThis.window) globalThis.window.RacketApp = RacketApp;

let state = createEmptyState();
let ui = {
  mode: "admin",
  section: "dashboard",
  selectedCompetitionId: state.competitions[0]?.id || "",
  qualifiersPerGroup: 2,
  participantFilter: "all",
  participantSearch: "",
  lang: getInitialLang(),
};
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

function initializeState() {
  state = loadState();
  ui = {
    mode: "admin",
    section: "dashboard",
    selectedCompetitionId: state.competitions[0]?.id || "",
    qualifiersPerGroup: 2,
    participantFilter: "all",
    participantSearch: "",
    lang: getInitialLang(),
  };
}

Object.assign(RacketApp, { state: { initializeState, get state() { return state; }, get ui() { return ui; }, loadState, createEmptyState, migrateState, saveState, uid, getCompetition, getSelectedCompetition, ensureSelectedCompetition, ensureVisibleSection, showToast, localizeMessage, askConfirm, escapeHtml } });
