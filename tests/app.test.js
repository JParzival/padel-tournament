const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

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
  vm.runInContext(appSource, sandbox, { filename: "app.js" });
  return sandbox;
}

function createSavedState() {
  const teams = [
    { id: "a1", name: "A1", players: [] },
    { id: "a2", name: "A2", players: [] },
    { id: "a3", name: "A3", players: [] },
    { id: "b1", name: "B1", players: [] },
    { id: "b2", name: "B2", players: [] },
    { id: "b3", name: "B3", players: [] },
  ];

  return {
    version: 1,
    teams,
    competitions: [
      {
        id: "competition",
        name: "Test competition",
        category: "Test",
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
  assert.equal(app.translateText("Administracion"), "Admin");
  assert.equal(app.translateText("Vista publica"), "Public view");
  assert.equal(app.translateGeneratedText("Grupo B"), "Group B");
  assert.equal(app.translateGeneratedText("3 por grupo"), "3 per group");

  app.setLanguage("es");
  assert.equal(app.translateText("Admin"), "Administracion");
  assert.equal(app.translateGeneratedText("Group B"), "Grupo B");
  assert.equal(app.translateGeneratedText("3 per group"), "3 por grupo");
});
