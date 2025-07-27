# 🥁 GhostNote MVP – Fullstack Project Checklist

A fullstack groove recognition quiz app — a fun project to level up my backend skills (and improve my listening skills 👂).

This checklist reflects the ideation process behind an app I'm building to support my drum learning journey - something fun and interactive to play with while commuting (or procrastinating 😅). The direction might evolve a bit as I experiment!

---

## 🧠 PHASE 1 – Foundation (Project Setup)

- [x] Setup Next.js project
- [x] Set up Prisma ORM + Supabase Postgres
- [x] Create base folder structure
- [x] Create initial quiz API route
- [x] Set up ESLint and Prettier
- [x] GitHub Repository
- [x] Vercel Deployment
- [ ] Set up Supabase Auth

---

## 🎮 PHASE 2 – Quiz Gameplay

- [ ] Define quiz data model (audio URL, options, correctIndex)
- [ ] Load pattern/audio from backend via `/api/quiz`
- [ ] Display audio player + pattern grid (16 steps)
- [ ] Let user choose from 4 pattern options
- [ ] POST answer to `/api/answer` → receive XP
- [ ] Show correct/incorrect feedback visually
- [ ] Support keyboard input (1–4 keys to answer)

---

## 🧑‍💻 PHASE 3 – Backend Core Logic

- [ ] Store user quiz results in DB
- [ ] XP system: +10 XP for correct answers
- [ ] Level system: unlock levels by XP milestones
- [ ] Add error handling for API routes

---

## 👤 PHASE 4 – User System

- [ ] User register/login with Supabase
- [ ] Store user XP, level, avatar in DB
- [ ] Show logged-in user in navbar/header
- [ ] Profile screen (`/me`) with XP + avatar
- [ ] Redirect unauthenticated users from quiz

---

## 🎨 PHASE 5 – UI Polish & Fun

- [ ] Show XP bar or progress circle
- [ ] Unlock avatar cosmetics by level
- [ ] Add drum skin themed grid background
- [ ] Animate correct/wrong answer feedback
- [ ] Add SVG icons

---

## 🚀 PHASE 6 – Stretch Goals

- [ ] Multiplayer mode with WebSocket
- [ ] Leaderboards
- [ ] Pattern builder tool
