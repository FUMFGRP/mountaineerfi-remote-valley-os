# Communication — Decentralized Mesh Network

**Reliable, community-owned connectivity for remote regions. No cellular towers. No satellite bills. Just resilient mesh.**

---

## The Problem

Remote mountain communities are **off the grid** in more ways than one. Cellular coverage is sparse or nonexistent. Satellite internet is expensive. The result:

- No access to market prices and weather forecasts
- No telemedicine or remote health consultation
- Emergency calls are impossible
- Children cannot access digital learning resources
- The community is invisible to the outside world
- Monitoring data from sensors never leaves the valley

Traditional solutions (tower-based cellular, fiber) are too expensive for low-density populations in difficult terrain.

---

## The Solution

A **decentralized wireless mesh network** — each node relays data to the next, creating a self-healing communication web across the valley.

### How Mesh Networks Work

Unlike traditional networks where every device talks to a central tower, a mesh network is **distributed**. Every node can talk to every other node within range. If one node goes down, data automatically routes through another path. The network heals itself.

```
       ┌───────────┐
       │  Node A   │────┐
       │ (Village) │    │
       └───────────┘    │     ┌───────────┐
                        ├─────│  Node B   │
       ┌───────────┐    │     │  (Ridge)  │
       │  Node C   │────┘     └─────┬─────┘
       │ (Farm)    │               │
       └───────────┘               │     ┌───────────┐
                                   ├─────│  Node D   │
       ┌───────────┐               │     │ (Hub)     │
       │  Node E   │───────────────┘     └─────┬─────┘
       │ (School)  │                          │
       └───────────┘                          │
                                         ┌────▼────┐
                                         │ Internet │
                                         │ Gateway  │
                                         └─────────┘
```

### The Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Long-range backbone | LoRa (915 MHz) | Low-power, long-range (10-15 km line-of-sight) sensor data, text messages |
| Medium-range data | Wi-Fi mesh (2.4/5 GHz) | High-bandwidth local connectivity (web, voice, video within cluster) |
| Internet gateway | Starlink or fiber (where available) | Connection to global internet |
| Offline server | Local server at hub | Hosts Local LLM, local wikis, cached content, monitoring dashboard |

---

## The Nodes

### Node Types

| Node Type | Location | Hardware | Purpose |
|---|---|---|---|
| Village node | Central village location | LoRa + Wi-Fi mesh, solar-powered | Community connectivity |
| Ridge relay | High point between valleys | LoRa relay only, solar-powered | Extend range over mountains |
| Hub node | Processing hub, residency | Full stack + local server | Internet gateway, LLM, dashboard |
| Farm node | Remote agricultural area | LoRa + small Wi-Fi | Sensor data, weather access |
| Charging station node | Every EV station | LoRa + Wi-Fi mesh | Passenger connectivity, sensor data |
| School node | Local school | Wi-Fi mesh + cached content | Educational access |

### Village Node Design

```
        ┌────────────────────────────┐
        │      SOLAR PANEL (100W)     │
        └──────────┬─────────────────┘
                   │
        ┌──────────▼─────────────────┐
        │      BATTERY + CONTROLLER   │
        │  (12V, 50Ah LiFePO4)      │
        └──────────┬─────────────────┘
                   │
        ┌──────────▼─────────────────┐
        │      MESH NODE COMPUTER     │
        │  (Raspberry Pi / ESP32)    │
        │                            │
        │  • LoRa radio module       │
        │  • Wi-Fi access point      │
        │  • Mesh routing software   │
        └──────────┬─────────────────┘
                   │
        ┌──────────▼─────────────────┐
        │      ANTENNA               │
        │  • Omni for local Wi-Fi    │
        │  • Directional for LoRa    │
        │    backbone                │
        └────────────────────────────┘
```

All in a weatherproof enclosure. Mounted on a pole or rooftop. Powered by a small solar panel and battery. No grid connection needed.

---

## What the Network Enables

### For Community Members

| Application | Benefit |
|---|---|
| Voice calls and text | Stay connected with family in other villages |
| Market prices | Check current prices before travelling to market |
| Weather forecasts | Plan planting, harvesting, and travel |
| Emergency alerts | Broadcast warnings (flood, storm, fire) |
| Community messaging | Village announcements, event notices |

### For the Blueprint's Systems

| Application | Data Flowing |
|---|---|
| Energy monitoring | Solar production, battery state, hydro output, load data |
| Water quality | Flow rate, turbidity, pH, UV status at each node |
| Processing hub | Production volumes, inventory, order status |
| EV charging | Station usage, battery swap inventory |
| Sensor network | Temperature, humidity, rainfall, soil moisture |
| Maintenance alerts | Automatic notifications when a system needs attention |

### For Education and Health

| Application | Benefit |
|---|---|
| Telemedicine | Video consultation with doctors in district hospital |
| Remote learning | Cached educational content, virtual classrooms |
| Local LLM | AI assistant answers technical questions in Nepali |
| Knowledge base | All project documentation accessible offline |

---

## The Local LLM

A **small language model** runs on the local server at the hub node. It is:

- **Trained on project documentation** — operator manuals, troubleshooting guides, training materials
- **Multilingual** — primarily Nepali with English fallback
- **Voice capable** — for community members with limited literacy
- **Offline** — no internet required to answer questions
- **Self-improving** — unanswered questions are logged and used to improve documentation

**Example queries:**
- "एक्सट्रुडर कसरी सफा गर्ने?" (How to clean the extruder?)
- "ब्याट्री कति छ?" (What is the battery level?)
- "पानीको pH कति हुनुपर्छ?" (What should the water pH be?)

The LLM is not a replacement for a technician. It is a first-line resource that reduces the need to contact remote experts for common questions.

---

## Training Pipeline

### Foundation (3 months)
- Basic device operation (how to access WiFi, use messaging)
- Report network issues (node offline, slow connection)
- Power management (ensure solar panel is clean, battery connected)

### Operator (6 months)
- Monitor network status from dashboard
- Perform node maintenance (clean solar panels, check connections, reboot)
- Assist community members with connectivity issues
- Log usage patterns

### Technician (12 months)
- Install and configure new nodes
- Diagnose and repair hardware faults
- Tune antenna positioning for optimal coverage
- Update firmware and software
- Manage internet gateway
- Train Foundation and Operator learners

### Master Trainer (ongoing)
- Design mesh networks for new areas
- Plan node placement for optimal coverage
- Develop and maintain training curriculum
- Certify Operators and Technicians

---

## Integration with Other Modules

| Module | How It Connects |
|---|---|
| **Energy** | Sensors report micro-grid status; nodes are solar/battery powered |
| **Water** | Water quality sensors report via mesh |
| **Food** | Production data, inventory, orders transmitted via mesh |
| **Trash-to-Tech** | Production logs, maintenance requests |
| **Logistics** | EV charging station data, transport scheduling |
| **Health** | Telemedicine, health records, emergency alerts |

The mesh network is the **nervous system** of the blueprint. It carries data from every other module and makes that data useful.

---

## Technical Specifications

| Parameter | Value |
|---|---|
| LoRa range (line of sight) | 10-15 km |
| LoRa range (mountainous) | 3-8 km (terrain dependent) |
| Wi-Fi mesh range (per node) | 100-300 m |
| Data rate (LoRa) | 50 kbps (sufficient for sensor data, text) |
| Data rate (Wi-Fi) | Up to 50 Mbps (within node cluster) |
| Node power consumption | 5-15W (solar/battery) |
| Max nodes per mesh | 100+ (theoretical) |
| Frequency bands | 915 MHz (LoRa), 2.4/5 GHz (Wi-Fi) |

---

## Open Source

All mesh node designs — hardware specifications, antenna designs, firmware, server software — are published under open-source licenses.

Communities can:
- Build nodes from commodity components
- Adapt antenna designs for their terrain
- Contribute firmware improvements
- Deploy without paying licensing fees

**Connectivity is infrastructure. The knowledge to build it should be shared.**

---

*Part of the Regenerative Valley Blueprint — an open-source project by Mountaineer.fi*
