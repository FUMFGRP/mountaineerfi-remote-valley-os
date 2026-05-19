# mountaineer.fi

**Peaks, not paperwork.**

Mountaineer.fi is a Himalayan climbing resource and the home of **Remote Valley OS** — an open-source blueprint for self-sufficient, regenerative valley communities.

We operate in three lanes:

| Lane | What We Do |
|---|---|
| **Expeditions** | Dry-priced climbing permits and basecamp access on four Nepalese peaks |
| **Content Archive** | Long-form articles on training, gear, expedition history, and high-altitude science |
| **Remote Valley OS** | Open-source framework for remote community infrastructure — all hardware, software, and documentation free under open-source licenses |

---

## Remote Valley OS

Remote Valley OS is a collection of five interconnected infrastructure systems, field-tested in Jumla, Nepal (May 2026):

- ♻️ **Trash to Filament** — waste plastic → shredded → extruded → 3D printer filament
- 💧 **Water Purification** — pre-filter → membrane → UV → clean drinking water
- ⚡ **Energy Microgrid** — solar + hydro + battery, 24/7 village power
- 🍎 **Food Production** — cold storage, cider press, vinegar, dehydrator
- 🚗 **Logistics EV** — 50km EV corridor with charging stations
- 📡 **Mesh Communication** — LoRa backbone + Wi-Fi clusters + local LLM

All designs are open source. Hardware under **CERN OHL-S**, software under **AGPL-3.0**, documentation under **CC BY-SA 4.0**.

Learn more: [mountaineer.fi/rv-os](https://remotevalley.mountaineer.fi)

---

## Tech Stack

- **Framework:** [Astro](https://astro.build) 4.x
- **UI:** Lit web components + Astro islands
- **Styling:** CSS custom properties (fully themeable)
- **Deployment:** Netlify / Deno Deploy
- **Content:** Markdown + MDX

## Getting Started

```bash
cd odyssey-theme
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## Repository Map

```
odyssey-theme/
├── src/
│   ├── content/          # All content (27+ markdown files)
│   │   ├── modules/      # RV-OS module documentation (7 files)
│   │   └── ...           # Brand, launch, community, and core pages
│   ├── components/       # Reusable UI components (Lit + Astro)
│   ├── layouts/          # Page layout templates
│   ├── pages/            # Route pages (index, about, company/*)
│   └── styles/           # Global styles and theme definitions
├── public/               # Static assets
├── assets/               # Images, logos, brand assets
├── .github/              # Issue templates, CI/CD workflows, funding
└── astro.config.mjs      # Astro configuration
```

---

## Contributing

See [CONTRIBUTING.md](src/content/CONTRIBUTING.md) for full guidelines.

Quick start:
1. Find a `good-first-issue` in any repository
2. Fork and create a branch
3. Submit a pull request against `develop`

---

## License

- **Code:** AGPL-3.0 (see [LICENSE](LICENSE))
- **Documentation:** CC BY-SA 4.0
- **Hardware designs:** CERN OHL-S

---

*Built by climbers, for climbers.*
