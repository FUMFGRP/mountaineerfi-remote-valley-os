# Innovation Board — The Community Brain

**A physical board that makes complex systems visible, debuggable, and improvable by everyone.**

---

## What Is an Innovation Board?

The Innovation Board is a large physical display (whiteboard, corkboard, or plywood panel) installed in the central community space of each deployment. It makes the invisible visible.

Every sensor reading, maintenance task, alert, and training milestone is represented on the board using simple, modular, physical components — cards, magnets, colored strings, and handwritten annotations.

The board is the opposite of a black-box dashboard. It is **deliberately physical, deliberate public, and deliberately human-readable**.

---

## Why Physical?

In communities where not everyone has a smartphone, internet access, or reading fluency, a purely digital dashboard excludes people. The Innovation Board includes everyone.

| Digital Dashboard | Innovation Board |
|---|---|
| Requires a device | Requires eyes |
| Requires connectivity | Requires zero infrastructure |
| Requires reading fluency | Uses colors, symbols, shapes |
| One user at a time | Visible to everyone at once |
| Updates automatically | Updated by hand (intentional) |
| Abstract numbers | Physical tokens you can touch |
| Maintained by one person | Maintained by the community |

---

## Board Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  ╔══════════════════════════════════════════════════════════════════╗ │
│  ║                    SYSTEM STATUS    ⚫ ⚫ ⚫                      ║ │
│  ║       Trash      Water      Energy     Food      EV      Mesh  ║ │
│  ║        🟢          🟡         🟢        🟢       🟢        🟢    ║ │
│  ╚══════════════════════════════════════════════════════════════════╝ │
│                                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │
│  │  TODAY'S     │  │  THIS WEEK   │  │  THIS MONTH  │               │
│  │  TASKS       │  │  TASKS       │  │  GOALS       │               │
│  │              │  │              │  │              │               │
│  │  ☐ Clean     │  │  ☐ Calibrate│  │  ★ Print     │               │
│  │    pre-filter │  │    pH sensor│  │    50 pipe   │               │
│  │  ☐ Check     │  │  ☐ Service  │  │    fittings  │               │
│  │    battery    │  │    extruder │  │  ★ Harvest   │               │
│  │    water      │  │    nozzle   │  │    500L      │               │
│  │              │  │  ☐ Harvest  │  │    apples    │               │
│  └──────────────┘  │    apples   │  │  ★ Train 2   │               │
│                     └──────────────┘  │    new ops   │               │
│                                        └──────────────┘               │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐      │
│  │                    PROBLEM WALL                             │      │
│  │  🔴 Extruder temp drifts after 2h — Prem L. (May 14)      │      │
│  │  🟡 Water pressure low in dry season — Anju (May 16)       │      │
│  │  🟢 Fixed: EV charger connector — fixed by Rajesh (May 12) │      │
│  └────────────────────────────────────────────────────────────┘      │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐      │
│  │              INNOVATION IDEAS  ★★★★★★★                     │      │
│  │  Idea: Use bicycle chain instead of belt on shredder       │      │
│  │  Idea: Add sand filter before membrane — extends life 3x   │      │
│  │  ★★★ VOTE: 9 people want the sand filter                   │      │
│  └────────────────────────────────────────────────────────────┘      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Board Sections

### 1. System Status (Top)
Color-coded status for each module. Updated daily by operators.

| Color | Meaning |
|---|---|
| 🟢 Green | Running normally |
| 🟡 Yellow | Needs attention within 48 hours |
| 🔴 Red | Needs immediate attention |
| ⚫ Black | Not operational |

### 2. Tasks (Left Column)
Three columns: Today, This Week, This Month. Tasks are written on cards and moved between columns as they progress. Completed cards go to the "Done" pile.

### 3. Problem Wall (Center)
Anyone can add a problem to the wall. Format: `[severity] [problem description] — [name] (date)`. Problems move from 🔴 → 🟡 → 🟢 as they are resolved.

### 4. Innovation Ideas (Bottom)
Ideas for improvement. Anyone can add one. Community votes by placing a star sticker next to ideas they support. The most-voted ideas get prioritized for the next build sprint.

### 5. Training Tracker (Right Side, not shown in diagram)
Tracks who has completed which level of training:

| Level | Operators Certified |
|---|---|
| Foundation | Anju, Rajesh, Maya, Kiran |
| Operator | Anju, Rajesh |
| Technician | Anju |
| Master Trainer | (none yet) |

---

## How the Board Works

### Daily Stand-Up
Every morning at 8 AM, the operators gather at the board for 15 minutes:
1. Update status colors
2. Move task cards
3. Check problem wall for new items
4. Assign today's tasks

### Weekly Review
Every Saturday, 30 minutes:
1. Review completed tasks
2. Vote on innovation ideas
3. Plan next week's tasks
4. Review training progress

### Monthly Community Meeting
First Sunday of each month, open to the whole community:
1. Present monthly metrics
2. Demo new innovations
3. Elect next month's board steward
4. Recognize contributors

---

## Board Materials

| Item | Quantity | Cost (USD) | Notes |
|---|---|---|---|
| Corkboard or whiteboard (1.2m x 2.4m) | 1 | $20 | Local hardware store |
| Index cards (various colors) | 500 | $5 | Color-coded by type |
| Push pins | 200 | $3 | |
| Magnets | 50 | $5 | For status tracking |
| String (red, yellow, green) | 3 rolls | $3 | For connecting related items |
| Star stickers | 100 | $2 | For voting |
| Dry-erase markers | 5 | $5 | |
| **Total** | | **$43** | |

---

## Digital Twin

The Innovation Board also has a **digital twin** — a web page on the RV-OS dashboard that mirrors the physical board. This lets remote contributors (accelerator members, maintainers, researchers) see what is happening in the village.

| Data | Sync Method | Frequency |
|---|---|---|
| Task card content | Manual entry via tablet | When connected |
| Status colors | Pulled from sensor data | Automatic |
| Problem wall items | Manual entry | When connected |
| Innovation ideas | Manual entry | When connected |
| Training tracker | Manual update | Weekly |

The digital twin is **read-only** for remote users. Changes must be made on the physical board and entered into the system. This keeps the physical board as the source of truth and ensures that board literacy remains a core skill.

---

## Why It Matters

The Innovation Board solves a fundamental problem: **in most development projects, the people who use the systems have no way to improve them.** Feedback goes up a chain, gets filtered, and often never results in change.

The Board flips this. The people who operate the systems every day are the ones who decide what to fix, what to improve, and what to try next. They document their own problems and solutions. They vote on priorities. They track their own skill progression.

The Board makes the community the owner of its infrastructure, not just a user of it.

---

## Adaptation Template

Each deployment site should build its own Innovation Board. The layout above is a starting point. Modify it:

- Add sections for local priorities (e.g., livestock health, school attendance)
- Use local materials instead of store-bought
- Translate all labels to the local language
- Add symbols for non-reading community members
- Add a section for cultural events or community announcements

The rv-adaptations repository contains photos, templates, and lessons learned from each deployment's board.

---

*Part of the Regenerative Valley Blueprint. Licensed under CC BY-SA 4.0.*
