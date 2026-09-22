# Bermuda Compliance Navigator

An independent educational project by Daniel Khisa for exploring Bermuda regulatory frameworks, conditional filing guidance and application drafts.

**Live platform:** [Bermuda Compliance Navigator](https://dankhisa.github.io/bermuda-compliance-navigator/)

**Portfolio:** [Daniel Khisa](https://dankhisa.github.io/)

## What it does

- Offers framework, obligations and application-preparation views.
- Uses a 161-entry static knowledge base with source links and dated review metadata.
- Distinguishes selected insurer classes, DABA licences, investment licence conditions and unknown facts.
- Separates current requirements, future compliance dates and consultation proposals.
- Provides tentative calendars for supported year-end rules and five editable preparation templates.
- Preserves local bookmarks and quarantines overlays that could mask shipped corrections.

## Coverage

Detailed workflows concern the selectable single insurer classes. Other sectors have framework-level coverage only. IILT, other innovative classes, group and dual-registration profiles are not supported. Entity exemptions and supervisory directions need independent confirmation.

Year-end calculations are limited to supported 2025–2026 periods; event-driven, conditional and imported dates are excluded. Fee references support 2026, with separate statutory/BSCR/CISSA/GAAP/FCR extension routes. Unsupported combinations are withheld.

See [VERIFICATION.md](VERIFICATION.md) for the correction record, source-derived cases and unresolved coverage. No external legal sign-off, employer endorsement or regulatory approval is claimed.

## Running and testing

The app is static HTML/CSS/JavaScript with local `kb.js`; no package installation, build step, backend, AI API, password or API key is needed at runtime. Serve this folder with a static web server or use the published platform. Direct-file/offline behaviour remains unverified.

With Node.js installed:

```sh
node tests/regression.test.cjs
```

The 39 automated tests cover schema, scope/fee/date cases, all supported modes, all five insurer tasks, escaping, calendar structure, stored-data preservation and version mismatches. New cases exercise the actual wizard transition, task isolation, PCC preparation gates, saved task identity and clipboard fallback. Desktop browser checks cover all five letters, editing, PCC disclosure and save/reload/reopen. Mobile PCC/report layout and keyboard disclosure were checked at 390 × 844; native copy/paste was checked on a local test page. These targeted checks do not constitute exhaustive accessibility testing. Print/direct-file behaviour remains unverified.

## Privacy and local updates

The runtime sends no API requests and has no analytics or remote scripts. Bookmarks and explicitly imported updates stay in browser storage. Exports may contain the prepared-by information entered by the user; keep them private. Do not enter personal certificates or confidential entity records.

Legacy overlays remain stored but inactive. Open Knowledge Base to export preserved data or inspect a field-level comparison before explicitly merging selected entries. New overlays are tied to the shipped baseline; older overrides cannot silently mask published corrections. Imports are user-supplied, not legally endorsed. Bookmarks regenerate current reports rather than freeze historical advice.

## Maintenance and sources

Version **2.3.0**, 22 September 2026. This release fixes request selection being reset to the previous task, strengthens all five draft letters and adds conditional PCC preparation guidance. Original research date: **2 July 2026**. Software/editorial release dates do not reverify every entry. Read [SOURCES.md](SOURCES.md), [VERIFICATION.md](VERIFICATION.md) and [CHANGELOG.md](CHANGELOG.md).

Publish only the selected runtime, documentation, tests and preview assets. Private prompts, research downloads, local exports and career information do not belong in the public repository. Social preview source and PNG are in `assets/`.

This is general educational information, not legal, regulatory, actuarial, tax or other professional advice. Confirm current primary materials and entity applicability before acting or filing.
