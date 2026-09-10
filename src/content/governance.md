# Governance Model — How Remote Valley OS Makes Decisions

**This project belongs to the community. Decisions are made openly, transparently, and with the people who do the work.**

---

## Principles

### Open by default
All decisions, discussions, and processes are public unless there is a specific reason for confidentiality (e.g., security vulnerabilities or Code of Conduct enforcement).

### Those who do the work have a voice
Governance is not based on titles or funding. It is based on contribution. The people who build, document, and maintain the systems shape the direction of the project.

### Local communities have final say on local matters
Decisions about Jumla and future deployment sites are made with the consent of the local community. External contributors advise. Community members decide.

### Consensus-seeking, not voting-first
We seek rough consensus before resorting to formal votes. Discussion, iteration, and compromise are preferred. Votes are a last resort.

### Fork-friendly
Anyone who disagrees with a decision is free to fork any repository and take it in a different direction. This is not a failure. This is open source working as intended.

---

## Roles

### Community Member
Anyone who participates in the project — opening issues, commenting on discussions, using the designs, adapting the blueprint.

**Rights:** Participate in discussions, submit issues and pull requests, attend community calls.

### Contributor
Anyone who has had a pull request merged into any repository.

**Rights:** All community member rights, plus: label issues, assign themselves to issues, vote in governance decisions, nominate others for maintainer roles.

### Module Maintainer
A contributor who has demonstrated sustained, high-quality contributions to a specific module repository (e.g., rv-energy-microgrid, rv-waste-filament).

**Responsibilities:**
- Review and merge pull requests for their module
- Triage issues
- Maintain documentation quality
- Mentor new contributors
- Represent their module in cross-module discussions

**Appointment:** Nominated by existing maintainers and confirmed by a majority vote of all module maintainers. Term: 12 months, renewable.

### Core Maintainer
A maintainer who oversees cross-module integration, overall architecture, and project direction.

**Responsibilities:**
- Maintain the rv-os-manifest and version compatibility
- Oversee release management
- Facilitate cross-module decisions
- Represent the project to partners and funders
- Ensure governance processes are followed

**Appointment:** Nominated by any two core maintainers and confirmed by a 2/3 majority vote of all maintainers. Term: 12 months, renewable.

### Community Representative (Deployment Sites)
A person elected by the local community at a deployment site (e.g., Jumla) to represent their interests in project governance.

**Responsibilities:**
- Voice community needs and concerns
- Participate in decisions that affect the deployment site
- Approve or reject planned changes that impact the local community
- Report back to the community on project decisions

**Appointment:** Elected by the local community. Term and process determined by the community.

### Master Trainer
A local operator who has achieved the highest level of the education pipeline and is certified to train others.

**Responsibilities:**
- Approve curriculum changes for their module
- Certify Operators and Technicians
- Report field-verified improvements to module maintainers
- Mentor new residents on local context

**Appointment:** Certified through the education pipeline. Not a time-limited role, but can be revoked by the community if standards are not maintained.

---

## Decision-Making

### Types of Decisions

| Type | Who Decides | Process |
|---|---|---|
| Day-to-day module work | Module maintainer | Normal review process |
| New module creation | Core maintainers + affected maintainers | Proposal → discussion → consensus |
| Version release | Core maintainers | Release branch → testing → tag |
| Module API/architecture change | Module maintainer + affected maintainers | RFC issue → 14 day comment → merge |
| Governance change | All maintainers + community representatives | RFC issue → 30 day comment → vote |
| Community expulsion | Core maintainers + Code of Conduct team | Private investigation → consensus → documented |
| Deployment site decision | Local community + community representative | Local process, project supports |

### RFC Process (Request for Comments)

For significant changes (new modules, architecture changes, governance changes):

1. **Proposal** — Open an issue with a detailed RFC
2. **Comment period** — Minimum 14 days for technical RFCs, 30 days for governance RFCs
3. **Revision** — Incorporate feedback, update the RFC
4. **Decision** — Maintainers announce the decision with rationale
5. **Implementation** — RFC is accepted, rejected, or tabled

### Voting

Voting is a last resort. When needed:

- **Standard vote:** Simple majority (50% + 1) of eligible voters
- **Governance change:** 2/3 majority of core maintainers + community representatives
- **Minimum participation:** At least 50% of eligible voters must participate for a vote to be valid
- **Voting period:** 7 days for standard, 14 days for governance changes
- **Method:** Public vote on GitHub issue or discussion

### Tie-breaking

In the case of a tie, the core maintainers collectively break the tie. If core maintainers are also tied, the decision is tabled for 30 days and revisited.

---

## Release Process

```
                         ┌──────────┐
                         │  develop │
                         │  branch  │
                         └────┬─────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │ Feature branches │
                    │ merge to develop │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │ Release branch   │
                    │ cut from develop │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │ Final testing    │
                    │ Documentation    │
                    │ Translation      │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │ Merge to main    │
                    │ Tag version      │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │ Publish release  │
                    │ Notify community │
                    │ Update manifest  │
                    └──────────────────┘
```

### Version Numbering

We follow semantic versioning: **MAJOR.MINOR.PATCH**

| Bump | When |
|---|---|
| MAJOR | Breaking change or new system module added |
| MINOR | New feature, non-breaking improvement |
| PATCH | Bug fix, documentation correction |

Pre-release stages: `-dev`, `-alpha`, `-beta`, `-rc1`, `-rc2` before stable.

### Compatibility Manifest

The `rv-os-manifest` repository tracks which module versions are compatible with each other. No release is marked stable until the compatibility manifest has been updated and tested.

---

## Conflict Resolution

### Between contributors
Start with a direct conversation. If that fails, escalate to the module maintainer.

### Between maintainers
Start with a discussion on the relevant issue or pull request. If that fails, escalate to the core maintainers.

### Involving community members
If a decision affects a deployment site, the Community Representative must be included. Their input carries weight equal to a maintainer's vote.

### Unresolvable conflicts
If consensus cannot be reached after good-faith efforts, the core maintainers make a final decision with a written rationale.

---

## Transparency

- All governance discussions happen in public GitHub issues or discussions
- All maintainer meetings have published notes
- All decisions affecting deployment sites are communicated to the community representative before implementation
- All financial decisions (funding, spending, stipends) are documented in a public register

---

## Amendments

This governance document can be amended through the RFC process with 30 days of public comment followed by a 2/3 majority vote of core maintainers and community representatives.

---

## License

This governance model itself is open source. It is adapted from best practices in open-source communities including Kubernetes, Django, and Node.js. Anyone is free to use, adapt, and improve it.

---

*Part of Remote Valley OS — an open-source project by Mountaineer.fi*
