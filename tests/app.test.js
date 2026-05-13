const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const scriptFiles = [
  "src/config.js",
  "src/i18n.js",
  "src/state.js",
  "src/domain.js",
  "src/render.js",
  "src/forms.js",
  "src/export.js",
  "app.js",
];

function createHarness(savedState = createSavedState()) {
  const storage = new Map([["padelTournamentControl.v1", JSON.stringify(savedState)]]);
  const domNode = {
    addEventListener() {},
    click() {},
    classList: { toggle() {}, add() {}, remove() {} },
    dataset: {},
    innerHTML: "",
    remove() {},
    querySelectorAll() {
      return [];
    },
  };

  const document = {
    body: { appendChild() {}, querySelectorAll() { return []; } },
    documentElement: { lang: "es" },
    addEventListener() {},
    createElement() {
      return { className: "", textContent: "", remove() {} };
    },
    createTreeWalker() {
      return {
        currentNode: null,
        nextNode() {
          return false;
        },
      };
    },
    querySelector() {
      return domNode;
    },
    querySelectorAll() {
      return [];
    },
  };

  const sandbox = {
    Blob,
    console,
    document,
    localStorage: {
      getItem(key) {
        return storage.get(key) || null;
      },
      setItem(key, value) {
        storage.set(key, String(value));
      },
      removeItem(key) {
        storage.delete(key);
      },
    },
    Math,
    NodeFilter: { SHOW_TEXT: 4 },
    setTimeout() {},
    URL,
    window: {},
    confirm() {
      return true;
    },
  };

  vm.createContext(sandbox);
  scriptFiles.forEach((file) => {
    const source = fs.readFileSync(path.join(__dirname, "..", file), "utf8");
    vm.runInContext(source, sandbox, { filename: file });
  });
  return sandbox;
}

function createSavedState() {
  const teams = [
    { id: "a1", name: "A1", type: "team", players: [] },
    { id: "a2", name: "A2", type: "team", players: [] },
    { id: "a3", name: "A3", type: "team", players: [] },
    { id: "b1", name: "B1", type: "team", players: [] },
    { id: "b2", name: "B2", type: "team", players: [] },
    { id: "b3", name: "B3", type: "team", players: [] },
  ];

  return {
    version: 1,
    teams,
    competitions: [
      {
        id: "competition",
        name: "Test competition",
        category: "Test",
        sport: "padel",
        playMode: "doubles",
        format: "groups-knockout",
        groupCount: 2,
        teamIds: teams.map((team) => team.id),
        groups: [],
        knockout: { rounds: [] },
      },
    ],
    savedAt: new Date(0).toISOString(),
  };
}

function match(homeTeamId, awayTeamId, sets) {
  return {
    id: `${homeTeamId}-${awayTeamId}`,
    homeTeamId,
    awayTeamId,
    sets,
  };
}

test("best-of-three matches finish when one team wins two sets", () => {
  const app = createHarness();
  const played = match("a1", "a2", [
    { home: 6, away: 4 },
    { home: 3, away: 6 },
    { home: 7, away: 5 },
  ]);

  assert.equal(app.hasResult(played), true);
  assert.deepEqual(toPlain(app.getMatchScore(played)), {
    homeSets: 2,
    awaySets: 1,
    homeGames: 16,
    awayGames: 15,
  });
  assert.equal(app.getMatchWinner(played), "a1");
});

test("standings use wins, set difference and game difference", () => {
  const app = createHarness();
  const standings = app.calculateStandings({
    id: "group-a",
    name: "Grupo A",
    teamIds: ["a1", "a2", "a3"],
    matches: [
      match("a1", "a2", [
        { home: 6, away: 1 },
        { home: 6, away: 2 },
        { home: null, away: null },
      ]),
      match("a2", "a3", [
        { home: 6, away: 4 },
        { home: 4, away: 6 },
        { home: 6, away: 3 },
      ]),
      match("a1", "a3", [
        { home: 6, away: 3 },
        { home: 6, away: 4 },
        { home: null, away: null },
      ]),
    ],
  });

  assert.equal(standings[0].teamId, "a1");
  assert.equal(standings[0].points, 6);
  assert.equal(standings[0].setDiff, 4);
  assert.equal(standings[1].teamId, "a2");
  assert.equal(standings[1].points, 3);
});

test("qualifier pairing sends best teams against the worst team from another group", () => {
  const app = createHarness();
  const competition = {
    groups: [
      {
        id: "group-a",
        name: "Grupo A",
        teamIds: ["a1", "a2", "a3"],
        matches: [
          match("a1", "a2", [{ home: 6, away: 1 }, { home: 6, away: 1 }, { home: null, away: null }]),
          match("a1", "a3", [{ home: 6, away: 2 }, { home: 6, away: 2 }, { home: null, away: null }]),
          match("a2", "a3", [{ home: 6, away: 3 }, { home: 6, away: 3 }, { home: null, away: null }]),
        ],
      },
      {
        id: "group-b",
        name: "Grupo B",
        teamIds: ["b1", "b2", "b3"],
        matches: [
          match("b1", "b2", [{ home: 6, away: 1 }, { home: 6, away: 1 }, { home: null, away: null }]),
          match("b1", "b3", [{ home: 6, away: 2 }, { home: 6, away: 2 }, { home: null, away: null }]),
          match("b2", "b3", [{ home: 6, away: 3 }, { home: 6, away: 3 }, { home: null, away: null }]),
        ],
      },
    ],
  };

  const pairings = app.getQualifierPairings(competition, 3);

  assert.deepEqual(
    toPlain(pairings.map((pair) => pair.map((seed) => seed.teamId))),
    [
      ["a1", "b3"],
      ["a2", "b2"],
      ["a3", "b1"],
    ],
  );
});

function toPlain(value) {
  return JSON.parse(JSON.stringify(value));
}

test("RacketApp namespace exposes refactored modules", () => {
  const app = createHarness();

  assert.ok(app.RacketApp.config);
  assert.ok(app.RacketApp.i18n);
  assert.ok(app.RacketApp.state);
  assert.ok(app.RacketApp.domain);
  assert.ok(app.RacketApp.render);
  assert.ok(app.RacketApp.forms);
  assert.ok(app.RacketApp.exporting);
  assert.ok(app.RacketApp.bootstrap);
});

test("bracket layout centers later rounds over their source matches", () => {
  const app = createHarness();
  const rounds = [
    { name: "Cuartos", matches: [{ id: "q1" }, { id: "q2" }, { id: "q3" }, { id: "q4" }] },
    { name: "Semifinales", matches: [{ id: "s1" }, { id: "s2" }] },
    { name: "Final", matches: [{ id: "f1" }] },
  ];

  const layout = app.getBracketLayout(rounds);

  assert.deepEqual(toPlain(layout.rounds[0].matches.map(({ gridRow, rowSpan }) => [gridRow, rowSpan])), [
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
  ]);
  assert.deepEqual(toPlain(layout.rounds[1].matches.map(({ gridRow, rowSpan }) => [gridRow, rowSpan])), [
    [2, 2],
    [4, 2],
  ]);
  assert.deepEqual(toPlain(layout.rounds[2].matches.map(({ gridRow, rowSpan }) => [gridRow, rowSpan])), [[2, 4]]);
  assert.deepEqual(toPlain(layout.connectors[0].connectors.map(({ gridRow, rowSpan }) => [gridRow, rowSpan])), [
    [2, 2],
    [4, 2],
  ]);
});

test("bracket render uses explicit connector columns", () => {
  const savedState = createSavedState();
  savedState.competitions[0].knockout.rounds = [
    { name: "Semifinales", matches: [{ id: "s1", order: 1, homeTeamId: "a1", awayTeamId: "a2", homeLabel: "", awayLabel: "", sets: [], winnerTeamId: null }, { id: "s2", order: 2, homeTeamId: "b1", awayTeamId: "b2", homeLabel: "", awayLabel: "", sets: [], winnerTeamId: null }] },
    { name: "Final", matches: [{ id: "f1", order: 1, homeTeamId: null, awayTeamId: null, homeLabel: "Ganador partido 1", awayLabel: "Ganador partido 2", sets: [], winnerTeamId: null }] },
  ];
  const app = createHarness(savedState);
  const html = app.renderBracket(false);

  assert.match(html, /bracket-connectors/);
  assert.match(html, /bracket-connector/);
  assert.match(html, /grid-row: 2 \/ span 2/);
  assert.doesNotMatch(html, /connector-height/);
});

test("swapping first-round bracket slots resets knockout results", () => {
  const savedState = createSavedState();
  savedState.competitions[0].knockout.rounds = [
    {
      name: "Semifinales",
      matches: [
        {
          id: "m1",
          order: 1,
          homeTeamId: "a1",
          awayTeamId: "b3",
          homeLabel: "Grupo A 1o",
          awayLabel: "Grupo B 3o",
          sets: [{ home: 6, away: 2 }, { home: 6, away: 2 }, { home: null, away: null }],
          winnerTeamId: "a1",
        },
        {
          id: "m2",
          order: 2,
          homeTeamId: "a2",
          awayTeamId: "b2",
          homeLabel: "Grupo A 2o",
          awayLabel: "Grupo B 2o",
          sets: [{ home: null, away: null }, { home: null, away: null }, { home: null, away: null }],
          winnerTeamId: null,
        },
      ],
    },
    {
      name: "Final",
      matches: [
        {
          id: "m3",
          order: 1,
          homeTeamId: "a1",
          awayTeamId: null,
          homeLabel: "Ganador partido 1",
          awayLabel: "Ganador partido 2",
          sets: [{ home: 6, away: 4 }, { home: 6, away: 4 }, { home: null, away: null }],
          winnerTeamId: "a1",
        },
      ],
    },
  ];
  const app = createHarness(savedState);

  app.swapBracketSlots(
    { competitionId: "competition", matchId: "m1", side: "home" },
    { competitionId: "competition", matchId: "m2", side: "away" },
  );

  const competition = app.getCompetition("competition");
  assert.equal(competition.knockout.rounds[0].matches[0].homeTeamId, "b2");
  assert.equal(competition.knockout.rounds[0].matches[1].awayTeamId, "a1");
  assert.equal(app.hasResult(competition.knockout.rounds[0].matches[0]), false);
  assert.equal(competition.knockout.rounds[1].matches[0].homeTeamId, null);
  assert.equal(competition.knockout.rounds[1].matches[0].winnerTeamId, null);
});

test("i18n helpers translate static and generated interface labels", () => {
  const app = createHarness();

  app.setLanguage("en");
  assert.equal(app.translateText("Administración"), "Admin");
  assert.equal(app.translateText("Vista pública"), "Public view");
  assert.equal(app.translateText("Participantes"), "Participants");
  assert.equal(app.translateText("Grupos + eliminatoria"), "Groups + knockout");
  assert.equal(app.translateGeneratedText("Grupo B"), "Group B");
  assert.equal(app.translateGeneratedText("2 parejas/equipos"), "2 pairs/teams");
  assert.equal(app.translateGeneratedText("3 por grupo"), "3 per group");

  app.setLanguage("es");
  assert.equal(app.translateText("Admin"), "Administración");
  assert.equal(app.translateGeneratedText("Group B"), "Grupo B");
  assert.equal(app.translateGeneratedText("2 pairs/teams"), "2 parejas/equipos");
  assert.equal(app.translateGeneratedText("3 per group"), "3 por grupo");
});

test("competition creation stores sport, play mode and stage format", () => {
  const app = createHarness({ version: 1, teams: [], competitions: [], savedAt: new Date(0).toISOString() });

  app.addCompetition({
    get(name) {
      return {
        name: "Direct tennis draw",
        category: "Open",
        sport: "tennis",
        playMode: "singles",
        format: "knockout",
        groupCount: "4",
      }[name];
    },
  });

  const competition = app.getSelectedCompetition();
  assert.equal(competition.sport, "tennis");
  assert.equal(competition.playMode, "singles");
  assert.equal(competition.format, "knockout");
  assert.equal(competition.groupCount, 1);
  assert.equal(app.hasGroupStage(competition), false);
  assert.equal(app.hasKnockoutStage(competition), true);
});

test("participant creation supports individual people and teams", async () => {
  const app = createHarness({ version: 1, teams: [], competitions: [], savedAt: new Date(0).toISOString() });

  await app.addTeam({
    get(name) {
      return { type: "individual", name: "Laura Martin", notes: "Morning" }[name];
    },
    getAll() {
      return [];
    },
  });

  await app.addTeam({
    get(name) {
      return { type: "team", name: "Smash Team", notes: "" }[name];
    },
    getAll(name) {
      return name === "players" ? ["Ana", "Marta"] : [];
    },
  });

  const individual = app.getEligibleParticipantsForCompetition({ playMode: "singles", teamIds: [] })[0];
  const team = app.getEligibleParticipantsForCompetition({ playMode: "doubles", teamIds: [] })[0];

  assert.equal(individual.type, "individual");
  assert.deepEqual(toPlain(individual.players.map((player) => player.name)), ["Laura Martin"]);
  assert.equal(team.type, "team");
  assert.deepEqual(toPlain(team.players.map((player) => player.name)), ["Ana", "Marta"]);
});

test("player photos are stored per player and fallback to default avatar", async () => {
  const app = createHarness({ version: 1, teams: [], competitions: [], savedAt: new Date(0).toISOString() });
  const photoFile = { size: 10 };
  app.FileReader = class {
    readAsDataURL() {
      this.result = "data:image/png;base64,abc";
      this.onload();
    }
  };

  await app.addTeam({
    get(name) {
      return { type: "team", name: "Photo Team", notes: "" }[name];
    },
    getAll(name) {
      if (name === "players") return ["Ana", "Marta"];
      if (name === "playerPhotos") return [photoFile, null];
      return [];
    },
  });

  const team = app.getEligibleParticipantsForCompetition({ playMode: "doubles", teamIds: [] })[0];
  assert.equal(team.players[0].photo, "data:image/png;base64,abc");
  assert.equal(team.players[1].photo, "");
  assert.match(app.getPlayerPhoto(team.players[1]), /^data:image\/svg\+xml/);
  assert.match(app.renderTeamCard(team), /player-avatar/);
});

test("photo upload status shows selected files", () => {
  const app = createHarness();
  const toggles = [];
  const status = { textContent: "" };
  const wrapper = {
    classList: {
      toggle(className, enabled) {
        toggles.push([className, enabled]);
      },
    },
    querySelector(selector) {
      return selector === "[data-photo-status]" ? status : null;
    },
  };

  app.updatePhotoInputStatus({
    files: [{ name: "avatar.png" }],
    closest(selector) {
      return selector === ".photo-upload" ? wrapper : null;
    },
  });

  assert.equal(status.textContent, "Foto adjunta: avatar.png");
  assert.deepEqual(toggles, [["has-file", true]]);
});

test("participant form uses the same photo upload UI for individual players", () => {
  const app = createHarness();
  const html = app.renderTeams();

  assert.match(html, /name="individualPhoto"/);
  assert.match(html, /data-player-photo-input/);
  assert.match(html, /photo-upload-label">Subir foto/);
  assert.doesNotMatch(html, /Añade cada integrante por separado/);
});

test("participant form updates name label for team and individual signup", () => {
  const app = createHarness();
  const nameLabel = { textContent: "" };
  const individualPhotoInput = { disabled: false };
  const hiddenField = { classList: { toggle() {} } };

  app.document.querySelector = (selector) => {
    if (selector === "#participantType") return { value: "individual" };
    if (selector === "[data-participant-name-label]") return nameLabel;
    if (selector === "[data-individual-photo-field]" || selector === "[data-participant-players-field]") return hiddenField;
    if (selector === "[name='individualPhoto']") return individualPhotoInput;
    return null;
  };

  app.syncParticipantForm();
  assert.equal(nameLabel.textContent, "Nombre del jugador");

  app.setLanguage("en");
  app.document.querySelector = (selector) => {
    if (selector === "#participantType") return { value: "team" };
    if (selector === "[data-participant-name-label]") return nameLabel;
    if (selector === "[data-individual-photo-field]" || selector === "[data-participant-players-field]") return hiddenField;
    if (selector === "[name='individualPhoto']") return individualPhotoInput;
    return null;
  };

  app.syncParticipantForm();
  assert.equal(nameLabel.textContent, "Team name");
});

test("group and bracket views render participant avatars", () => {
  const savedState = createSavedState();
  savedState.teams[0].players = [{ id: "p1", name: "A1 player", photo: "data:image/png;base64,a1" }];
  savedState.teams[1].players = [{ id: "p2", name: "A2 player", photo: "" }];
  savedState.competitions[0].groups = [
    {
      id: "group-a",
      name: "Grupo A",
      teamIds: ["a1", "a2"],
      matches: [match("a1", "a2", [{ home: null, away: null }, { home: null, away: null }, { home: null, away: null }])],
    },
  ];
  savedState.competitions[0].knockout.rounds = [
    {
      name: "Final",
      matches: [
        {
          id: "final",
          order: 1,
          homeTeamId: "a1",
          awayTeamId: "a2",
          homeLabel: "Grupo A 1o",
          awayLabel: "Grupo A 2o",
          sets: [{ home: null, away: null }, { home: null, away: null }, { home: null, away: null }],
          winnerTeamId: null,
        },
      ],
    },
  ];
  const app = createHarness(savedState);

  assert.match(app.renderGroup(savedState.competitions[0], savedState.competitions[0].groups[0], true), /player-avatar/);
  assert.match(app.renderBracket(true), /player-avatar/);
});

test("competition assignment only exposes participants matching the selected play mode", () => {
  const savedState = createSavedState();
  savedState.teams.push({ id: "solo", name: "Solo Player", type: "individual", players: [{ id: "p1", name: "Solo Player" }] });
  savedState.competitions[0].teamIds.push("solo");
  const app = createHarness(savedState);
  const competition = app.getCompetition("competition");

  assert.deepEqual(toPlain(app.getAssignedEligibleParticipantIds(competition)), ["a1", "a2", "a3", "b1", "b2", "b3"]);

  competition.playMode = "singles";
  assert.deepEqual(toPlain(app.getAssignedEligibleParticipantIds(competition)), ["solo"]);
});

test("participant list can be filtered by type and searched by text", () => {
  const savedState = createSavedState();
  savedState.teams.push({
    id: "solo",
    name: "Laura Martín",
    type: "individual",
    players: [{ id: "p1", name: "Laura Martín" }],
    notes: "Left side",
  });
  savedState.teams.push({
    id: "smash",
    name: "Smash Team",
    type: "team",
    players: [{ id: "p2", name: "Ana" }, { id: "p3", name: "Marta" }],
    notes: "",
  });
  const app = createHarness(savedState);

  assert.deepEqual(toPlain(app.getFilteredParticipants("individual", "").map((participant) => participant.id)), ["solo"]);
  assert.deepEqual(toPlain(app.getFilteredParticipants("team", "marta").map((participant) => participant.id)), ["smash"]);
  assert.deepEqual(toPlain(app.getFilteredParticipants("all", "martin").map((participant) => participant.id)), ["solo"]);
});

test("knockout-only tournament creation hides and disables group count control", () => {
  const app = createHarness();
  const toggles = [];
  const groupInput = { disabled: false };

  app.document.querySelector = (selector) => {
    if (selector === "#competitionFormat") return { value: "knockout" };
    if (selector === "[data-group-count-field]") {
      return { classList: { toggle(className, enabled) { toggles.push([className, enabled]); } } };
    }
    if (selector === "#competitionGroups") return groupInput;
    return null;
  };

  app.syncCompetitionFormatFields();

  assert.deepEqual(toggles, [["hidden", true]]);
  assert.equal(groupInput.disabled, true);
});

test("direct knockout view handles empty matching participants", () => {
  const savedState = createSavedState();
  savedState.competitions[0].format = "knockout";
  savedState.competitions[0].playMode = "singles";
  const app = createHarness(savedState);

  assert.doesNotThrow(() => app.renderBracket(false));
  assert.match(app.renderBracket(false), /Asigna al menos dos participantes/);
});

test("direct knockout pairings use assigned participants without groups", () => {
  const savedState = createSavedState();
  savedState.teams.forEach((team) => {
    team.type = "individual";
    team.players = [{ id: `${team.id}-player`, name: team.name }];
  });
  savedState.competitions[0].playMode = "singles";
  const app = createHarness(savedState);
  const competition = app.getCompetition("competition");
  competition.format = "knockout";
  competition.groups = [];

  const pairings = app.getDirectKnockoutPairings(competition);

  assert.deepEqual(
    toPlain(pairings.map((pair) => pair.map((seed) => seed.teamId))),
    [
      ["a1", "b3"],
      ["a2", "b2"],
      ["a3", "b1"],
    ],
  );
  assert.equal(pairings[0][0].label, "persona 1");
});

test("multipage print chunks rounds for small and large brackets", () => {
  const app = createHarness();
  const smallRounds = [
    { name: "Cuartos", matches: Array.from({ length: 4 }, () => ({})) },
    { name: "Semifinales", matches: Array.from({ length: 2 }, () => ({})) },
    { name: "Final", matches: Array.from({ length: 1 }, () => ({})) },
  ];
  const largeRounds = [
    { name: "Ronda 1", matches: Array.from({ length: 16 }, () => ({})) },
    { name: "Ronda 2", matches: Array.from({ length: 8 }, () => ({})) },
    { name: "Cuartos", matches: Array.from({ length: 4 }, () => ({})) },
    { name: "Semifinales", matches: Array.from({ length: 2 }, () => ({})) },
    { name: "Final", matches: Array.from({ length: 1 }, () => ({})) },
  ];

  assert.equal(app.getPrintRoundsPerPage(smallRounds), 3);
  assert.deepEqual(
    toPlain(app.getPrintRoundChunks(smallRounds).map((chunk) => [chunk.startIndex, chunk.endIndex])),
    [[0, 2]],
  );
  assert.equal(app.getPrintRoundsPerPage(largeRounds), 1);
  assert.deepEqual(
    toPlain(app.getPrintRoundChunks(largeRounds, 2).map((chunk) => [chunk.startIndex, chunk.endIndex])),
    [
      [0, 1],
      [2, 3],
      [4, 4],
    ],
  );
  assert.equal(app.getPrintRoundRangeLabel(app.getPrintRoundChunks(largeRounds, 2)[0]), "Ronda 1 - Ronda 2");
});

test("printable group pages include standings and every group match", () => {
  const savedState = createSavedState();
  savedState.competitions[0].sport = "ping-pong";
  savedState.competitions[0].playMode = "singles";
  savedState.competitions[0].format = "groups";
  savedState.competitions[0].groups = [
    {
      id: "group-a",
      name: "Grupo A",
      teamIds: ["a1", "a2", "a3"],
      matches: [
        match("a1", "a2", [{ home: 6, away: 1 }, { home: 6, away: 2 }, { home: null, away: null }]),
        match("a1", "a3", [{ home: null, away: null }, { home: null, away: null }, { home: null, away: null }]),
        match("a2", "a3", [{ home: 6, away: 4 }, { home: 4, away: 6 }, { home: 6, away: 3 }]),
      ],
    },
  ];
  const app = createHarness(savedState);
  const competition = app.getCompetition("competition");

  const html = app.renderPrintableGroupPages(competition);

  assert.match(html, /Grupo A/);
  assert.match(html, /Cruces del grupo/);
  assert.match(html, /A1 vs A2/);
  assert.match(html, /6-1 \/ 6-2/);
  assert.match(html, /A1 vs A3/);
  assert.match(html, /Sin resultado/);
});
