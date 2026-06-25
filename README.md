<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Languageapp (DualLingo / SATHI)

A bilingual language-learning web app (English ↔ Chinese) with an interactive flashcard + quiz experience, a dialogues/chat view, and a live voice translator. The repository also contains a TypeScript React app skeleton with UI components (Navbar, modals, widgets) — the repo currently contains two related web UIs (a standalone static app and a Vite+React TypeScript app).

## Stack
- Language(s): TypeScript (primary), JavaScript, CSS, HTML
- Framework / runtime: Vite + React (TypeScript) for the src/ app; plain static HTML/JS for the root demo
- Notable libraries:
  - React + React DOM
  - Vite (dev server/build)
  - Lucide icons (lucide-react)
  - Tailwind / Tailwind tooling (index.css references Tailwind)
  - (Dev) TypeScript

## What this is
DualLingo is an interactive bilingual learning UI focused on English and Chinese learners: learning levels with flashcards, quizzes, example sentences, dialogues you can play back, and a live voice translator that uses browser speech APIs. The repo also contains a TypeScript/Vite React app structure (components like Navbar, AuthModal, BookingModal) that appears to be part of a larger product UI (SATHI).

## How it's organized
Top-level (important entries)

```
index.html              # Static single-page app (DualLingo demo) — uses app.js and data.js
app.js                  # Main JS for static DualLingo UI (flashcards, dialogues, translator)
data.js                 # Content/curriculum for the static app (images, items, dialogues)
style.css               # Styles used by the static HTML app
src/                    # Vite + React TypeScript app (separate UI)
  main.tsx              # React entry (renders src/App.tsx)
  App.tsx               # Main React app (large file; UI, routes, integrations)
  index.css             # Tailwind / CSS utilities for React app
  data.ts               # Example data model (COMPANIONS, STORIES) used by the React app
  types.ts              # TypeScript interfaces used across the React app
  components/           # Reusable React components (Navbar.tsx, AuthModal.tsx, BookingModal.tsx, SafetyWidget.tsx)
package-lock.json       # Lock file
README.md               # (current README is minimal/empty) — replace with this file
.gitignore
```

How it fits together:
- There are two runtime flavors in the repository:
  1. Root-level static web demo: index.html loads style.css, data.js, and app.js to provide a self-contained learning UI that runs in any browser (no build step needed).
  2. src/ Vite + React app: a TypeScript React front-end (entry: src/main.tsx -> src/App.tsx) with component-based UI and Tailwind-style CSS. This is a typical developer workflow using Vite for local development and build.

## How to run it

Option A — Run the static demo (quick preview, no build)
- Open index.html in your browser, or serve the folder with a simple static server:
  - npx serve .   (or)
  - python -m http.server 3000
- The static demo is an immediate way to preview the DualLingo UI.

Option B — Run the Vite + React app (development)
1. Install dependencies:
   - npm install
2. Start dev server:
   - npm run dev
   - By default Vite serves at http://localhost:3000 (package.json script sets port 3000)
3. Build for production:
   - npm run build
4. Preview the production build:
   - npm run preview

Notes about environment / APIs:
- The repository README previously referenced a GEMINI_API_KEY and AI Studio link. I did not find code calling Google GenAI in the visible files, but package.json may include @google/genai as a dependency in some versions — if you plan to enable GenAI-powered features, set GEMINI_API_KEY (or equivalent) in your environment before starting those features.
- The static translator uses a free translation API (MyMemory) and browser SpeechRecognition / SpeechSynthesis for voice features; those features depend on the user's browser and network access.

## Quick development checklist / recommendations
- Decide whether to keep both the root static app and the src/ React app. They appear to be different UI builds; consider consolidating to avoid duplication.
- If you want CI for the Vite/TS app, add a GitHub Actions workflow to run TypeScript checks (npm run lint) and build on PRs.
- Add a CONTRIBUTORS or CONTRIBUTING.md if you expect outside contributions, and a LICENSE file (MIT or your preferred license).

## Try asking
- Where is the Gemini / @google/genai integration expected to be used in this repo — should I search the code for genai imports and add a feature flag?
- Do you want me to remove or merge the legacy static demo (index.html + app.js) into the Vite React app, or keep both for quick previews?
- Would you like me to create a GitHub Actions workflow that runs TypeScript checks and a production build on pull requests?

## License
Add a LICENSE file to this repository (e.g., MIT) if you want to make the project open source.
