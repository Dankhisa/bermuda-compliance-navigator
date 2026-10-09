# Bermuda Compliance Navigator

An independent educational project by Daniel Khisa for exploring Bermuda regulatory frameworks, conditional filing guidance and application drafts.

**Live platform:** [Bermuda Compliance Navigator](https://dankhisa.github.io/bermuda-compliance-navigator/)

**Portfolio:** [Daniel Khisa](https://dankhisa.github.io/)

## What it does

- Separates three user journeys: a detailed regulatory regime map, an operational obligations-and-filings workplan, and task-specific application preparation.
- Uses a 162-entry static knowledge base with source links and dated review metadata. Of the original 161 entries, 159 are unchanged since 2.4.0; the two Scenario-Based Approach entries were corrected in 2.9.0 with owner approval.
- Gives every selectable insurer class and non-insurer entity type a source-labelled background in the regulatory overview. Version 2.8.0 adds business context, licence and registration routes, key terms and dated counts, alongside the CI/SPI comparison profiles introduced earlier.
- Version 2.9.0 adds a Scenario-Based Approach (SBA) topic deep-dive to the overview for Classes C, D and E.
- Version 2.11.0 softens review-status and filing-extension wording, adds dated notes to the ALS Bill entry, and states the corporate income tax scope limit; it adds no new regulatory coverage.
- Version 2.10.0 adds three topic deep-dives with learning checklists: the solvency self-assessment (CISSA and GSSA), the Operational Resilience and Outsourcing Code, and Police Clearance Certificates and Key Person vetting.
- Distinguishes selected insurer classes, DABA licences, investment licence conditions and unknown facts.
- Separates current requirements, future compliance dates and consultation proposals.
- Provides tentative calendars for supported year-end rules and five editable preparation templates.
- Preserves local bookmarks and quarantines overlays that could mask shipped corrections.

## Coverage

Detailed workflows concern the selectable single insurer classes. Other sectors have framework-level coverage only. IILT, other innovative classes, group and dual-registration profiles are not supported. Entity exemptions and supervisory directions need independent confirmation.

The Class background pilot covers full profiles for Collateralized Insurer and Special Purpose Insurer, including their comparison table. The other 12 selectable insurer classes have:
- an evidence-led shared timeline
- class-specific origin, official context, statutory tests and neighbouring-class distinctions
- BMA registration counts and 2024 class statistics
- from 2.8.0, a "How it is used in practice" section, key terms and stated limits

Captive-return, P&C catastrophe (3B/4) and long-term (C/D/E) study figures are labelled as combined cohorts where the BMA does not split them. Balance-sheet totals are distinguished from statutory classification measures. The profiles do not duplicate a full prudential or filing matrix.

Non-insurer selections now have full entity backgrounds: intermediary; investment business; trust; corporate service provider; bank and deposit company; fund administration; money service business; and DABA Classes F, M and T. Each sets out the licence classes, registration or exemption routes, and activities from primary law, as sub-sections. These describe routes; they do not decide which route applies to an entity. Flagged points remain visible:
- the BMA's intragroup insurance-manager comment
- a BMA licensing page that still cites a repealed fund-administration route
- the owner-resolved MSB exemption note
- the DABA Class T appeal question

Class E presents section 4EF and the BMA's differing descriptions separately, without deciding a registration class or discussing an exact-boundary case. The SPI audit comparison distinguishes unaudited GAAP statements in a restricted SPI's return from the Act's audited Statutory Financial Statements and directs users to confirm the interaction with Bermuda counsel or the BMA. Profiles do not determine registration eligibility or change the existing obligations, fees, calendars or templates.

The SBA topic deep-dive (from 2.9.0) explains the Scenario-Based Approach for long-term liabilities:
- its origin and the 2024 rules
- BMA approval and the asset categories that need separate approval
- technical and governance requirements, fees and dated developments
- a labelled comparison with the Solvency II matching adjustment

Requirements are cited to Schedule XXVI of the Class C, D and E Solvency Rules; BMA commentary and industry views are labelled separately. The card is context only: it does not decide whether an insurer may use the SBA. The final scope of grandfathering is flagged for confirmation because the BMA's November 2023 stakeholder letter was not retrieved.

The 2.10.0 topic deep-dives appear only in the regulatory landscape overview, for the profiles each instrument covers:
- **Solvency self-assessment (CISSA and GSSA):** Classes 3A, 3B, 4, C, D and E. Group material is marked as background reading, because group profiles are not supported.
- **Operational Resilience and Outsourcing Code:** the entities listed in the Code's scope paragraph, with a one-line scope note for other listed profiles.
- **Police Clearance Certificates and Key Person vetting:** every supported sector, including DABA Classes F, M and T.

Each card separates law and BMA instruments from BMA expectations, dated BMA observations, official commentary and international standards. Conflicting texts and points not established are labelled.

Each card has a learning checklist. It filters by profile, basis and optional study facts. You can give each item a study status (Not reviewed, Reviewing, Understood, Not applicable to my study) and an optional note of up to 280 characters. The checklist exports to CSV, Markdown or print with the reliance notice.
- It is a study aid. It produces no score and is not evidence of compliance.
- Checklist state is saved only with an assessment bookmark.

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

The regression tests cover schema, scope/fee/date cases, all supported modes, information-architecture separation, all five insurer tasks, escaping, calendar structure, stored-data preservation and version mismatches. Class-background cases cover:
- claim sources, primary-law qualification and shared-history fingerprinting
- overview-only rendering and dated market denominators
- the SPI audit wording, attributed Class E descriptions and import labelling
- preservation of the 161-entry baseline

Version 2.8.0 adds cases for:
- claim-text parity across all selections
- business-context evidence and wording rules, and short-quote limits
- route sub-sections, carried-over claims and flagged notes
- a fingerprint that keeps the CI/SPI profiles unchanged without owner approval

Version 2.9.0 adds cases for the SBA card's schema and evidence rules, overview-only placement for Classes C, D and E, import rejection, and the two corrected entries.

Version 2.10.0 adds cases for:
- the topic and checklist schemas, primary-source support for requirement items and dated observations
- scope-correct rendering across all 24 selections
- checklist filters, study facts and wording without scores
- export notices and escaping, and bookmark round trips with rejection of malformed state
- print notices, the security policy, and pinned fingerprints for the SBA card, the 162 entries and the original source register

See VERIFICATION.md for the latest exact test count and browser checks actually observed. These tests do not constitute accessibility or legal sign-off.

## Privacy and local updates

The runtime sends no API requests and has no analytics or remote scripts; a Content Security Policy blocks network connections and external scripts. Bookmarks and explicitly imported updates stay in browser storage. Learning-checklist statuses and notes stay in the page unless you save the assessment, and leave the device only if you export them. Exports may contain the prepared-by information entered by the user; keep them private. Do not enter personal certificates or confidential entity records.

Legacy overlays remain stored but inactive. Open Knowledge Base to export preserved data or inspect a field-level comparison before explicitly merging selected entries. New overlays are tied to the shipped baseline; older overrides cannot silently mask published corrections. Imports are user-supplied, not legally endorsed. Bookmarks regenerate current reports rather than freeze historical advice.

Pilot profile imports are limited to the existing CI/SPI IDs and shipped source register. They are validated, internally flagged for review, and visibly marked user-supplied/unendorsed. Imports cannot replace the shipped comparison or source catalogue.

## Maintenance and sources

Release version **2.11.0**, 9 October 2026, authorised for publication by the owner. The owner approved the 2.11.0 wording and metadata changes as editorial copy. Version 2.10.0 (27 September 2026) was authorised for publication by the owner after the owner approved the three topic deep-dives and their learning checklists as editorial copy. No counsel sign-off or legal opinion is claimed. The 162 entries, the SBA card, the CI/SPI profiles and every calculation, fee, calendar and application rule are unchanged. The previous release, 2.9.0, added the Scenario-Based Approach deep-dive and corrected its two related entries. Original entry research date: **2 July 2026**. Software/editorial release dates do not reverify every entry. Read [SOURCES.md](SOURCES.md), [VERIFICATION.md](VERIFICATION.md) and [CHANGELOG.md](CHANGELOG.md).

Publish only the selected runtime, documentation, tests and preview assets. Private prompts, research downloads, local exports and career information do not belong in the public repository. Social preview source and PNG are in `assets/`.

This is general educational information, not legal, regulatory, actuarial, tax or other professional advice. Confirm current primary materials and entity applicability before acting or filing.
