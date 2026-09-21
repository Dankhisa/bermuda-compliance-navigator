# Verification and coverage — version 2.2.0

21 September 2026. Independent educational project by Daniel Khisa. Targeted source checks and software tests are not external legal review, regulatory endorsement or a complete compliance assessment.

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

Run `node tests/regression.test.cjs`. The 33 tests use isolated JavaScript execution and inert DOM fixtures; the source-derived case table is [tests/accuracy-cases.json](tests/accuracy-cases.json).

Cases cover all supported class/mode combinations, all five tasks for every selectable insurer class, class exclusions, fee selection, PCC boundaries, controller routes, conditional facts, date limits, escaping, calendar structure, malformed imports, saved-data preservation, baseline conflicts and app/KB version mismatch.

These are not browser end-to-end tests. Browser preview for this release was blocked by the approval service's usage limit. Fresh desktop/mobile interaction, keyboard/focus, download/clipboard and live browser smoke checks remain outstanding. Earlier 2.1.0 browser checks are historical and do not verify 2.2.0. Direct-file/offline and print-output checks also remain unverified. No accessibility certification is claimed.

## Local update and rollback behaviour

Legacy `bcn_kb_overlay` values are not deleted or automatically applied. Version 2 updates use `bcn_kb_overlay_v2` with the shipped version and content fingerprint. A changed baseline causes preservation/quarantine. The Knowledge Base screen can export raw preserved data and load it for a field-level preview. Reapplication is an explicit local action; imported review assertions remain unendorsed and do not suppress the warning.

Merge rechecks the raw storage snapshot and validated content before writing. Changed, malformed or unreadable storage stops the operation. Old bookmarks remain stored; reopening a legacy bookmark asks for the new applicability facts.

Rollback uses a normal revert/redeployment of the previous release. Old code ignores the new overlay key, while the original key remains available. Rollback restores the old content, including its known accuracy limitations; it does not constitute accuracy approval.
