# Contributing to Remote Valley OS

**Welcome. We are glad you are here.**

Remote Valley OS is an open-source project built by people like you. Every contribution — whether a line of code, a translation, a bug report, or a typo fix — makes the project stronger and helps remote communities around the world.

This guide will help you get started.

---

## Code of Conduct

All contributors must follow our [Code of Conduct](CODE_OF_CONDUCT.md). Be respectful. Be constructive. Assume good faith.

---

## Quick Start

```
1. Find an issue that interests you
2. Fork the repository
3. Create a branch
4. Make your changes
5. Submit a pull request
6. Respond to review feedback
7. Get merged. Get credited.
```

---

## Finding Something to Work On

### Good First Issues

Look for issues labeled **`good-first-issue`** in any repository. These are small, well-scoped tasks with clear instructions.

### Help Wanted

Issues labeled **`help-wanted`** need contributors. They may be larger or require specific skills.

### Accelerator Tasks

Browse the **`rv-accelerator`** repository for curated tasks organized by skill type and estimated effort.

### Propose Your Own

If you see something missing that you want to build, open an issue and describe what you want to do. We will discuss it with you.

---

## Standard Contribution Workflow

### Step 1: Fork and Clone

Fork the repository on GitHub, then clone your fork locally.

```bash
git clone https://github.com/YOUR-USERNAME/mountaineerfi-remote-valley-os.git
cd mountaineerfi-remote-valley-os
git remote add upstream https://github.com/FUMFGRP/mountaineerfi-remote-valley-os.git
```

### Step 2: Create a Branch

Create a branch with a descriptive name.

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-number
# or
git checkout -b docs/scope
```

### Step 3: Make Your Changes

Make your changes. Follow the conventions of the existing code or documentation.

**For code changes:**
- Follow the existing style and patterns
- Include comments where complex logic is unavoidable
- Write tests if applicable
- Update documentation if your change affects usage

**For documentation changes:**
- Use Markdown with consistent formatting
- Keep language simple and accessible (high school English level)
- Include visual aids where helpful (diagrams, screenshots, flowcharts)
- Add translations if you can

### Step 4: Commit

Write clear commit messages.

```bash
git add .
git commit -m "Brief summary of what changed"
```

**Good commit messages:**
- "Add solar panel angle calculation for frost clearance"
- "Fix extruder temperature calibration off by 5°C"
- "Translate water filter manual to Nepali"

### Step 5: Push and Open a Pull Request

```bash
git push origin feature/your-feature-name
```

Then open a pull request on GitHub against the **`develop`** branch of the original repository.

### Step 6: PR Description

Your pull request description should include:

- **What** you changed
- **Why** you changed it (link to the issue if applicable)
- **How** it was tested (for code or hardware changes)
- **Screenshots** or diagrams if relevant
- **@mentions** of any reviewers you think should see it

### Step 7: Review

All pull requests require review before merging.

- Respond to reviewer feedback
- Make requested changes
- Be patient — reviewers are volunteers too
- If a review is taking too long, gently ping the thread

### Step 8: Merge

Once approved, a maintainer will merge your PR. You are now an official contributor.

---

## Branch Strategy

| Branch | Purpose | Base Branch |
|---|---|---|
| `main` | Stable releases only. Tagged with version numbers. | — |
| `develop` | Integration branch for current development cycle. | — |
| `feature/*` | New features. Created from `develop`. | `develop` |
| `fix/*` | Bug fixes. Created from `develop`. | `develop` |
| `docs/*` | Documentation updates. Created from `develop`. | `develop` |
| `release/*` | Release preparation branches. | `develop` |

Always open pull requests against **`develop`**, not `main`.

---

## What to Work On (by Repository)

| Repository Type | What Needs Help |
|---|---|
| **Module repos** (rv-energy-microgrid, rv-waste-filament, etc.) | Hardware designs, BOMs, firmware, documentation, translations |
| **rv-os-core** | API endpoints, sensor ingestion, dashboard components |
| **rv-local-llm** | Training data preparation, model quantization, Nepali language data |
| **rv-education-pipeline** | Training modules, assessments, translations, illustrations |
| **rv-accelerator** | Task curation, contributor onboarding, documentation |
| **rv-adaptations** | Adaptation templates, regional assessments, case studies |
| **rv-os-docs** | Overall documentation quality, cross-references, consistency |

---

## File Naming Conventions

| File Type | Convention | Example |
|---|---|---|
| Module documentation | docs/OPERATOR_MANUAL.md | docs/OPERATOR_MANUAL.md |
| Training modules | docs/TRAINING_MODULE.md | docs/TRAINING_MODULE.md |
| Troubleshooting | docs/TROUBLESHOOTING.md | docs/TROUBLESHOOTING.md |
| Translations | docs/translations/{lang-code}/ | docs/translations/ne/ |
| Images | assets/images/ | assets/images/extruder-diagram.png |
| Hardware designs | hardware/ | hardware/shredder-v2.step |

---

## Review Process

| Change Type | Reviewers Required | Notes |
|---|---|---|
| Documentation | 1 module maintainer | Fast-tracked for simple changes |
| Translation | 1 native speaker + 1 maintainer | Native speaker verifies accuracy |
| Software / firmware | 1 module maintainer | CI must pass |
| Hardware design | 2 maintainers | Safety-critical: requires extra review |
| Curriculum / assessment | 1 Master Trainer + 1 maintainer | Must be field-verifiable |
| Governance / policy | Organization-wide discussion | Open issue for 14 days minimum |

---

## Getting Help

- **Open a discussion:** github.com/FUMFGRP/mountaineerfi-remote-valley-os/discussions
- **Tag a maintainer:** If you are stuck on an issue, ask for help in the comments
- **Email:** accelerator@mountaineer.fi
- **Monthly community call:** Join the live video meetup — details posted in Discussions

---

## Recognition

Every contributor is credited in:

- The repository's CHANGELOG.md
- The organization-wide CONTRIBUTORS.md
- Release announcements and monthly updates

We celebrate your work. You are part of this project.

---

*Part of Remote Valley OS. Licensed under open-source hardware and software licenses.*
