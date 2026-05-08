var RacketApp = globalThis.RacketApp || (globalThis.RacketApp = {});
if (globalThis.window) globalThis.window.RacketApp = RacketApp;

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

Object.assign(RacketApp, { exporting: { exportData, printGroupsAsPdf, printBracketAsPdf, printBracketMultipagePdf, importData, resetData, loadDemoData } });
