# Security Policy

**We take the security of Remote Valley OS seriously. Remote communities depend on these systems. If you find a vulnerability, we want to know about it responsibly.**

---

## Reporting a Vulnerability

Please do **not** report security vulnerabilities through public GitHub issues, discussions, or pull requests.

Instead, send a detailed report to **security@mountaineer.fi**.

### What to Include

- **Description** of the vulnerability and the potential impact
- **Steps to reproduce** — precise, step-by-step instructions
- **Affected systems** — which repository, module, firmware version, or hardware
- **Proof of concept** if available (code, screenshots, logs)
- **Your contact information** for follow-up questions

### What to Expect

| Timeframe | Action |
|---|---|
| 24 hours | Acknowledgment of receipt |
| 72 hours | Initial assessment and severity classification |
| 7 days | Proposed fix timeline or request for more information |
| Per timeline | Fix developed, tested, and deployed |

We will keep you informed throughout the process.

---

## Scope

### In Scope

- All repositories under [FUMFGRP/mountaineerfi-remote-valley-os](https://github.com/FUMFGRP/mountaineerfi-remote-valley-os) on GitHub
- Firmware running on deployed hardware (sensor nodes, mesh nodes, charge controllers)
- RV-OS core API and data pipelines
- Local LLM deployment and data handling
- Documentation that, if followed, could lead to unsafe system operation

### Out of Scope

- Physical security of deployment sites (report via community channels)
- Social engineering against community members (report via conduct@mountaineer.fi)
- Third-party dependencies with known vulnerabilities (report to the dependency maintainer first)
- Issues requiring physical access that have no remote exploit vector

---

## Vulnerability Classification

| Severity | Definition | Response Time |
|---|---|---|
| **Critical** | Remote code execution, data breach, system compromise | Emergency patch within 48 hours |
| **High** | Unauthorized access, privilege escalation, persistent data loss | Patch within 7 days |
| **Medium** | Limited data exposure, denial of service under specific conditions | Patch within 30 days |
| **Low** | Minor information disclosure, best-practice violations | Patch within next release cycle |

---

## Our Commitment

- We will acknowledge your report within 24 hours
- We will keep you updated on progress
- We will credit you in the fix announcement (unless you prefer to remain anonymous)
- We will not take legal action against good-faith security research
- We will handle your report confidentially throughout the process

---

## Safe Harbor

We consider security research conducted under this policy to be:

- Authorized under the Computer Fraud and Abuse Act (and equivalent laws in other jurisdictions)
- Exempt from our Code of Conduct reporting process when conducted in good faith
- A valuable contribution to the project

You are expected to:
- Make a good faith effort to avoid privacy violations and service disruption
- Not access or modify data beyond what is necessary to demonstrate the vulnerability
- Delete any data obtained during research after reporting

---

## Preferred Encryption

For sensitive reports, use PGP encryption.

**PGP Key Fingerprint:** [key fingerprint to be published when infrastructure is set up]

**Key available at:** [keyserver URL to be added]

---

## Community Notification

After a vulnerability is resolved, we will publish:

- A security advisory on GitHub
- An announcement in the community discussion forum
- Updated installation and configuration guidance if needed
- Credit to the reporter (unless they prefer anonymity)

---

## Questions

If you have questions about this policy, email **security@mountaineer.fi**.

---

*Part of Remote Valley OS — an open-source project by Mountaineer.fi*
