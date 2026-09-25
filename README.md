# Bermuda Compliance Navigator

An independent educational project by Daniel Khisa for exploring Bermuda regulatory frameworks, conditional filing guidance and application drafts.

**Live platform:** [Bermuda Compliance Navigator](https://dankhisa.github.io/bermuda-compliance-navigator/)

**Portfolio:** [Daniel Khisa](https://dankhisa.github.io/)

## What it does

- Separates three user journeys: a detailed regulatory regime map, an operational obligations-and-filings workplan, and task-specific application preparation.
- Uses a 162-entry static knowledge base with source links and dated review metadata; the original 161 entries retain their 2.4.0 fingerprint.
- Adds source-labelled CI and SPI class-background research, owner-approved editorial backgrounds for the other selectable insurer classes, and sector context cards for reviewed non-insurer types in version 2.7.4.
- Distinguishes selected insurer classes, DABA licences, investment licence conditions and unknown facts.
- Separates current requirements, future compliance dates and consultation proposals.
- Provides tentative calendars for supported year-end rules and five editable preparation templates.
- Preserves local bookmarks and quarantines overlays that could mask shipped corrections.

## Coverage

Detailed workflows concern the selectable single insurer classes. Other sectors have framework-level coverage only. IILT, other innovative classes, group and dual-registration profiles are not supported. Entity exemptions and supervisory directions need independent confirmation.

The Class background pilot covers full profiles for Collateralized Insurer and Special Purpose Insurer. The other 12 selectable insurer classes have an evidence-led shared timeline plus class-specific origin, official context, statutory tests, neighbouring-class distinctions and BMA 2025 registration counts. Five have dated captive-return observations; the 3B/4 and C/D/E studies are linked as combined cohorts, not misattributed to one class. They remain shorter than the CI/SPI pilot and do not duplicate a full prudential or filing matrix. Class E presents section 4EF and the BMA's differing descriptions separately, without deciding a registration class or discussing an exact-boundary case. The SPI audit comparison distinguishes unaudited GAAP statements in a restricted SPI's return from the Act's audited Statutory Financial Statements and directs users to confirm the interaction with Bermuda counsel or the BMA. Profiles do not determine registration eligibility or change the existing obligations, fees, calendars or templates.

The overview's dated horizon includes an as-tabled 2026 Insurance Amendment Bill for Classes C, D and E. It is labelled a proposal, not an operative filing duty, and links from those class backgrounds to one shared horizon entry. The existing asset-and-liability-statement rule treatment remains separate.

The IIGB Market footprint attributes both figures in the BMA 2025 Annual Report: eight licences in its all-insurers table and seven fully licensed IIGB entities in its Digital Finance Supervision narrative. Possible causes mentioned parenthetically are expressly editorial hypotheses, not BMA findings; the difference remains unexplained and neither figure is presented as a live register total.

Year-end calculations are limited to supported 2025–2026 periods; event-driven, conditional and imported dates are excluded. Fee references support 2026, with separate statutory/BSCR/CISSA/GAAP/FCR extension routes. Unsupported combinations are withheld.

See [VERIFICATION.md](VERIFICATION.md) for the correction record, source-derived cases and unresolved coverage. No external legal sign-off, employer endorsement or regulatory approval is claimed.

## Running and testing

The app is static HTML/CSS/JavaScript with local `kb.js`; no package installation, build step, backend, AI API, password or API key is needed at runtime. Serve this folder with a static web server or use the published platform. Direct-file/offline behaviour remains unverified.

With Node.js installed:

```sh
node tests/regression.test.cjs
```

The regression tests cover schema, scope/fee/date cases, all supported modes, information-architecture separation, all five insurer tasks, escaping, calendar structure, stored-data preservation and version mismatches. Class-background cases cover claim sources, primary-law qualification, shared-history fingerprinting, overview-only rendering, dated market denominators, the SPI audit wording, attributed Class E descriptions, import labelling and preservation of the 161-entry baseline. See VERIFICATION.md for the latest exact test count and browser checks actually observed. These tests do not constitute accessibility or legal sign-off.

## Privacy and local updates

The runtime sends no API requests and has no analytics or remote scripts. Bookmarks and explicitly imported updates stay in browser storage. Exports may contain the prepared-by information entered by the user; keep them private. Do not enter personal certificates or confidential entity records.

Legacy overlays remain stored but inactive. Open Knowledge Base to export preserved data or inspect a field-level comparison before explicitly merging selected entries. New overlays are tied to the shipped baseline; older overrides cannot silently mask published corrections. Imports are user-supplied, not legally endorsed. Bookmarks regenerate current reports rather than freeze historical advice.

Pilot profile imports are limited to the existing CI/SPI IDs and shipped source register. They are validated, internally flagged for review, and visibly marked user-supplied/unendorsed. Imports cannot replace the shipped comparison or source catalogue.

## Maintenance and sources

Release version **2.7.4**, 25 September 2026, authorised for publication by the owner. The owner approved the 12 class-background texts as editorial copy, including Class E without a requirement for independent counsel review; no counsel sign-off or legal opinion is claimed. This release adds one sourced proposal to the horizon and an attributed IIGB count disclosure while preserving the original 161 entries and their source status. Original entry research date: **2 July 2026**. Software/editorial release dates do not reverify every entry. Read [SOURCES.md](SOURCES.md), [VERIFICATION.md](VERIFICATION.md) and [CHANGELOG.md](CHANGELOG.md).

Publish only the selected runtime, documentation, tests and preview assets. Private prompts, research downloads, local exports and career information do not belong in the public repository. Social preview source and PNG are in `assets/`.

This is general educational information, not legal, regulatory, actuarial, tax or other professional advice. Confirm current primary materials and entity applicability before acting or filing.
