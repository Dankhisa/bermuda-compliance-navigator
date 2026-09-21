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

The 33 automated tests cover schema, source-derived scope/fee/date cases, all supported modes, all five insurer tasks, escaping, calendar structure, stored-data preservation and version mismatches. They use inert DOM fixtures. Fresh browser interaction/mobile/clipboard/download checks for 2.2.0 remain outstanding because the browser approval service blocked the preview. Print/direct-file checks are also outstanding. Historical 2.1.0 checks do not certify this release.

## Privacy and local updates

The runtime sends no API requests and has no analytics or remote scripts. Bookmarks and explicitly imported updates stay in browser storage. Exports may contain the prepared-by information entered by the user; keep them private. Do not enter personal certificates or confidential entity records.

Legacy overlays remain stored but inactive. Open Knowledge Base to export preserved data or inspect a field-level comparison before explicitly merging selected entries. New overlays are tied to the shipped baseline; older overrides cannot silently mask published corrections. Imports are user-supplied, not legally endorsed. Bookmarks regenerate current reports rather than freeze historical advice.

## Maintenance and sources

Version **2.2.0**, 21 September 2026. Original research date: **2 July 2026**. Software/editorial release dates do not reverify every entry. Read [SOURCES.md](SOURCES.md), [VERIFICATION.md](VERIFICATION.md) and [CHANGELOG.md](CHANGELOG.md).

Publish only the selected runtime, documentation, tests and preview assets. Private prompts, research downloads, local exports and career information do not belong in the public repository. Social preview source and PNG are in `assets/`.

This is general educational information, not legal, regulatory, actuarial, tax or other professional advice. Confirm current primary materials and entity applicability before acting or filing.
