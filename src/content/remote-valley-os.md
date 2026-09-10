# Remote Valley OS (RV-OS) — The Integration Layer

**Connecting hardware, data, and people into one coherent system.**

---

## What RV-OS Is

Remote Valley OS is not an operating system in the Windows/Linux sense. It is a **system-of-systems integration layer** — the middleware and tooling that connects five independent infrastructure modules into a unified, observable, and manageable whole.

Each module (trash-to-filament, water purification, energy microgrid, food production, logistics EV, mesh communication) works on its own. RV-OS makes them work together.

---

## Architecture Overview

```
                    ┌─────────────────────────────────────────┐
                    │           Dashboard & Alerts            │
                    │   (Web UI + SMS + LoRa text messages)  │
                    └──────────────┬──────────────────────────┘
                                   │
                    ┌──────────────▼──────────────────────────┐
                    │         RV-OS Core API Server           │
                    │   (FastAPI / lightweight, offline-capable)│
                    └──────────────┬──────────────────────────┘
                                   │
         ┌─────────────────────────┼──────────────────────────┐
         │                         │                          │
         ▼                         ▼                          ▼
┌──────────────────┐   ┌────────────────────┐   ┌─────────────────────┐
│  Sensor Ingestion  │   │   Local LLM         │   │   GitHub Sync      │
│  Pipeline          │   │   (offline AI        │   │   (async, when     │
│  (MQTT + LoRa +    │   │    assistant)        │   │    connected)      │
│   serial bridges)  │   └────────────────────┘   └─────────────────────┘
└──────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Module Data Sources                           │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────┐ │
│  │ Waste    │ │ Water    │ │ Energy   │ │ Food     │ │ EV    │ │
│  │ Filament │ │ Quality  │ │ Microgrid│ │ Process  │ │ Fleet │ │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └───────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## Core Components

### 1. Sensor Ingestion Pipeline

Collects data from sensors across all modules and normalizes it.

| Data Source | Protocol | Frequency | Payload Size |
|---|---|---|---|
| Extruder temperature | Serial (USB) | Every 5 seconds | ~50 bytes |
| Water turbidity / pH / TDS | Modbus RTU over RS-485 | Every 15 minutes | ~120 bytes |
| Solar panel voltage / current | MPPT controller (Modbus) | Every 10 seconds | ~60 bytes |
| Hydro turbine RPM | Pulse counter (GPIO) | Every second | ~16 bytes |
| Battery SoC / temperature | BMS (CAN bus) | Every 30 seconds | ~80 bytes |
| Cold storage temp / humidity | I2C sensors | Every 5 minutes | ~32 bytes |
| EV charger status | MQTT over LoRa | On event | ~100 bytes |
| Mesh node uptime / signal | LoRaWAN | Every hour | ~24 bytes |

**Ingestion nodes:** Each module cluster has a local Raspberry Pi (or equivalent) running a lightweight agent that collects, timestamps, and stores sensor data locally. Agents communicate over LoRa when no Wi-Fi or satellite link is available.

### 2. Local LLM

A small, locally-hosted large language model (quantized 7B parameter model) running on a dedicated node powered by the microgrid.

**Capabilities:**
- Answer maintenance questions in Nepali and English
- Walk operators through troubleshooting procedures
- Translate documentation between languages
- Log field observations via voice or text
- Provide educational content for the training pipeline

**Constraints:**
- Runs fully offline — no internet required
- Model: quantized Llama-style 7B (4-bit, ~4GB RAM)
- Inference on a single Jetson Nano or similar edge device (~15W)
- Updated when satellite or USB drive delivers new model weights

### 3. Dashboard & Alerts

A lightweight web UI that renders on any device with a browser (phone, tablet, laptop).

**Dashboard views:**
- **System overview:** All modules on one screen, status indicators (green / yellow / red)
- **Module details:** Sensor graphs, historical trends, maintenance logs per module
- **Alerts:** Active and past alerts with severity, timestamp, and resolution notes
- **Inventory:** Spare parts tracking, consumables levels, reorder recommendations
- **Training:** Access to operator manuals, troubleshooting guides, video tutorials

**Alert channels:**
- Dashboard notification
- SMS (via local GSM module if available)
- LoRa text message to designated handheld devices
- Audible alarm on module control boxes

### 4. GitHub Sync

When internet access is available (satellite or periodic connectivity), RV-OS syncs data to GitHub:

- Operational metrics (anonymized)
- System configuration and firmware versions
- Alert summaries
- Field adaptation requests for upstream maintainers

This sync is **asymmetric**: field data flows to GitHub. Maintainers push updates back via PRs, which are pulled during the next sync window.

---

## Data Flow

```
┌──────────┐     ┌────────────┐     ┌──────────┐     ┌──────────┐
│ Sensors  │────▶│ Local      │────▶│ Local    │────▶│ Dashboard│
│ (module) │     │ Agent (Pi) │     │ Database │     │ (browser)│
└──────────┘     └────────────┘     └──────────┘     └──────────┘
                     │                                    │
                     │ LoRa / MQTT                        │ HTTP
                     ▼                                    ▼
              ┌────────────┐                      ┌──────────────┐
              │ Central    │                      │ Operator     │
              │ Collector  │                      │ Phone /      │
              │ (village)  │                      │ Tablet       │
              └────────────┘                      └──────────────┘
                     │
                     │ (when connected)
                     ▼
              ┌────────────┐
              │ GitHub     │
              │ Sync       │
              └────────────┘
```

---

## Offline-First Design

Every component of RV-OS runs fully offline. Internet is never required for operation.

| Component | Online Behavior | Offline Behavior |
|---|---|---|
| Sensor ingestion | Stream normal | Buffer locally indefinitely |
| Dashboard | Real-time data | Cached data, update when reconnected |
| Local LLM | No change | No change (always local) |
| GitHub sync | Push metrics, pull updates | Queue for next connection |
| Alerting | SMS + dashboard | LoRa + dashboard only |
| Over-the-air updates | Pull from GitHub | USB stick update |

---

## Hardware Requirements

| Component | Spec | Power | Cost (est.) |
|---|---|---|---|
| Central server | Raspberry Pi 4 (4GB) or equivalent | ~15W | $75 |
| Sensor agent (per module) | Raspberry Pi Zero 2 W or equivalent | ~3W | $25 |
| Local LLM node | NVIDIA Jetson Nano or Google Coral | ~15W | $250 |
| LoRa gateway | Dragino LG-01 or equivalent | ~2W | $100 |
| Local storage | 64GB SD card + 256GB USB SSD | ~2W | $40 |
| Networking | Wi-Fi router + LoRaWAN concentrator | ~10W | $80 |
| **Total per village** | | **~47W** | **~$570** |

---

## Software Stack

| Layer | Technology |
|---|---|
| API server | FastAPI (Python) |
| Dashboard | Astro + SolidJS (static, served by API) |
| Database | SQLite (local), PostgreSQL (when connected for analytics) |
| Sensor protocol | MQTT over LoRa, Modbus RTU, CAN bus |
| LLM inference | llama.cpp (quantized 4-bit) |
| Sync protocol | rsync over SSH (satellite connection) |
| Containerization | Docker Compose (single node deployment) |
| CI/CD | GitHub Actions |

---

## Repositories

| Repository | Description |
|---|---|
| `rv-os-core` | API server, dashboard frontend, database schema |
| `rv-os-agent` | Per-module sensor agent firmware and scripts |
| `rv-os-local-llm` | Model quantization, prompt templates, deployment scripts |
| `rv-os-sync` | GitHub synchronization tooling |
| `rv-os-manifest` | Compatibility matrix of module versions |
| `rv-os-docs` | Central documentation, architecture, deployment guide |

---

## Deployment

### Phase 1: Single Village

Deploy one RV-OS instance serving all modules in one village.

**Estimated setup time:** 2 days (with pre-configured hardware)
**Operator training:** 1 week
**Data backlog:** Immediate local storage, sync when connected

### Phase 2: Valley-Wide

Multiple village instances connected via LoRa mesh backbone. Central dashboard at the hub village.

**Range:** Up to 50km valley corridor
**Sync:** Inter-village data relayed through mesh
**Alerts:** Cross-village notification routing

### Phase 3: Multi-Region

Independent RV-OS deployments in different regions, each adapted to local conditions, all feeding anonymized metrics back to the global project.

---

## Security Model

- All data is encrypted at rest (SQLite with encryption extension)
- All sensor data is locally owned — never transmitted off-site without explicit sync
- GitHub sync sends aggregated metrics only unless configured otherwise
- Physical access required to compromise sensor agents — no remote exploit path for most modules
- Dashboard access controlled by local network + simple password (offline context)

---

## Field Considerations

- **Power budget:** RV-OS must run on microgrid power. Total draw ~47W is within the 50kWh/day target
- **Heat / dust:** All nodes housed in passive-cooled, sealed enclosures
- **Connectivity:** Designed for intermittent satellite or no connection at all
- **Operator skill:** Dashboard designed for low-literacy operators — status indicators, voice alerts, visual cues
- **Repair:** All components are off-the-shelf and replaceable with basic tools

---

*Part of Remote Valley OS. Licensed under AGPL-3.0 (software) and CC BY-SA 4.0 (documentation).*
