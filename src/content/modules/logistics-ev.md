# Logistics — EV Corridor and eVTOL Network

**A clean transport backbone for remote regions. Electric vehicles, charging stations every 50km, and eVTOL for rapid connection.**

---

## The Problem

Remote mountain communities face severe transport challenges:

- **No reliable roads** or roads that wash out in monsoon season
- **Diesel vehicles** are expensive to run (fuel transport costs double the per-liter price)
- **Goods take days** to reach markets, reducing freshness and value
- **Medical emergencies** require hours or days of difficult travel
- **Young people leave** partly because there is no mobility — no way to connect to opportunities

Diesel dependency creates a vicious cycle: high transport costs mean low prices for local goods, which means low incomes, which means no money to improve transport.

---

## The Solution

A **clean mobility network** with three layers:

### Layer 1: EV Corridor (Ground)

Electric vehicle charging stations every 50 kilometers along the main transport route. Each station is:

- Powered by the micro-grid
- Staffed by trained local operators
- Equipped with water purification (serving clean water to the community)
- Hosting battery-swap capability for two-wheelers and three-wheelers

**Vehicle types:**

| Vehicle | Use Case | Range | Charging Method |
|---|---|---|---|
| E-motorcycle | Personal transport, light goods | 80-100 km | Battery swap (2 min) |
| E-rickshaw (3-wheeler) | Passenger service, market runs | 60-80 km | Swappable battery pack |
| E-cargo truck | Apple transport to market | 120-150 km | Fast charging (30 min) |
| E-bicycle | Local commuting | 40-60 km | Solar charging at stations |

### Layer 2: eVTOL Network (Air)

Electric Vertical Takeoff and Landing aircraft provide rapid transport for:

- **High-value goods:** Apple cider, vinegar, dried fruit to Kathmandu and export markets
- **Medical emergencies:** Patient evacuation, medicine delivery
- **Critical parts:** Urgent replacement parts for any module
- **Connecting flights:** Linking remote airstrips to regional hubs

**eVTOL specifications:**
- Electric propulsion (no fossil fuel)
- VTOL capability (no runway needed — a clearing or helipad is sufficient)
- Range: 100-250 km depending on payload
- Payload: 200-500 kg
- Quiet operation (important for community acceptance)
- Charged from the same micro-grid

### Layer 3: Community Logistics (Last Mile)

Light electric vehicles and cargo bicycles connect villages to the EV corridor charging stations:

- **Route planning:** Scheduled daily services from villages to the nearest charging station
- **Cargo consolidation:** Community collection points where goods are aggregated for transport
- **Reverse logistics:** Supplies from market carried back to villages on return trips

---

## The EV Corridor: Charging Station Design

```
                        ┌─────────────────────────┐
                        │     MICRO-GRID POWER     │
                        └────────────┬────────────┘
                                     │
                        ┌────────────▼────────────┐
                        │      CHARGING HUB       │
                        │                         │
                        │  ┌───────────────────┐  │
                        │  │ EV Fast Charger   │  │
                        │  │ (30 min to 80%)   │  │
                        │  └───────────────────┘  │
                        │  ┌───────────────────┐  │
                        │  │ Battery Swap      │  │
                        │  │ Station (2 min)   │  │
                        │  └───────────────────┘  │
                        │  ┌───────────────────┐  │
                        │  │ Solar Canopy Over  │  │
                        │  │ Parking Area      │  │
                        │  └───────────────────┘  │
                        └────────────┬────────────┘
                                     │
          ┌──────────────────────────┼──────────────────────────┐
          │                          │                          │
          ▼                          ▼                          ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  WATER PURIF.    │    │  COMMUNITY       │    │  BATTERY         │
│  Clean drinking  │    │  KIOSK           │    │  STORAGE         │
│  water for all   │    │  WiFi, phone     │    │  Grid buffer     │
│                  │    │  charging, shop  │    │  (stationary)    │
└──────────────────┘    └──────────────────┘    └──────────────────┘
```

### Station Services

At every charging station:

| Service | Purpose |
|---|---|
| EV charging | Fast charge for cars and trucks |
| Battery swap | Instant swap for motorcycles and rickshaws |
| Water purification | Free clean drinking water for the community |
| Community kiosk | WiFi hotspot, phone charging, basic supplies |
| Rest area | Shelter, seating, toilet |
| Information board | Market prices, weather, community notices |

---

## The Network: 50km Corridor

```
  Station 1         Station 2         Station 3         Station 4
   (0 km)           (50 km)          (100 km)          (150 km)
      │                 │                 │                 │
      │     EV ROAD     │     EV ROAD     │     EV ROAD     │
      └─────────────────┴─────────────────┴─────────────────┘
                              │
                              │
                         eVTOL Route
                              │
                         ┌────┴────┐
                         │ Kathmandu / Regional Hub │
                         └─────────┘
```

- Charging stations are spaced at intervals that match EV range
- Each station serves the villages within a 10-15 km radius
- The corridor connects Jumla's agri-hub to regional markets

---

## Training Pipeline

### Foundation (3 months)
- Basic EV charging operation
- Battery swap procedure for two/three-wheelers
- Safety: high-voltage awareness, fire prevention
- Clean and maintain charging station area

### Operator (6 months)
- Operate all charging equipment independently
- Perform battery swap and manage inventory
- Basic troubleshooting (charging errors, connectivity issues)
- Log usage data and report to monitoring system
- Manage station cleanliness and organization

### Technician (12 months)
- Diagnose and repair charging equipment faults
- Maintain and test batteries
- Troubleshoot solar canopy systems
- Perform electrical safety checks
- Train Foundation and Operator learners

### Master Trainer (ongoing)
- Design and install new charging stations
- Plan corridor expansion for new routes
- Develop eVTOL ground support procedures
- Write training curriculum and maintenance guides

---

## Integration with Other Modules

| Module | How It Connects |
|---|---|
| **Energy** | Every charging station is powered by the micro-grid |
| **Water** | Each station hosts a water purification node |
| **Food** | EV corridor transports apples to hub and products to market |
| **Trash-to-Tech** | Printed parts for charging station enclosures and repairs |
| **Communication** | Stations provide WiFi; sensors report charging data |
| **Health** | eVTOL enables medical evacuation and medicine delivery |

The logistics network is the **circulatory system** of the blueprint. It moves goods, people, and information.

---

## eVTOL Requirements

| Item | Specification |
|---|---|
| Landing site | 30m x 30m cleared area per station |
| Charging | Fast DC charging (30-60 min) |
| Maintenance | Pre-flight inspection by trained technician |
| Operations | VFR only, daylight hours initially |
| Range | 100-250 km depending on payload |

**Safety:**
- Redundant propulsion systems (multiple motors)
- Parachute recovery system for whole aircraft
- Regular maintenance schedule
- Remote telemetry monitoring

---

## Open Source

All charging station designs — power electronics schematics, enclosure designs, battery swap mechanism plans, and training materials — are available under open-source licenses.

Communities can:
- Build charging stations from the published designs
- Adapt the spacing and placement to their geography
- Contribute improvements to the designs

**Mobility is freedom. The infrastructure to enable it should be open.**

---

*Part of the Regenerative Valley Blueprint — an open-source project by Mountaineer.fi*
