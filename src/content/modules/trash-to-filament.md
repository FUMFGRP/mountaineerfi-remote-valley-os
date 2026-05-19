# Trash to Filament — Plastic Waste to 3D Printer Filament

**Turn a pollution problem into a local manufacturing resource.**

---

## The Problem

In remote communities, plastic waste accumulates with no way to process it. Bottles, wrappers, and containers pile up. They get burned (toxic smoke), buried (pollutes soil and water), or thrown in rivers (ocean-bound plastic).

There is no municipal recycling service. No truck comes to take it away.

At the same time, these same communities struggle to get spare parts, tools, and manufactured goods. Everything must be imported over long distances at high cost.

**The plastic is a problem. The lack of manufacturing is a problem. This module solves both at once.**

---

## The Process

```
COLLECT  →  SORT  →  SHRED  →  EXTRUDE  →  PRINT
```

### Step 1: Collect

Community collection points are set up in villages, near schools, and at the market. People bring their plastic waste. Incentives can include credits at local shops, training vouchers, or direct payment.

**What is collected:**
- PET bottles (water, soda)
- HDPE containers (shampoo, detergent)
- PP (food containers, bottle caps)
- LDPE (bags, wrapping)

**What is avoided:**
- PVC (releases toxic fumes when processed)
- Heavily contaminated or burnt plastic

### Step 2: Sort

Plastic is sorted by type at the collection hub. Each type has different melting properties and produces different filament characteristics.

| Plastic | Source | Filament Properties | Best For |
|---|---|---|---|
| PET | Bottles | Strong, slightly flexible, clear | Mechanical parts, containers |
| HDPE | Containers | Rigid, durable, opaque | Structural parts, connectors |
| PP | Food containers | Flexible, fatigue-resistant | Hinges, living hinges, caps |
| LDPE | Bags, wrap | Soft, flexible | Gaskets, seals |

Sorting is done by trained community members — creating local jobs.

### Step 3: Shred

Sorted plastic is fed into a **shredder** — a simple machine with rotating steel blades that cuts plastic into small flakes (approximately 5-10mm).

The shredder is:
- Powered by the micro-grid
- Built from locally available materials where possible
- Designed for easy blade replacement and maintenance
- Based on open-source designs (Precious Plastic, etc.)

### Step 4: Extrude

Flakes are fed into a **filament extruder**. This machine:
1. Heats the plastic to its melting point (different temperatures for different plastics)
2. Pushes the molten plastic through a precision nozzle
3. Cools the resulting thread in a water or air bath
4. Pulls it onto a spool at a consistent diameter (typically 1.75mm)

**Quality control checkpoints:**
- Diameter gauge (must be within ±0.05mm)
- Visual inspection for bubbles, lumps, or discoloration
- Tensile strength test for each batch
- Test print verification

### Step 5: Print

The finished filament feeds a **3D printer farm** — a collection of printers running continuously.

**What gets printed:**

| Category | Examples |
|---|---|
| Spare parts | Pump impellers, gear replacements, valve handles, latches |
| Tools | Custom wrenches, clamps, jigs, measuring tools |
| Construction | Beam connectors, bracket mounts, pipe fittings |
| Agriculture | Drip irrigation adapters, planter pots, tool handles |
| Education | Geometric models, anatomical models, maps, teaching aids |
| Medical | Prosthetic components, splints, custom grips |
| Household | Hooks, clips, organizers, repair parts |
| Community | Signage, event supplies, school materials |

---

## Equipment Needed

| Equipment | Purpose | Source |
|---|---|---|
| Shredder | Cut plastic into flakes | Built locally from open-source plans |
| Filament extruder | Melt and extrude consistent filament | Built or procured |
| Diameter gauge | Measure filament consistency | Off-the-shelf tool |
| 3D printers | Print parts from filament | Open-source (Prusa, Voron designs) |
| Storage racks | Organize filament spools, parts library | Built locally |
| Sorting station | Bins, scales, labels | Built locally |

---

## Training Pipeline

### Foundation (3 months)
- Identify and sort plastic types
- Safe handling and cleaning procedures
- Basic machine operation under supervision
- Maintain cleanliness and organization

### Operator (6 months)
- Run shredder and extruder independently
- Adjust temperature settings for different plastics
- Perform diameter checks and quality tests
- Change spools and log production
- Basic troubleshooting (jam clearing, temperature adjustment)

### Technician (12 months)
- Diagnose and repair all machine faults
- Replace shredder blades
- Clear extruder nozzle blockages
- Calibrate temperature sensors
- Train Foundation learners
- Improve documentation with field observations

### Master Trainer (ongoing)
- Build new shredder or extruder from scratch
- Adapt designs for new plastic types
- Write and update training curriculum
- Certify Operators and Technicians
- Advise other communities on setup

---

## Integration with Other Modules

| Module | How It Connects |
|---|---|
| **Energy** | Micro-grid powers all shredding, extruding, and printing equipment |
| **Water** | Prints replacement pump parts and filter housing components |
| **Food** | Prints processing equipment parts, cold storage fittings |
| **Logistics** | Prints EV charging station enclosures, cable management, signage |
| **Communication** | Prints mesh node enclosures, mounting brackets, antenna mounts |
| **Housing** | Prints 3D-printed connectors for natural building construction |

---

## Open Source

All designs for the shredder, extruder, and quality testing equipment are available on GitHub under the **CERN Open Hardware License**.

Every improvement made in Jumla — a better blade design, a more reliable temperature controller, a new technique for a tricky plastic — is shared back to the global community.

**Waste is not waste. Waste is a raw material waiting for the right system.**

---

*Part of the Regenerative Valley Blueprint — an open-source project by Mountaineer.fi*
