/* =============================================================================
   Bermuda Regulatory Compliance Navigator — Knowledge Base (kb.js)
   -----------------------------------------------------------------------------
   Versioned, dated regulatory data layer. Loaded via <script> tag — no build
   step; the platform continues to work from the filesystem.

   Every entry carries the metadata schema:
     id, entity_scope[], topic, text, citation, source{type,name,url,published},
     verification, last_reviewed, review_due, legal_review
   plus an optional `data` object holding structured extras used by the UI
   (frequency, months for date arithmetic, tables, templates, etc.).

   verification: "established" | "verify" | "unverified"
   source.type:  "bma-primary" | "legislation" | "bma-guidance"
               | "expert-opinion" | "practitioner-best-practice" | "news"
   legal_review: everything ships as "pending" until counsel signs off.

   Research pass: 2 July 2026 — see SOURCES.md for the full research log.
   ============================================================================= */

const KB = (function () {
  "use strict";

  /* ---- review metadata for this research pass ---- */
  const R = "2026-07-02";           // last_reviewed (date of research pass)
  const DUE = "2027-07-02";         // review_due: +12 months
  const DUE_FEES = "2027-01-02";    // review_due for fee data: +6 months

  /* ---- source shorthands ---- */
  const SRC = {
    act: { type: "legislation", name: "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)", url: "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978", published: "2026-01-07" },
    fees2026: { type: "bma-primary", name: "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)", url: "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf", published: "2026-03-17" },
    code2022: { type: "bma-primary", name: "Insurance Code of Conduct (revised August 2022)", url: "https://www.bma.bm/viewPDF/documents/2022-08-31-12-35-41-Insurance-Code-of-Conduct--Revised-August-2022.pdf", published: "2022-08-31" },
    cyberCode: { type: "bma-primary", name: "Insurance Sector Operational Cyber Risk Management Code of Conduct (Oct 2020, effective 1 Jan 2021)", url: "https://www.bma.bm/viewPDF/documents/2020-10-06-09-27-29-Insurance-Sector-Cyber-Risk-Management-Code-of-Conduct.pdf", published: "2020-10-06" },
    opres: { type: "bma-primary", name: "Operational Resilience and Outsourcing Code (issued September 2025)", url: "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf", published: "2025-09-15" },
    climate: { type: "bma-guidance", name: "Guidance Note — Management of Climate Change Risks for Commercial Insurers (March 2023)", url: "https://www.bma.bm/viewPDF/documents/2023-03-09-17-03-42-Guidance-Note---Insurance---Management-of-Climate-Change-Risks-for-Commercial-Insurers.pdf", published: "2023-03-09" },
    psr2024: { type: "legislation", name: "Insurance (Prudential Standards) Amendment Rules 2024 (EBS reform package, operative 31 March 2024)", url: "https://cdn.bma.bm/documents/2024-03-28-13-20-55-Insurance-Prudential-Standards-Group-Solvency-Requirement-Amendment-Rules-2024.pdf", published: "2024-03-28" },
    cde2025: { type: "legislation", name: "Insurance (Prudential Standards) (Class C, D and E Solvency Requirement) Amendment Rules 2025 (operative 1 Jan 2026)", url: "https://www.bermudalaws.bm/Laws/Annual%20Law/Statutory%20Instruments/2025/Insurance%20%28Prudential%20Standards%29%20%28Class%20C%2C%20Class%20D%20and%20Class%20E%20Solevency%20Requirement%29%20Amendment%20Rules%202025", published: "2026-01-01" },
    recovery: { type: "legislation", name: "Insurance (Prudential Standards) (Recovery Plan) Rules 2024 (effective 1 May 2025)", url: "https://www.bma.bm/document-centre", published: "2024-04-25" },
    amlNotes: { type: "bma-guidance", name: "BMA General Guidance Notes for AML/ATF Regulated Financial Institutions (revised June 2023)", url: "https://www.bma.bm/viewPDF/documents/2024-06-13-13-28-45-2023-06-12-15-17-06-General-Guidance-Notes-for-AMLATF-Regulated-Entities-Revised.pdf", published: "2023-06-12" },
    amlSector: { type: "bma-guidance", name: "BMA — Long-Term Insurers, Insurance Managers and Insurance Brokers Sector: ML/TF Risks, Vulnerabilities and Preventive Measures (October 2024)", url: "https://cdn.bma.bm/documents/2024-10-16-14-59-03-Long-Term-Insurers-Insurance-Managers-andInsurance-Brokers-Sector---MLTF-Risks-Vulnerabilities-and-Preventive-Measures.pdf", published: "2024-10-16" },
    esa: { type: "legislation", name: "Economic Substance Act 2018 and Regulations; Government of Bermuda ES Guidance Notes", url: "https://www.gov.bm/sites/default/files/Economic-Substance-Guidance-Notes-REVISED.pdf", published: null },
    esaConyers: { type: "expert-opinion", name: "Conyers — Economic Substance Declaration Filings (May 2026)", url: "https://www.conyers.com/publications/view/economic-substance-declaration-filings-may-2026/", published: "2026-05-01" },
    sop: { type: "bma-guidance", name: "BMA Statement of Principles — Insurance Act 1978", url: "https://www.bma.bm/viewPDF/documents/2019-01-10-08-09-37-Insurance-SOP.pdf", published: "2019-01-10" },
    enfList: { type: "bma-primary", name: "BMA — List of Enforcement Action in Bermuda", url: "https://www.bma.bm/enforcement-action", published: null },
    skadden: { type: "expert-opinion", name: "Skadden — The Standard Formula, Ch.2: The Bermuda Prudential Solvency Regime (March 2025)", url: "https://www.skadden.com/insights/publications/2025/03/chapter-2-the-bermuda-prudential-solvency-regime", published: "2025-03-01" },
    kennedysGroup: { type: "expert-opinion", name: "Kennedys — Enhancements to Bermuda's group supervision regime (2025)", url: "https://www.kennedyslaw.com/en/thought-leadership/article/2025/enhancements-to-bermuda-s-group-supervision-regime/", published: "2025-12-01" },
    appleby: { type: "expert-opinion", name: "Appleby — BMA Requires Greater Operational Resilience (October 2025)", url: "https://www.applebyglobal.com/publications/bma-requires-greater-operational-resilience/", published: "2025-10-09" },
    practice: { type: "practitioner-best-practice", name: "Practitioner remediation practice (Bermuda insurance market — consulting, actuarial and legal commentary)", url: null, published: null }
  };

  /* ---- entity scope groups ---- */
  const COMMERCIAL = ["class3a", "class3b", "class4", "classC", "classD", "classE"];
  const LIMITED = ["class1", "class2", "class3", "classA", "classB"];
  const SPECIAL = ["spi", "collateralized", "iigb"];
  const INSURERS = COMMERCIAL.concat(LIMITED, SPECIAL);
  const FOUR_MONTH = ["class3a", "class3b", "class4", "classC", "classD", "classE", "spi", "collateralized", "iigb"]; // s.17(4)(b) group
  const NON_INSURERS = ["intermediary", "daba", "investment", "fundadmin", "trust", "bank", "msb", "csp"];

  /* ---- entry factory ---- */
  function E(id, scope, topic, text, citation, source, verification, data, reviewDue) {
    return {
      id: id, entity_scope: scope, topic: topic, text: text,
      citation: citation || null, source: source,
      verification: verification, last_reviewed: R,
      review_due: reviewDue || DUE, legal_review: "pending",
      data: data || {}
    };
  }

  const entries = [];

  /* ==========================================================================
     CLASS SUMMARIES (topic: framework, data.role: "summary")
     ========================================================================== */
  entries.push(E("summary-commercial", COMMERCIAL, "framework",
    "A commercial insurer subject to the BMA's enhanced (Solvency II–equivalent) prudential regime: risk-based capital via the BSCR, Economic Balance Sheet reporting, an own solvency self-assessment (CISSA), and the full suite of conduct, cyber, outsourcing/operational resilience, and climate expectations, applied proportionately. Supervisory intensity is high and filings are more extensive than for limited-purpose classes. Major EBS reforms took effect 31 March 2024; further class-specific rule changes took effect 1 January 2026.",
    null, SRC.act, "established", { role: "summary" }));
  entries.push(E("summary-limited", LIMITED, "framework",
    "A limited-purpose (captive-type) insurer. The regime is deliberately proportionate: lighter filing content and longer deadlines (six months rather than four) than commercial classes, but registration conditions, minimum solvency and liquidity requirements, the Insurance Code of Conduct, and the principal representative regime still apply. Do not apply commercial-class rules to this entity, or vice versa.",
    "Insurance Act 1978, s.17(4)(a)", SRC.act, "established", { role: "summary" }));
  entries.push(E("summary-special", SPECIAL, "framework",
    "A special-category registrant under the Insurance Act 1978 with a bespoke, transaction-appropriate regime (e.g. fully collateralized structures, innovative general business). Note: for statutory filing purposes SPIs, Collateralized Insurers and Class IIGB insurers sit in the four-month filing group under s.17(4)(b). Requirements are frequently condition-based; verify obligation-level detail against the current Rules and the entity's registration conditions.",
    "Insurance Act 1978, s.17(4)(b)", SRC.act, "verify", { role: "summary" }));

  /* ==========================================================================
     CORE INSURANCE FRAMEWORK (topic: framework)
     ========================================================================== */
  entries.push(E("fw-insurance-act", INSURERS, "framework",
    "Registration, classes of insurer, statutory filings, solvency, intervention and enforcement powers. Consolidated text current through the Insurance Amendment (No. 2) Act 2025, effective 7 January 2026.",
    "Insurance Act 1978", SRC.act, "established", { name: "Insurance Act 1978 (and subsidiary Regulations)" }));
  entries.push(E("fw-code-conduct", INSURERS, "framework",
    "Proportionate duties on corporate governance, risk management, outsourcing oversight, and prudent business conduct. Current version: revised August 2022, effective 31 August 2022 (transition periods now expired). A 2024 consultation proposed extending conduct provisions to intermediaries — confirm final status.",
    "Insurance Code of Conduct (August 2022)", SRC.code2022, "established", { name: "Insurance Code of Conduct" }));
  entries.push(E("fw-prudential-rules", COMMERCIAL.concat(SPECIAL), "framework",
    "Class-specific capital requirement (BSCR), Economic Balance Sheet, and return content. Substantially amended by the 2024 Amendment Rules (EBS reforms — operative 31 March 2024) and, for Classes C, D and E, the 2025 Amendment Rules (asset and liability statement — operative 1 January 2026). Confirm the current consolidated rules for this class.",
    "Insurance (Prudential Standards) Rules — class-specific, made under s.6A Insurance Act 1978", SRC.psr2024, "verify", { name: "Insurance (Prudential Standards) Rules — class-specific" }));
  entries.push(E("fw-recovery-plan", COMMERCIAL, "framework",
    "Recovery planning requirements for (re)insurers designated by the BMA as economically important or systemically significant. Effective 1 May 2025; in-scope insurers are formally notified by the BMA. A supporting Guidance Note was consulted on during 2025.",
    "Insurance (Prudential Standards) (Recovery Plan) Rules 2024", SRC.recovery, "verify", { name: "Insurance (Prudential Standards) (Recovery Plan) Rules 2024" }));
  entries.push(E("fw-cyber-code", INSURERS, "framework",
    "Board-approved cyber risk programme proportionate to the entity, and notification of material cyber reporting events to the BMA within 72 hours of determination or confirmation, with a written incident report within 14 days. A parallel statutory duty to notify cyber reporting events 'forthwith' (report within 14 days) sits in s.30JEA of the Insurance Act.",
    "Insurance Sector Operational Cyber Risk Management Code of Conduct; Insurance Act 1978, s.30JEA", SRC.cyberCode, "verify", { name: "Insurance Sector Operational Cyber Risk Management Code of Conduct" }));
  entries.push(E("fw-opres-code", INSURERS, "framework",
    "Board accountability for operational resilience, identification of critical business services, impact tolerances, and outsourcing governance (including notification of outsourcing arrangements to the BMA with a no-objection process — verify detail in the Code text). Issued September 2025. Phase-in: effective 1 January 2027 for banks/deposit companies and 31 March 2028 for all other regulated entities, including insurers.",
    "Operational Resilience and Outsourcing Code (September 2025)", SRC.opres, "verify", { name: "Operational Resilience and Outsourcing Code" }));
  entries.push(E("fw-climate", COMMERCIAL, "framework",
    "Integration of climate change risk into governance, risk management, and the solvency self-assessment (CISSA), phased from year-end 2022; commercial insurers were expected to have implemented their climate change action plan by year-end 2025. Applies to commercial insurers and groups.",
    "BMA Guidance Note — Management of Climate Change Risks for Commercial Insurers (March 2023)", SRC.climate, "verify", { name: "Guidance Note — Management of Climate Change Risks (commercial insurers)" }));
  entries.push(E("fw-aml", INSURERS, "framework",
    "Apply where the entity is an AML/ATF regulated financial institution (direct long-term insurers and intermediaries are typically in scope; pure general-business reinsurers typically are not — fact-dependent, verify). Current BMA General Guidance Notes revised June 2023; sector ML/TF risk paper for long-term insurers, managers and brokers published October 2024.",
    "Proceeds of Crime Act 1997; ATF Act 2004; AML/ATF Regulations 2008", SRC.amlNotes, "verify", { name: "Proceeds of Crime Act 1997, ATF Act 2004, and AML/ATF Regulations 2008" }));
  entries.push(E("fw-economic-substance", INSURERS, "framework",
    "Economic substance requirements and annual declaration for entities conducting insurance as a relevant activity. Declarations are due within six months of the entity's financial year end, filed via the Registrar of Companies e-portal. Note: administrative oversight is transferring from the Registrar of Companies to the Bermuda Corporate Income Tax Agency — confirm current mechanics.",
    "Economic Substance Act 2018", SRC.esa, "verify", { name: "Economic Substance Act 2018" }));
  entries.push(E("fw-group-supervision", COMMERCIAL, "framework",
    "Where the insurer heads or belongs to a Bermuda-supervised insurance group: group supervision, group solvency (Group BSCR/GSSA) and group reporting apply. From 7 January 2026 the BMA may designate and register a 'designated insurance holding company' (including a non-regulated Bermuda parent) and exercise information, intervention, penalty and prohibition powers at the holding-company level.",
    "Insurance Act 1978, ss.27A–27F (as amended by Insurance Amendment (No. 2) Act 2025); Insurance (Group Supervision) Rules 2011; Insurance (Prudential Standards) (Insurance Group Solvency Requirement) Rules 2011", SRC.act, "verify", { name: "Group supervision framework (BSCR group / GSSA)" }));

  /* ==========================================================================
     RECENT & PENDING CHANGES (topic: framework, data.role: "recent")
     Built from research on 2 July 2026 — 24-month lookback plus pending items.
     ========================================================================== */
  function REC(id, scope, instrument, change, effective, cite, src, ver) {
    return E(id, scope, "framework", change, cite, src, ver,
      { role: "recent", instrument: instrument, effective: effective });
  }
  entries.push(REC("rec-iaa2025", INSURERS, "Insurance Amendment (No. 2) Act 2025 (2025:33)",
    "Group supervision extended to 'designated insurance holding companies' (including non-regulated Bermuda parent companies); BMA information, intervention, civil penalty and prohibition powers extended to the holding-company level; consequential changes across the Act (e.g. ss.1, 6C, 18A, 30CA, 32D).",
    "7 January 2026", "Insurance Amendment (No. 2) Act 2025", SRC.act, "established"));
  entries.push(REC("rec-cde2025", ["classC", "classD", "classE"], "Insurance (Prudential Standards) (Class C, D and E Solvency Requirement) Amendment Rules 2025",
    "All Class C, D and E insurers other than domestic-only must prepare and file an asset and liability statement as part of the year-end filing; BMA published the template and completion instructions in February 2026.",
    "1 January 2026", "Class C/D/E Solvency Requirement Amendment Rules 2025", SRC.cde2025, "verify"));
  entries.push(REC("rec-opres", INSURERS.concat(NON_INSURERS), "Operational Resilience and Outsourcing Code",
    "New cross-sector code on operational resilience and outsourcing governance issued September 2025 (consultation January 2025). Pending phase-in: banks/deposit companies 1 January 2027; all other regulated entities 31 March 2028.",
    "1 Jan 2027 (banks) / 31 Mar 2028 (others)", "Operational Resilience and Outsourcing Code (September 2025)", SRC.opres, "verify"));
  entries.push(REC("rec-recovery", COMMERCIAL, "Insurance (Prudential Standards) (Recovery Plan) Rules 2024",
    "Recovery planning regime effective 1 May 2025 for BMA-designated (re)insurers (economic importance / systemic significance); Guidance Note consultation ran April–September 2025.",
    "1 May 2025", "Recovery Plan Rules 2024", SRC.recovery, "verify"));
  entries.push(REC("rec-fees2026", INSURERS.concat(NON_INSURERS), "2026 BMA fee schedule (Fourth Schedule, BMA Act 1969)",
    "2026 fees effective 1 January 2026, including revised insurer annual fees and new/increased fees for innovative classes (ILT, IILT, IGB, IIGB). For insurers, the Insurance Act states payment before 31 March; confirm the relevant provision for other sectors.",
    "1 January 2026", "BMA Fees Effective 1 January 2026", SRC.fees2026, "verify", DUE_FEES));
  entries.push(REC("rec-bma-act-consult", INSURERS.concat(NON_INSURERS), "BMA Act 1969 — proposed amendments (consultation)",
    "Consultation paper (24 July 2025) proposing amendments to the BMA's general powers and fee-related provisions. Pending — monitor for enactment.",
    "Pending", null, { type: "bma-guidance", name: "BMA Consultation Paper — BMA Act 1969 amendments (24 July 2025)", url: "https://www.bma.bm/viewPDF/documents/2025-07-24-13-59-04-Consultation-Paper-and-Illustrative-Draft---Bermuda-Monetary-Authority-Act-1969---Proposed-Amendments-to-General-Powers-and-Fee-Related-Changes.pdf", published: "2025-07-24" }, "verify"));
  entries.push(REC("rec-es-transfer", INSURERS.concat(NON_INSURERS), "Economic substance administration",
    "Oversight of the economic substance regime is transferring from the Registrar of Companies to the Bermuda Corporate Income Tax Agency; declaration filing continues via the ROC e-portal until further notice.",
    "Transitional (2025–2026)", "Economic Substance Act 2018", SRC.esaConyers, "verify"));
  entries.push(REC("rec-ebs2024", COMMERCIAL, "Insurance (Prudential Standards) Amendment Rules 2024 (EBS reforms)",
    "Major reforms to the Economic Balance Sheet regime — scenario-based approach (SBA) changes (incl. lapse-risk adjustments), new BSCR lapse and expense risk components, and prior-approval requirements for certain asset classes backing the best estimate liability. (Operative 31 March 2024 — slightly before the 24-month window but with continuing phased impact.)",
    "31 March 2024", "Insurance (Prudential Standards) Amendment Rules 2024", SRC.psr2024, "verify"));
  entries.push(REC("rec-cyber-report", INSURERS, "BMA Operational Cyber Risk Management Report 2025",
    "Sector-wide report on cyber risk management practices published 15 January 2026 — supervisory expectations context for the Cyber Risk Code.",
    "Published 15 January 2026", null, { type: "bma-guidance", name: "Bermuda Insurance Sector Operational Cyber Risk Management — 2025 Report", url: "https://www.bma.bm/viewPDF/documents/2026-01-15-13-25-31-Bermuda-Insurance-Sector-Operational-Cyber-Report-2025.pdf", published: "2026-01-15" }, "verify"));

  /* ==========================================================================
     FILINGS (topic: filing)
     data: { name, freq, months (for computed due date), group }
     ========================================================================== */
  // Commercial + special classes (four-month group, s.17(4)(b))
  entries.push(E("filing-sfs-sfr-4m", FOUR_MONTH, "filing",
    "Within four (4) months of the end of the financial year — the statutory 'filing date' under s.17(4)(b). The Authority may allow a longer period on application, but not exceeding seven (7) months in total (i.e. a maximum of three additional months).",
    "Insurance Act 1978, ss.17(1),(3),(4)(b), 18(1)", SRC.act, "established",
    { name: "Statutory financial statements & statutory financial return", freq: "Annual", months: 4 }));
  entries.push(E("filing-gaap-4m", COMMERCIAL, "filing",
    "Within four (4) months of the end of the financial year, or such longer period not exceeding seven (7) months as the Authority may determine on application. Applies to Class 3A, 3B, 4, C, D and E insurers (condensed statements permitted for Class 3A/C/D under s.17A(2A)).",
    "Insurance Act 1978, s.17A(5)", SRC.act, "established",
    { name: "Additional GAAP / IFRS financial statements (audited)", freq: "Annual", months: 4 }));
  entries.push(E("filing-csr", COMMERCIAL, "filing",
    "Filed with the annual statutory return — within four (4) months of financial year end. Content prescribed by the class-specific Prudential Standards Rules (BSCR model, Economic Balance Sheet, CISSA). Extension applications for BSCR/CISSA filings are made under s.6C.",
    "Rules made under Insurance Act 1978, s.6A (class-specific Prudential Standards Rules)", SRC.psr2024, "verify",
    { name: "Capital and Solvency Return (BSCR, Economic Balance Sheet, CISSA)", freq: "Annual", months: 4 }));
  entries.push(E("filing-actuarial", COMMERCIAL.concat(SPECIAL), "filing",
    "With the annual return: long-term classes (C, D, E, IILT) file an approved actuary's certificate of long-term business liabilities; general-business classes file a loss reserve specialist's opinion where required for the class (annually for Class 3 and commercial general classes; confirm the requirement applicable to this class and business type).",
    "Insurance Act 1978, ss.18B, 26, 27", SRC.act, "verify",
    { name: "Actuarial opinion / loss reserve specialist opinion (as applicable)", freq: "Annual", months: 4 }));
  entries.push(E("filing-quarterly", COMMERCIAL, "filing",
    "Quarterly financial returns are required for commercial classes under the Prudential Standards Rules. Exact content and due dates are prescribed in the Rules for this class — data not pinned in this tool; confirm against the current Rules (exemption/modification applications are priced under s.6C in the 2026 fee schedule).",
    "Insurance (Prudential Standards) Rules — class-specific", SRC.psr2024, "unverified",
    { name: "Quarterly financial return (applicable classes)", freq: "Quarterly", months: null }));
  entries.push(E("filing-als-cde", ["classC", "classD", "classE"], "filing",
    "Paragraph 7A, inserted by BR 123/2025, requires an asset and liability statement on or before the filing date for Class C, D and E insurers, subject to the domestic-business exclusion in that paragraph. The amendment operates from 1 January 2026; this is not a statement that the first reporting year end is 2026. Confirm the applicable reporting period, domestic-business exclusion and current instructions before computing a deadline.",
    "BR 123/2025, paragraphs 7A–7B inserted into the Class C/D/E Rules", SRC.cde2025, "verify",
    { name: "Asset and liability statement", freq: "Annual", months: null, date_note: "Not computed: confirm the reporting period and domestic-business exclusion against paragraph 7A and current BMA instructions." }));

  // Limited-purpose classes (six-month group, s.17(4)(a))
  entries.push(E("filing-sfs-sfr-6m", LIMITED, "filing",
    "Within six (6) months of the end of the financial year — the statutory 'filing date' under s.17(4)(a) for Class 1, 2, 3 (not also C/D/E), A and B insurers. The Authority may allow a longer period on application, but not exceeding nine (9) months in total (i.e. a maximum of three additional months).",
    "Insurance Act 1978, ss.17(1),(3),(4)(a), 18(1)", SRC.act, "established",
    { name: "Statutory financial return & statutory financial statements", freq: "Annual", months: 6 }));
  entries.push(E("filing-capital-limited", LIMITED, "filing",
    "With the annual return — capital and solvency reporting in the form applicable to limited-purpose insurers (confirm the form applicable to this class; loss reserve specialist opinion annually for Class 3, every third year for Class 2).",
    "Insurance Act 1978, ss.18B; Insurance Returns and Solvency Regulations 1980", SRC.act, "verify",
    { name: "Capital and solvency reporting (limited-purpose form)", freq: "Annual", months: 6 }));

  // All insurers
  entries.push(E("filing-annual-fee", INSURERS, "filing",
    "Payable before 31 March in every year following the year of registration, in the amount prescribed under the Bermuda Monetary Authority Act 1969. 2026 examples: Class 1 $2,250; Class 2 $4,375; Class 3A $24,550–$44,500; Class 3B / Class 4 $253,000–$446,800 (gross-premium tiers); Class A/B $13,570; Class C–E asset-based tiers up to $430,000 + 0.001%; SPI $10,000/$15,000. Late payment: additional 10% of the fee due per month or part month (s.14(3)).",
    "Insurance Act 1978, s.14(2)-(3); BMA fee schedule 2026", SRC.fees2026, "verify",
    { name: "Annual business fee", freq: "Annual", months: null }, DUE_FEES));
  entries.push(E("filing-cyber-event", INSURERS, "filing",
    "Statutory duty: notify the Authority forthwith on knowledge or reason to believe a cyber reporting event has occurred, with a written report within 14 days (s.30JEA). Cyber Code operational standard: notify material cyber reporting events within 72 hours of determination or confirmation, incident report within 14 days.",
    "Insurance Act 1978, s.30JEA; Cyber Risk Code of Conduct", SRC.act, "established",
    { name: "Material cyber reporting event notification", freq: "Event-driven", months: null }));
  entries.push(E("filing-es-declaration", INSURERS, "filing",
    "Annual economic substance declaration due within six (6) months of the entity's financial year end (where insurance is a relevant activity), filed via the Registrar of Companies e-portal (administration transferring to the Bermuda Corporate Income Tax Agency — confirm current mechanics).",
    "Economic Substance Act 2018", SRC.esa, "verify",
    { name: "Economic substance declaration", freq: "Annual", months: 6 }));
  entries.push(E("filing-solvency-breach-notice", INSURERS, "filing",
    "Event-driven: immediately notify the Authority on failure (or reason to believe failure) to meet the minimum margin of solvency, with a written report and rectification plan within 14 days; commercial insurers have equivalent duties for ECR breaches (plus 45-day unaudited EBS and interim statements). Dividends are frozen until rectified.",
    "Insurance Act 1978, ss.31A, 31AA", SRC.act, "established",
    { name: "Solvency / ECR breach notification", freq: "Event-driven", months: null }));

  /* ==========================================================================
     GOVERNANCE (topic: governance)
     ========================================================================== */
  entries.push(E("gov-board-responsibility", INSURERS, "governance",
    "The board retains ultimate responsibility for the sound and prudent management of the insurer, including oversight of risk management and internal controls.",
    "Insurance Code of Conduct (August 2022)", SRC.code2022, "established", {}));
  entries.push(E("gov-risk-framework", INSURERS, "governance",
    "The board must approve, and periodically review, the risk management framework proportionate to the nature, scale, and complexity of the business.",
    "Insurance Code of Conduct (August 2022)", SRC.code2022, "established", {}));
  entries.push(E("gov-cissa", COMMERCIAL, "governance",
    "Commercial insurers must perform and document an own solvency self-assessment (CISSA) integrated with strategy and capital planning, subject to board review and challenge.",
    "Insurance (Prudential Standards) Rules — CISSA requirements", SRC.psr2024, "verify", {}));
  entries.push(E("gov-cyber", INSURERS, "governance",
    "The board is accountable for cyber risk: an appropriately governed cyber risk programme proportionate to the entity, a designated responsible officer (e.g. CISO or equivalent), and periodic reporting to the board.",
    "Insurance Sector Operational Cyber Risk Management Code of Conduct", SRC.cyberCode, "verify", {}));
  entries.push(E("gov-outsourcing", INSURERS, "governance",
    "The board remains accountable for outsourced functions — outsourcing does not transfer regulatory responsibility. Maintain due diligence, written agreements, and oversight of material outsourcing arrangements. From 31 March 2028 the Operational Resilience and Outsourcing Code adds impact tolerances for critical business services and BMA notification of outsourcing arrangements.",
    "Insurance Code of Conduct; Operational Resilience and Outsourcing Code (phase-in 31 March 2028 for insurers)", SRC.opres, "verify", {}));
  entries.push(E("gov-climate", COMMERCIAL, "governance",
    "Commercial insurers should have implemented a climate change action plan by year-end 2025, with climate risk embedded in governance, risk appetite and the solvency self-assessment proportionate to exposure, and progress documented in the CISSA.",
    "BMA Guidance Note — Management of Climate Change Risks for Commercial Insurers (March 2023)", SRC.climate, "verify", {}));
  entries.push(E("gov-principal-rep", INSURERS, "governance",
    "Maintain a principal office in Bermuda and an appointed principal representative. The principal representative must notify the Authority forthwith of specified events (including likelihood of insolvency, significant loss likely to breach the ECR, criminal proceedings, and ceasing business) and file a written report within 14 days; wilful failure to give required notice is an offence.",
    "Insurance Act 1978, ss.8, 8A", SRC.act, "established", {}));
  entries.push(E("gov-recovery-plan", COMMERCIAL, "governance",
    "If designated by the BMA under the Recovery Plan Rules (effective 1 May 2025), maintain a board-approved recovery plan setting out actions to restore the financial position following severe stress; designated insurers are notified formally by the BMA.",
    "Insurance (Prudential Standards) (Recovery Plan) Rules 2024", SRC.recovery, "verify", {}));

  /* ==========================================================================
     FOCUS AREAS (topic: focus, data.area / data.title)
     ========================================================================== */
  function F(id, scope, area, title, text, cite, src, ver) {
    return E(id, scope, "focus", text, cite, src, ver, { area: area, title: title });
  }
  entries.push(F("focus-gov-1", INSURERS, "governance", "Governance & Board Oversight",
    "Confirm the board and committee structure satisfies the Insurance Code of Conduct proportionality principle for this class (revised Code effective 31 August 2022).",
    "Insurance Code of Conduct (August 2022)", SRC.code2022, "established"));
  entries.push(F("focus-gov-2", INSURERS, "governance", "Governance & Board Oversight",
    "Document delegation to senior management and to any insurance manager; the board cannot delegate its ultimate responsibility.",
    "Insurance Code of Conduct (August 2022)", SRC.code2022, "established"));
  entries.push(F("focus-gov-3", INSURERS, "governance", "Governance & Board Oversight",
    "Verify fit-and-proper assessments for controllers and officers are current, and that notification/approval obligations on changes of controllers (ss.30D–30E) and officers (s.30CA) are understood and diarised.",
    "Insurance Act 1978, ss.30CA, 30D, 30E", SRC.act, "established"));
  entries.push(F("focus-cap-1", COMMERCIAL, "capital", "Capital & Solvency",
    "Maintain the Enhanced Capital Requirement (ECR) derived from the BSCR standard model (or approved internal model) and monitor against the Target Capital Level; a breach triggers immediate notification, a 14-day rectification plan, 45-day interim EBS reporting, and a dividend freeze (s.31AA).",
    "Insurance Act 1978, s.31AA; Prudential Standards Rules", SRC.act, "established"));
  entries.push(F("focus-cap-2", INSURERS, "capital", "Capital & Solvency",
    "All classes: maintain the applicable minimum solvency margin and (general business) minimum liquidity ratio — a failure triggers immediate notification, a 14-day report and plan, and a dividend freeze (s.31A). Confirm the figures for this class in the current Rules/Regulations.",
    "Insurance Act 1978, s.31A; Insurance Returns and Solvency Regulations 1980", SRC.act, "established"));
  entries.push(F("focus-cap-3", COMMERCIAL, "capital", "Capital & Solvency",
    "Dividend and capital-reduction restrictions: dividends exceeding 25% of total statutory capital and surplus require a directors'/principal representative's affidavit filed at least 7 days before payment (s.31B; 2026 fee $550); reducing total statutory capital by 15% or more requires prior BMA approval (s.31C; 2026 fee $1,500).",
    "Insurance Act 1978, ss.31B, 31C", SRC.act, "established"));
  entries.push(F("focus-cap-4", ["classC", "classD", "classE"], "capital", "Capital & Solvency",
    "Long-term commercial insurers using the scenario-based approach (SBA) for the best estimate liability require BMA approval of the SBA model and of restricted asset classes used in the BEL; approvals carry ongoing conditions (liquidity risk management, biennial re-approval of insurer-specific default cost assumptions) and a $250,000 annual monitoring fee (2026).",
    "Rules made under Insurance Act 1978, s.6A; 2026 BMA fee schedule item 2(ad)–(af)", SRC.fees2026, "verify"));
  entries.push(F("focus-aml-1", INSURERS, "aml", "AML / ATF & Sanctions",
    "Determine whether the entity is an AML/ATF regulated financial institution under the Proceeds of Crime framework (direct long-term insurers and intermediaries are typically in scope; pure general-business reinsurers may not be) — fact-dependent and must be verified.",
    "Proceeds of Crime (AML/ATF) Regulations 2008", SRC.amlNotes, "verify"));
  entries.push(F("focus-aml-2", INSURERS, "aml", "AML / ATF & Sanctions",
    "If in scope: business risk assessment, customer due diligence, appointed Compliance Officer and MLRO, staff training, suspicious activity reporting to the Financial Intelligence Agency, and independent audit of the AML/ATF programme. See also the BMA's October 2024 sector ML/TF risk paper for long-term insurers, managers and brokers.",
    "AML/ATF Regulations 2008; BMA General Guidance Notes (June 2023)", SRC.amlSector, "established"));
  entries.push(F("focus-aml-3", INSURERS, "aml", "AML / ATF & Sanctions",
    "Comply with the sanctions regime applicable in Bermuda (International Sanctions Act 2003 framework), including screening obligations — confirm current lists and guidance.",
    null, SRC.amlNotes, "verify"));
  entries.push(F("focus-conduct-1", INSURERS, "conduct", "Market Conduct",
    "Conduct of business duties under section 8 of the Insurance Code of Conduct (August 2022): fair treatment of policyholders, claims handling standards, complaints procedures, and conflict-of-interest policies proportionate to the business model.",
    "Insurance Code of Conduct (August 2022), s.8", SRC.code2022, "established"));
  entries.push(F("focus-conduct-2", INSURERS, "conduct", "Market Conduct",
    "Where retail or long-term direct business is written, confirm any additional conduct-of-business rules or guidance applicable — note the supplementary annual fee for Class IILT/C/D/E insurers writing retail business (2026: $30,000–$100,000 by asset tier).",
    "2026 BMA fee schedule, item 7B", SRC.fees2026, "verify"));
  entries.push(F("focus-cyber-1", INSURERS, "cyber", "Cyber & Technology Risk",
    "Maintain a board-approved, documented cyber risk management programme proportionate to the entity, with a designated responsible officer (e.g. CISO or equivalent).",
    "Cyber Risk Code of Conduct", SRC.cyberCode, "verify"));
  entries.push(F("focus-cyber-2", INSURERS, "cyber", "Cyber & Technology Risk",
    "Notification windows verified (2 July 2026): statutory duty to notify cyber reporting events forthwith with a 14-day written report (Insurance Act s.30JEA); Cyber Code standard of 72 hours from determination/confirmation of a material cyber reporting event, 14-day incident report. Materiality per the Code: significant adverse impact on policyholders/clients or system availability, severe integrity compromise, confidentiality breach, or reportability to another authority.",
    "Insurance Act 1978, s.30JEA; Cyber Risk Code of Conduct", SRC.act, "established"));
  entries.push(F("focus-cyber-3", INSURERS, "cyber", "Cyber & Technology Risk",
    "Address cyber risk in outsourcing due diligence and contracts for material service providers.",
    "Cyber Risk Code of Conduct; Insurance Code of Conduct", SRC.cyberCode, "verify"));
  entries.push(F("focus-out-1", INSURERS, "outsourcing", "Outsourcing & Operational Resilience",
    "Identify critical business services and set impact tolerances; test the ability to remain within them. Phase-in confirmed (2 July 2026): the Operational Resilience and Outsourcing Code applies to insurers from 31 March 2028 (banks from 1 January 2027).",
    "Operational Resilience and Outsourcing Code (September 2025)", SRC.opres, "verify"));
  entries.push(F("focus-out-2", INSURERS, "outsourcing", "Outsourcing & Operational Resilience",
    "Maintain a register of outsourcing arrangements with materiality classification, due diligence records, and written agreements containing audit and access rights.",
    "Insurance Code of Conduct; Operational Resilience and Outsourcing Code", SRC.code2022, "verify"));
  entries.push(F("focus-out-3", INSURERS, "outsourcing", "Outsourcing & Operational Resilience",
    "Under the new Code, regulated entities must notify the BMA of outsourcing arrangements and await a no-objection reply (reported as a 30-day process) before implementation — verify the exact mechanism in the Code text before the 2028 phase-in.",
    "Operational Resilience and Outsourcing Code (September 2025)", SRC.appleby, "verify"));
  entries.push(F("focus-climate-1", COMMERCIAL, "climate", "Climate Risk",
    "Commercial insurers: the BMA expected climate change action plans to be implemented by year-end 2025, with climate risk embedded in the risk management framework and solvency self-assessment proportionate to exposure, and continuous progress documented in the CISSA. A 2023 discussion paper on climate disclosure may lead to further requirements — monitor.",
    "BMA Guidance Note — Management of Climate Change Risks (March 2023)", SRC.climate, "verify"));
  entries.push(F("focus-sub-1", INSURERS, "substance", "Economic Substance",
    "If carrying on a relevant activity (e.g. insurance), satisfy the economic substance requirements (direction and management in Bermuda, adequate CIGA, expenditure, premises, personnel) and file the annual declaration within six months of financial year end via the ROC e-portal (administration transferring to the Corporate Income Tax Agency).",
    "Economic Substance Act 2018", SRC.esa, "verify"));

  /* ==========================================================================
     EXECUTE-MODE TASKS (topic: task)
     ========================================================================== */
  entries.push(E("task-extension", INSURERS, "task",
    "The Insurance Act 1978 fixes the statutory 'filing date' and empowers the Authority, on application, to allow a longer filing period: up to seven months in total for the four-month classes (3A, IIGB, Collateralized, 3B, SPI, 4, C, IILT, D, E) and up to nine months in total for the six-month classes (1, 2, 3, A, B). The extension power is therefore capped at three additional months in aggregate — beyond that the Authority has no power under s.17(4) to allow more time. BSCR/CISSA/GAAP/FCR extensions are made under s.6C.",
    "Insurance Act 1978, s.17(4); s.6C", SRC.act, "established",
    {
      title: "Statutory filing deadline extension request",
      authorityVer: "established",
      timing: { t: "Submit well before the original statutory filing date — extensions are discretionary and late applications risk the entity being in breach in the interim. The maximum aggregate extension is three months; plan the remediation timetable within that cap.", ver: "established" },
      fee: { t: "2026 fee schedule: $2,500 per month of extension for Class 3B/4/E; $1,500 per month for Class 3A/C/D/IIGB/IILT; $750 per month for Class 1/2/3/A/B, SPI and Collateralized Insurers. Where deadlines for more than one filing are extended together (s.17(4)/s.6C), only one application fee is payable. Verify against the current schedule.", ver: "verify" },
      method: { t: "Confirm the current submission channel (BMA electronic filing portal or e-mail to the supervisory team) — verify current guidance.", ver: "unverified" },
      docs: ["Cover letter citing s.17(4) (and/or s.6C for BSCR/CISSA/GAAP filings) and the extension period sought (maximum three months in aggregate)", "Explanation of the reasons for the delay and remediation steps", "Confirmation of the revised expected filing date", "Evidence of board / senior management awareness of the request", "The per-month application fee required by the current fee schedule"],
      escalate: "If the delay stems from a control failure, auditor issue, or solvency concern, obtain professional advice before submitting — the explanation given to the regulator may have supervisory consequences.",
      template: "[Entity Letterhead]\n\n[Date]\n\nThe Supervisor — [Insurance Supervision / relevant department]\nBermuda Monetary Authority\nBMA House, 43 Victoria Street\nHamilton, Bermuda\n\nDear Sir or Madam,\n\nRe: [Entity Name] (Registration No. [Registration Number]) — Application for\nExtension of the Statutory Filing Deadline for the Financial Year Ended\n[Financial Year End]\n\nWe write on behalf of [Entity Name], a [Class] insurer registered under the\nInsurance Act 1978 (the \"Act\"), to respectfully request an extension of the\nstatutory deadline for filing the [Statutory Financial Return / Capital and\nSolvency Return] for the financial year ended [Financial Year End], pursuant\nto section 17(4) of the Act [and/or section 6C in respect of the Capital and\nSolvency Return — verify against the current consolidated Act].\n\nThe current statutory filing date is [Original Deadline]. We respectfully\nrequest an extension to [Requested Deadline], being [X] month(s) thereafter\nand within the maximum period permitted by section 17(4).\n\nThe reasons for this request are as follows: [set out the reasons concisely\nand candidly, together with the remediation steps being taken].\n\n[Confirm the board or senior management approval actually obtained.]\n[State the entity's compliance position only after verification, including\nany relevant exceptions.]\n[Provide the evidence-based expected filing date and any remaining risks.]\n\nWe enclose the applicable fee of [insert per-month fee for this class —\nverify against the latest BMA fee schedule].\n\nWe would be grateful for the Authority's consideration of this request and\nare available to provide any further information required.\n\nYours faithfully,\n\n[Name]\n[Title]\nFor and on behalf of [Entity Name]"
    }));

  entries.push(E("task-newlicence", INSURERS, "task",
    "Registration or licensing is granted under the sector's governing Act (e.g. registration as an insurer under s.4 Insurance Act 1978). The application must satisfy the minimum criteria (fit and proper controllers and officers, adequate capital, sound business plan). The Authority must be satisfied the applicant meets its minimum margin of solvency (and ECR for commercial classes) on registration (s.5).",
    "Insurance Act 1978, ss.4, 5", SRC.act, "established",
    {
      title: "New registration / licence application",
      authorityVer: "established",
      timing: { t: "Insurer applications are typically considered under the BMA's published assessment timetable (historically a periodic assessment process). Confirm the current process and lead times on the BMA website.", ver: "verify" },
      fee: { t: "2026: application fee $800 (s.4(1)); registration fee on grant is class-based (e.g. Class 1 $2,250; Class 3A $24,550–$44,500; Class 3B/4 $253,000–$446,800 by projected gross premium; SPI $10,000/$15,000), remitted 25/50/75% for registrations after 31 Mar / 30 Jun / 30 Sep; annual fee thereafter due before 31 March. Verify against the current schedule.", ver: "verify" },
      method: { t: "Confirm the current application channel and forms (BMA portal / prescribed forms).", ver: "unverified" },
      docs: ["Completed prescribed application form for the class/licence sought", "Detailed business plan (nature, scale, market, distribution, 3–5 year pro forma financials)", "Capital and solvency projections against the applicable requirement (MSM and, for commercial classes, ECR)", "Details and fit-and-proper documentation for shareholder controllers, directors, and senior executives", "Group structure chart and ownership details", "Draft governance, risk management, and compliance frameworks (incl. AML/ATF where in scope)", "Proposed principal representative / insurance manager and auditor (and actuary where required)", "Application fee per the current fee schedule"],
      escalate: "Licence applications involve regulatory discretion and structuring decisions. Engage Bermuda counsel and, for insurers, an insurance manager or advisor familiar with the BMA assessment process before submission.",
      template: "[Entity/Advisor Letterhead]\n\n[Date]\n\nLicensing & Authorisations — [relevant department]\nBermuda Monetary Authority\nBMA House, 43 Victoria Street\nHamilton, Bermuda\n\nDear Sir or Madam,\n\nRe: Application by [Proposed Entity Name] for registration as a\n[Class / licence category] under the [Governing Act]\n\nWe are pleased to submit the enclosed application on behalf of [Proposed\nEntity Name] for registration as a [Class / licence category].\n\n[Proposed Entity Name] proposes to [one-paragraph summary of the business\nplan: lines of business, target market, capitalisation, and group context].\n\nIn support of the application we enclose:\n  1. The completed prescribed application form;\n  2. The business plan and financial projections;\n  3. Fit-and-proper documentation for all controllers and officers;\n  4. [Other enclosures per the current BMA checklist]; and\n  5. The application fee of [insert current fee — verify against the latest\n     BMA fee schedule].\n\nWe confirm the applicant's intention to satisfy, on an ongoing basis, the\nminimum criteria under the [Governing Act] and all applicable Rules, Codes\nof Conduct, and Guidance Notes.\n\nWe are available to meet with the Authority or provide further information\nas required, and respectfully request the Authority's consideration of this\napplication.\n\nYours faithfully,\n\n[Name]\n[Title]"
    }));

  entries.push(E("task-modification", INSURERS, "task",
    "The Insurance Act 1978 contains powers for the Authority, on application, to exempt an insurer from, or modify the application of, specified provisions: s.56 (general power to grant directions modifying/exempting provisions), s.6C (exemption from or modification of prudential/technical standards), and s.6D (adjustments to the ECR and capital figures). Conditions attach; confirm the correct gateway for the relief sought against the current consolidated Act.",
    "Insurance Act 1978, ss.6C, 6D, 56, 57A", SRC.act, "established",
    {
      title: "Exemption / modification request",
      authorityVer: "established",
      timing: { t: "Apply well in advance of the date by which relief is needed; directions are discretionary and may be conditional. No universal statutory lead time is held in this tool — verify.", ver: "unverified" },
      fee: { t: "2026: s.56 direction $1,000; s.6C/s.27FA(1) prudential-standard exemption or modification $1,000; quarterly-return exemption/modification $2,500; s.57A direction $2,500; eligible capital instrument approval $10,000–$130,000 (sliding scale); s.6D ECR adjustments $10,000–$200,000 (sliding scale). Verify against the current schedule.", ver: "verify" },
      method: { t: "Confirm the current submission channel with the entity's supervisory contact.", ver: "unverified" },
      docs: ["Cover letter identifying the provision(s) and the exemption or modification sought, and the statutory gateway (s.56 / s.6C / s.6D)", "Full statement of the grounds, including why compliance is unduly burdensome or inappropriate and why relief is consistent with policyholder protection", "Details of any compensating controls or conditions the entity proposes", "Board resolution or confirmation of board support", "The fee required by the current fee schedule for the relevant gateway"],
      escalate: "Exemption and modification requests turn on regulatory discretion and precedent. Obtain Bermuda legal advice on the framing of the grounds before submission.",
      template: "[Entity Letterhead]\n\n[Date]\n\nThe Supervisor — [relevant department]\nBermuda Monetary Authority\nBMA House, 43 Victoria Street\nHamilton, Bermuda\n\nDear Sir or Madam,\n\nRe: [Entity Name] (Registration No. [Registration Number]) — Application\nfor [exemption from / modification of] [identify provision(s)]\n\nWe write on behalf of [Entity Name], a [Class] insurer registered under the\nInsurance Act 1978, to apply, pursuant to [section 56 / section 6C / section\n6D — verify the correct gateway against the current consolidated Act], for\n[describe the exemption or modification sought].\n\nGrounds for the application: [set out (i) the entity's circumstances,\n(ii) why strict application of the provision is unduly burdensome or not\nappropriate, and (iii) why the relief sought is consistent with the\nprotection of policyholders and the objectives of the Act].\n\nThe entity proposes the following compensating measures: [describe].\n\nThe board of directors has considered and approved this application. We\nenclose the applicable fee of [insert current fee — verify against the\nlatest BMA fee schedule].\n\nWe respectfully request the Authority's favourable consideration and are\navailable to discuss the application at the Authority's convenience.\n\nYours faithfully,\n\n[Name]\n[Title]\nFor and on behalf of [Entity Name]"
    }));

  entries.push(E("task-controller", INSURERS, "task",
    "For insurers whose shares (or parent's shares) are not publicly traded: no person may become a 10%, 20%, 33% or 50% shareholder controller without serving prior written notice on the Authority and receiving no objection within 45 days (s.30D). For publicly traded insurers: notice within 45 days after becoming such a controller (s.30E). Disposals reaching/falling below those thresholds are also notifiable (s.30EA). Officer changes are separately notifiable (s.30CA).",
    "Insurance Act 1978, ss.30CA, 30D, 30E, 30EA", SRC.act, "established",
    {
      title: "Change of shareholder controller notification",
      authorityVer: "established",
      timing: { t: "Private companies: prior notice and a 45-day no-objection window before completion (the clock extends if the Authority requests further information). Public companies: notice not later than 45 days after. Fix the transaction timetable around the applicable regime.", ver: "established" },
      fee: { t: "2026: notification of new or increased shareholder control under s.30D — $750. Verify against the current schedule.", ver: "verify" },
      method: { t: "Confirm the current form and channel with the supervisory team.", ver: "unverified" },
      docs: ["Notification letter identifying the transferor, transferee, and resulting percentage of control", "Structure charts before and after the change", "Fit-and-proper documentation for the new controller (personal declaration forms where prescribed)", "Description of the transaction, funding, and any change to the business plan", "The prescribed form and the $750 fee (2026) where applicable"],
      escalate: "Controller changes are transaction-critical: an unapproved change is an offence (s.30G — fines up to $25,000 summary / $100,000 indictment, plus $500 per day for continuing as a controller after objection) and can jeopardise the transaction. Always obtain Bermuda counsel's advice on the applicable threshold regime and timing before signing.",
      template: "[Entity Letterhead]\n\n[Date]\n\nThe Supervisor — [relevant department]\nBermuda Monetary Authority\nBMA House, 43 Victoria Street\nHamilton, Bermuda\n\nDear Sir or Madam,\n\nRe: [Entity Name] (Registration No. [Registration Number]) —\n[Notification of / Application for approval of] a change in\nshareholder controller\n\nWe write on behalf of [Entity Name] pursuant to [section 30D / section 30E\nof the Insurance Act 1978 — verify which regime applies] to [notify the\nAuthority of / seek the Authority's confirmation of no objection to] the\nfollowing change in shareholder control:\n\n  Proposed new controller: [Name, jurisdiction, regulatory status]\n  Current holding: [X]%    Proposed holding: [Y]%\n  Expected completion date: [Date]\n\nTransaction summary: [describe the transaction, consideration, and funding].\n\nImpact on the entity: [confirm whether the business plan, management, or\ncapital position will change, or state that no changes are proposed].\n\nWe enclose: (i) before-and-after structure charts; (ii) fit-and-proper\ndocumentation for the proposed controller; (iii) [prescribed form]; and\n(iv) the applicable fee of [$750 per the 2026 fee schedule — verify\ncurrent amount].\n\nWe respectfully request the Authority's [confirmation of no objection /\nacknowledgement] and are available to provide any further information\nrequired.\n\nYours faithfully,\n\n[Name]\n[Title]\nFor and on behalf of [Entity Name]"
    }));

  entries.push(E("task-approvedperson", INSURERS, "task",
    "The Insurance Act 1978 requires insurers to appoint an approved auditor (s.16), and for applicable classes an approved actuary / loss reserve specialist (ss.8B, 26, 27), and to maintain a principal office and principal representative in Bermuda (s.8); appointments and changes engage BMA approval or notification requirements. Confirm the exact process applicable to the role and class concerned.",
    "Insurance Act 1978, ss.8, 8B, 16, 26, 27", SRC.act, "established",
    {
      title: "Approval of auditor / actuary / principal representative",
      authorityVer: "established",
      timing: { t: "Approvals should be sought before the appointment takes effect; ceasing to hold an approved appointment (e.g. auditor resignation) triggers notification duties within prescribed periods — verify the current periods.", ver: "unverified" },
      fee: { t: "No specific application fee for auditor/actuary/principal representative approval was identified in the 2026 fee schedule — confirm with the BMA whether any fee applies (a $1,000 fee applies to modifying a loss reserve specialist opinion under s.6C).", ver: "unverified" },
      method: { t: "Confirm the prescribed form and current channel with the supervisory team.", ver: "unverified" },
      docs: ["Application/notification letter identifying the role and the proposed appointee", "Appointee's qualifications, relevant experience, and regulatory standing", "Confirmation of independence (auditor) or relevant professional credentials (actuary)", "Board resolution approving the appointment", "Any prescribed form and fee"],
      escalate: "Where the change follows a disagreement or resignation of the incumbent (particularly an auditor), the circumstances themselves may be notifiable — obtain professional advice before corresponding with the Authority.",
      template: "[Entity Letterhead]\n\n[Date]\n\nThe Supervisor — [relevant department]\nBermuda Monetary Authority\nBMA House, 43 Victoria Street\nHamilton, Bermuda\n\nDear Sir or Madam,\n\nRe: [Entity Name] (Registration No. [Registration Number]) — Application\nfor approval of the appointment of [Name] as [Approved Auditor /\nApproved Actuary / Principal Representative]\n\nWe write on behalf of [Entity Name] to seek the Authority's approval,\npursuant to [insert enabling provision — verify against the current\nconsolidated Act], of the appointment of [Name of Appointee] of [Firm]\nas the entity's [role], with effect from [Date].\n\n[Name of Appointee] is [summary of qualifications, experience, and\nregulatory standing relevant to the role].\n\n[Where replacing an incumbent:] The incumbent, [Name], [is resigning /\nis being replaced] with effect from [Date]. We confirm that [there are no\ncircumstances connected with the change that are required to be reported\nto the Authority / the relevant circumstances are set out in the enclosed\nstatement].\n\n[Confirm whether the board approved the appointment; insert the resolution date if verified.] We enclose\n[the prescribed form and] [the applicable fee, if any — verify against\nthe latest BMA fee schedule].\n\nWe respectfully request the Authority's approval and are available to\nprovide any further information required.\n\nYours faithfully,\n\n[Name]\n[Title]\nFor and on behalf of [Entity Name]"
    }));

  /* ==========================================================================
     NON-COMPLIANCE & CONSEQUENCES (topic: consequence)
     data: { title, trigger, rows:[{breach, consequence, provision, ver}],
             practice:[{t, srcLabel}], taskIds:[...] }
     ========================================================================== */

  entries.push(E("conseq-escalation", INSURERS.concat(NON_INSURERS), "consequence",
    "How the BMA escalates in practice: the Authority publishes a Statement of Principles governing its use of registration, intervention, civil penalty, censure and prohibition powers ('effective, proportionate and dissuasive'), and publishes enforcement outcomes on its website. Recent published actions include civil penalties totalling $900,000 (Acadia Life Limited, long-term insurer), $100,000 (Acadia Life International Limited), $600,000 (Meritus Trust Company Limited, AML/ATF), and public censures of other licensees. Published powers and outcomes do not establish a mandatory sequence or predict how any individual case will be handled.",
    "BMA Statement of Principles; bma.bm/enforcement-action", SRC.enfList, "verify",
    { title: "Supervisory escalation in practice", role: "escalation" }));

  entries.push(E("conseq-late-filing", INSURERS, "consequence",
    "Breach trigger: filing the statutory financial statements, statutory financial return, GAAP financial statements or capital and solvency return after the statutory filing date with no extension in force — or after the expiry of the maximum extended period.",
    "Insurance Act 1978, ss.17, 18A", SRC.act, "established",
    {
      title: "Late or missed statutory filings",
      taskIds: ["extension"],
      rows: [
        { breach: "Filing after the filing date (no extension in force)", consequence: "Late fee for each week or part week: up to $500 (Class 1/2/3/A/B and intermediaries), $1,000 (Class 3A/IIGB/Collateralized/SPI/IILT/C/D), $5,000 (Class 3B/4/E)", provision: "s.18A(1)–(2)", ver: "established" },
        { breach: "Filings still outstanding three months past the filing date", consequence: "The Authority may appoint an inspector to investigate the insurer's affairs", provision: "s.18A(5), s.30", ver: "established" },
        { breach: "Breach of the Act / Rules (incl. persistent non-filing)", consequence: "Directions — including ceasing to write new business, premium caps, asset controls", provision: "s.32(1)(c), (2)", ver: "established" },
        { breach: "Failure to comply with a requirement of the Act", consequence: "Civil penalty up to $500,000 per failure or contravention (due-diligence defence available; late-fee items under s.18A are carved out of s.32D)", provision: "s.32D", ver: "established" },
        { breach: "Contravention by a registered person", consequence: "Public censure; publication of decision-notice information", provision: "ss.32F, 44I", ver: "established" },
        { breach: "Minimum criteria no longer satisfied (e.g. prudent conduct in doubt)", consequence: "Cancellation of registration (warning/decision notice procedure); gazetted", provision: "ss.41, 44", ver: "established" }
      ],
      practice: [
        { t: "Contact the supervisory team before the deadline passes, not after — a candid pre-deadline call with a realistic remediation date is treated very differently from silence.", srcLabel: "Practitioner view — not a BMA source" },
        { t: "Notify the board immediately and minute the discussion; the board's awareness is expected in the extension application itself.", srcLabel: "Practitioner view — not a BMA source" },
        { t: "Document the root cause (auditor capacity, data issues, control failure) and the fix — the BMA's response typically scales with the quality of the remediation plan.", srcLabel: "Practitioner view — not a BMA source" }
      ]
    }));

  entries.push(E("conseq-extension-cap", INSURERS, "consequence",
    "Breach trigger: continued non-filing after the maximum extended filing period has expired. Research finding (2 July 2026): the limit is a statutory cap on the aggregate extension period, not a count of applications — s.17(4) caps the total filing period at seven months for the four-month classes and nine months for the six-month classes (a maximum of three additional months in each case). The 2026 fee schedule prices extension applications only for the first, second and third months past the filing deadline — no fourth month exists in the schedule. Once the cap is reached the Authority has no power under s.17(4) to allow further time, and continued non-filing is an ongoing contravention.",
    "Insurance Act 1978, s.17(4); 2026 BMA fee schedule item 2(c)", SRC.act, "established",
    {
      title: "Filing-extension limit — what the law actually says",
      taskIds: ["extension"],
      rows: [
        { breach: "Seeking an extension beyond the statutory maximum (7 months total for four-month classes; 9 months for six-month classes)", consequence: "Not legally available — the Authority's power to allow a longer period is capped by the words 'not exceeding seven [nine] months'", provision: "s.17(4)(a)–(b)", ver: "established" },
        { breach: "Extension applications priced per month", consequence: "First, second and third month past the filing deadline each carry an application fee (2026: $2,500/month Class 3B/4/E; $1,500/month Class 3A/C/D/IIGB/IILT; $750/month captives, SPI, Collateralized)", provision: "2026 fee schedule, item 2(c)", ver: "verify" },
        { breach: "Non-filing after the capped period expires", consequence: "Ongoing contravention: weekly late fees continue (s.18A), inspector appointment available, intervention directions and civil penalties on the table", provision: "ss.18A, 30, 32, 32D", ver: "established" }
      ],
      practice: [
        { t: "The common market shorthand — 'after the third extension you are in breach' — is a workable rule of thumb, but the legal mechanism is the aggregate three-month cap in s.17(4), not a count of granted requests. Plan remediation to land inside the cap.", srcLabel: "Practitioner view — not a BMA source" },
        { t: "If it becomes clear the capped date cannot be met, tell the supervisor before it passes and propose a supervised remediation path — at that point the BMA's discretion lies in how it enforces, not in granting more time.", srcLabel: "Practitioner view — not a BMA source" }
      ]
    }));

  entries.push(E("conseq-sba-unapproved", ["classC", "classD", "classE", "class4", "class3b"], "consequence",
    "Breach trigger: calculating the best estimate liability using the scenario-based approach (SBA), using restricted asset classes in the BEL, or applying an internal capital model, without holding the required current BMA approval — or breaching a condition of an approval. Approval requirements arise under the class-specific Prudential Standards Rules (Rules made under s.6A/27F); the 2026 fee schedule confirms the approval architecture (SBA model review and approval; asset-class sub-approvals; biennial re-approval of insurer-specific default cost assumptions).",
    "Rules made under Insurance Act 1978, s.6A/27F; 2026 BMA fee schedule items 2(ad)–(af), (n)–(q)", SRC.fees2026, "verify",
    {
      title: "Using the SBA or an internal model without approval",
      taskIds: ["modification"],
      rows: [
        { breach: "Using the SBA for BEL without current approval", consequence: "Potential contravention of the applicable Prudential Standards Rules. Confirm the required remediation with Bermuda counsel and the BMA; no supervisory outcome is predicted here.", provision: "Rules under s.6A/27F (verify exact rule paragraph for this class)", ver: "verify" },
        { breach: "Contravention of a requirement imposed by or under the Act (incl. Rules)", consequence: "Civil penalty up to $500,000 per contravention", provision: "s.32D", ver: "established" },
        { breach: "Capital understated by an unapproved approach", consequence: "The Authority may adjust the ECR / capital and surplus figures", provision: "s.6D", ver: "established" },
        { breach: "Breach of the Act or Rules", consequence: "Intervention directions (business restrictions, premium caps)", provision: "s.32(1)(c)", ver: "established" },
        { breach: "Approval conditions (ongoing)", consequence: "Annual SBA monitoring fee $250,000 (2026); insurer-specific default cost assumptions require re-approval every two years; liquidity-risk conditions attach to SBA approvals", provision: "2026 fee schedule 2(ae)–(af); Rules/guidance", ver: "verify" }
      ],
      practice: [
        { t: "Treat SBA and asset-class approvals as living permissions: diarise condition reviews and the biennial default-cost re-approval; a lapsed sub-approval can taint the whole BEL calculation.", srcLabel: "Practitioner view — not a BMA source" },
        { t: "If an approval gap is discovered mid-year, engage the BMA before the next filing rather than filing on the unapproved basis — filing a knowingly non-compliant return compounds the breach (see false-documents offence).", srcLabel: "Practitioner view — not a BMA source" },
        { t: "Actuarial commentary on the 2024 SBA reforms (lapse-risk adjustment caps, new BSCR lapse/expense components) is a useful implementation aid but is not the binding text.", srcLabel: "Expert opinion — not a BMA source" }
      ]
    }));

  entries.push(E("conseq-msm-breach", INSURERS, "consequence",
    "Breach trigger: failing to meet the minimum margin of solvency at any time — and separately, failing to notify the Authority immediately on becoming aware (or having reason to believe) that the failure has occurred.",
    "Insurance Act 1978, s.31A", SRC.act, "established",
    {
      title: "Failure to maintain the minimum solvency margin",
      taskIds: [],
      rows: [
        { breach: "MSM not met", consequence: "Immediate notification duty; written report with circumstances and a rectification plan within 14 days; the Authority may require plan modifications", provision: "s.31A(1)–(2)", ver: "established" },
        { breach: "MSM not met", consequence: "No dividends may be declared or paid until the failure is rectified", provision: "s.31A(1)", ver: "established" },
        { breach: "Failure to notify", consequence: "Separate contravention — civil penalty exposure up to $500,000; intervention grounds engaged (significant risk of insolvency)", provision: "ss.32D, 32(1)(a)", ver: "established" },
        { breach: "Sustained breach", consequence: "Directions (cease writing, asset custody/localisation), inspector appointment, ultimately cancellation and winding-up petition powers", provision: "ss.32, 30, 41", ver: "established" }
      ],
      practice: [
        { t: "The 14-day plan is the document that frames everything that follows — make it specific (capital injection amounts, dates, board approvals) rather than aspirational.", srcLabel: "Practitioner view — not a BMA source" }
      ]
    }));

  entries.push(E("conseq-ecr-breach", COMMERCIAL, "consequence",
    "Breach trigger: failing to comply with the enhanced capital requirement (ECR) applicable to a commercial insurer — and separately, failing to make the required notifications and follow-up filings.",
    "Insurance Act 1978, s.31AA", SRC.act, "established",
    {
      title: "Failure to comply with the ECR (commercial classes)",
      taskIds: [],
      rows: [
        { breach: "ECR not met", consequence: "Immediate written notification; 14-day report with rectification plan; within 45 days: unaudited statutory economic balance sheets, interim GAAP statements, loss-reserve/actuarial opinions and a post-failure capital and solvency return", provision: "s.31AA(1)", ver: "established" },
        { breach: "ECR not met", consequence: "Dividend freeze until rectified", provision: "s.31AA(2)", ver: "established" },
        { breach: "ECR breach", consequence: "Express intervention ground — directions available; the Authority may also adjust capital figures", provision: "s.32(1), s.6D", ver: "established" },
        { breach: "Significant loss likely to breach ECR", consequence: "Principal representative must notify forthwith and file a post-loss CSR within 45 days", provision: "s.8A(2)(f), (2a)", ver: "established" }
      ],
      practice: [
        { t: "Where the breach follows a large loss event, the principal representative's s.8A duty and the insurer's s.31AA duty run in parallel — coordinate a single, consistent notification pack.", srcLabel: "Practitioner view — not a BMA source" }
      ]
    }));

  entries.push(E("conseq-controller", INSURERS, "consequence",
    "Breach trigger: a person becoming a 10%, 20%, 33% or 50% shareholder controller of a private-company insurer without prior notice and no-objection (s.30D); failing to notify within 45 days for public companies (s.30E); failing to notify disposals (s.30EA); or continuing as a controller after a notice of objection.",
    "Insurance Act 1978, ss.30D–30H", SRC.act, "established",
    {
      title: "Unapproved change of shareholder controller",
      taskIds: ["controller"],
      rows: [
        { breach: "Becoming a controller without required notice / during the 45-day window", consequence: "Offence: fine up to $25,000 on summary conviction", provision: "s.30G(1), (6)", ver: "established" },
        { breach: "Becoming/remaining a controller after a notice of objection", consequence: "Offence: $25,000 summary (plus $500 per day for continuing); on indictment $100,000 or 2 years' imprisonment or both", provision: "s.30G(5), (7)", ver: "established" },
        { breach: "Unapproved controller in place", consequence: "Express intervention ground — directions against the insurer; powers of restriction and forced sale of the relevant shares", provision: "s.32(1)(e); s.30H", ver: "established" },
        { breach: "Notification of new/increased control (fee)", consequence: "$750 application fee (2026)", provision: "2026 fee schedule 2(f)", ver: "verify" }
      ],
      practice: [
        { t: "Build the 45-day no-objection window (plus information-request extensions) into the transaction long-stop date; signing before clearance with a completion condition is common, completing is not.", srcLabel: "Practitioner view — not a BMA source" },
        { t: "Indirect acquisitions count — run the controller analysis up the ownership chain, including investment-manager and GP structures.", srcLabel: "Practitioner view — not a BMA source" }
      ]
    }));

  entries.push(E("conseq-principal-rep", INSURERS, "consequence",
    "Breach trigger: failing to maintain a principal office and principal representative in Bermuda; the principal representative failing to notify the Authority forthwith of a reportable event (likelihood of insolvency, condition breaches, criminal proceedings, significant loss likely to breach ECR, cessation of business, class-limit breaches) or to file the 14-day report and event-specific follow-ups.",
    "Insurance Act 1978, ss.8, 8A", SRC.act, "established",
    {
      title: "Principal representative failures",
      taskIds: ["approvedperson"],
      rows: [
        { breach: "No principal office / principal representative maintained", consequence: "Breach of a registration requirement — intervention and enforcement powers engaged", provision: "s.8(1); ss.32, 32D", ver: "established" },
        { breach: "Wilful failure by the principal representative to give required notice", consequence: "Offence by the principal representative", provision: "s.8(3A) offence provision", ver: "established" },
        { breach: "Event-specific follow-ups missed", consequence: "Post-loss CSR due within 45 days of an ECR-loss notification; interim statutory financials within 30 days of certain notifications", provision: "s.8A(2a)–(2b)", ver: "established" }
      ],
      practice: [
        { t: "Where an insurance manager acts as principal representative, agree an escalation protocol in the service agreement so reportable events reach the rep 'forthwith' in fact, not just in theory.", srcLabel: "Practitioner view — not a BMA source" }
      ]
    }));

  entries.push(E("conseq-dividends", INSURERS, "consequence",
    "Breach trigger: paying dividends exceeding 25% of total statutory capital and surplus without the required affidavit filed at least 7 days before payment (commercial classes); paying dividends while relevant margins are not met (or in the year after a year-end failure, without approval); or reducing total statutory capital by 15% or more without prior BMA approval.",
    "Insurance Act 1978, ss.31B, 31C", SRC.act, "established",
    {
      title: "Dividend and capital-reduction breaches",
      taskIds: ["modification"],
      rows: [
        { breach: "Dividends >25% of statutory capital & surplus without a prior affidavit (7 days)", consequence: "Contravention of s.31B — civil penalty exposure, intervention grounds; affidavit fee $550 (2026)", provision: "s.31B(1); 2026 fee schedule 2(g)", ver: "established" },
        { breach: "Dividends paid while failing relevant margins", consequence: "Prohibited outright; year-after payments need BMA approval", provision: "s.31B(3)–(4)", ver: "established" },
        { breach: "Reduction of total statutory capital by ≥15% without prior approval", consequence: "Contravention of s.31C — civil penalty exposure up to $500,000; approval fee $1,500 (2026); Collateralized Insurers instead notify within 30 days", provision: "s.31C; s.32D; 2026 fee schedule 2(h)", ver: "established" },
        { breach: "Dividends during an unrectified MSM/ECR failure", consequence: "Prohibited by the solvency-failure provisions", provision: "ss.31A(1), 31AA(2)", ver: "established" }
      ],
      practice: [
        { t: "Put the 25% test and the 15% capital-reduction test into the standing dividend-approval checklist; breaches are usually process failures, not deliberate ones.", srcLabel: "Practitioner view — not a BMA source" }
      ]
    }));

  entries.push(E("conseq-annual-fee", INSURERS.concat(["intermediary"]), "consequence",
    "Breach trigger: failing to pay the annual business fee before 31 March.",
    "Insurance Act 1978, s.14(2)-(3)", SRC.act, "established",
    {
      title: "Late annual fee",
      taskIds: [],
      rows: [
        { breach: "Annual fee unpaid after 31 March", consequence: "Statutory late penalty fee of 10% of the fee due for every month or part month unpaid (equivalent provisions apply to group fees under s.27B)", provision: "s.14(3); s.27B", ver: "established" },
        { breach: "Persistent non-payment", consequence: "Enforcement escalation; non-payment bears on the minimum criteria and can support cancellation", provision: "ss.32, 41", ver: "verify" }
      ],
      practice: [
        { t: "The fee is billed on the class assigned as at 1 January — if a class change or de-registration is planned, complete it before 31 March to benefit from pro-rata treatment.", srcLabel: "Practitioner view — not a BMA source" }
      ]
    }));

  entries.push(E("conseq-cyber", INSURERS, "consequence",
    "Breach trigger: failing to notify the Authority forthwith (statute) / within 72 hours (Cyber Code) of a material cyber reporting event, or failing to file the 14-day written report.",
    "Insurance Act 1978, s.30JEA; Cyber Risk Code of Conduct", SRC.act, "established",
    {
      title: "Failure to notify a material cyber event",
      taskIds: [],
      rows: [
        { breach: "No forthwith notification / no 14-day report", consequence: "Contravention of a statutory requirement — civil penalty exposure up to $500,000; censure available", provision: "s.30JEA; ss.32D, 32F", ver: "established" },
        { breach: "Cyber Code non-observance (72-hour window, programme requirements)", consequence: "Code compliance is taken into account in supervisory assessment and enforcement; persistent failure bears on minimum criteria", provision: "Cyber Risk Code; s.2BA", ver: "verify" }
      ],
      practice: [
        { t: "Pre-draft the 72-hour notification template and decision tree (who determines materiality, who signs) — the window is too short to design the process during an incident.", srcLabel: "Practitioner view — not a BMA source" },
        { t: "Where notice is also due to other authorities (e.g. PIPA privacy regulator, overseas supervisors), the Code's materiality test is automatically met — align the notification clocks.", srcLabel: "Practitioner view — not a BMA source" }
      ]
    }));

  entries.push(E("conseq-unregistered", INSURERS.concat(["intermediary"]), "consequence",
    "Breach trigger: carrying on insurance business in or from within Bermuda without registration (s.3), or carrying on business as an insurance manager, broker, agent, marketplace provider or salesman without registration (s.9).",
    "Insurance Act 1978, ss.3(1), 9", SRC.act, "established",
    {
      title: "Unregistered business",
      taskIds: ["newlicence"],
      rows: [
        { breach: "Unregistered insurance business / intermediary business", consequence: "Criminal offence; the Authority may investigate suspected contraventions and obtain information, documents and entry", provision: "ss.3, 9, 30A–30B", ver: "established" },
        { breach: "Destroying or concealing documents relevant to such an investigation", consequence: "Offence: $50,000/2 years (summary); $200,000/5 years (indictment)", provision: "s.30C", ver: "established" }
      ],
      practice: [
        { t: "Perimeter questions (is this 'insurance business in or from within Bermuda'?) are legal questions — take Bermuda counsel's advice before structuring around the registration requirement.", srcLabel: "Practitioner view — not a BMA source" }
      ]
    }));

  entries.push(E("conseq-false-info", INSURERS.concat(["intermediary"]), "consequence",
    "Breach trigger: issuing, preparing or signing a document for the purposes of the Act which is false or misleading in a material respect — including returns, applications and notifications.",
    "Insurance Act 1978, s.50 (Issue of false documents)", SRC.act, "established",
    {
      title: "False or misleading information",
      taskIds: ["newlicence", "approvedperson", "modification"],
      rows: [
        { breach: "False/misleading document issued for the purposes of the Act", consequence: "Criminal offence (defence of no knowledge + all reasonable precautions)", provision: "s.50", ver: "established" },
        { breach: "False, misleading or inaccurate information supplied in connection with registration", consequence: "Ground for cancellation of registration", provision: "s.41(1)(b)", ver: "established" },
        { breach: "Individual involved not fit and proper", consequence: "Prohibition order (breach of which: $50,000/2 years summary; $200,000/4 years indictment)", provision: "ss.32H", ver: "established" }
      ],
      practice: [
        { t: "If an error in a filed return or application is discovered, correct it proactively with an explanation — a self-reported correction is a materially different conversation from a discovered one.", srcLabel: "Practitioner view — not a BMA source" }
      ]
    }));

  entries.push(E("conseq-sector-generic", NON_INSURERS.filter(k => k !== "intermediary"), "consequence",
    "Breach trigger: contravention of a requirement imposed by or under the sector's governing Act (e.g. late filings, unapproved controller changes, unlicensed activity, false or misleading information). The BMA's sector Acts follow a broadly standardised enforcement model, but the exact provisions, thresholds and penalty amounts differ by Act — this tool does not hold section-level detail for this sector; confirm against the governing Act before reliance.",
    null, SRC.enfList, "verify",
    {
      title: "Sector-specific enforcement considerations (framework level)",
      taskIds: ["newlicence"],
      rows: [
        { breach: "Contravention of the governing Act / licence conditions", consequence: "Civil penalties, public censure, directions/restrictions on the licence, prohibition orders against individuals, and revocation of the licence — per the sector Act's disciplinary provisions", provision: "Sector Act — confirm exact provisions", ver: "verify" },
        { breach: "Unlicensed activity", consequence: "Criminal offence under the sector Act's registration/licensing prohibition", provision: "Sector Act — confirm exact provisions", ver: "verify" },
        { breach: "Late annual fee", consequence: "Any late-payment penalty depends on the applicable sector legislation; no amount is established here", provision: "Sector Act fee provisions / BMA Act 1969", ver: "verify" }
      ],
      practice: [
        { t: "The BMA publishes enforcement outcomes across all sectors (e.g. civil penalties against trust and money-service businesses) — early proactive engagement, board notification and a documented remediation plan are the standard response to any suspected breach.", srcLabel: "Practitioner view — not a BMA source" }
      ]
    }));

  /* ==========================================================================
     NON-INSURER ENTITY PROFILES — framework-level entries
     ========================================================================== */
  function simpleEntity(key, label, act) {
    const scope = [key];
    const sectorSource = { type: "legislation", name: act + " — locate current consolidated text", url: "https://www.bermudalaws.bm", published: null };
    entries.push(E("summary-" + key, scope, "framework",
      label + " regulated by the Bermuda Monetary Authority under the " + act + ". This tool holds framework-level information only for this entity type; obligation-level detail (deadlines, forms, fees) must be confirmed against the current legislation, Rules, and BMA guidance.",
      act, sectorSource, "verify", { role: "summary", label: label }));
    entries.push(E("fw-" + key + "-act", scope, "framework",
      "Licensing/registration, prudential and conduct requirements, supervision and enforcement.",
      act, { type: "legislation", name: act + " (bermudalaws.bm consolidation)", url: "https://www.bermudalaws.bm", published: null }, "established", { name: act }));
    entries.push(E("fw-" + key + "-codes", scope, "framework",
      "Governance, risk management, outsourcing, and cyber expectations — confirm the current instruments for this sector. Note: the Operational Resilience and Outsourcing Code (September 2025) applies to this sector from 31 March 2028 (banks/deposit companies: 1 January 2027).",
      null, SRC.opres, "verify", { name: "Applicable BMA Code(s) of Practice / Conduct and Guidance Notes for this sector" }));
    entries.push(E("fw-" + key + "-aml", scope, "framework",
      "AML/ATF programme obligations where the entity is a regulated financial institution — typically in scope for this sector; verify. Current BMA General Guidance Notes revised June 2023.",
      "Proceeds of Crime Act 1997; ATF Act 2004; AML/ATF Regulations 2008", SRC.amlNotes, "verify", { name: "Proceeds of Crime Act 1997, ATF Act 2004, AML/ATF Regulations 2008" }));
    entries.push(E("fw-" + key + "-es", scope, "framework",
      "Where the entity conducts a relevant activity — verify. Declarations due within six months of financial year end.",
      "Economic Substance Act 2018", SRC.esa, "verify", { name: "Economic Substance Act 2018" }));
    entries.push(E("filing-" + key + "-fee", scope, "filing",
      "Confirm the statutory payment date and current amount against the governing Act and BMA fee schedule for this licence category. This tool does not establish a sector-specific date.",
      act + " / BMA fee provisions", SRC.fees2026, "verify", { name: "Annual licence/business fee", freq: "Annual", months: null }, DUE_FEES));
    entries.push(E("filing-" + key + "-return", scope, "filing",
      "Data not available in this tool — confirm the deadline for this licence category against the current legislation.",
      act, sectorSource, "unverified", { name: "Annual prudential return / audited financial statements (as applicable)", freq: "Annual", months: null }));
    entries.push(E("gov-" + key + "-board", scope, "governance",
      "Board responsibility for sound and prudent management, minimum criteria for licensing (fit and proper controllers and officers), and notification duties on material changes.",
      act, { type: "legislation", name: act, url: "https://www.bermudalaws.bm", published: null }, "established", {}));
    entries.push(E("gov-" + key + "-codes", scope, "governance",
      "Sector code expectations on governance, risk management, outsourcing, and cyber — confirm the current code(s) applicable; diarise the Operational Resilience Code phase-in (1 January 2027 for banks/deposit companies; 31 March 2028 for other sectors).",
      null, SRC.opres, "verify", {}));
  }
  simpleEntity("intermediary", "Insurance manager, broker, or agent", "Insurance Act 1978 (intermediary registration provisions)");
  simpleEntity("daba", "Digital asset business", "Digital Asset Business Act 2018");
  simpleEntity("investment", "Investment business", "Investment Business Act 2003 (as amended — note the expanded registration/licensing regime introduced by the 2022 amendments; verify current scope)");
  simpleEntity("fundadmin", "Fund administrator", "Fund Administration Provider Business Act 2019");
  simpleEntity("trust", "Trust company", "Trusts (Regulation of Trust Business) Act 2001");
  simpleEntity("bank", "Bank / deposit company", "Banks and Deposit Companies Act 1999");
  simpleEntity("msb", "Money service business", "Money Service Business Act 2016");
  simpleEntity("csp", "Corporate service provider", "Corporate Service Provider Business Act 2012");
  // sector extras
  entries.push(E("fw-daba-cyber", ["daba"], "framework",
    "Cyber programme, client asset protections, and operational requirements — confirm current instruments.",
    "Digital Asset Business (Cybersecurity) Rules; DAB Code of Practice", { type: "legislation", name: "DAB (Cybersecurity) Rules / DAB Code of Practice", url: "https://www.bma.bm", published: null }, "verify", { name: "Digital Asset Business (Cybersecurity) Rules and DAB Code of Practice" }));
  entries.push(E("fw-bank-prudential", ["bank"], "framework",
    "Capital adequacy, liquidity (LCR/NSFR-style measures), and technology risk — confirm current instruments. Note: the Operational Resilience and Outsourcing Code applies to banks/deposit companies from 1 January 2027.",
    null, SRC.opres, "verify", { name: "BMA Basel-framework rules; Operational Resilience / Cyber codes for deposit-taking institutions" }));
  // intermediary-specific filing (s.17B)
  entries.push(E("filing-intermediary-sfr", ["intermediary"], "filing",
    "Every insurance manager, broker, agent and insurance marketplace provider must file a statutory financial return in the prescribed form; late filing attracts s.18A late fees (up to $500 per week or part week). Confirm the prescribed form and due date in the intermediary rules.",
    "Insurance Act 1978, ss.17B, 18A", SRC.act, "verify",
    { name: "Intermediary statutory financial return", freq: "Annual", months: null }));

  /* Editorial safeguards: these changes do not constitute legal approval. */
  entries.forEach(entry => {
    entry.editorial_updated = "2026-09-16";
    if(entry.source===SRC.psr2024)entry.source={type:"legislation",name:"BMA legislation library — locate current class-specific Prudential Standards Rules",url:"https://www.bma.bm/documents-centre/documents-legislation",published:null};
    if (/2026/.test(JSON.stringify(entry)) && /\$|fee/i.test(JSON.stringify(entry))) entry.review_due = DUE_FEES;
    if (entry.id === "filing-als-cde") {
      entry.last_reviewed = "2026-09-16";
      entry.review_due = "2027-03-16";
    }
  });

  /* ==========================================================================
     UI reference data (kept with the KB so index.html stays presentation-only)
     ========================================================================== */
  const focusAreas = [
    ["governance", "Governance & board oversight"],
    ["capital", "Capital & solvency"],
    ["aml", "AML / ATF & sanctions"],
    ["conduct", "Market conduct"],
    ["cyber", "Cyber & technology risk"],
    ["outsourcing", "Outsourcing & operational resilience"],
    ["climate", "Climate risk"],
    ["substance", "Economic substance"]
  ];
  const insurerClasses = {
    class1: "Class 1 (single-parent captive)", class2: "Class 2 (multi-owner captive)",
    class3: "Class 3 (limited purpose)", class3a: "Class 3A (small commercial)",
    class3b: "Class 3B (large commercial)", class4: "Class 4 (large commercial / excess liability & property cat)",
    classA: "Class A (long-term captive)", classB: "Class B (long-term multi-owner)",
    classC: "Class C (long-term, small commercial)", classD: "Class D (long-term commercial)",
    classE: "Class E (large long-term commercial)", spi: "Special Purpose Insurer (SPI)",
    collateralized: "Collateralized Insurer", iigb: "Innovative Insurer General Business (IIGB)"
  };
  const dabaClasses = { classF: "Class F (full licence)", classM: "Class M (modified / sandbox)", classT: "Class T (test)" };

  /* ---- schema definition used by the import validator ---- */
  const schema = {
    required: ["id", "entity_scope", "topic", "text", "source", "verification", "last_reviewed", "review_due", "legal_review"],
    topics: ["filing", "framework", "governance", "focus", "task", "consequence"],
    verifications: ["established", "verify", "unverified"],
    sourceTypes: ["bma-primary", "legislation", "bma-guidance", "expert-opinion", "practitioner-best-practice", "news"],
    legalReview: ["pending", "reviewed"]
  };

  return {
    version: "2.1.0",
    as_at: R,                     // knowledge base as-at date
    generated: R,
    app_version: "2.1.0",
    schema: schema,
    focusAreas: focusAreas,
    insurerClasses: insurerClasses,
    dabaClasses: dabaClasses,
    scopeGroups: { commercial: COMMERCIAL, limited: LIMITED, special: SPECIAL, insurers: INSURERS, nonInsurers: NON_INSURERS },
    entries: entries
  };
})();
