# 🎾 Racket Tournament Control

Static web application for managing racket sports competitions: ping-pong, tennis and padel, in either singles or pairs/team formats.

It lets you manage participants, group stages, best-of-three-set match results, automatic standings, professional-style knockout brackets, and PDF exports. This is a functional frontend-only base: it runs in the browser and stores data locally.

## ✨ Features

- Participant registration for individual people, pairs or teams.
- Dynamic team/player form with one member per field.
- Optional player photos with a default avatar fallback.
- Tournament configuration by sport, play mode and competition format.
- Participant assignment filtered by singles or pairs/team mode.
- Supported sports: ping-pong, tennis and padel.
- Supported formats: groups only, knockout only, or groups followed by knockout.
- Group-stage competition management.
- Best-of-three-set match scoring.
- Automatic standings based on wins, sets, and games.
- Knockout bracket generation from group standings.
- Direct knockout bracket generation from assigned participants.
- Automatic seeding: top-ranked teams face lower-ranked teams from other groups.
- Manual bracket adjustments with drag and drop before matches are started.
- Visual bracket view inspired by professional racket-sport tournaments.
- Group standings and match-up export to PDF.
- Bracket export to PDF.
- Advanced multipage PDF export for large brackets.
- Separate admin and viewer modes.
- English and Spanish interface.
- Local data persistence in the browser.
- Reset, sample data, import, and export tools.

## 🚀 Getting Started

This project does not require a backend. You can open `index.html` directly in the browser or start the included local server.

```bash
npm install
npm run dev
```

Then open:

```text
http://127.0.0.1:5173
```

If the port is already in use, the server may run on another available port.

## 🧪 Tests and Validation

Run the automated tests with:

```bash
npm test
```

The tests cover core tournament logic such as best-of-three-set scoring, standings calculation, competition format metadata, bracket generation, manual bracket movement, and PDF export helpers for brackets and groups.

## 🌍 Internationalization

The interface supports:

- Spanish (`es`)
- English (`en`)

The selected language is saved in `localStorage` under the key:

```text
padelTournamentControl.lang
```

New visible text should be added to the translation dictionary in `app.js` so the UI remains fully multilingual.

## 💾 Data Persistence

Tournament data is stored locally in the browser with `localStorage`, using this key:

```text
padelTournamentControl.v1
```

This keeps the application simple and portable, although it also means data is tied to the browser and device where it was created.

## 🧱 Project Structure

```text
.
├── index.html          # Main application markup
├── styles.css          # Interface styles and bracket layout
├── app.js              # Application logic, state, i18n, and exports
├── dev-server.js       # Local development server
├── tests/
│   └── app.test.js     # Automated tests
├── assets/
│   └── court-mark.svg  # Visual asset for the racket-sport theme
├── package.json
├── README.md
└── agents.md
```

## 🗺️ Recommended Roadmap

- Improvements in consistency of individual vs teams visualization and sign in to tournaments
- Backend and user authentication.
- Real database support.
- Role-based permissions for admins and viewers.
- Public tournament links.
- CSV/Excel import and export.
- Advanced tie-break rules per sport.
- Match scheduling and court assignment.
- Player and team history.

## 📌 Technical Note

The project is intentionally lightweight and framework-free. This makes it easy to run, review, and adapt before deciding whether to evolve it into a larger application with a backend, routing, authentication, and a database.
