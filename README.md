# SPHF Wi‑Fi Portal Training Lab

A simplified, multi-discipline training repository for building and understanding a community Wi‑Fi captive portal system.

## Purpose

This repository is designed for classroom, workshop, and team-based learning. Instead of focusing only on “building the portal,” it helps learners explore the same project from several practical perspectives:

- **Development** — build and style portal pages and understand the front-end flow
- **Data** — model membership/session data and work with safe sample records
- **Cybersecurity** — identify risks, strengthen forms, and review security controls
- **Networking** — understand captive portal traffic flow, segmentation, and deployment assumptions

## Who this is for

- Students learning web, data, security, or networking fundamentals
- Community technology volunteers
- Instructors running collaborative technical workshops
- Teams that want a shared practice project with multiple roles

## Repository layout

```text
sphf-wifi-portal-training/
├── README.md
├── CONTRIBUTING.md
├── .gitignore
├── docs/
├── tracks/
│   ├── development/
│   ├── data/
│   ├── cybersecurity/
│   └── networking/
├── examples/
└── tasks/
```

## Learning tracks

### Development track
Learn the captive portal user journey by editing the training portal pages in `tracks/development/portal/`.

### Data track
Practice designing lightweight schemas and using safe demonstration data in `tracks/data/`.

### Cybersecurity track
Review risks and controls for forms, sessions, user data, and device/network interactions in `tracks/cybersecurity/`.

### Networking track
Study how a captive portal system fits into a segmented network using the materials in `tracks/networking/`.

## Start here

1. Read `docs/overview.md`
2. Review `docs/learning-paths.md`
3. Choose a learning track in `tracks/`
4. Pick a task level from `tasks/`

## Training principles

- Keep examples simple and explainable
- Use only clearly fake data for demos
- Prefer accessibility and security by default
- Treat this repo as a lab, not a production-ready deployment

## Suggested workshop flow

- Begin with the system overview and architecture docs
- Split learners into track-based groups
- Rejoin to compare how each discipline sees the same system
- Finish with a team project from `tasks/team-projects.md`

## Note on realism

This project uses simplified training artifacts so learners can focus on concepts. Real captive portal deployments require additional operational, legal, infrastructure, and security planning.
