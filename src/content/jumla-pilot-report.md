# Jumla Pilot — Field Study Report (May 2026)

**3 weeks on-site in Jumla District, Karnali Province, Nepal**

---

## Executive Summary

From May 1-21, 2026, a team from Mountaineer.fi conducted a 21-day field study in Jumla District, Nepal — one of the most remote districts in the country. The objective was to assess the feasibility of deploying the five-module Remote Valley OS blueprint in a real off-grid environment and to co-design the systems with the community that would operate them.

**Key finding:** The blueprint is viable. All five modules are technically feasible in this environment. Community interest and participation exceeded expectations. Four critical adaptations were identified for the Jumla deployment.

---

## Location

| Detail | Information |
|---|---|
| **District** | Jumla |
| **Province** | Karnali |
| **Elevation** | ~2,500m (village center) |
| **Population (village)** | ~800 people, ~120 households |
| **Grid access** | None (closest grid connection is 40km away) |
| **Road access** | Unpaved, seasonal, 4WD only, 8-hour drive from Nepalgunj |
| **Nearest airstrip** | Jumla Airport (Taluja) — daily flights from Nepalgunj |
| **Primary language** | Nepali (local dialect: Jumli/Khas) |
| **Primary livelihood** | Subsistence agriculture (apples, potatoes, buckwheat, millet), livestock |
| **Internet connectivity** | Intermittent mobile data (Ncell, Nepal Telecom) |
| **Electricity** | Isolated solar home systems (50-300W per household), diesel generators (2 in village) |

---

## Methodology

| Method | Description |
|---|---|
| **Household surveys** | 40 households across the village (stratified by income, location, household size) |
| **Key informant interviews** | Village head, school principal, health post nurse, 2 shopkeepers, 4 farmers |
| **Community workshops** | 3 workshops (15-25 participants each) — system demonstration + co-design |
| **Technical site survey** | Solar irradiance, water sources, road conditions, building assessments |
| **Resource mapping** | Waste generation, water availability, agricultural output, skills inventory |
| **Prototype testing** | 2 systems deployed and tested on-site (water filter, LoRa node) |

---

## Findings by Module

### 1. Trash to Filament

**Feasibility: HIGH**

| Factor | Assessment |
|---|---|
| Plastic waste generation | ~8kg per household per month (packaging, bottles, bags) |
| Current disposal | Open burning (60%), buried (25%), reused (15%) |
| Available feedstock | PET bottles (most common), HDPE (containers), PP (bags) |
| Community interest | Very high — waste is a visible problem and burning creates health issues |
| Skills available | Basic mechanical repair, some welding |

**Key finding:** Village generates an estimated 960kg of plastic waste per month. Current open burning causes respiratory issues, especially in children. A single extruder processing 5kg/day would consume 15% of monthly waste in the first year. Community members expressed strong interest in having a local source of 3D printer filament.

**Cultural note:** Waste is seen as shameful — villagers expressed embarrassment about plastic litter. A solution that turns waste into valuable material is culturally resonant.

### 2. Water Purification

**Feasibility: HIGH**

| Factor | Assessment |
|---|---|
| Primary water source | Spring-fed tap stands (gravity flow) |
| Secondary sources | Stream (seasonal), rainwater harvesting (3 households) |
| Dry season availability | Spring flow drops 60% in March-April |
| Water quality tests | Turbidity: 5-15 NTU (wet season), 2-5 NTU (dry). Coliform detected in 30% of samples |
| Current treatment | None (boiling is rare due to firewood cost) |
| Community interest | Very high — waterborne illness is the top health concern |

**Key finding:** Diarrheal disease is the most common presenting complaint at the health post, especially in children under 5. A single point-of-use purification node at the health post serving 500 people/day is the highest-impact first deployment. The pre-existing gravity-fed piped system means no pumping is needed — only filtration and UV treatment at the point of use.

**Adaptation needed:** Membrane filtration may require pre-chlorination during the wet season when turbidity spikes.

### 3. Energy Microgrid

**Feasibility: MEDIUM-HIGH**

| Factor | Assessment |
|---|---|
| Solar irradiance | 4.5-5.5 kWh/m²/day (good, but winter is cloudy) |
| Hydro potential | Perennial stream with 15m drop, 50m from village center |
| Wind potential | Very low (valley location, average wind < 3 m/s) |
| Current electricity use | Lighting (LED), phone charging, radio, 2 TVs, 1 refrigerator |
| Total village demand (current) | ~12 kWh/day (estimated) |
| Projected demand with modules | ~35 kWh/day |

**Key finding:** Solar + small hydro is the right combination. The stream has sufficient flow year-round for a 3kW pico-hydro system (measured: 25 L/s at 15m head = theoretical 3.7kW). Solar alone would require massive battery storage for winter. Hydro runs 24/7 and covers nighttime base load. Solar handles daytime peak.

**Adaptation needed:** Winter cloud cover reduces solar output by 40-60% for 3 months (December-February). Hydro sizing must cover this gap. Battery bank sized for 2 days of autonomy (70 kWh).

**Community asset:** Two villagers have training in basic electrical wiring (solar home system installations). Both are potential operators.

### 4. Food Production / Value-Added Agriculture

**Feasibility: HIGH**

| Factor | Assessment |
|---|---|
| Apple production | ~50 tons/year in village, 90% sold raw at low prices |
| Post-harvest loss | Estimated 20-30% (no cold storage) |
| Current processing | None (no equipment or facility) |
| Market access | Apples sold to middlemen at NPR 30-50/kg ($0.25-0.40/kg) |
| Value-added potential | Cider: NPR 300-500/L. Dried apples: NPR 800-1,200/kg |

**Key finding:** This module has the highest economic impact potential. A single cold storage unit (10 ton capacity) and basic processing equipment (cider press, dehydrator) could increase farmer income by 5-10x. The village produces 50 tons of apples annually — even capturing 20% for processing would generate significant revenue.

**Adaptation needed:** Cider production requires regulatory approval (alcohol licensing). Dried apples and vinegar have no regulatory barriers and can launch immediately.

**Cultural note:** Apple farming is the primary identity of the village. Improving apple value chains is seen as the most important project by community members.

### 5. Logistics EV Corridor

**Feasibility: LOW-MEDIUM (initially)**

| Factor | Assessment |
|---|---|
| Road conditions | Unpaved, narrow, seasonal — impassable for 2-3 months during monsoon |
| Current transport | 4WD jeeps (shared, 1-2 per week to district center), motorcycles |
| Distance to market | 40km to nearest paved road, 80km to district center |
| EV suitability | Terrain is steep (8-15% grade average), range limited by battery |
| Community interest | Medium — seen as aspirational but not urgent |

**Key finding:** An EV corridor is not the highest priority for this village. The road conditions make EVs challenging (rough terrain, limited range, charging infrastructure required). However, a single EV cargo vehicle for farm-to-market transport (apples to cold storage, then to road head) could be immediately useful.

**Recommendation:** Defer full EV corridor. Deploy a single electric cargo trike (e-rickshaw style, 500kg capacity, 50km range) for local transport as a proof of concept. Use the LoRa mesh communication network as the first "corridor" connecting the valley.

### 6. Mesh Communication (Added During Visit)

**Feasibility: HIGH**

| Factor | Assessment |
|---|---|
| Mobile coverage | 2G only in village center, no data at village edge |
| Internet need | Health post telemedicine, weather data, market prices, educational content |
| Topography | Deep valley — one ridge blocks signal from nearest tower |
| Community interest | High — especially for health post connectivity |

**Key finding:** Lack of reliable communication is the second highest concern after water quality. A LoRa mesh network spanning the valley (5km village corridor) with a single Wi-Fi gateway at the school would provide messaging, sensor data relay, and limited internet access via satellite backhaul.

**Adaptation needed:** The valley shape requires 2-3 repeater nodes on the ridgeline to connect the village from end to end. Solar-powered nodes with 20W panels and 20Ah batteries can run indefinitely.

---

## Community Workshop Outcomes

### Workshop 1: Problem Identification (Day 4, 19 participants)

Top 5 community-identified priorities:
1. **Clean drinking water** (unanimous)
2. **Electricity reliability** (current solar home systems fail in winter)
3. **Farm income** (apple prices too low, no storage)
4. **Health post connectivity** (telemedicine requested by the nurse)
5. **Waste management** (visible plastic problem)

### Workshop 2: Solution Co-Design (Day 9, 22 participants)

Community members were presented with each module concept and asked to provide feedback:

| Module | Enthusiasm | Concerns |
|---|---|---|
| Water purification | Very high | Maintenance responsibility, chemical cost |
| Microgrid | High | Battery replacement cost, who pays |
| Trash-to-filament | High | Training needed, who operates |
| Food processing | Very high | Market access for processed goods |
| EV | Medium | Road conditions |
| Mesh communication | High | Device cost, data privacy |

### Workshop 3: Roles and Governance (Day 15, 25 participants)

Community members self-selected into working groups:

| Working Group | Members | Lead |
|---|---|---|
| Water | 4 | Health post nurse |
| Energy | 5 | Solar technician (trained) |
| Waste | 3 | School teacher |
| Agriculture | 6 | Lead farmer |
| Communication | 2 | School principal |
| **Community Oversight** | **5** | **Village head** |

---

## Skills Inventory

| Skill | People Available | Notes |
|---|---|---|
| Basic electrical wiring | 2 | Solar home system experience |
| Mechanical repair | 4 | Bicycle, motorcycle, small engine |
| Welding | 1 | Basic stick welding |
| Carpentry | 3 | Building construction |
| Plumbing | 2 | Water tap stand maintenance |
| Smartphone operation | ~20 | Android phones, basic apps |
| English literacy | 3 | School teachers, health post nurse |
| Nepali literacy | ~60% of adults | |

---

## Critical Adaptations

### 1. Monsoon Season Access
Jumla's monsoon (June-September) makes road travel impossible for weeks. All deployment scheduling must account for a 3-month window where only air transport is viable. Heavy equipment and bulk materials must be delivered before monsoon.

### 2. Winter Solar Deficit
Three months of heavy cloud cover (December-February) reduce solar output by 40-60%. The microgrid design must oversize hydro to compensate or include a backup generator for this period.

### 3. Local Governance Structures
The village already has a functioning forest user group and a water users committee. New infrastructure should work through these existing governance bodies rather than creating parallel structures.

### 4. Remittance Economy
Nearly 40% of households have a family member working abroad (Gulf states, Malaysia, Korea). This creates both opportunity (remittance funding for equipment) and risk (brain drain of trained operators).

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Monsoon delays equipment delivery | High | High | Pre-position materials before June |
| Trained operators leave for foreign work | Medium | High | Train 3+ operators per role, create local economic incentive |
| Battery bank failure (cost to replace) | Medium | High | Design for 2,000 cycles (5-7 years), budget replacement fund |
| Political instability | Low | Medium | Work through existing community governance |
| Climate change impacts (erratic weather, changing water availability) | Medium | Medium | Design for 20% variance in water and solar availability |
| Cultural resistance to new technology | Low | Low | Co-design from day 1, community-elected operators |

---

## Recommendations

### Immediate (Next 3 Months)

1. Deploy a single water purification node at the health post
2. Install 2 LoRa repeater nodes on the ridgeline
3. Purchase and deliver a 10-ton cold storage unit
4. Begin operator training for water and communication modules

### Medium-Term (3-12 Months)

1. Install pico-hydro turbine (3kW)
2. Deploy microgrid backbone (solar + hydro + battery)
3. Launch trash-to-filament pilot (shredder + extruder)
4. Install cider press and dehydrator at the village center
5. Deploy one electric cargo trike

### Long-Term (12-24 Months)

1. Scale water purification to secondary sites
2. Deploy additional cold storage at farm clusters
3. Extend EV corridor to neighboring villages
4. Establish Master Trainer certification
5. Develop regional adaptation package for similar Karnali villages

---

## Field Team

| Name | Role |
|---|---|
| [Founder] | Project lead, systems engineering |
| Prem Lal | Community liaison, translator |
| [Engineer 1] | Water and energy systems |
| [Engineer 2] | Waste processing and fabrication |
| [Documenter] | Photos, video, field notes |

---

## Acknowledgments

The team thanks the people of [village name] for their hospitality, patience, and participation. Special thanks to the village head, the health post nurse, the school principal, and every community member who attended the workshops and shared their knowledge.

This report is dedicated to the people of Jumla. The blueprint belongs to you.

---

*Part of the Regenerative Valley Blueprint. Licensed under CC BY-SA 4.0.*
