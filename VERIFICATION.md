# Verification and coverage — release 2.9.0

## 2.9.0 prepublication pass — 25 September 2026

The owner authorised publication of 2.9.0 after approving the SBA deep-dive and the two entry corrections as editorial copy; no counsel sign-off or legal opinion is claimed. The checks below were made on the local candidate and re-run at the release gate.

- **Tests.** `node --check kb.js` passed. `node tests/regression.test.cjs` passed **78/78**, 0 failed and 0 skipped.
- **Baseline fingerprint.** The pinned 161-entry fingerprint was updated deliberately, with owner approval (decision T3), for corrections to `focus-cap-4` and `conseq-sba-unapproved`:
  - 2.4.0 baseline: `2694e758…ab9`
  - new: `ff075125…0a0`
  - The remaining 159 original entries are unchanged and pinned separately: `452483c4…175d`.
- **Rendering.**
  - Compared with the published 2.8.0 files across all 24 selections and three journeys, the only change to existing overview content is a "Related topic" link on Classes C, D and E. No existing claim changed.
  - The corrected consequence entry now appears for Classes C, D and E and no longer appears for Classes 3B and 4 in the modification-request journey.
  - The CI/SPI fingerprint test passes.
- **Browser (locally served).** Desktop and 390 × 844 show no document overflow. The SBA card is listed in the report navigation. No console errors.
- **Release-gate browser checks (locally served Chrome-engine preview, UI-driven).**
  - The Class D overview showed KB v2.9.0, the SBA card, its entry in the report navigation and the "Related topic" link. At 390 × 844 with every SBA disclosure expanded, there was no document-level horizontal overflow.
  - A synthetic bookmark was saved through the UI, the page reloaded, and the bookmark re-opened against KB 2.9.0 with the SBA card. It was removed afterwards.
  - The Class D obligations journey rendered without the SBA card. The modification-request application journey showed the corrected SBA row citing Sch. XXVI paras 28(40)(e) and 30.
  - No console errors were captured.
- **Source links.** On 25 September 2026 all 21 SBA source URLs responded. Two industry pages (Skadden, 4most) refused the basic command-line checker. Skadden loaded with browser request headers, and 4most loaded through a web reader.
- **Print.** Class C, D and E overview PDFs grow from 12 to 20 pages. Full print expansion is kept by owner decision.
- **Sources.** See SOURCES.md. Official PDFs were retained privately and hashed. Rendered pages were used for table figures.
- **Not verified.**
  - The BMA's 30 November 2023 stakeholder letter (final grandfathering) could not be retrieved; the card states this limit. Its title and date are confirmed by the BMA's Q4 2023 Regulatory Update. The BMA consultation index did not list it, and candidate file addresses did not resolve.
  - An earlier Schedule XXVI version could not be compared with the July 2025 re-upload.
  - No legal sign-off is claimed.

# Verification and coverage — release 2.8.0

## Owner-authorised release checks — 25 September 2026

Publication completed from commit `069739f8e520e9012451fa3e1a07d9963227da44` with a [successful GitHub Pages deployment](https://github.com/Dankhisa/bermuda-compliance-navigator/actions/runs/36165665516). All ten checked public files matched the release manifest. In the live checks the site reported KB and app version 2.8.0 with release date 25 September 2026. Backgrounds for Class 3B, Class 4, trust and DABA Class T rendered with the new sections. The Special Purpose Insurer profile rendered unchanged, and no console errors were captured. These observations supersede the prepublication status below.

## 2.8.0 prepublication pass — 25 September 2026

The owner authorised publication of 2.8.0. The owner approved each background batch as editorial copy; no counsel sign-off or legal opinion is claimed.

- **Tests.** `node --check kb.js` passed. `node tests/regression.test.cjs` passed **74/74**, 0 failed and 0 skipped. The original 161-entry SHA-256 fingerprint `2694e7586ca47be93b620c045e1f6774355ab915bcfade97ee00a15cbab3dab9` is unchanged. A pinned fingerprint confirms the CI and SPI profile data and comparison are identical to 2.7.4.
- **Render comparison.** A scripted comparison rendered all 24 selections in all three journeys (72 renders) at each stage. Only the intended overview sections changed. No previously rendered claim text was lost, and no background content appeared in the obligations or application journeys.
- **Browser (locally served Chrome-engine preview).**
  - The sample insurer report opened in the obligations journey, then switched to the overview through the UI. It showed KB v2.8.0, the full Class E background template and the proposal-labelled 2026 Bill horizon item.
  - A synthetic bookmark was saved through the UI, the page reloaded, and the bookmark re-opened against KB 2.8.0 with its focus selections.
  - Overview, obligations and application reports rendered without errors for an insurer, the intermediary, trust and DABA Class T selections.
  - Every changed profile was checked at 390 × 844 with no document-level horizontal overflow.
  - No console errors were observed.
- **Print.** Generated browser-engine PDFs grew by about one to three pages per changed profile. Reference reports: Class E sample 14 pages; CI 10; IIGB 10. Section headings are kept with their content. The Class E sample's final page holds the last next step with the report disclaimer, not a footer alone.
- **Sources.** See SOURCES.md for the sources and point-in-time checks, including:
  - a live conflicting-sources finding for the fund-administration licensing page
  - a moved Government fintech report URL serving an identical file
- **Not verified.** The GUI print-preview dialog; direct-file offline operation; calendar file delivery; a complete successful browser import and merge (invalid-import rejection is covered by regression tests only); an exhaustive accessibility review; comprehensive legal validation.

# Verification and coverage — release 2.7.4

## Owner-authorised release checks — 25 September 2026

Publication completed from commit `167d97946f9199e2bb2396c75e6ff64bc74d8294` with a successful GitHub Pages deployment. All ten checked public files matched the release manifest. Live Chrome checks showed KB 2.7.4, the expanded Class E overview and proposal horizon, and the IIGB count disclosure with its citation; no application errors were captured. These observations supersede the earlier local-only status statements.

The owner authorised publication of 2.7.4. The local Chrome Class E sample rendered its filing estimates and withheld conditional dates; a synthetic assessment saved, survived reload and reopened against 2.7.4. The modification-request selection produced its own report and draft, and the copied clipboard text matched that draft. Invalid JSON was rejected. The calendar export button was exercised, but delivery could not be independently inspected because browser download-history access was blocked; this is retained as a verification limitation. Desktop/mobile and generated-PDF observations from the same runtime are below. GUI print preview, direct-file offline operation, complete successful browser import/merge, and exhaustive accessibility/legal review remain unverified.

The current Insurance Act and the Bermuda Laws annual-law index were checked on 25 September 2026. No section 17AA or enacted Insurance Amendment Act 2026 was found there. This supports retaining the horizon item as an as-tabled proposal; it does not prove the absence of a later parliamentary step or Gazette notice. No operative duty or deadline is inferred. Earlier “not published” records below describe development stages and are superseded by this owner-authorised release.

## 2.7.4 prepublication pass — 25 September 2026

The IIGB parenthesis now uses “different data-compilation cutoffs” instead of the potentially misleading “publication lag.” It remains an explicitly editorial list of possible mechanisms, not a BMA explanation of the eight/seven discrepancy. The note retains both report contexts, citations to pp.38 and 66, and the warning that neither number is a live register count. The BMA Annual Report and the as-tabled 2026 Insurance Amendment Bill URLs both opened in Chrome's PDF viewer on 25 September 2026; the Bill's enactment status was not established by that check and its horizon entry remains a proposal. This is not a full source-currency or legal sign-off.

In a locally served Chrome session, the IIGB overview displayed the note and source label on desktop and at 390 × 844. At 390 pixels the observed document scroll width was 375 pixels, with no document-level horizontal overflow. Chrome's print engine generated local PDF evidence for Class E (12 nonblank pages), CI (10) and IIGB (9), with no page-script errors. The IIGB Market footprint and its citation were visibly together in the rendered print page, and the sampled final pages kept next steps with the disclaimer. The browser GUI print-preview dialog and direct-file offline mode were not independently inspected. `node --check kb.js` passed; `node tests/regression.test.cjs` passed **55/55**, 0 failed and 0 skipped, including the original 161-entry fingerprint. The full manual workflow checklist and legislative-stage review remain outstanding; no push or deployment occurred.

## 2.7.3 qualified IIGB parenthesis — 25 September 2026

The IIGB Market footprint now identifies the Digital Finance Supervision context of the seven-entity narrative and gives run-off treatment, publication lag and active-business versus registered-entity measures only as expressly labelled **editorial possibilities**. The BMA report does not establish any as the cause of its eight/seven figures. Official December 2024 registration statistics contradict the proposed January 2025 Soter example, and the annual table is a fixed report statistic rather than a live registry. `node tests/regression.test.cjs` on 25 September 2026: **55 tests, 55 pass, 0 fail, 0 skipped**; the original 161-entry fingerprint remains unchanged. Calculations and workflows were not changed. No publication or new print-preview claim was made.

## 2.7.2 IIGB count disclosure — 25 September 2026

The IIGB overview's Market footprint now attributes both BMA Annual Report 2025 figures with pp.38 and 66 citations: eight IIGB licences in the all-insurers table and seven fully licensed IIGB entities in the innovation narrative. The report does not establish whether population or cut-off explains the difference. The copy does not give a live register total or change eligibility, obligations or application guidance. A retained copy of the official BMA PDF matched the private SHA-256 manifest, and both pages were inspected and cross-checked in a third-party text rendering. The live BMA URL was not readable through the web reader; reconfirm link health and source currency at the release gate. `node tests/regression.test.cjs` on 25 September 2026: **55 tests, 55 pass, 0 fail, 0 skipped**. The original 161-entry fingerprint remains unchanged. The 2.7.1 print PDFs were not regenerated after this copy-only 2.7.2 change; no new print claim is made. No publication was performed.

## 2.7.1 bounded Bill horizon and print check — 25 September 2026

One 2026 Insurance Amendment Bill entry was added to the overview's Selected Changes & Pending Items for Classes C, D and E and linked from those class backgrounds. The source is the House of Assembly's as-tabled Bill, not enacted law. Proposed s.17AA, s.18A consequences and the proposed deemed commencement are labelled conditional on enactment; the item creates no new calculated date, operative filing rule, obligations-journey text or application step. The existing 2025 prudential-rules ALS entry is unchanged. The horizon heading now describes per-item review dates rather than implying all items were recorded in July 2026. The new entry is due for review on 2 October 2026. The 161 original entries retain their 2.4.0 SHA-256 JSON fingerprint `2694e7586ca47be93b620c045e1f6774355ab915bcfade97ee00a15cbab3dab9`; total entries are now 162.

`node tests/regression.test.cjs` on 25 September 2026: **54 tests, 54 pass, 0 fail, 0 skipped**. A local Class E overview was also observed in Chrome with the Bill as a proposal-labelled row linked from the class background. The Bill did not appear in obligations or application output in regression tests. This is not a legal review of enactment status; confirm the official parliamentary/Gazette stage before release.

Actual browser-engine print PDFs were generated from the local Class E and Collateralized Insurer overviews and rendered for visual inspection. The closed profile disclosures expanded in output, the CI comparison and overview tables fit within letter-page width, source labels and the Bill proposal label were readable, and no clipped content was observed. The final PDFs contain 13 and 10 nonblank pages respectively. Print-only CSS now hides the redundant site footer, which had produced a footer-only CI page; the report-specific disclaimer remains. This verifies the **generated PDF output**, not the Chrome GUI print-preview dialog, which the browser-control session did not expose. Private QA PDFs and rendered images are outside the public allowlist.

The BMA 2025 Annual Report's IIGB count differs between its all-insurers table (eight) and innovative-entities narrative (seven). At the 2.7.1 stage, the profile attributed eight to the table and the disclosure had not yet been added. Version 2.7.2 adds it; the difference remains unreconciled. No push or deployment was performed.

## 2.7.0 owner-approved class-background implementation — 25 September 2026

The owner approved editorial copy for the 12 non-pilot insurer classes. The overview now presents a common dated reform timeline once, plus each class's origin, official policy context, statutory qualification, nearest-class distinction, dated registration count and supported market context. Class 1, 2, 3, A and B market percentages retain their 2023 study denominators; the P&C 3B/4 and long-term C/D/E studies are explicitly combined cohorts. Class E separates the Act's s.4EF wording from the BMA's summaries and does not give an asset-only classification or exact-boundary answer. The owner's editorial sign-off for Class E is sufficient under the owner's governance decision; Bermuda-qualified counsel did not sign off, and no legal opinion is claimed.

Source URLs, retrieval dates, force/tier labels and pin cites accompany claims. The new shared history and profile details are fingerprinted and cannot be replaced by a local import. The 161 original KB entries retain their 2.4.0 SHA-256 JSON fingerprint `2694e7586ca47be93b620c045e1f6774355ab915bcfade97ee00a15cbab3dab9`. Existing applicability logic, obligations, calculations, fees, calendars, templates and non-insurer context were not changed. Detailed capital and filing formulas remain outside the background pending a separate amendment-currency audit.

The implementation is local only. `node tests/regression.test.cjs` passed **53/53** on 25 September 2026, including the unchanged 161-entry fingerprint and all supported entity classes rendering in all three journeys. A live local-HTTP browser check of Class E observed the overview profile, source labels and citations, its statutory qualification confirmation note, and only a background link in the obligations journey. Space collapsed a focused disclosure. At 390 × 844 and 1280 × 800, the observed Class E overview had no document-level horizontal overflow. Print was attempted through Ctrl+P and the report's Print / Export PDF button; the browser did not expose an inspectable preview or PDF, so print output is **not verified**. The full observations and per-class evidence counts are in the separately retained private implementation record. Owner copy approval did not authorise push or deployment. Recheck current legislation, BMA report edition, source URLs and consultation status before release.

## 2.6.0 expanded insurer backgrounds — 25 September 2026

The 12 selectable non-pilot insurer classes now have source-labelled sections for origin/history, statutory qualification, neighbouring-class distinctions and the BMA Annual Report 2025 registration count. Where official policy context is supported, it is displayed separately from the law; Class 1, 2 and 4 original class-specific intent is not inferred. The source register and fingerprint cover the new material. No existing obligation, filing, calculation, fee, calendar, application template or one of the 161 baseline entries was changed.

The expansion is deliberately less deep than the CI/SPI pilot: it has no verified full prudential matrix or independent market-use survey for each class. Class E's current s.4EF wording versus the BMA summary, the exactly-$500-million boundary, Class 3B/Class 4 factual overlap and current IIGB quantitative capital rules remain limited or expressly withheld. Retained copies of the Act, BMA 2008 and 2025 reports, 2010 Hansard and 2019 consultation were checked against the private SHA-256 manifest in this pass; reconfirm currency against the final URLs before release. Editorial/legal review is still needed; absence of a generic pending-review banner is not sign-off.

Regression: `node tests/regression.test.cjs` — 50 tests passed, 0 failed on 25 September 2026. Browser desktop/mobile/print checks were not completed in this pass; the available local-file browser route was blocked by a security policy. No push or deployment was performed.

## 2.5.9 context source-integrity guard — 24 September 2026

Regression validation now checks every insurer/entity context claim for a source URL, retrieval date, tier and citation pin.

## 2.5.8 context fingerprint coverage — 24 September 2026

The knowledge-base fingerprint now covers `class_profile_context` and `entity_profile_context` in addition to entries, profiles, comparisons and sources.

## 2.5.7 context-card section refinement — 24 September 2026

Context cards now separate settled framework claims from conflicts, limitations and interpretation holds.

## 2.5.6 context-card warning refinement — 24 September 2026

The generic pending-review banner is suppressed when a source-labelled background/context card is rendered; the relevant card retains its own confirmation and limitations language.

## 2.5.5 selectable-type coverage guard — 24 September 2026

Regression coverage now iterates every selectable insurer class, DABA licence and non-insurer type and confirms that the overview renders a background/context section.

## 2.5.4 role and activity-boundary refinement — 24 September 2026

Intermediary context now distinguishes broker, agent and manager functions and preserves the manager intragroup interpretation hold. DABA context now explains activity-specific licensing, custody/exemption scope and the M/T appeal caveat without inferring outcomes.

## 2.5.3 sector context expansion — 24 September 2026

The overview now provides source-labelled context cards for the reviewed non-insurer selections: intermediary roles, DABA F/M/T, investment, fund administration, trust, banking, CSP and MSB. These cards provide framework and scope context only; they do not determine a licence, exemption or registration outcome. Material interpretation holds remain visibly qualified.

## 2.5.2 insurer-class context expansion — 24 September 2026

The overview now provides source-labelled statutory identity cards for every selectable insurer class. These cards are deliberately concise and do not determine eligibility. The Class E card retains the separate law/BMA description conflict and exactly-$500m limitation. High-risk interpretation points remain caveated or withheld. The 161-entry baseline remains unchanged.

## 2.5.1 bounded Class E context update — 24 September 2026

The overview now includes a limited-information Class E boundary note. It quotes the current section 4EF formulation, separately labels the BMA licensing summary, flags the exactly-$500m and C/D/E choice as not established, and directs users to confirm with the BMA and Bermuda counsel. It does not determine eligibility or change any obligations, calculations, fees, calendars or templates. The 161-entry baseline remains unchanged.

## 2.5.0 CI/SPI class-background pilot — 24 September 2026

**Local only; not published.** The regulatory landscape overview now has source-labelled Collateralized Insurer and Special Purpose Insurer research profiles, a bounded Class E context note, and a transparent coverage-limits card for other insurer and non-insurer selections. The obligations and application journeys show at most a one-line pointer back to detailed overview material. Class 3A remains a collapsed context note, not a third profile or a suggested registration route. Existing applicability logic, calculations, fees, calendars, templates and all 161 entries are unchanged; the baseline entries' SHA-256 JSON fingerprint remains `2694e7586ca47be93b620c045e1f6774355ab915bcfade97ee00a15cbab3dab9`.

The comparison covers statutory identity, collateral definition, capital, returns, Bermuda presence and selected roles. It does **not** determine an entity's class. At the owner's request, the restricted-SPI audit cell now states the separate GAAP-return and statutory-statement provisions, with a direction to confirm their interaction and any case-specific modification with Bermuda counsel or the BMA. The profile view no longer displays a generic pending-legal-review sign; this is an editorial presentation decision, **not external legal sign-off**. The internal review status and private O5 question remain open. A CI/SPI conversion route, specific CI contingent-collateral permission, and complete Code-of-Conduct governance comparison are not asserted. The 2008 Act-effective-date versus 2009 BMA-consultation description is displayed as a source conflict, with the Act preferred for the effective date. Dates described as effective are not represented as assent dates. The BMA's 2025 class counts are labelled by report column year, not an unconfirmed 31 December point-in-time date. Class E now has a limited-information boundary note; it does not determine eligibility or resolve the exactly-$500m or C/D/E selection question.

Profile source links, provision-level citations, retrieval dates and legal-review status are visible at the point of claim. Imported local profiles are restricted to the two pilot IDs and existing source catalogue, forced to pending review and marked user-supplied/unendorsed. This is source-backed research, **not external legal sign-off**; counsel item O5 and the other open research items in the private pre-publication review remain unresolved.

`node tests/regression.test.cjs`: **49/49 passed** on the local candidate. New checks cover schema/source support, T1 support for qualifications and legal comparison cells, overview-only placement, the approved audit wording and absence of a profile-view pending-review sign, the bounded Class E note, sector coverage limits, all-selectable-type background coverage, context source integrity, source labels and escaping, review-overdue status, imported-profile status, profile-only merge, and the 161-entry baseline fingerprint. Browser, print and offline checks are recorded separately only when actually observed; the historical checks below apply to earlier releases.

Phase 3 browser attempt: the browser automation policy blocked opening the local `file:///` candidate and explicitly disallowed alternate browser routes to the same page. No 2.5.1 desktop, 390 × 844, keyboard, source-link, or print result was observed. These checks remain open for an owner-controlled local review or a future permitted environment; no pass is claimed.

23 September 2026. Independent educational project by Daniel Khisa. Targeted source checks and software tests are not external legal review, regulatory endorsement or a complete compliance assessment.

## 2.4.0 information-architecture update

This presentation-only release separates the three report journeys without changing any of the 161 knowledge-base entries, sources, verification labels, calculations or applicability logic. The regulatory landscape overview is now the sole detailed regime map (framework, selected changes and optional focus analysis). Ongoing obligations & filings is the sole detailed filing calendar, calendar-export and governance/checklist view, with a clear reference back to the regime map rather than duplicated framework text. Application preparation remains task-specific.

New assessments outside the overview do not offer optional focus-topic selection. Existing saved inputs remain readable input bookmarks; because reports regenerate against the current release, an earlier non-overview focus selection no longer produces duplicate focus content. Users can select the overview to inspect that analysis. No legal or source-retrieval claim is added by this change.

## 2.3.0 targeted update

The reported modification/extension error was reproduced in the browser: `toStep()` rebuilt task options from stale state before capturing the selected request. Selection now updates state immediately and is captured before rebuilding. A regression failed with the original code and passes with the fix. Five distinct letters retain their own subject, gateway prompts, facts and requested outcome.

PCC guidance separates notice requirements from preparation recommendations, preserves the full-receipt transition, gates detailed questions on confirmed AML/ATF and Key Person facts, and escalates aged/unavailable or uncertain-format documents. The six-month and 12-month boundaries are explained; no automatic ordinary-residence decision or document-acceptability determination is made. Residence histories remain outside the tool. There is no BMA-approved issuer list in this release.

Section 56 is no longer described as a general waiver; subsection (5) scope is explicit. Section 57A is identified as a designated-investment-contract route. Document checklists are labelled preparation aids, with actual enclosures, governance authorisation and fees to be confirmed.

## Supported use

| Surface | Coverage and limits |
|---|---|
| Insurers | Selected single-class profiles; source-linked framework, conditional obligations and five preparation workflows |
| Other sectors | Framework information only; DABA/investment Operational Resilience distinctions; no insurer templates or insurer fee assumptions |
| Unmodelled profiles | IILT, other innovative classes, insurance groups as entities, dual registrations and entity-specific exemptions/directions |
| Dates | Estimates only for supported 2025–2026 year-end rules; unresolved, event-driven and local-import dates excluded |
| Fees | 2026 references; extension fee depends on class and filing; combined requests and unsupported combinations require confirmation |
| Local data | Bookmarks regenerate current reports. Older overlays are retained but inactive until explicitly compared and reapplied |

## Targeted evidence and expected behaviour

| Subject | Checked provision | Result implemented |
|---|---|---|
| Operational Resilience | Code I paragraph 3, paragraph 78, XVI | Class/licence exclusions; 24-hour impact-tolerance notification; separate 2027/2028 compliance dates |
| Outsourcing | Insurance Act 30JA–30JB | Current statutory material-change route remains separate from the Code |
| Officers/controllers | Act 30D–30EA and 30J | Separate shareholder/insurer actors, public/private routes and annual-list qualifications |
| Dividend/capital | Act 31B–31C | Class-filtered affidavit and capital-reduction rows; distinct Collateralized notice |
| Extension fees | 2026 schedule 2(c), 2(x), 2(z) | Statutory versus BSCR/CISSA/GAAP/FCR selection; no guessed combined fee |
| Annual fee | Act 14; 2026 fee guidance | Consistent statutory wording and supported cancellation conditions |
| Code conduct scope | 2022 Code 8.1, header before 8.2, paragraph 141 | Integrity/conflict duties distinguished from subsequent domestic-retail provisions; correct commencement |
| June proposals | CP section 1 paragraphs 7/10, section 2 paragraph 6, section 3 paragraph 8 | Separate proposed timings; conduct expansion uses 180 days after final publication |
| Key Persons | BMA notice of 13 August, requirement/implementation sections | Conditional PCC guidance in relevant new-licence and appointment/change workflows; 1 October transition |
| Recovery | BR 41/2024 rules 2–6; March 2026 guidance | Written BMA requirement remains a condition; thresholds do not automatically establish designation |
| Economic substance | CITA transition notice; current Act sections 2–5 | Completed administration transfer, retained ROC portal, corrected source links/types; entity-specific requirements still need confirmation |
| ALS | BR 123/2025 paragraph 7A | Domestic-business exclusion; no speculative date |
| Cyber/solvency | Act 30JEA, 31A, 31AA; Cyber Code reporting | Separate statutory/Code triggers and clocks; no event-driven date calculation |
| Draft letters | Editorial review of five templates | Completion prompts replace unconfirmed approvals, payments and enclosure assertions |

Primary links and retrieval records are in [SOURCES.md](SOURCES.md). Source presence/HTTP status does not establish that every nested assertion is verified. The original research date remains 2 July 2026; entry review dates and the September editorial correction date are distinct. All external legal review remains pending. “Established” is a knowledge-base label requiring confirmation of current text, not certification.

## Unresolved or deliberately withheld

- Class-specific SBA/internal-capital-model approval gateways and sanctions: no automatic breach conclusion. Fee tables alone do not establish an approval requirement.
- Quarterly return due dates, certain application channels and appointment fees: confirm primary instruments; no invented dates or fees.
- Final issuance/status of proposals is not established merely by retrieving consultation papers. June proposals, September resolution consultation and PSPI stakeholder feedback remain explicitly pending; check final instruments before use.
- Economic-substance entity applicability, detailed penalties and the wider class-specific prudential frameworks are not comprehensively verified.
- Older secondary-source and source-library entries remain visibly qualified. This is not a claim that all 161 records are independently verified against exact primary provisions.

## Software verification

For 2.4.0, 40/40 regression cases passed. Local browser checks on 23 September 2026 confirmed the related-guidance buttons preserve the entity profile and focus selections, the overview contains the framework/changes/focus sections, and the obligations view contains the calendar/governance/consequences sections. A 390 × 844 viewport check confirmed the overview header and navigation wrap without document-level horizontal overflow. These are targeted checks; print/offline behaviour remains unverified.

Run `node tests/regression.test.cjs`. The 40 tests use isolated JavaScript execution and inert DOM fixtures; the existing source-derived case table is [tests/accuracy-cases.json](tests/accuracy-cases.json). New wizard, PCC, task-isolation and information-architecture separation scenarios are in the test file.

Cases cover all supported class/mode combinations, all five tasks for every selectable insurer class, class exclusions, fee selection, PCC boundaries, controller routes, conditional facts, date limits, escaping, calendar structure, malformed imports, saved-data preservation, baseline conflicts and app/KB version mismatch.

These automated cases are not browser end-to-end tests. Separate local browser checks on 22 September 2026 verified all five request letters, editing and task switching, PCC progressive disclosure and warnings, and saved-assessment reload/reopen. A 390 × 844 viewport confirmed readable report/PCC layout; keyboard activation of the checklist retained visible focus. Copy success was verified by native paste into a local test textarea, and rendered/copy-field parity was checked. Clipboard failure is covered by an automated fallback case. Direct-file/offline and print-output behaviour remain unverified. No accessibility certification is claimed.

## Local update and rollback behaviour

Legacy `bcn_kb_overlay` values are not deleted or automatically applied. Version 2 updates use `bcn_kb_overlay_v2` with the shipped version and content fingerprint. A changed baseline causes preservation/quarantine. The Knowledge Base screen can export raw preserved data and load it for a field-level preview. Reapplication is an explicit local action; imported review assertions remain unendorsed and do not suppress the warning.

Merge rechecks the raw storage snapshot and validated content before writing. Changed, malformed or unreadable storage stops the operation. Old bookmarks remain stored; reopening a legacy bookmark asks for the new applicability facts.

Rollback uses a normal revert/redeployment of the previous release. Old code ignores the new overlay key, while the original key remains available. Rollback restores the old content, including its known accuracy limitations; it does not constitute accuracy approval.
