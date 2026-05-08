var RacketApp = globalThis.RacketApp || (globalThis.RacketApp = {});
if (globalThis.window) globalThis.window.RacketApp = RacketApp;

﻿const STORAGE_KEY = "padelTournamentControl.v1";
const LANG_STORAGE_KEY = "padelTournamentControl.lang";

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

Object.assign(RacketApp, { config: { STORAGE_KEY, LANG_STORAGE_KEY, DEFAULT_SPORT, DEFAULT_PLAY_MODE, DEFAULT_COMPETITION_FORMAT, DEFAULT_PARTICIPANT_TYPE, DEFAULT_AVATAR, SPORT_OPTIONS, PLAY_MODE_OPTIONS, COMPETITION_FORMAT_OPTIONS, PARTICIPANT_TYPE_OPTIONS, adminSections, publicSections } });
