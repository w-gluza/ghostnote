# 🥁 GhostNote MVP – Fullstack Project Checklist

A fullstack groove recognition quiz app — a fun project to level up my backend skills (and improve my listening skills 👂).

This checklist reflects the ideation process behind an app I'm building to support my drum learning journey - something fun and interactive to play with while commuting (or procrastinating 😅). The direction might evolve a bit as I experiment!

## 🎵 How does it work?

Drum patterns are represented as arrays of MIDI steps, with each step encoding both the note and its velocity, allowing for nuanced playback.
GhostNote uses predefined wave samples for drum sounds such as snare and kick, triggered via a custom React hook that maps MIDI data to the appropriate sample and velocity.

**MIDI Steps**

```json
[
  [
    [36, 100],
    [42, 100]
  ], // 1: Kick + Hi-Hat
  [[42, 100]], // &: Hi-Hat
  [
    [38, 100],
    [42, 100]
  ], // 2: Snare + Hi-Hat
  [[42, 100]], // &: Hi-Hat
  [
    [36, 100],
    [42, 100]
  ], // 3: Kick + Hi-Hat
  [[42, 100]], // &: Hi-Hat
  [
    [38, 100],
    [42, 100]
  ], // 4: Snare + Hi-Hat
  [[42, 100]] // &: Hi-Hat
]
```

**Readable Grid**

```
Count:  1 & 2 & 3 & 4 &
HH(42): x x x x x x x x
Sn(38):     ●       ●
KD(36): ●       ●
```

**Legend**

- HH(42) = Closed Hi-Hat
- Sn(38) = Acoustic Snare
- KD(36) = Bass Drum 1

`x = Hi-Hat hit, ● = Drum hit, blank = rest`

## 🌐 Live Demo

[**Try GhostNote here**](https://www.theghostnote.app/)

## 🧠 PHASE 1 – Foundation (Project Setup)

- [x] Setup Next.js project
- [x] Set up Prisma ORM + Supabase Postgres
- [x] Create base folder structure
- [x] Create initial quiz API route
- [x] Set up ESLint and Prettier
- [x] GitHub Repository
- [x] Vercel Deployment

---

## 🎮 PHASE 2 – Quiz Gameplay

- [x] Define quiz data model (MIDI pattern array, options, correctIndex)
- [x] Load pattern + metadata from backend via `/api/quiz`
- [x] Trigger pattern playback using custom MIDI-to-sample hook
- [x] Display visual pattern grid (16 steps)
- [x] Let user choose from 4 pattern options
- [ ] POST answer to `/api/answer` → receive XP
- [x] Show correct/incorrect feedback visually
- [ ] Support keyboard input (1–4 keys to answer)

---

## 🧑‍💻 PHASE 3 – Backend Core Logic

- [ ] Store user quiz results in DB
- [ ] XP system: +10 XP for correct answers
- [ ] Level system: unlock levels by XP milestones
- [ ] Add error handling for API routes

---

## 👤 PHASE 4 – User System

- [ ] (Planned) Set up Supabase Auth
- [x] Create fake user object for development
- [x] Use API to fetch placeholder user data (meta, activity)
- [ ] Store real user XP, level, avatar in DB
- [ ] Show logged-in user in navbar/header
- [x] Profile screen UI only (`/profile`) with level + avatar
- [ ] Redirect unauthenticated users from quiz

---

## 🎨 PHASE 5 – UI Polish & Fun

- [x] Create landing page
- [x] Show profess bar
- [x] Build common UI components (buttons, badge, score/streak)
- [ ] Unlock avatar cosmetics by level
- [ ] Add drum skin themed grid background
- [ ] Animate correct/wrong answer feedback
- [x] Add SVG icons

---

## 🚀 PHASE 6 – Stretch Goals

- [ ] Multiplayer mode with WebSocket
- [ ] Leaderboards
- [ ] Pattern builder tool
