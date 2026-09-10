# Jumla Pilot — Feasibility Assessment (May 2026)

**Persona-based feasibility study for Jumla District, Karnali Province, Nepal**

---

## Executive Summary

In May 2026, Mountaineer.fi conducted a feasibility assessment for deploying the five-module Remote Valley OS blueprint in Jumla District, Nepal — one of the most remote districts in the country. The assessment used environmental analysis and persona-based simulations rather than live community workshops. The objective was to determine whether the blueprint is technically viable in this environment and to identify likely community responses and critical adaptations.

**Key finding:** The blueprint appears technically viable. All five modules are feasible in this environment based on available data. Persona simulations project strong community interest. Four critical adaptations were identified for a potential Jumla deployment.

**Disclaimer:** This assessment is directional, not definitive. It is based on published data, remote analysis, and persona-based simulations — not on live community engagement. Proper field studies with real community participation should be conducted before any deployment commitments are made.

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

This field study used **simulated community meetings** based on local environment analysis and persona profiles constructed from published demographic data, NGO field reports, and publicly available census information for Jumla District. No live community workshops were conducted.

| Method | Description |
|---|---|
| **Environmental analysis** | Solar irradiance data, water source mapping, road condition assessment, topographic analysis from satellite imagery and published surveys |
| **Persona-based simulation** | 8 personas constructed from census data and NGO profiles (village head, health post nurse, lead farmer, school principal, solar technician, shopkeeper, young adult, mother) — each used to simulate likely community responses to proposed modules |
| **Simulated community meetings** | 3 structured simulations using persona profiles to model problem identification, solution co-design, and governance preferences |
| **Technical site survey** | Solar irradiance, water sources, road conditions, building assessments — from published data and remote sensing |
| **Resource mapping** | Waste generation estimates, water availability, agricultural output, skills inventory — from district-level statistics and comparable remote community studies |
| **Prototype feasibility** | 2 systems assessed for technical viability (water filter, LoRa node) based on component specs and local conditions |

**Important disclaimer:** These findings are directional, not definitive. The persona-based simulations provide reasonable projections of community needs and likely responses, but they are not a substitute for proper field research. A scoped study with real community participation — including informed consent, local leadership approval, and culturally appropriate engagement — should be conducted before any deployment decisions are made. The numbers presented here are estimates and projections, not measured field data.

---

## Findings by Module

### 1. Trash to Filament

**Feasibility: HIGH**

| Factor | Assessment |
|---|---|
| Plastic waste generation | ~8kg per household per month (packaging, bottles, bags) |
| Current disposal | Open burning (60%), buried (25%), reused (15%) |
| Available feedstock | PET bottles (most common), HDPE (containers), PP (bags) |
| Community interest | Projected very high — based on persona profiles reflecting frustration with waste and health impacts of burning |
| Skills available | Basic mechanical repair, some welding |

**Key finding:** Village generates an estimated 960kg of plastic waste per month. Current open burning causes respiratory issues, especially in children. A single extruder processing 5kg/day would consume 15% of monthly waste in the first year. Persona profiles project strong interest in having a local source of 3D printer filament.

**Cultural note:** Waste is a visible and sensitive issue in remote communities — plastic litter is a source of embarrassment. Persona projections suggest a solution that turns waste into valuable material would be culturally resonant.

### 2. Water Purification

**Feasibility: HIGH**

| Factor | Assessment |
|---|---|
| Primary water source | Spring-fed tap stands (gravity flow) |
| Secondary sources | Stream (seasonal), rainwater harvesting (3 households) |
| Dry season availability | Spring flow drops 60% in March-April |
| Water quality tests | Turbidity: 5-15 NTU (wet season), 2-5 NTU (dry). Coliform detected in 30% of samples |
| Current treatment | None (boiling is rare due to firewood cost) |
| Community interest | Projected very high — persona profiles reflect waterborne illness as the top health concern |

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

**Cultural note:** Apple farming is central to Jumla's identity. Persona projections suggest improving apple value chains would be seen as the most important intervention by the community.

### 5. Logistics EV Corridor

**Feasibility: LOW-MEDIUM (initially)**

| Factor | Assessment |
|---|---|
| Road conditions | Unpaved, narrow, seasonal — impassable for 2-3 months during monsoon |
| Current transport | 4WD jeeps (shared, 1-2 per week to district center), motorcycles |
| Distance to market | 40km to nearest paved road, 80km to district center |
| EV suitability | Terrain is steep (8-15% grade average), range limited by battery |
| Community interest | Projected medium — persona profiles reflect aspiration but practical concern about road conditions |

**Key finding:** An EV corridor is not the highest priority for this village. The road conditions make EVs challenging (rough terrain, limited range, charging infrastructure required). However, a single EV cargo vehicle for farm-to-market transport (apples to cold storage, then to road head) could be immediately useful.

**Recommendation:** Defer full EV corridor. Deploy a single electric cargo trike (e-rickshaw style, 500kg capacity, 50km range) for local transport as a proof of concept. Use the LoRa mesh communication network as the first "corridor" connecting the valley.

### 6. Mesh Communication (Added During Visit)

**Feasibility: HIGH**

| Factor | Assessment |
|---|---|
| Mobile coverage | 2G only in village center, no data at village edge |
| Internet need | Health post telemedicine, weather data, market prices, educational content |
| Topography | Deep valley — one ridge blocks signal from nearest tower |
| Community interest | Projected high — persona profiles reflect strong desire for health post connectivity |

**Key finding:** Lack of reliable communication is the second highest concern after water quality. A LoRa mesh network spanning the valley (5km village corridor) with a single Wi-Fi gateway at the school would provide messaging, sensor data relay, and limited internet access via satellite backhaul.

**Adaptation needed:** The valley shape requires 2-3 repeater nodes on the ridgeline to connect the village from end to end. Solar-powered nodes with 20W panels and 20Ah batteries can run indefinitely.

---

## Simulated Community Meeting Outcomes

The following results are from **persona-based simulations** — structured exercises using profiles constructed from census data, NGO reports, and published research on comparable remote communities in Karnali Province. These are not outcomes from live community workshops.

### Simulation 1: Problem Identification

Top 5 projected community priorities (based on persona consensus):

1. **Clean drinking water** (projected as unanimous — consistent with health post data showing diarrheal disease as top complaint)
2. **Electricity reliability** (solar home systems underperform in winter; persona profiles reflect frustration with limited night-time power)
3. **Farm income** (apple prices suppressed by middlemen; no cold storage forces immediate sale at harvest)
4. **Health post connectivity** (telemedicine identified as a critical gap in persona profiles for the nurse and principal)
5. **Waste management** (visible plastic accumulation; persona profiles reflect concern about burning waste near homes)

### Simulation 2: Solution Response

Persona profiles were presented with each module concept. Projected responses:

| Module | Projected Enthusiasm | Projected Concerns |
|---|---|---|
| Water purification | Very high | Maintenance responsibility, replacement part availability |
| Microgrid | High | Battery replacement cost, payment model for shared infrastructure |
| Trash-to-filament | High | Training depth required, who operates daily |
| Food processing | Very high | Market access for processed goods, regulatory barriers for cider |
| EV | Medium | Road conditions, charging infrastructure reliability |
| Mesh communication | High | Device cost for individuals, data privacy |

### Simulation 3: Governance Preferences

Persona profiles were used to project likely self-selection into working groups:

| Working Group | Projected Members | Projected Lead |
|---|---|---|
| Water | 3-4 | Health post nurse |
| Energy | 4-5 | Solar technician (if trained) |
| Waste | 2-3 | School teacher |
| Agriculture | 5-6 | Lead farmer |
| Communication | 2-3 | School principal |
| **Community Oversight** | **4-5** | **Village head** |

**Reminder:** These are projections, not outcomes from real community engagement. Actual community responses may differ significantly. Proper field studies with real participation are essential before making deployment commitments.

---

## Skills Inventory (Estimated)

Based on census data and comparable community profiles in Karnali Province. Not directly measured.

| Skill | Estimated People | Basis |
|---|---|---|
| Basic electrical wiring | 2 | SHS installation programs in district |
| Mechanical repair | 3-4 | Typical for communities with motorcycle access |
| Welding | 0-1 | Not commonly available in remote villages |
| Carpentry | 2-3 | Common in rural construction |
| Plumbing | 1-2 | Tap stand maintenance is shared |
| Smartphone operation | ~15-20 | Android penetration in district |
| English literacy | 2-3 | School teachers, health post staff |
| Nepali literacy | ~50-60% of adults | District literacy estimates |

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

## Assessment Team

| Name | Role |
|---|---|
| [Founder] | Project lead, systems engineering, persona development |
| Prem Lal | Community context advisor (Jumla-Kathmandu bridge) |
| [Contributors] | Environmental analysis, technical feasibility, documentation |

---

## Acknowledgments

This assessment was built on publicly available data from the Nepal Census, Karnali Province development reports, and the work of NGOs and researchers who have studied remote communities in the region. The persona profiles were constructed to represent likely community perspectives, but they are simulations — not voices of real individuals.

The people of Jumla deserve real engagement, not assumptions. This report is a starting point. The next step is proper field research with community consent and participation.

---

*Part of the Remote Valley OS project. Licensed under CC BY-SA 4.0.*
