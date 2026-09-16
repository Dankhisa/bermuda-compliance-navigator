# Bermuda Compliance Navigator

An educational portfolio project by **Daniel Khisa**, demonstrating how
structured regulatory information can support clear, source-aware workflows.
Built with vanilla HTML, CSS and JavaScript. No installation, build step,
subscription, API key or backend is required.

**Live demonstration:** [Bermuda Compliance Navigator](https://dankhisa.github.io/bermuda-compliance-navigator/)

**Source:** [Dankhisa/bermuda-compliance-navigator](https://github.com/Dankhisa/bermuda-compliance-navigator)

## Who it is for

Risk, compliance and audit professionals exploring a practical regulatory
information tool, and reviewers interested in its design and implementation.
Insurance is the main area of detailed coverage. Other regulated sectors have
framework-level information, with explicit gaps rather than insurer assumptions.

## Features

- A guided entity/profile questionnaire with EXPLAIN, DISTIL and EXECUTE modes.
- A versioned, 156-entry knowledge base with sources, verification labels,
  individual review dates and legal-review status.
- Filing guidance, governance checklists, focus-topic analysis and draft
  correspondence where supported by the selected profile.
- Clearly marked calendar estimates; conditional and unsupported dates are
  excluded, with explanations. No entity-specific extension or exemption is assumed.
- Browser-local assessment bookmarks and reviewed KB updates with import
  validation and change previews.
- Keyboard-operable controls, mobile layouts, copy/export actions and print styling.

## Run locally

1. Download this repository with **Code → Download ZIP** and extract it.
2. Keep `index.html` and `kb.js` in the same folder.
3. Open `index.html` in a modern browser. Core reports use ordinary local scripts
   and have no server dependency. File-origin storage and clipboard behavior
   differ between browsers; direct-file browser verification is still pending.
4. Select **Start Guided Assessment**, choose an entity and objective, and generate
   a report. Read its coverage and verification notes before using any output.

If developing with Python installed, an optional local preview is:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765` and stop the server with Ctrl+C when finished.
The website itself does not need Python or Node.js.

## Design and technology

`index.html` contains the accessible UI, styles and report-generation logic;
`kb.js` contains the regulatory data. Keeping this existing separation makes
content review easier without introducing a build pipeline. Reports are
deterministic: this edition makes no live AI requests and has no analytics.

Imported strings are treated as plain text, source links are limited to HTTPS,
and updates require a matching reviewed preview. Storage failures leave the
shipped knowledge base usable. These controls are tested, not a security certification.

## Privacy

Assessment inputs and local updates stay in the current browser unless you
export them. Do not enter confidential employer, client or entity information.
Exports include the saved information, including the prepared-by field.
Browser storage is not encrypted by this app and is not an audit trail.
Following an external source link visits the named third-party website.
The hosting provider may process ordinary request logs under its own policies.

## Screenshots

Screenshots will be added after deployment verification; none are claimed here.
Use only the shipped demo content and fictional inputs when capturing:

| Capture | What it should show |
|---|---|
| Desktop home | Purpose, three modes and educational-project disclaimer |
| Desktop report | Class E DISTIL report with sources and verification labels |
| Mobile report | Visible navigation and table reflow at approximately 375px |

## Validation

With Node.js installed, run:

```sh
node tests/regression.test.cjs
```

All 16 checks passed for release 2.1.0. They cover schema validation, supported
profiles/modes, escaping, scope boundaries, date arithmetic, calendar formatting,
storage failures, saved-record changes and stale import previews. The tests use
an isolated VM with DOM stubs. Separate browser checks covered report generation,
save/reopen, keyboard/dialog behavior, invalid imports and 375px reflow.

The public GitHub Pages deployment was verified on 16 September 2026 at desktop
and 375px mobile viewport sizes: Class E report generation and invalid-import
rejection passed, the mobile page had no horizontal overflow, and no console
warnings/errors were observed in those flows. This was viewport testing, not a
physical-phone test. Direct-file operation and print-output checks remain
unverified because the automated browser blocks local-file navigation.

## Sources, currency and limitations

The app release is **2.1.0, 16 September 2026**. The original KB research date is
**2 July 2026**; entries have their own review dates. A software release or local
import does not verify the remaining legal content. All legal review is pending.
See [SOURCES.md](SOURCES.md) and [CHANGELOG.md](CHANGELOG.md).

This independent project is not affiliated with or endorsed by the Bermuda
Monetary Authority or any employer. It is general educational information, not
legal, regulatory, actuarial, tax or other professional advice. Verify every
requirement, fee, form and deadline against current official materials and seek
appropriate professional advice before acting. Draft letters contain placeholders
and must be fact-checked. Calendar exports are tentative estimates, not a filing system.
