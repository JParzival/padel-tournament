var RacketApp = globalThis.RacketApp || (globalThis.RacketApp = {});
if (globalThis.window) globalThis.window.RacketApp = RacketApp;

initializeState();

var app = document.querySelector("#app");
var sectionNav = document.querySelector("#sectionNav");
var importFile = document.querySelector("#importFile");

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

Object.assign(RacketApp, {
  bootstrap: {
    get app() {
      return app;
    },
    get sectionNav() {
      return sectionNav;
    },
    get importFile() {
      return importFile;
    },
  },
});
