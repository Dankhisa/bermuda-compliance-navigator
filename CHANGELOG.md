# CHANGELOG

## v2.1.0 — 16 September 2026

Stage 2 improvement release. Author attribution: Daniel Khisa. This is an
educational portfolio project; the app update date does not reverify the KB.
The 156-entry KB retains its original 2 July 2026 research date and individual
review dates. Earlier release notes below are historical.

- Corrected insurer-only application scope, unsupported cross-sector examples,
  speculative enforcement wording, and unconfirmed assertions in draft letters.
  Corrected the asset-and-liability statement description against BR 123/2025;
  its conditional date is excluded from automatic calendar generation.
- Removed the live LLM/API integration and embedded prompt. Added a privacy and
  storage explanation and an explicit action to remove a legacy stored API key.
- Added semantic navigation, native mode radios and dialogs, keyboard focus
  handling, associated labels, readable contrast, mobile navigation, scrollable
  tables, and separate New/Edit assessment actions. Saved focus selections reopen.
- Validated KB imports and stored records, escaped rendered text, restricted
  source links to HTTPS, and made merge previews expire when input or baseline
  changes. Corrupt storage is reported without silent overwriting.
- Restricted calendar estimates to supported, current entries; added omitted
  date explanations, class-specific identifiers, and UTF-8-safe ICS folding.
- Added metadata, inline favicon, report navigation, print styling, and About
  content. Preserved the existing index.html + kb.js architecture with no build
  step or remote JavaScript dependency.
- Added 16 dependency-free regression checks and verified core flows in the
  browser, including 375px mobile reflow, save/reopen, and invalid-import rejection.

See STAGE_2_CHANGES.md for verification instructions and the local precise diff.
Hosting, public link verification and the personal portfolio remain later stages.

## v2.0.0 — 2 July 2026

Enhancement release: research-refreshed, versioned knowledge base; non-compliance
& consequences module; optional LLM layer; compliance-officer features.
Visual design unchanged (design lock respected — existing tokens and component
classes only; new components reuse the same language).

### What was verified against sources (research pass 2 July 2026 — see SOURCES.md)

- **Insurance Act 1978** — official bermudalaws.bm consolidation (current through
  the Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026) downloaded and
  the following verified verbatim: filing dates and the statutory extension caps
  (s.17(4): 4→max 7 months commercial/special; 6→max 9 months captive classes);
  weekly late-filing fees and inspector trigger (s.18A); annual fee due date and
  10%/month late penalty (s.14); principal representative duties (ss.8–8A);
  cyber event notification (s.30JEA); solvency/ECR breach duties and dividend
  freezes (ss.31A, 31AA); dividend/capital-reduction restrictions (ss.31B–31C);
  controller regime and offences (ss.30D–30H); intervention powers (s.32);
  civil penalties up to $500,000 (s.32D); public censure (s.32F); prohibition
  orders (s.32H); cancellation (ss.41–44); false documents (s.50).
- **2026 BMA fee schedule** (effective 1 Jan 2026) — actual amounts captured for
  insurer annual fees by class/tier, registration/application fees, per-month
  filing-extension fees, controller/dividend/capital-reduction/modification
  fees, internal-model and SBA approval fees, and group (s.27B) fees.
- **Research directive — extension limit:** the "three extensions then breach"
  belief resolves to a statutory cap on the aggregate extension period (three
  additional months, s.17(4)), not a count of requests; the fee schedule prices
  extensions only to the third month. Encoded as ESTABLISHED (statute) +
  VERIFY (fees) with the rule-of-thumb framing labelled as practitioner view.
- **Research directive — SBA approval:** confirmed that SBA use requires BMA
  review/approval under Rules made under s.6A/27F (fee schedule prices approval
  at $120k–$1.5M, $250k annual monitoring, biennial re-approval of default cost
  assumptions); unapproved use = contravention of the Rules engaging s.32D,
  s.32 and s.6D. Exact rule paragraph per class flagged for verification.
- **Current instruments:** Insurance Code of Conduct (rev. Aug 2022); Cyber Risk
  Code (Oct 2020, in force 1 Jan 2021 — 72h notification / 14-day report);
  Operational Resilience & Outsourcing Code (Sep 2025; banks 1 Jan 2027, others
  31 Mar 2028); Climate guidance (Mar 2023, action plans by YE2025); Prudential
  Standards Amendment Rules 2024 (EBS reforms, 31 Mar 2024) and Class C/D/E
  Amendment Rules 2025 (asset & liability statement, 1 Jan 2026); Recovery Plan
  Rules 2024 (1 May 2025, designated insurers); AML/ATF general guidance (June
  2023) + Oct 2024 long-term sector risk paper; economic substance declaration
  (6 months post-FYE; administration transferring to the Corporate Income Tax
  Agency); group supervision changes (designated insurance holding companies,
  7 Jan 2026); BMA enforcement practice (published penalties incl. $900k
  against a long-term insurer).

### What changed

- **kb.js (new):** all regulatory content extracted from index.html into a
  versioned data layer (KB v2.0.0, as at 2026-07-02; ~90 entries). Every entry
  carries id, entity_scope, topic, text, citation, source (typed), verification,
  last_reviewed, review_due (+12 months; +6 for fees), legal_review ("pending").
- **index.html:** consumes kb.js (still zero-dependency, works from file://).
  Added, in the existing visual language:
  - "Reviewed {date}" metadata on every rendered item + amber "Review overdue"
    badge past review_due; KB version + "knowledge base as at" date in the
    results header (and print); source-type pills ("Expert opinion — not a BMA
    source", "Practitioner view — not a BMA source") on all non-BMA content;
    persistent "Illustrative content — pending legal review" notice (prints).
  - **Non-Compliance & Consequences card** (DISTIL + EXECUTE; task-filtered in
    EXECUTE): breach triggers, statutory consequences tables
    (Breach | Consequence | Provision | Status) with verified citations,
    supervisory-escalation-in-practice callout (published enforcement actions),
    labelled practitioner guidance, and the extended counsel disclaimer.
    12 consequence topics incl. late filing, extension cap, unapproved SBA/
    internal model, MSM/ECR breach, controllers, principal representative,
    dividends/capital, annual fee, cyber events, unregistered business, false
    information; generic sector-ladder entry for non-insurer sectors.
  - **Recent & Pending Changes card** (MAP mode) built from the research pass.
  - **Knowledge Base admin view:** paste/upload JSON fragments; schema
    validation; new/changed/unchanged diff; merge into a localStorage overlay
    over the shipped kb.js; version bump; overlay export/removal.
  - **Ask the Navigator (optional):** user-supplied Anthropic API key
    (localStorage only), free-text follow-ups sent with the master prompt +
    wizard state + keyword-retrieved KB entries direct to the Anthropic
    Messages API (claude-sonnet-5); [ESTABLISHED]/[VERIFY]/[UNVERIFIED] tokens
    parsed into badges; "AI-generated — verify before reliance" pill +
    disclaimer; fully degraded behaviour without a key or on API failure.
  - **Export calendar (.ics)** on DISTIL results: RFC 5545 output (CRLF,
    75-octet folding, escaping, per-event UIDs, all-day DTSTART, 30-day and
    7-day VALARMs), structurally validated before download.
  - **Saved assessments:** localStorage audit records (timestamp, prepared_by,
    inputs, mode, app/KB version, KB entry ids used); list view with re-open
    (re-renders against the current KB with a version-change notice), delete,
    export-all-JSON; honest per-device limitation statement.
- **MASTER_PROMPT.md v1.1:** mandatory "Consequences of Non-Compliance" section
  in DISTIL and EXECUTE modes with BMA-vs-practitioner source-labelling and
  do-not-assume guardrails (mirrored into index.html for the LLM layer).
- **SOURCES.md (new):** full research log — every source, URL, version date,
  retrieval date, use, and the unresolved-items register.
- **Filing data corrections from research:** captive SFR deadline firmed from
  "six months — confirm" to ESTABLISHED s.17(4)(a); SPI/Collateralized/IIGB
  correctly placed in the four-month group; cyber notification window resolved
  (was UNVERIFIED); economic substance deadline resolved (6 months post-FYE);
  annual fee date confirmed (before 31 March, s.14(2)) with 2026 amounts;
  extension task rewritten around the verified s.17(4)/s.6C mechanics and
  per-month fees.

### What remains unverified (flagged in-app and in SOURCES.md)

- Exact rule-paragraph citations for SBA approval per class; quarterly-return
  deadlines per class; current submission channels/portals per application
  type; any fee for auditor/actuary/principal-representative approval; whether
  a post-2019 revision of the Insurance Act Statement of Principles exists;
  final status of the 2024 Code-of-Conduct extension to intermediaries;
  Operational Resilience Code no-objection mechanics (verify in Code text);
  obligation-level detail for non-insurer sectors; post-transfer economic
  substance mechanics. Everything ships with `legal_review: "pending"`.

### Verified in preview (WS6)

Class 4 (MAP/DISTIL/EXECUTE), Class 1 captive (DISTIL/MAP), trust company
(MAP/DISTIL); date-arithmetic edge cases (31 Dec + 4m = 30 Apr; 31 Aug + 6m =
28 Feb; 29 Feb + 4m = 29 Jun; 31 Oct + 4m = 28 Feb); consequences card and
EXECUTE task filtering; reviewed dates, source pills, legal-review banner and
KB pills (screen + print structure); .ics build passes internal RFC 5545
validation (5 events, 2 alarms each, ≤75-octet lines, unique UIDs); save /
saved-list / re-open (incl. KB-version-change notice) / delete / export;
KB import validation (bad fragments rejected), diff and overlay merge with
version bump; Ask-the-Navigator no-key note, mocked API failure (static
results unaffected) and mocked success (badge tokens parsed, AI pill +
disclaimer appended); zero console errors or warnings throughout.
