# Autism Awareness Website

## Current State
New project — no existing frontend or backend.

## Requested Changes (Diff)

### Add
- Multi-page autism awareness website with the following pages/sections:
  1. **Home** — Hero banner, mission statement, navigation
  2. **About Autism** — Meaning, types (ASD levels, Asperger's, PDD-NOS), causes (genetic, environmental), early signs
  3. **Awareness** — Why autism awareness matters, statistics, global impact
  4. **Interactive Infographics** — Visual stats cards, milestone timelines, interactive visual elements
  5. **Quiz** — 10-question multiple-choice quiz to test knowledge about autism; score shown at the end
  6. **Technology & Autism** — Role of tech in diagnosis, therapy, communication aids (AAC devices, apps)
  7. **Contact** — Contact form (name, email, message) submitted to backend; confirmation shown
- Mobile-friendly responsive layout
- Soft color palette (blues, purples, warm neutrals) with clear readable fonts
- Navigation bar with links to all pages

### Modify
- None

### Remove
- None

## Implementation Plan
1. Backend: store contact form submissions; store/retrieve quiz questions
2. Frontend: multi-page React app with React Router; Home, About, Awareness, Infographics, Quiz, Technology, Contact pages
3. Quiz logic: questions array, answer tracking, score display
4. Contact form: name/email/message fields, submit to backend, show success message
5. Infographics: animated stat counters, visual cards with icons
6. Responsive design with soft accessible color scheme
