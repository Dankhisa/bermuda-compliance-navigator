/* Static educational knowledge base. Original research and per-entry review dates are preserved. See VERIFICATION.md. */
const KB = {
  "version": "2.7.4",
  "as_at": "2026-07-02",
  "generated": "2026-07-02",
  "app_version": "2.7.4",
  "schema": {
    "required": [
      "id",
      "entity_scope",
      "topic",
      "text",
      "source",
      "verification",
      "last_reviewed",
      "review_due",
      "legal_review",
      "data"
    ],
    "topics": [
      "filing",
      "framework",
      "governance",
      "focus",
      "task",
      "consequence"
    ],
    "verifications": [
      "established",
      "verify",
      "unverified"
    ],
    "sourceTypes": [
      "bma-primary",
      "legislation",
      "bma-guidance",
      "expert-opinion",
      "practitioner-best-practice",
      "news",
      "official-guidance"
    ],
    "legalReview": [
      "pending",
      "reviewed"
    ]
  },
  "focusAreas": [
    [
      "governance",
      "Governance & board oversight"
    ],
    [
      "capital",
      "Capital & solvency"
    ],
    [
      "aml",
      "AML / ATF & sanctions"
    ],
    [
      "conduct",
      "Market conduct"
    ],
    [
      "cyber",
      "Cyber & technology risk"
    ],
    [
      "outsourcing",
      "Outsourcing & operational resilience"
    ],
    [
      "climate",
      "Climate risk"
    ],
    [
      "substance",
      "Economic substance"
    ]
  ],
  "insurerClasses": {
    "class1": "Class 1 (single-parent captive)",
    "class2": "Class 2 (multi-owner captive)",
    "class3": "Class 3 (limited purpose)",
    "class3a": "Class 3A (small commercial)",
    "class3b": "Class 3B (large commercial)",
    "class4": "Class 4 (large commercial / excess liability & property cat)",
    "classA": "Class A (long-term captive)",
    "classB": "Class B (long-term multi-owner)",
    "classC": "Class C (long-term, small commercial)",
    "classD": "Class D (long-term commercial)",
    "classE": "Class E (large long-term commercial)",
    "spi": "Special Purpose Insurer (SPI)",
    "collateralized": "Collateralized Insurer",
    "iigb": "Innovative Insurer General Business (IIGB)"
  },
  "dabaClasses": {
    "classF": "Class F (full licence)",
    "classM": "Class M (modified / sandbox)",
    "classT": "Class T (test)"
  },
  "scopeGroups": {
    "commercial": [
      "class3a",
      "class3b",
      "class4",
      "classC",
      "classD",
      "classE"
    ],
    "limited": [
      "class1",
      "class2",
      "class3",
      "classA",
      "classB"
    ],
    "special": [
      "spi",
      "collateralized",
      "iigb"
    ],
    "insurers": [
      "class3a",
      "class3b",
      "class4",
      "classC",
      "classD",
      "classE",
      "class1",
      "class2",
      "class3",
      "classA",
      "classB",
      "spi",
      "collateralized",
      "iigb"
    ],
    "nonInsurers": [
      "intermediary",
      "daba",
      "investment",
      "fundadmin",
      "trust",
      "bank",
      "msb",
      "csp"
    ]
  },
  "entries": [
    {
      "id": "summary-commercial",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "framework",
      "text": "A commercial insurer subject to the BMA's enhanced (Solvency II–equivalent) prudential regime: risk-based capital via the BSCR, Economic Balance Sheet reporting, an own solvency self-assessment (CISSA), and the full suite of conduct, cyber, outsourcing/operational resilience, and climate expectations, applied proportionately. Supervisory intensity is high and filings are more extensive than for limited-purpose classes. Major EBS reforms took effect 31 March 2024; further class-specific rule changes took effect 1 January 2026.",
      "citation": null,
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "role": "summary"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "summary-limited",
      "entity_scope": [
        "class1",
        "class2",
        "class3",
        "classA",
        "classB"
      ],
      "topic": "framework",
      "text": "A limited-purpose (captive-type) insurer. The regime is deliberately proportionate: lighter filing content and longer deadlines (six months rather than four) than commercial classes, but registration conditions, minimum solvency and liquidity requirements, the Insurance Code of Conduct, and the principal representative regime still apply. Do not apply commercial-class rules to this entity, or vice versa.",
      "citation": "Insurance Act 1978, s.17(4)(a)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "role": "summary"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "summary-special",
      "entity_scope": [
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "framework",
      "text": "A special-category registrant under the Insurance Act 1978 with a bespoke, transaction-appropriate regime (e.g. fully collateralized structures, innovative general business). Note: for statutory filing purposes SPIs, Collateralized Insurers and Class IIGB insurers sit in the four-month filing group under s.17(4)(b). Requirements are frequently condition-based; verify obligation-level detail against the current Rules and the entity's registration conditions.",
      "citation": "Insurance Act 1978, s.17(4)(b)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "role": "summary"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-insurance-act",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "framework",
      "text": "Registration, classes of insurer, statutory filings, solvency, intervention and enforcement powers. Consolidated text current through the Insurance Amendment (No. 2) Act 2025, effective 7 January 2026.",
      "citation": "Insurance Act 1978",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Insurance Act 1978 (and subsidiary Regulations)"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-code-conduct",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "framework",
      "text": "Insurance Code of Conduct, revised August 2022: governance, risk management, internal controls and outsourcing, applied proportionately. Section 8.1 addresses integrity and conflicts; the domestic-retail restriction follows section 8.1 and applies to the remaining conduct provisions. Paragraph 141 states commencement on 1 September 2022; compliance dates were 1 September 2023 for sections 1–7 and 1 March 2023 for section 8. June 2026 proposals are tracked separately as proposals, not operative obligations.",
      "citation": "Insurance Code of Conduct, sections 7, 8.1–8.2 and paragraph 141",
      "source": {
        "type": "bma-primary",
        "name": "Insurance Code of Conduct (revised August 2022)",
        "url": "https://www.bma.bm/viewPDF/documents/2022-08-31-12-35-41-Insurance-Code-of-Conduct--Revised-August-2022.pdf",
        "published": "2022-08-31"
      },
      "verification": "established",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {
        "name": "Insurance Code of Conduct"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "fw-prudential-rules",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "framework",
      "text": "Class-specific capital requirement (BSCR), Economic Balance Sheet, and return content. Substantially amended by the 2024 Amendment Rules (EBS reforms — operative 31 March 2024) and, for Classes C, D and E, the 2025 Amendment Rules (asset and liability statement — operative 1 January 2026). Confirm the current consolidated rules for this class.",
      "citation": "Insurance (Prudential Standards) Rules — class-specific, made under s.6A Insurance Act 1978",
      "source": {
        "type": "legislation",
        "name": "BMA legislation library — locate current class-specific Prudential Standards Rules",
        "url": "https://www.bma.bm/documents-centre/documents-legislation",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Insurance (Prudential Standards) Rules — class-specific"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-recovery-plan",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "framework",
      "text": "Recovery planning applies to Class 3A, 3B, 4, C, D and E insurers and insurance groups, where the Authority requires a recovery plan by notice in writing. In deciding whether to require a plan the Authority has regard to whether the insurer carries on domestic business, whether it has a three-year rolling average of total assets of at least $10 billion, whether it has a three-year rolling average of total gross written premiums of at least $5 billion, and whether it is subject to enhanced supervisory monitoring. Rules operative 1 May 2025. The supporting Guidance Note was finalised and issued on 20 March 2026 (the earlier entry describing it as still in consultation is superseded). An insurer may apply to adopt a recovery plan already filed with a relevant overseas supervisory authority, subject to BMA approval. A plan is required where the BMA requires it by written notice; numerical criteria alone do not establish a designation for this entity.",
      "citation": "Insurance (Prudential Standards) (Recovery Plan) Rules 2024 (BR 41/2024), rules 2–6; BMA Guidance Note for Recovery Planning Requirements (20 March 2026)",
      "source": {
        "type": "legislation",
        "name": "Insurance (Prudential Standards) (Recovery Plan) Rules 2024 (BR 41/2024)",
        "url": "https://cdn.bma.bm/documents/2024-05-03-12-00-06-Insurance-Prudential-Standards-Recovery-Plan-Rules-2024.pdf",
        "published": "2024-05-03"
      },
      "verification": "established",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {
        "name": "Insurance (Prudential Standards) (Recovery Plan) Rules 2024"
      },
      "editorial_updated": "2026-09-21",
      "rule": {
        "kind": "recovery"
      },
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "fw-cyber-code",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "framework",
      "text": "Board-approved cyber risk programme proportionate to the entity, and notification of material cyber reporting events to the BMA within 72 hours of determination or confirmation, with a written incident report within 14 days. A parallel statutory duty to notify cyber reporting events 'forthwith' (report within 14 days) sits in s.30JEA of the Insurance Act.",
      "citation": "Insurance Sector Operational Cyber Risk Management Code of Conduct; Insurance Act 1978, s.30JEA",
      "source": {
        "type": "bma-primary",
        "name": "Insurance Sector Operational Cyber Risk Management Code of Conduct (Oct 2020, effective 1 Jan 2021)",
        "url": "https://www.bma.bm/viewPDF/documents/2020-10-06-09-27-29-Insurance-Sector-Cyber-Risk-Management-Code-of-Conduct.pdf",
        "published": "2020-10-06"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Insurance Sector Operational Cyber Risk Management Code of Conduct"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-opres-code",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "iigb",
        "intermediary",
        "daba",
        "investment",
        "fundadmin",
        "trust",
        "bank",
        "msb",
        "csp"
      ],
      "topic": "framework",
      "text": "Operational Resilience and Outsourcing Code, September 2025: scope is limited to the licences in section I paragraph 3. Relevant insurer classes include 3A, 3B, 4, C, D, E, IIGB and IILT; the supported insurer selections here exclude IILT. Relevant intermediaries and specified other regulated sectors are included. DABA requires Class F; investment business requires a standard licence. Sandbox/test licences are excluded. Section XVI requires adherence by 31 March 2028, except banks/deposit companies by 1 January 2027. These are compliance dates, not a deferral of other current statutory duties.",
      "citation": "Operational Resilience and Outsourcing Code, I paragraphs 3–5; XVI",
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "established",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {
        "name": "Operational Resilience and Outsourcing Code"
      },
      "editorial_updated": "2026-09-21",
      "rule": {
        "kind": "opres"
      },
      "compliance_by": "2028-03-31",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "fw-climate",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "framework",
      "text": "Integration of climate change risk into governance, risk management, and the solvency self-assessment (CISSA), phased from year-end 2022; commercial insurers were expected to have implemented their climate change action plan by year-end 2025. Applies to commercial insurers and groups.",
      "citation": "BMA Guidance Note — Management of Climate Change Risks for Commercial Insurers (March 2023)",
      "source": {
        "type": "bma-guidance",
        "name": "Guidance Note — Management of Climate Change Risks for Commercial Insurers (March 2023)",
        "url": "https://www.bma.bm/viewPDF/documents/2023-03-09-17-03-42-Guidance-Note---Insurance---Management-of-Climate-Change-Risks-for-Commercial-Insurers.pdf",
        "published": "2023-03-09"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Guidance Note — Management of Climate Change Risks (commercial insurers)"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-aml",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "framework",
      "text": "Apply where the entity is an AML/ATF regulated financial institution (direct long-term insurers and intermediaries are typically in scope; pure general-business reinsurers typically are not — fact-dependent, verify). Current BMA General Guidance Notes revised June 2023; sector ML/TF risk paper for long-term insurers, managers and brokers published October 2024.",
      "citation": "Proceeds of Crime Act 1997; ATF Act 2004; AML/ATF Regulations 2008",
      "source": {
        "type": "bma-guidance",
        "name": "BMA General Guidance Notes for AML/ATF Regulated Financial Institutions (revised June 2023)",
        "url": "https://www.bma.bm/viewPDF/documents/2024-06-13-13-28-45-2023-06-12-15-17-06-General-Guidance-Notes-for-AMLATF-Regulated-Entities-Revised.pdf",
        "published": "2023-06-12"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Proceeds of Crime Act 1997, ATF Act 2004, and AML/ATF Regulations 2008"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-economic-substance",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "framework",
      "text": "Economic substance is fact-dependent. Confirm the relevant activity, exemptions and current requirements under the Economic Substance Act. CITA assumed administration on 31 March 2026; its announcement retains the ROC declaration portal until further instruction. The generally stated six-month year-end declaration period is not calculated here pending entity-specific and current statutory confirmation.",
      "citation": "CITA administration announcement; Economic Substance Act 2018 (current statutory scope must be confirmed)",
      "source": {
        "type": "official-guidance",
        "name": "CITA — Economic Substance administration and filing transition",
        "url": "https://www.cita.bm/news/cita-new-changes-economic-substance-automatic-exchange-of-information",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {
        "name": "Economic Substance Act 2018"
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "legislation",
          "name": "Economic Substance Act 2018 — verify current requirements and applicability",
          "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/2018/Economic%20Substance%20Act%202018",
          "published": null
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "fw-group-supervision",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "framework",
      "text": "Where the insurer heads or belongs to a Bermuda-supervised insurance group: group supervision, group solvency (Group BSCR/GSSA) and group reporting apply. From 7 January 2026 the BMA may designate and register a 'designated insurance holding company' (including a non-regulated Bermuda parent) and exercise information, intervention, penalty and prohibition powers at the holding-company level.",
      "citation": "Insurance Act 1978, ss.27A–27F (as amended by Insurance Amendment (No. 2) Act 2025); Insurance (Group Supervision) Rules 2011; Insurance (Prudential Standards) (Insurance Group Solvency Requirement) Rules 2011",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Group supervision framework (BSCR group / GSSA)"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "rec-iaa2025",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "framework",
      "text": "Group supervision extended to 'designated insurance holding companies' (including non-regulated Bermuda parent companies); BMA information, intervention, civil penalty and prohibition powers extended to the holding-company level; consequential changes across the Act (e.g. ss.1, 6C, 18A, 30CA, 32D).",
      "citation": "Insurance Amendment (No. 2) Act 2025",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "role": "recent",
        "instrument": "Insurance Amendment (No. 2) Act 2025 (2025:33)",
        "effective": "7 January 2026"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "rec-cde2025",
      "entity_scope": [
        "classC",
        "classD",
        "classE"
      ],
      "topic": "framework",
      "text": "All Class C, D and E insurers other than those carrying on domestic business (confirm mixed-business treatment) must prepare and file an asset and liability statement as part of the year-end filing; BMA published the template and completion instructions in February 2026.",
      "citation": "Class C/D/E Solvency Requirement Amendment Rules 2025",
      "source": {
        "type": "legislation",
        "name": "Insurance (Prudential Standards) (Class C, D and E Solvency Requirement) Amendment Rules 2025 (operative 1 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Annual%20Law/Statutory%20Instruments/2025/Insurance%20%28Prudential%20Standards%29%20%28Class%20C%2C%20Class%20D%20and%20Class%20E%20Solevency%20Requirement%29%20Amendment%20Rules%202025",
        "published": "2026-01-01"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "role": "recent",
        "instrument": "Insurance (Prudential Standards) (Class C, D and E Solvency Requirement) Amendment Rules 2025",
        "effective": "1 January 2026"
      },
      "editorial_updated": "2026-09-21",
      "rule": {
        "kind": "als"
      },
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "rec-opres",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "iigb",
        "intermediary",
        "daba",
        "investment",
        "fundadmin",
        "trust",
        "bank",
        "msb",
        "csp"
      ],
      "topic": "framework",
      "text": "Operational Resilience and Outsourcing Code, September 2025: scope is limited to the licences in section I paragraph 3. Relevant insurer classes include 3A, 3B, 4, C, D, E, IIGB and IILT; the supported insurer selections here exclude IILT. Relevant intermediaries and specified other regulated sectors are included. DABA requires Class F; investment business requires a standard licence. Sandbox/test licences are excluded. Section XVI requires adherence by 31 March 2028, except banks/deposit companies by 1 January 2027. These are compliance dates, not a deferral of other current statutory duties.",
      "citation": "Operational Resilience and Outsourcing Code, I paragraphs 3–5; XVI",
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "established",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {
        "role": "recent",
        "instrument": "Operational Resilience and Outsourcing Code",
        "effective": "Compliance by 1 Jan 2027 (banks) / 31 Mar 2028 (other in-scope licences)"
      },
      "editorial_updated": "2026-09-21",
      "rule": {
        "kind": "opres"
      },
      "compliance_by": "2028-03-31",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "rec-recovery",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "framework",
      "text": "Recovery planning regime operative 1 May 2025 for Class 3A, 3B, 4, C, D and E insurers and insurance groups that the Authority requires by written notice to prepare a plan, judged against domestic business, a three-year rolling average of total assets of at least $10 billion, a three-year rolling average of gross written premiums of at least $5 billion, and enhanced supervisory monitoring. The supporting Guidance Note was issued in final form on 20 March 2026. A plan is required where the BMA requires it by written notice; numerical criteria alone do not establish a designation for this entity.",
      "citation": "Insurance (Prudential Standards) (Recovery Plan) Rules 2024 (BR 41/2024); BMA Guidance Note (20 March 2026)",
      "source": {
        "type": "legislation",
        "name": "Insurance (Prudential Standards) (Recovery Plan) Rules 2024 (BR 41/2024)",
        "url": "https://cdn.bma.bm/documents/2024-05-03-12-00-06-Insurance-Prudential-Standards-Recovery-Plan-Rules-2024.pdf",
        "published": "2024-05-03"
      },
      "verification": "established",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {
        "role": "recent",
        "instrument": "Insurance (Prudential Standards) (Recovery Plan) Rules 2024",
        "effective": "1 May 2025 (Rules); 20 Mar 2026 (Guidance Note)"
      },
      "editorial_updated": "2026-09-21",
      "rule": {
        "kind": "recovery"
      },
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "rec-fees2026",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb",
        "intermediary",
        "daba",
        "investment",
        "fundadmin",
        "trust",
        "bank",
        "msb",
        "csp"
      ],
      "topic": "framework",
      "text": "2026 fees effective 1 January 2026, including revised insurer annual fees and new/increased fees for innovative classes (ILT, IILT, IGB, IIGB). For insurers, the Insurance Act states payment before 31 March; confirm the relevant provision for other sectors.",
      "citation": "BMA Fees Effective 1 January 2026",
      "source": {
        "type": "bma-primary",
        "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
        "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
        "published": "2026-03-17"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "role": "recent",
        "instrument": "2026 BMA fee schedule (Fourth Schedule, BMA Act 1969)",
        "effective": "1 January 2026"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "rec-bma-act-consult",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb",
        "intermediary",
        "daba",
        "investment",
        "fundadmin",
        "trust",
        "bank",
        "msb",
        "csp"
      ],
      "topic": "framework",
      "text": "Consultation paper (24 July 2025) proposing amendments to the BMA's general powers and fee-related provisions. Pending — monitor for enactment. Historical proposal: current enactment/finalisation status is not established in this release; no operative duty is inferred.",
      "citation": null,
      "source": {
        "type": "bma-guidance",
        "name": "BMA Consultation Paper — BMA Act 1969 amendments (24 July 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-07-24-13-59-04-Consultation-Paper-and-Illustrative-Draft---Bermuda-Monetary-Authority-Act-1969---Proposed-Amendments-to-General-Powers-and-Fee-Related-Changes.pdf",
        "published": "2025-07-24"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "role": "recent",
        "instrument": "BMA Act 1969 — proposed amendments (consultation)",
        "effective": "Pending"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "rec-es-transfer",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb",
        "intermediary",
        "daba",
        "investment",
        "fundadmin",
        "trust",
        "bank",
        "msb",
        "csp"
      ],
      "topic": "framework",
      "text": "CITA assumed economic-substance administration on 31 March 2026. Its official announcement retains the ROC declaration portal until further instruction. Confirm subsequent operational notices.",
      "citation": "CITA administration announcement; Economic Substance Act 2018 (current statutory scope must be confirmed)",
      "source": {
        "type": "official-guidance",
        "name": "CITA — Economic Substance administration and filing transition",
        "url": "https://www.cita.bm/news/cita-new-changes-economic-substance-automatic-exchange-of-information",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {
        "role": "recent",
        "instrument": "Economic substance administration",
        "effective": "31 March 2026"
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "legislation",
          "name": "Economic Substance Act 2018 — verify current requirements and applicability",
          "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/2018/Economic%20Substance%20Act%202018",
          "published": null
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "rec-ebs2024",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "framework",
      "text": "Historical 2024 EBS/BSCR reform package: valuation and risk-component changes remain a research reference. This release does not establish the class-specific approval gateways, transitional treatment or current applicability of those changes. Confirm the current Prudential Standards Rules; no approval requirement is inferred here.",
      "citation": "Insurance (Prudential Standards) Amendment Rules 2024",
      "source": {
        "type": "legislation",
        "name": "BMA legislation library — locate current class-specific Prudential Standards Rules",
        "url": "https://www.bma.bm/documents-centre/documents-legislation",
        "published": null
      },
      "verification": "unverified",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "role": "recent",
        "instrument": "Insurance (Prudential Standards) Amendment Rules 2024 (EBS reforms)",
        "effective": "31 March 2024"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "rec-cyber-report",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "framework",
      "text": "Sector-wide report on cyber risk management practices published 15 January 2026 — supervisory expectations context for the Cyber Risk Code.",
      "citation": null,
      "source": {
        "type": "bma-guidance",
        "name": "Bermuda Insurance Sector Operational Cyber Risk Management — 2025 Report",
        "url": "https://www.bma.bm/viewPDF/documents/2026-01-15-13-25-31-Bermuda-Insurance-Sector-Operational-Cyber-Report-2025.pdf",
        "published": "2026-01-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "role": "recent",
        "instrument": "BMA Operational Cyber Risk Management Report 2025",
        "effective": "Published 15 January 2026"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "filing-sfs-sfr-4m",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "filing",
      "text": "Within four (4) months of the end of the financial year — the statutory 'filing date' under s.17(4)(b). The Authority may allow a longer period on application, but not exceeding seven (7) months in total (i.e. a maximum of three additional months).",
      "citation": "Insurance Act 1978, ss.17(1),(3),(4)(b), 18(1)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Statutory financial statements & statutory financial return",
        "freq": "Annual",
        "months": 4
      },
      "editorial_updated": "2026-09-21",
      "reporting_period": {
        "from": "2025-01-01",
        "to": "2026-12-31"
      },
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-gaap-4m",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "filing",
      "text": "Within four (4) months of the end of the financial year, or such longer period not exceeding seven (7) months as the Authority may determine on application. Applies to Class 3A, 3B, 4, C, D and E insurers (condensed statements permitted for Class 3A/C/D under s.17A(2A)).",
      "citation": "Insurance Act 1978, s.17A(5)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Additional GAAP / IFRS financial statements (audited)",
        "freq": "Annual",
        "months": 4
      },
      "editorial_updated": "2026-09-21",
      "reporting_period": {
        "from": "2025-01-01",
        "to": "2026-12-31"
      },
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-csr",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "filing",
      "text": "Filed with the annual statutory return — within four (4) months of financial year end. Content prescribed by the class-specific Prudential Standards Rules (BSCR model, Economic Balance Sheet, CISSA). Extension applications for BSCR/CISSA filings are made under s.6C.",
      "citation": "Rules made under Insurance Act 1978, s.6A (class-specific Prudential Standards Rules)",
      "source": {
        "type": "legislation",
        "name": "BMA legislation library — locate current class-specific Prudential Standards Rules",
        "url": "https://www.bma.bm/documents-centre/documents-legislation",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Capital and Solvency Return (BSCR, Economic Balance Sheet, CISSA)",
        "freq": "Annual",
        "months": 4
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "filing-actuarial",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "filing",
      "text": "With the annual return: long-term classes (C, D, E, IILT) file an approved actuary's certificate of long-term business liabilities; general-business classes file a loss reserve specialist's opinion where required for the class (annually for Class 3 and commercial general classes; confirm the requirement applicable to this class and business type).",
      "citation": "Insurance Act 1978, ss.18B, 26, 27",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Actuarial opinion / loss reserve specialist opinion (as applicable)",
        "freq": "Annual",
        "months": 4
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "filing-quarterly",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "filing",
      "text": "Quarterly financial returns are required for insurance groups and commercial insurers, using the quarterly return templates the BMA publishes each quarter (P&C and Long-Term). The BMA confirmed on 6 July 2026 that all insurance group and commercial insurer regulatory filings must be submitted using the latest quarterly return template via the BMA's Submit Portal at https://submit.bma.bm/. Class 4, 3B and 3A insurers and insurance groups may also be required to report specified catastrophe events in the Catastrophe Exposure schedule; for the quarter ended 30 June 2026 the BMA specified none. The exact filing due date per class is set by the class-specific Prudential Standards Rules and is not pinned in this tool — confirm against the current Rules.",
      "citation": "BMA Notice — Quarterly Financial Return Templates (6 July 2026); Insurance (Prudential Standards) Rules — class-specific",
      "source": {
        "type": "bma-primary",
        "name": "BMA Notice — Insurance Groups and Commercial Insurers: Quarterly Financial Return Templates (6 July 2026)",
        "url": "https://cdn.bma.bm/documents/2026-07-06-13-52-39-Notice---2026-June-Quarterly-Financial-Return-PC-and-LT.pdf",
        "published": "2026-07-06"
      },
      "verification": "verify",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {
        "name": "Quarterly financial return (applicable classes)",
        "freq": "Quarterly",
        "months": null
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-als-cde",
      "entity_scope": [
        "classC",
        "classD",
        "classE"
      ],
      "topic": "filing",
      "text": "Paragraph 7A, inserted by BR 123/2025, requires an asset and liability statement on or before the filing date for Class C, D and E insurers, subject to the domestic-business exclusion in that paragraph. The amendment operates from 1 January 2026; this is not a statement that the first reporting year end is 2026. Confirm the applicable reporting period, domestic-business exclusion and current instructions before computing a deadline.",
      "citation": "BR 123/2025, paragraphs 7A–7B inserted into the Class C/D/E Rules",
      "source": {
        "type": "legislation",
        "name": "Insurance (Prudential Standards) (Class C, D and E Solvency Requirement) Amendment Rules 2025 (operative 1 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Annual%20Law/Statutory%20Instruments/2025/Insurance%20%28Prudential%20Standards%29%20%28Class%20C%2C%20Class%20D%20and%20Class%20E%20Solevency%20Requirement%29%20Amendment%20Rules%202025",
        "published": "2026-01-01"
      },
      "verification": "verify",
      "last_reviewed": "2026-09-16",
      "review_due": "2027-03-16",
      "legal_review": "pending",
      "data": {
        "name": "Asset and liability statement",
        "freq": "Annual",
        "months": null,
        "date_note": "Not computed: confirm the reporting period and domestic-business exclusion against paragraph 7A and current BMA instructions."
      },
      "editorial_updated": "2026-09-21",
      "rule": {
        "kind": "als"
      },
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-sfs-sfr-6m",
      "entity_scope": [
        "class1",
        "class2",
        "class3",
        "classA",
        "classB"
      ],
      "topic": "filing",
      "text": "Within six (6) months of the end of the financial year — the statutory 'filing date' under s.17(4)(a) for Class 1, 2, 3 (not also C/D/E), A and B insurers. The Authority may allow a longer period on application, but not exceeding nine (9) months in total (i.e. a maximum of three additional months).",
      "citation": "Insurance Act 1978, ss.17(1),(3),(4)(a), 18(1)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Statutory financial return & statutory financial statements",
        "freq": "Annual",
        "months": 6
      },
      "editorial_updated": "2026-09-21",
      "reporting_period": {
        "from": "2025-01-01",
        "to": "2026-12-31"
      },
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-capital-limited",
      "entity_scope": [
        "class1",
        "class2",
        "class3",
        "classA",
        "classB"
      ],
      "topic": "filing",
      "text": "With the annual return — capital and solvency reporting in the form applicable to limited-purpose insurers (confirm the form applicable to this class; loss reserve specialist opinion annually for Class 3, every third year for Class 2).",
      "citation": "Insurance Act 1978, ss.18B; Insurance Returns and Solvency Regulations 1980",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Capital and solvency reporting (limited-purpose form)",
        "freq": "Annual",
        "months": 6
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "filing-annual-fee",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "filing",
      "text": "Payable before 31 March in every year following the year of registration, in the amount prescribed under the Bermuda Monetary Authority Act 1969. 2026 examples: Class 1 $2,250; Class 2 $4,375; Class 3A $24,550–$44,500; Class 3B / Class 4 $253,000–$446,800 (gross-premium tiers); Class A/B $13,570; Class C–E asset-based tiers up to $430,000 + 0.001%; SPI $10,000/$15,000. Late payment: additional 10% of the fee due per month or part month (s.14(3)).",
      "citation": "Insurance Act 1978, s.14(2)-(3); BMA fee schedule 2026",
      "source": {
        "type": "bma-primary",
        "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
        "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
        "published": "2026-03-17"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-01",
      "legal_review": "pending",
      "data": {
        "name": "Annual business fee",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-21",
      "fee_year": 2026,
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-cyber-event",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "filing",
      "text": "Statutory insurer duty under section 30JEA: notify forthwith on knowledge or reason to believe a defined cyber reporting event occurred; provide the written report within 14 days of that notification. The Cyber Code separately specifies notification within 72 hours from determination or confirmation (whichever is sooner), and an incident report within 14 days from initial notification. Do not use the Code clock to postpone the statutory notice.",
      "citation": "Insurance Act 1978, s.30JEA; Cyber Code, incident reporting",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Material cyber reporting event notification",
        "freq": "Event-driven",
        "months": null
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "legislation",
          "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
          "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
          "published": "2026-01-07"
        },
        {
          "type": "bma-primary",
          "name": "Insurance Sector Operational Cyber Risk Management Code of Conduct (Oct 2020, effective 1 Jan 2021)",
          "url": "https://www.bma.bm/viewPDF/documents/2020-10-06-09-27-29-Insurance-Sector-Cyber-Risk-Management-Code-of-Conduct.pdf",
          "published": "2020-10-06"
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-es-declaration",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "filing",
      "text": "Economic substance is fact-dependent. Confirm the relevant activity, exemptions and current requirements under the Economic Substance Act. CITA assumed administration on 31 March 2026; its announcement retains the ROC declaration portal until further instruction. The generally stated six-month year-end declaration period is not calculated here pending entity-specific and current statutory confirmation.",
      "citation": "CITA administration announcement; Economic Substance Act 2018 (current statutory scope must be confirmed)",
      "source": {
        "type": "official-guidance",
        "name": "CITA — Economic Substance administration and filing transition",
        "url": "https://www.cita.bm/news/cita-new-changes-economic-substance-automatic-exchange-of-information",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Economic substance declaration",
        "freq": "Annual",
        "months": 6
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "legislation",
          "name": "Economic Substance Act 2018 — verify current requirements and applicability",
          "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/2018/Economic%20Substance%20Act%202018",
          "published": null
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-solvency-breach-notice",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "filing",
      "text": "Section 31A: the insurer must immediately notify failure or reason to believe failure to meet its minimum solvency margin, with its written report within 14 days of notification. Section 31AA has separate ECR duties where ECR applies, including a 45-day financial-information package measured from awareness/reason to believe. Confirm the exact statutory trigger, package and any directions; no event-driven deadline is calculated here.",
      "citation": "Insurance Act 1978, ss.31A, 31AA",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Solvency / ECR breach notification",
        "freq": "Event-driven",
        "months": null
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "gov-board-responsibility",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "governance",
      "text": "The board retains ultimate responsibility for the sound and prudent management of the insurer, including oversight of risk management and internal controls.",
      "citation": "Insurance Code of Conduct (August 2022)",
      "source": {
        "type": "bma-primary",
        "name": "Insurance Code of Conduct (revised August 2022)",
        "url": "https://www.bma.bm/viewPDF/documents/2022-08-31-12-35-41-Insurance-Code-of-Conduct--Revised-August-2022.pdf",
        "published": "2022-08-31"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-risk-framework",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "governance",
      "text": "The board must approve, and periodically review, the risk management framework proportionate to the nature, scale, and complexity of the business.",
      "citation": "Insurance Code of Conduct (August 2022)",
      "source": {
        "type": "bma-primary",
        "name": "Insurance Code of Conduct (revised August 2022)",
        "url": "https://www.bma.bm/viewPDF/documents/2022-08-31-12-35-41-Insurance-Code-of-Conduct--Revised-August-2022.pdf",
        "published": "2022-08-31"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-cissa",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "governance",
      "text": "Commercial insurers must perform and document an own solvency self-assessment (CISSA) integrated with strategy and capital planning, subject to board review and challenge.",
      "citation": "Insurance (Prudential Standards) Rules — CISSA requirements",
      "source": {
        "type": "legislation",
        "name": "BMA legislation library — locate current class-specific Prudential Standards Rules",
        "url": "https://www.bma.bm/documents-centre/documents-legislation",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-cyber",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "governance",
      "text": "The board is accountable for cyber risk: an appropriately governed cyber risk programme proportionate to the entity, a designated responsible officer (e.g. CISO or equivalent), and periodic reporting to the board.",
      "citation": "Insurance Sector Operational Cyber Risk Management Code of Conduct",
      "source": {
        "type": "bma-primary",
        "name": "Insurance Sector Operational Cyber Risk Management Code of Conduct (Oct 2020, effective 1 Jan 2021)",
        "url": "https://www.bma.bm/viewPDF/documents/2020-10-06-09-27-29-Insurance-Sector-Cyber-Risk-Management-Code-of-Conduct.pdf",
        "published": "2020-10-06"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-outsourcing",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "governance",
      "text": "The board remains accountable for outsourced functions. Maintain oversight under the Insurance Code of Conduct, section 7. Separately, check whether an outsourcing change falls within Insurance Act sections 30JA–30JB; that statutory process already applies and is not postponed until the Operational Resilience Code compliance date.",
      "citation": "Insurance Act 1978, ss.30JA–30JB; Insurance Code of Conduct, section 7",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "verify",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "bma-primary",
          "name": "Insurance Code of Conduct (revised August 2022)",
          "url": "https://www.bma.bm/viewPDF/documents/2022-08-31-12-35-41-Insurance-Code-of-Conduct--Revised-August-2022.pdf",
          "published": "2022-08-31"
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "gov-climate",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "governance",
      "text": "Commercial insurers should have implemented a climate change action plan by year-end 2025, with climate risk embedded in governance, risk appetite and the solvency self-assessment proportionate to exposure, and progress documented in the CISSA.",
      "citation": "BMA Guidance Note — Management of Climate Change Risks for Commercial Insurers (March 2023)",
      "source": {
        "type": "bma-guidance",
        "name": "Guidance Note — Management of Climate Change Risks for Commercial Insurers (March 2023)",
        "url": "https://www.bma.bm/viewPDF/documents/2023-03-09-17-03-42-Guidance-Note---Insurance---Management-of-Climate-Change-Risks-for-Commercial-Insurers.pdf",
        "published": "2023-03-09"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-principal-rep",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "governance",
      "text": "Maintain a principal office in Bermuda and an appointed principal representative. The principal representative must notify the Authority forthwith of specified events (including likelihood of insolvency, significant loss likely to breach the ECR, criminal proceedings, and ceasing business) and file a written report within 14 days; wilful failure to give required notice is an offence.",
      "citation": "Insurance Act 1978, ss.8, 8A",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-recovery-plan",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "governance",
      "text": "Where the Authority requires a recovery plan by notice in writing under the Recovery Plan Rules, maintain a board-approved recovery plan identifying credible recovery options for severe but plausible stress scenarios, with processes for timely implementation. The BMA's Guidance Note of 20 March 2026 sets out its expectations for the structure and content of the plan, including integration with the enterprise risk management framework. A plan is required where the BMA requires it by written notice; numerical criteria alone do not establish a designation for this entity.",
      "citation": "Insurance (Prudential Standards) (Recovery Plan) Rules 2024 (BR 41/2024), rules 5, 7; expectations per the BMA Guidance Note for Recovery Planning Requirements (20 March 2026)",
      "source": {
        "type": "legislation",
        "name": "Insurance (Prudential Standards) (Recovery Plan) Rules 2024 (BR 41/2024)",
        "url": "https://cdn.bma.bm/documents/2024-05-03-12-00-06-Insurance-Prudential-Standards-Recovery-Plan-Rules-2024.pdf",
        "published": "2024-05-03"
      },
      "verification": "established",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-21",
      "rule": {
        "kind": "recovery"
      },
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "focus-gov-1",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Confirm the board and committee structure satisfies the Insurance Code of Conduct proportionality principle for this class (revised Code effective 1 September 2022).",
      "citation": "Insurance Code of Conduct (August 2022)",
      "source": {
        "type": "bma-primary",
        "name": "Insurance Code of Conduct (revised August 2022)",
        "url": "https://www.bma.bm/viewPDF/documents/2022-08-31-12-35-41-Insurance-Code-of-Conduct--Revised-August-2022.pdf",
        "published": "2022-08-31"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "area": "governance",
        "title": "Governance & Board Oversight"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "focus-gov-2",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Document delegation to senior management and to any insurance manager; the board cannot delegate its ultimate responsibility.",
      "citation": "Insurance Code of Conduct (August 2022)",
      "source": {
        "type": "bma-primary",
        "name": "Insurance Code of Conduct (revised August 2022)",
        "url": "https://www.bma.bm/viewPDF/documents/2022-08-31-12-35-41-Insurance-Code-of-Conduct--Revised-August-2022.pdf",
        "published": "2022-08-31"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "area": "governance",
        "title": "Governance & Board Oversight"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "focus-gov-3",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Insurer reporting is governed by section 30J, not the intermediary provision 30CA. The general notice period is 45 days from awareness. Section 30J(4) provides annual-filing lists for Classes 1, 2, 3, A, B and SPI, with separate treatment for officers where an insurance manager is appointed. Shareholder notifications under sections 30D–30EA are separate duties.",
      "citation": "Insurance Act 1978, ss.30J(1)–(4), 30D–30EA",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {
        "area": "governance",
        "title": "Governance & Board Oversight"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "focus-cap-1",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "focus",
      "text": "Where ECR applies, section 31AA requires immediate notification upon awareness or reason to believe failure, a written report and rectification plan within 14 days of notification, and the specified financial-information package within 45 days of awareness/reason to believe. Dividends are restricted until rectification. Check each statutory qualification and applicable return. Internal-capital-model approval is a separate topic not established by this summary.",
      "citation": "Insurance Act 1978, s.31AA; Prudential Standards Rules",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "area": "capital",
        "title": "Capital & Solvency"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "focus-cap-2",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Separate the insurer’s minimum-solvency-margin duty (section 31A), ECR duty where applicable (section 31AA), liquidity requirements and the principal representative’s reporting duty (section 8A). They have distinct actors and triggers. Use the specific provisions; this tool does not infer a universal liquidity-breach reporting clock.",
      "citation": "Insurance Act 1978, s.31A; Insurance Returns and Solvency Regulations 1980",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "area": "capital",
        "title": "Capital & Solvency"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "focus-cap-3",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Dividend/capital rules differ by class. See the class-filtered consequences table: section 31B(1) applies to its enumerated classes; sections 31B(3)–(4) contain general restrictions; section 31C separates approval from Collateralized Insurer notification. Thresholds use the statutory prior-year financial-statement basis. This focus summary does not impose the commercial affidavit test on captives.",
      "citation": "Insurance Act 1978, ss.31B(1), 31C(1), (4), (5); 2026 BMA fee schedule items 2(g), 2(h)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated; text re-verified 21 Sep 2026, byte-identical to 17 Sep 2026 copy)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-03-21",
      "legal_review": "pending",
      "data": {
        "area": "capital",
        "title": "Capital & Solvency"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "focus-cap-4",
      "entity_scope": [
        "classC",
        "classD",
        "classE"
      ],
      "topic": "focus",
      "text": "The Scenario-Based Approach (SBA) for insurance valuation is distinct from an internal capital model. Class-specific model/asset approval gateways and approval conditions have not been established for this workflow, so no applicable approval requirement or fee is determined here. Consult the relevant Prudential Standards Rules and the current BMA approval/fee materials before acting.",
      "citation": "Rules made under Insurance Act 1978, s.6A; 2026 BMA fee schedule item 2(ad)–(af)",
      "source": {
        "type": "bma-primary",
        "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
        "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
        "published": "2026-03-17"
      },
      "verification": "unverified",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "area": "capital",
        "title": "Capital & Solvency"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "focus-aml-1",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Determine whether the entity is an AML/ATF regulated financial institution under the Proceeds of Crime framework (direct long-term insurers and intermediaries are typically in scope; pure general-business reinsurers may not be) — fact-dependent and must be verified.",
      "citation": "Proceeds of Crime (AML/ATF) Regulations 2008",
      "source": {
        "type": "bma-guidance",
        "name": "BMA General Guidance Notes for AML/ATF Regulated Financial Institutions (revised June 2023)",
        "url": "https://www.bma.bm/viewPDF/documents/2024-06-13-13-28-45-2023-06-12-15-17-06-General-Guidance-Notes-for-AMLATF-Regulated-Entities-Revised.pdf",
        "published": "2023-06-12"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "area": "aml",
        "title": "AML / ATF & Sanctions"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "focus-aml-2",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "If in scope: business risk assessment, customer due diligence, appointed Compliance Officer and MLRO, staff training, suspicious activity reporting to the Financial Intelligence Agency, and independent audit of the AML/ATF programme. See also the BMA's October 2024 sector ML/TF risk paper for long-term insurers, managers and brokers.",
      "citation": "AML/ATF Regulations 2008; BMA General Guidance Notes (June 2023)",
      "source": {
        "type": "bma-guidance",
        "name": "BMA — Long-Term Insurers, Insurance Managers and Insurance Brokers Sector: ML/TF Risks, Vulnerabilities and Preventive Measures (October 2024)",
        "url": "https://cdn.bma.bm/documents/2024-10-16-14-59-03-Long-Term-Insurers-Insurance-Managers-andInsurance-Brokers-Sector---MLTF-Risks-Vulnerabilities-and-Preventive-Measures.pdf",
        "published": "2024-10-16"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "area": "aml",
        "title": "AML / ATF & Sanctions"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "focus-aml-3",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Comply with the sanctions regime applicable in Bermuda (International Sanctions Act 2003 framework), including screening obligations — confirm current lists and guidance.",
      "citation": null,
      "source": {
        "type": "bma-guidance",
        "name": "BMA General Guidance Notes for AML/ATF Regulated Financial Institutions (revised June 2023)",
        "url": "https://www.bma.bm/viewPDF/documents/2024-06-13-13-28-45-2023-06-12-15-17-06-General-Guidance-Notes-for-AMLATF-Regulated-Entities-Revised.pdf",
        "published": "2023-06-12"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "area": "aml",
        "title": "AML / ATF & Sanctions"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "focus-conduct-1",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Conduct of business duties under section 8 of the Insurance Code of Conduct (August 2022): fair treatment of policyholders, claims handling standards, complaints procedures, and conflict-of-interest policies proportionate to the business model.",
      "citation": "Insurance Code of Conduct (August 2022), s.8",
      "source": {
        "type": "bma-primary",
        "name": "Insurance Code of Conduct (revised August 2022)",
        "url": "https://www.bma.bm/viewPDF/documents/2022-08-31-12-35-41-Insurance-Code-of-Conduct--Revised-August-2022.pdf",
        "published": "2022-08-31"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "area": "conduct",
        "title": "Market Conduct"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "focus-conduct-2",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Section 8.1 of the 2022 Code addresses integrity and conflicts generally. The domestic-retail limitation appears after section 8.1, before section 8.2. The June 2026 proposal would expand the later conduct provisions to direct retail policyholders wherever located; it proposes compliance 180 days after final publication. That proposal is not encoded as an operative requirement.",
      "citation": "Insurance Code of Conduct, 8.1 and header before 8.2; June 2026 consultation, section 3 paragraphs 4–8",
      "source": {
        "type": "bma-primary",
        "name": "Insurance Code of Conduct (revised August 2022)",
        "url": "https://www.bma.bm/viewPDF/documents/2022-08-31-12-35-41-Insurance-Code-of-Conduct--Revised-August-2022.pdf",
        "published": "2022-08-31"
      },
      "verification": "verify",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-03-21",
      "legal_review": "pending",
      "data": {
        "area": "conduct",
        "title": "Market Conduct"
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "bma-guidance",
          "name": "BMA Consultation Paper — Proposed Amendments to Insurance Code of Conduct, Insurance (Group Supervision) Rules 2011 and Insurance (Prudential Standards) (Insurance Group Solvency Requirement) Rules 2011 (9 June 2026)",
          "url": "https://cdn.bma.bm/documents/2026-06-11-08-45-03-Consultation-Paper---Proposed-Amendments-to-Code-of-Conduct-Group-Supervision-and-Prudential-Standards-Insurance-Group-Solvency-Requirement-Rules-2011.pdf",
          "published": "2026-06-09"
        }
      ],
      "rule": {
        "kind": "conduct"
      },
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "focus-cyber-1",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Statutory insurer duty under section 30JEA: notify forthwith on knowledge or reason to believe a defined cyber reporting event occurred; provide the written report within 14 days of that notification. The Cyber Code separately specifies notification within 72 hours from determination or confirmation (whichever is sooner), and an incident report within 14 days from initial notification. Do not use the Code clock to postpone the statutory notice.",
      "citation": "Insurance Act 1978, s.30JEA; Cyber Code, incident reporting",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "area": "cyber",
        "title": "Cyber & Technology Risk"
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "legislation",
          "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
          "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
          "published": "2026-01-07"
        },
        {
          "type": "bma-primary",
          "name": "Insurance Sector Operational Cyber Risk Management Code of Conduct (Oct 2020, effective 1 Jan 2021)",
          "url": "https://www.bma.bm/viewPDF/documents/2020-10-06-09-27-29-Insurance-Sector-Cyber-Risk-Management-Code-of-Conduct.pdf",
          "published": "2020-10-06"
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "focus-cyber-2",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Notification windows verified (2 July 2026): statutory duty to notify cyber reporting events forthwith with a 14-day written report (Insurance Act s.30JEA); Cyber Code standard of 72 hours from determination/confirmation of a material cyber reporting event, 14-day incident report. Materiality per the Code: significant adverse impact on policyholders/clients or system availability, severe integrity compromise, confidentiality breach, or reportability to another authority.",
      "citation": "Insurance Act 1978, s.30JEA; Cyber Risk Code of Conduct",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "area": "cyber",
        "title": "Cyber & Technology Risk"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "focus-cyber-3",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Address cyber risk in outsourcing due diligence and contracts for material service providers.",
      "citation": "Cyber Risk Code of Conduct; Insurance Code of Conduct",
      "source": {
        "type": "bma-primary",
        "name": "Insurance Sector Operational Cyber Risk Management Code of Conduct (Oct 2020, effective 1 Jan 2021)",
        "url": "https://www.bma.bm/viewPDF/documents/2020-10-06-09-27-29-Insurance-Sector-Cyber-Risk-Management-Code-of-Conduct.pdf",
        "published": "2020-10-06"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "area": "cyber",
        "title": "Cyber & Technology Risk"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "focus-out-1",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "iigb"
      ],
      "topic": "focus",
      "text": "Operational Resilience and Outsourcing Code, September 2025: scope is limited to the licences in section I paragraph 3. Relevant insurer classes include 3A, 3B, 4, C, D, E, IIGB and IILT; the supported insurer selections here exclude IILT. Relevant intermediaries and specified other regulated sectors are included. DABA requires Class F; investment business requires a standard licence. Sandbox/test licences are excluded. Section XVI requires adherence by 31 March 2028, except banks/deposit companies by 1 January 2027. These are compliance dates, not a deferral of other current statutory duties.",
      "citation": "Operational Resilience and Outsourcing Code, I paragraphs 3–5; XVI",
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "established",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {
        "area": "outsourcing",
        "title": "Outsourcing & Operational Resilience"
      },
      "editorial_updated": "2026-09-21",
      "rule": {
        "kind": "opres"
      },
      "compliance_by": "2028-03-31",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "focus-out-2",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Maintain a register of outsourcing arrangements with materiality classification, due diligence records, and written agreements containing audit and access rights.",
      "citation": "Insurance Code of Conduct; Operational Resilience and Outsourcing Code",
      "source": {
        "type": "bma-primary",
        "name": "Insurance Code of Conduct (revised August 2022)",
        "url": "https://www.bma.bm/viewPDF/documents/2022-08-31-12-35-41-Insurance-Code-of-Conduct--Revised-August-2022.pdf",
        "published": "2022-08-31"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "area": "outsourcing",
        "title": "Outsourcing & Operational Resilience"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "focus-out-3",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Current statutory material-change route: sections 30JA(1)(f), (g) and (k) cover specified outsourcing of actuarial, risk management, compliance or internal audit functions, underwriting activity, and officer roles. An insurer must give written notice before such a change. Section 30JB(4) permits implementation following earlier written no-objection or expiry of 30 days without objection; requests for information extend the period under subsection (6). Insurance-group treatment is different and is outside this tool’s entity workflow. This existing Act route is separate from the Operational Resilience Code.",
      "citation": "Insurance Act 1978, ss.30JA(1)(f), (g), (k), 30JB(1), (4)–(6)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {
        "area": "outsourcing",
        "title": "Outsourcing & Operational Resilience"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "focus-climate-1",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "focus",
      "text": "Commercial insurers: the BMA expected climate change action plans to be implemented by year-end 2025, with climate risk embedded in the risk management framework and solvency self-assessment proportionate to exposure, and continuous progress documented in the CISSA. A 2023 discussion paper on climate disclosure may lead to further requirements — monitor.",
      "citation": "BMA Guidance Note — Management of Climate Change Risks (March 2023)",
      "source": {
        "type": "bma-guidance",
        "name": "Guidance Note — Management of Climate Change Risks for Commercial Insurers (March 2023)",
        "url": "https://www.bma.bm/viewPDF/documents/2023-03-09-17-03-42-Guidance-Note---Insurance---Management-of-Climate-Change-Risks-for-Commercial-Insurers.pdf",
        "published": "2023-03-09"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "area": "climate",
        "title": "Climate Risk"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "focus-sub-1",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "focus",
      "text": "Economic substance is fact-dependent. Confirm the relevant activity, exemptions and current requirements under the Economic Substance Act. CITA assumed administration on 31 March 2026; its announcement retains the ROC declaration portal until further instruction. The generally stated six-month year-end declaration period is not calculated here pending entity-specific and current statutory confirmation.",
      "citation": "CITA administration announcement; Economic Substance Act 2018 (current statutory scope must be confirmed)",
      "source": {
        "type": "official-guidance",
        "name": "CITA — Economic Substance administration and filing transition",
        "url": "https://www.cita.bm/news/cita-new-changes-economic-substance-automatic-exchange-of-information",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "area": "substance",
        "title": "Economic Substance"
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "legislation",
          "name": "Economic Substance Act 2018 — verify current requirements and applicability",
          "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/2018/Economic%20Substance%20Act%202018",
          "published": null
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "task-extension",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "task",
      "text": "Select the filing being extended. Section 17(4) statutory filings have total filing-period caps of seven months for the four-month classes and nine months for the six-month classes. BSCR and CISSA/GAAP/FCR requests use separate section 6C fee items; this tool does not infer their maximum permitted extension from the fee schedule.",
      "citation": "Insurance Act 1978, ss.17(4), 6C; BMA 2026 fees, items 2(c), 2(x), 2(z)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-09-22",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "title": "Statutory filing deadline extension request",
        "authorityVer": "established",
        "timing": {
          "t": "Apply before the applicable deadline. The seven/nine-month total-period limits refer to section 17(4); other routes require their own confirmation.",
          "ver": "verify"
        },
        "fee": {
          "t": "Select a filing type to see the supported 2026 fee item. Combined requests require confirmation of the applicable single fee; the tool does not aggregate or guess.",
          "ver": "verify"
        },
        "method": {
          "t": "Confirm the current submission channel (BMA electronic filing portal or e-mail to the supervisory team) — verify current guidance.",
          "ver": "unverified"
        },
        "docs": [
          "Cover letter identifying each filing, its legal gateway and the requested period",
          "Reasons for the delay and evidence-based remediation timetable",
          "Verified current and proposed dates",
          "Evidence of actual board or management consideration, where applicable",
          "Confirmed fee item, amount and current submission channel"
        ],
        "escalate": "If the delay stems from a control failure, auditor issue, or solvency concern, obtain professional advice before submitting — the explanation given to the regulator may have supervisory consequences.",
        "template": "[Entity / applicant letterhead]\n[Date]\nBermuda Monetary Authority\n[Confirm current form and submission channel]\n\nSubject: Filing deadline extension — [entity / registration number] — [filing and period]\n\nDear Sir or Madam,\n\nOn behalf of [entity], a [class] insurer, we request an extension of [exact filing] from [verified current deadline] to [requested date].\n\nThe proposed gateway is [section 17(4) for the relevant statutory filing / confirmed section 6C route for the identified return]. [For a combined request, list each filing and its own gateway.]\n\nThe reason for the request is [circumstances]. Work completed comprises [verified progress]. The remaining steps, accountable owners and completion dates are [timetable]. [Explain material regulatory implications and any separate notifications required.]\n\n[For section 17(4), confirm the applicable seven/nine-month total-period limit. For another route, establish its permitted period independently.]\n\nPlease confirm the Authority's decision and any conditions attached to the requested filing extension.\n\n[Record authority to submit actually obtained. List only documents actually enclosed, any outstanding items, the confirmed fee item and actual payment status.]\n\nYours faithfully,\n[Name / capacity / contact]"
      },
      "editorial_updated": "2026-09-22",
      "sources": [
        {
          "type": "bma-primary",
          "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
          "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
          "published": "2026-03-17"
        }
      ],
      "revision": "2.3.0",
      "evidence_note": "Request-specific drafting review, 22 September 2026. See SOURCES.md for primary-source gateways and limitations. Forms, fees and submission channels require confirmation. No external legal sign-off."
    },
    {
      "id": "task-newlicence",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "task",
      "text": "Registration or licensing is granted under the sector's governing Act (e.g. registration as an insurer under s.4 Insurance Act 1978). The application must satisfy the minimum criteria (fit and proper controllers and officers, adequate capital, sound business plan). The Authority must be satisfied the applicant meets its minimum margin of solvency (and ECR for commercial classes) on registration (s.5).",
      "citation": "Insurance Act 1978, ss.4, 5",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-09-22",
      "review_due": "2027-01-01",
      "legal_review": "pending",
      "data": {
        "title": "New registration / licence application",
        "authorityVer": "established",
        "timing": {
          "t": "Insurer applications are typically considered under the BMA's published assessment timetable (historically a periodic assessment process). Confirm the current process and lead times on the BMA website.",
          "ver": "verify"
        },
        "fee": {
          "t": "2026 insurance fee item 1(a): $800 to apply for insurer registration under section 4(1). The registration fee on grant and later annual fees are separate and class-dependent; confirm the current items and any applicable remission before payment.",
          "ver": "verify"
        },
        "method": {
          "t": "Confirm the current application channel and forms (BMA portal / prescribed forms).",
          "ver": "unverified"
        },
        "docs": [
          "Completed prescribed application form for the class/licence sought",
          "Detailed business plan (nature, scale, market, distribution, 3–5 year pro forma financials)",
          "Capital and solvency projections against the applicable requirement (MSM and, for commercial classes, ECR)",
          "Details and fit-and-proper documentation for shareholder controllers, directors, and senior executives",
          "Group structure chart and ownership details",
          "Draft governance, risk management, and compliance frameworks (incl. AML/ATF where in scope)",
          "Proposed principal representative / insurance manager and auditor (and actuary where required)",
          "Application fee per the current fee schedule",
          "Check the separate Key Person Police Clearance Certificate conditions below; do not assume every appointee is in scope."
        ],
        "escalate": "Licence applications involve regulatory discretion and structuring decisions. Engage Bermuda counsel and, for insurers, an insurance manager or advisor familiar with the BMA assessment process before submission.",
        "template": "[Entity / applicant letterhead]\n[Date]\nBermuda Monetary Authority\n[Confirm current form and submission channel]\n\nSubject: Insurer registration application — [proposed entity] — [requested class]\n\nDear Sir or Madam,\n\nWe submit this application on behalf of [applicant / legal form] for registration as a [class] insurer under section 4 of the Insurance Act 1978. The intended commencement date is [date, subject to registration and applicable conditions].\n\nThe proposed business is [business lines, customers, territories and operating model]. The ownership and group arrangements are [summary]. The facts supporting the requested class are [analysis].\n\n[Explain how section 5 and the relevant minimum criteria are addressed. Summarise capital, solvency projections, governance, management and service-provider arrangements with references to supporting evidence.]\n\n[Where the PCC notice applies to an individual, identify the accompanying documentation or the BMA's response on a proposed substitute. Do not assume acceptance. Distinguish the application fee from any registration fee payable on grant.]\n\nWe request consideration of registration in the stated class and confirmation of further information or conditions required.\n\n[Record authority to submit actually obtained. List only documents actually enclosed, any outstanding items, the confirmed fee item and actual payment status.]\n\nYours faithfully,\n[Name / capacity / contact]"
      },
      "editorial_updated": "2026-09-22",
      "sources": [
        {
          "type": "bma-primary",
          "name": "BMA Notice — New Policy Implementation: Police Clearance Certificate Requirement for Key Persons (13 August 2026)",
          "url": "https://cdn.bma.bm/documents/2026-08-13-14-53-34-Notice---New-Policy-Implementation---Police-Clearance-Certificate-Requirement-for-Key-Persons.pdf",
          "published": "2026-08-13"
        }
      ],
      "fee_year": 2026,
      "revision": "2.3.0",
      "evidence_note": "Request-specific drafting review, 22 September 2026. See SOURCES.md for primary-source gateways and limitations. Forms, fees and submission channels require confirmation. No external legal sign-off."
    },
    {
      "id": "task-modification",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "task",
      "text": "Confirm the specific enabling power and target requirement. Section 56 applies only to provisions within subsection (5); section 6C concerns standards under section 6A Rules; section 6D concerns capital adjustments. Section 57A concerns designated investment contracts and is not a general exemption route. Verify class scope and the chosen gateway with Bermuda counsel.",
      "citation": "Insurance Act 1978, ss.6C, 6D, 56, 57A",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-09-22",
      "review_due": "2027-01-01",
      "legal_review": "pending",
      "data": {
        "title": "Exemption / modification request",
        "authorityVer": "established",
        "timing": {
          "t": "Apply well in advance of the date by which relief is needed; directions are discretionary and may be conditional. No universal statutory lead time is held in this tool — verify.",
          "ver": "unverified"
        },
        "fee": {
          "t": "Confirm the exact 2026 item after selecting the gateway. General and special section 56 directions, prudential-standard relief, quarterly-return relief and capital adjustments have separate fee items. A fee entry does not establish that the requested relief is legally available.",
          "ver": "verify"
        },
        "method": {
          "t": "Confirm the current submission channel with the entity's supervisory contact.",
          "ver": "unverified"
        },
        "docs": [
          "Identify the target provision, insurer class and exact enabling subsection",
          "Specify the relief, proposed wording, duration and supporting evidence",
          "Address policyholder impact and conditions specific to the selected gateway",
          "Propose safeguards, monitoring and review where appropriate (preparation suggestions)",
          "Record governance authority actually obtained and confirm route-specific form, fee and channel"
        ],
        "escalate": "Exemption and modification requests turn on regulatory discretion and precedent. Obtain Bermuda legal advice on the framing of the grounds before submission.",
        "template": "[Entity / applicant letterhead]\n[Date]\nBermuda Monetary Authority\n[Confirm current form and submission channel]\n\nSubject: Exemption / modification application — [entity / registration number] — [target provision]\n\nDear Sir or Madam,\n\nOn behalf of [entity], a [class] insurer, we apply for [precisely described exemption, modification or capital adjustment] under [confirmed enabling section and subsection].\n\nThe requirement affected is [Act provision / Rule / existing direction]. We request [proposed wording and extent of relief] for [period], effective from [requested date]. [Explain why the selected power covers this provision and insurer.]\n\nOur reasons and supporting evidence are [entity-specific facts and analysis]. [For section 56, confirm the target is within subsection (5). For section 6C, address policyholder obligations. For section 6D, explain the calculation and evidence supporting the capital adjustment. Retain only the applicable route.]\n\nThe expected effect on policyholders and the insurer is [assessment]. We propose [relevant safeguards and review arrangements], subject to the Authority's determination. [Identify existing non-compliance and obtain advice on separate reporting duties.]\n\nWe request a written determination of the scope, effective date and conditions of any relief. We do not treat submission as permission to depart from the existing requirement.\n\n[Record authority to submit actually obtained. List only documents actually enclosed, any outstanding items, the confirmed fee item and actual payment status.]\n\nYours faithfully,\n[Name / capacity / contact]"
      },
      "editorial_updated": "2026-09-22",
      "fee_year": 2026,
      "revision": "2.3.0",
      "evidence_note": "Request-specific drafting review, 22 September 2026. See SOURCES.md for primary-source gateways and limitations. Forms, fees and submission channels require confirmation. No external legal sign-off."
    },
    {
      "id": "task-controller",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "task",
      "text": "New/increased shareholder control: for private-company shares, section 30D requires prior notice at the 10%, 20%, 33% and 50% thresholds and early written no-objection or expiry of the applicable 45-day period without objection, subject to statutory extensions. For public-company shares, section 30E requires notice within 45 days after becoming the controller. Section 30EA disposal rules apply only to its listed classes. The insurer’s own officer/controller reporting is separately governed by section 30J.",
      "citation": "Insurance Act 1978, ss.30D–30EA, 30J; BMA PCC notice of 13 August 2026",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-09-22",
      "review_due": "2027-01-01",
      "legal_review": "pending",
      "data": {
        "title": "Change of shareholder controller notification",
        "authorityVer": "established",
        "timing": {
          "t": "Confirm whether the insurer’s or parent’s shares are publicly traded and identify the notification actor. The selected-context explanation below distinguishes acquisition, disposal and insurer reporting.",
          "ver": "verify"
        },
        "fee": {
          "t": "2026 fee item 2(f): $750 for the specified section 30D notification. Do not extend that item automatically to section 30E/30EA or officer notifications; confirm the applicable item.",
          "ver": "verify"
        },
        "method": {
          "t": "Confirm the current form and channel with the supervisory team.",
          "ver": "unverified"
        },
        "docs": [
          "Notification letter identifying the transferor, transferee, and resulting percentage of control",
          "Structure charts before and after the change",
          "Fit-and-proper documentation for the new controller (personal declaration forms where prescribed)",
          "Description of the transaction, funding, and any change to the business plan",
          "The prescribed form and the $750 fee (2026) where applicable",
          "Check the separate Key Person Police Clearance Certificate conditions below; do not assume every appointee is in scope."
        ],
        "escalate": "Controller changes are transaction-critical: an unapproved change is an offence (s.30G — fines up to $25,000 summary / $100,000 indictment, plus $500 per day for continuing as a controller after objection) and can jeopardise the transaction. Always obtain Bermuda counsel's advice on the applicable threshold regime and timing before signing.",
        "template": "[Entity / applicant letterhead]\n[Date]\nBermuda Monetary Authority\n[Confirm current form and submission channel]\n\nSubject: Shareholder controller notification — [insurer / registration number] — [transaction]\n\nDear Sir or Madam,\n\n[Notifying person] gives this notice as [shareholder controller / insurer / authorised representative] under [section 30D, 30E, 30EA or 30J — retain the verified route].\n\nThe relevant shares are [private / publicly traded on identified exchange; confirm statutory treatment]. The transaction is [proposed acquisition or increase / completed public-company acquisition / disposal / insurer's separate notification]. The relevant parties, structure and dates are [details].\n\nHoldings and voting rights before and after the transaction are [percentages and calculation], crossing [applicable threshold]. [Explain indirect ownership and provide before-and-after structure information.]\n\n[For a private acquisition under section 30D, state the proposed completion date and address the statutory no-objection conditions before completion. For a subsequent notice, state the actual event date and applicable deadline. Do not interchange these routes.]\n\n[Describe funding, fit-and-proper evidence and any conditional Key Person/PCC documentation appropriate to the route.]\n\nPlease acknowledge receipt and [confirm the applicable no-objection position for a prior-acquisition route / identify further information required for this notification].\n\n[Record authority to submit actually obtained. List only documents actually enclosed, any outstanding items, the confirmed fee item and actual payment status.]\n\nYours faithfully,\n[Name / capacity / contact]"
      },
      "editorial_updated": "2026-09-22",
      "sources": [
        {
          "type": "bma-primary",
          "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
          "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
          "published": "2026-03-17"
        },
        {
          "type": "bma-primary",
          "name": "BMA Notice — New Policy Implementation: Police Clearance Certificate Requirement for Key Persons (13 August 2026)",
          "url": "https://cdn.bma.bm/documents/2026-08-13-14-53-34-Notice---New-Policy-Implementation---Police-Clearance-Certificate-Requirement-for-Key-Persons.pdf",
          "published": "2026-08-13"
        }
      ],
      "fee_year": 2026,
      "revision": "2.3.0",
      "evidence_note": "Request-specific drafting review, 22 September 2026. See SOURCES.md for primary-source gateways and limitations. Forms, fees and submission channels require confirmation. No external legal sign-off."
    },
    {
      "id": "task-approvedperson",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "task",
      "text": "The Insurance Act 1978 requires insurers to appoint an approved auditor (s.16), and for applicable classes an approved actuary / loss reserve specialist (ss.8B, 26, 27), and to maintain a principal office and principal representative in Bermuda (s.8); appointments and changes engage BMA approval or notification requirements. Confirm the exact process applicable to the role and class concerned.",
      "citation": "Insurance Act 1978, ss.8, 8B, 16, 26, 27",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-09-22",
      "review_due": "2027-01-01",
      "legal_review": "pending",
      "data": {
        "title": "Approval of auditor / actuary / principal representative",
        "authorityVer": "established",
        "timing": {
          "t": "Approvals should be sought before the appointment takes effect; ceasing to hold an approved appointment (e.g. auditor resignation) triggers notification duties within prescribed periods — verify the current periods.",
          "ver": "unverified"
        },
        "fee": {
          "t": "No fee is quoted for this appointment draft. Confirm whether the exact role and procedure attract a current fee; modifying a specialist opinion is a separate matter.",
          "ver": "unverified"
        },
        "method": {
          "t": "Confirm the prescribed form and current channel with the supervisory team.",
          "ver": "unverified"
        },
        "docs": [
          "Identify role, insurer class, applicable procedure and proposed date",
          "Provide qualifications, experience and regulatory standing relevant to the role",
          "Address independence and conflicts where relevant; confirm role-specific BMA forms",
          "Record governance approval actually obtained and outstanding steps",
          "For a replacement, identify incumbent, cessation date and separate notification duties",
          "Include personal declaration and PCC evidence only where their conditions apply"
        ],
        "escalate": "Where the change follows a disagreement or resignation of the incumbent (particularly an auditor), the circumstances themselves may be notifiable — obtain professional advice before corresponding with the Authority.",
        "template": "[Entity / applicant letterhead]\n[Date]\nBermuda Monetary Authority\n[Confirm current form and submission channel]\n\nSubject: Appointment submission — [insurer / registration number] — [person / firm and role]\n\nDear Sir or Madam,\n\nOn behalf of [insurer], a [class] insurer, we submit particulars of [person / firm] for the role of [auditor / approved actuary / loss reserve specialist / principal representative].\n\nThe applicable provision is [section 16 / section 26 / section 8B / section 8, as appropriate]. [Confirm class applicability and whether approval, notification or another procedure applies.] The proposed effective date is [date, subject to any required approval].\n\nThe appointee's qualifications, experience and standing are [verified particulars]. [Address independence, conflicts, capacity and role-specific requirements where applicable.]\n\n[For a replacement, identify the incumbent, reasons, dates and separate notifications required. Do not imply that this letter satisfies an auditor's own reporting duties.]\n\n[Record the appointee's acceptance if confirmed. Include personal declaration/PCC evidence only where applicable.]\n\nWe request [approval of this specific appointment / acknowledgement of the relevant notification — retain the correct outcome] and confirmation of any further information required.\n\n[Record authority to submit actually obtained. List only documents actually enclosed, any outstanding items, the confirmed fee item and actual payment status.]\n\nYours faithfully,\n[Name / capacity / contact]"
      },
      "editorial_updated": "2026-09-22",
      "sources": [
        {
          "type": "bma-primary",
          "name": "BMA Notice — New Policy Implementation: Police Clearance Certificate Requirement for Key Persons (13 August 2026)",
          "url": "https://cdn.bma.bm/documents/2026-08-13-14-53-34-Notice---New-Policy-Implementation---Police-Clearance-Certificate-Requirement-for-Key-Persons.pdf",
          "published": "2026-08-13"
        }
      ],
      "fee_year": 2026,
      "revision": "2.3.0",
      "evidence_note": "Request-specific drafting review, 22 September 2026. See SOURCES.md for primary-source gateways and limitations. Forms, fees and submission channels require confirmation. No external legal sign-off."
    },
    {
      "id": "conseq-escalation",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb",
        "intermediary",
        "daba",
        "investment",
        "fundadmin",
        "trust",
        "bank",
        "msb",
        "csp"
      ],
      "topic": "consequence",
      "text": "How the BMA escalates in practice: the Authority publishes a Statement of Principles governing its use of registration, intervention, civil penalty, censure and prohibition powers ('effective, proportionate and dissuasive'), and publishes enforcement outcomes on its website. Recent published actions include civil penalties totalling $900,000 (Acadia Life Limited, long-term insurer), $100,000 (Acadia Life International Limited), $600,000 (Meritus Trust Company Limited, AML/ATF), and public censures of other licensees. Published powers and outcomes do not establish a mandatory sequence or predict how any individual case will be handled.",
      "citation": "BMA Statement of Principles; bma.bm/enforcement-action",
      "source": {
        "type": "bma-primary",
        "name": "BMA — List of Enforcement Action in Bermuda",
        "url": "https://www.bma.bm/enforcement-action",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "title": "Supervisory escalation in practice",
        "role": "escalation"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "conseq-late-filing",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "consequence",
      "text": "Breach trigger: filing the statutory financial statements, statutory financial return, GAAP financial statements or capital and solvency return after the statutory filing date with no extension in force — or after the expiry of the maximum extended period.",
      "citation": "Insurance Act 1978, ss.17, 18A",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-01",
      "legal_review": "pending",
      "data": {
        "title": "Late or missed statutory filings",
        "taskIds": [
          "extension"
        ],
        "rows": [
          {
            "breach": "Filing after the filing date (no extension in force)",
            "consequence": "Late fee for each week or part week: up to $500 (Class 1/2/3/A/B and intermediaries), $1,000 (Class 3A/IIGB/Collateralized/SPI/IILT/C/D), $5,000 (Class 3B/4/E)",
            "provision": "s.18A(1)–(2)",
            "ver": "established"
          },
          {
            "breach": "Filings still outstanding three months past the filing date",
            "consequence": "The Authority may appoint an inspector to investigate the insurer's affairs",
            "provision": "s.18A(5), s.30",
            "ver": "established"
          },
          {
            "breach": "Breach of the Act / Rules (incl. persistent non-filing)",
            "consequence": "Directions — including ceasing to write new business, premium caps, asset controls",
            "provision": "s.32(1)(c), (2)",
            "ver": "established"
          },
          {
            "breach": "Failure to comply with a requirement of the Act",
            "consequence": "Civil penalty up to $500,000 per failure or contravention (due-diligence defence available; late-fee items under s.18A are carved out of s.32D)",
            "provision": "s.32D",
            "ver": "established"
          },
          {
            "breach": "Contravention by a registered person",
            "consequence": "Public censure; publication of decision-notice information",
            "provision": "ss.32F, 44I",
            "ver": "established"
          },
          {
            "breach": "Minimum criteria no longer satisfied (e.g. prudent conduct in doubt)",
            "consequence": "Cancellation of registration (warning/decision notice procedure); gazetted",
            "provision": "ss.41, 44",
            "ver": "established"
          }
        ],
        "practice": [
          {
            "t": "Contact the supervisory team before the deadline passes, not after — a candid pre-deadline call with a realistic remediation date is treated very differently from silence.",
            "srcLabel": "Practitioner view — not a BMA source"
          },
          {
            "t": "Notify the board immediately and minute the discussion; the board's awareness is expected in the extension application itself.",
            "srcLabel": "Practitioner view — not a BMA source"
          },
          {
            "t": "Document the root cause (auditor capacity, data issues, control failure) and the fix — the BMA's response typically scales with the quality of the remediation plan.",
            "srcLabel": "Practitioner view — not a BMA source"
          }
        ]
      },
      "editorial_updated": "2026-09-21",
      "fee_year": 2026,
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "conseq-extension-cap",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "consequence",
      "text": "Breach trigger: continued non-filing after the maximum extended filing period has expired. Research finding (2 July 2026): the limit is a statutory cap on the aggregate extension period, not a count of applications — s.17(4) caps the total filing period at seven months for the four-month classes and nine months for the six-month classes (a maximum of three additional months in each case). The 2026 fee schedule prices extension applications only for the first, second and third months past the filing deadline — no fourth month exists in the schedule. Once the cap is reached the Authority has no power under s.17(4) to allow further time, and continued non-filing is an ongoing contravention.",
      "citation": "Insurance Act 1978, s.17(4); 2026 BMA fee schedule item 2(c)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-01",
      "legal_review": "pending",
      "data": {
        "title": "Filing-extension limit — what the law actually says",
        "taskIds": [
          "extension"
        ],
        "rows": [
          {
            "breach": "Seeking an extension beyond the statutory maximum (7 months total for four-month classes; 9 months for six-month classes)",
            "consequence": "Not legally available — the Authority's power to allow a longer period is capped by the words 'not exceeding seven [nine] months'",
            "provision": "s.17(4)(a)–(b)",
            "ver": "established"
          },
          {
            "breach": "Extension applications priced per month",
            "consequence": "First, second and third month past the filing deadline each carry an application fee (2026: $2,500/month Class 3B/4/E; $1,500/month Class 3A/C/D/IIGB/IILT; $750/month captives, SPI, Collateralized)",
            "provision": "2026 fee schedule, item 2(c)",
            "ver": "verify"
          },
          {
            "breach": "Non-filing after the capped period expires",
            "consequence": "Ongoing contravention: weekly late fees continue (s.18A), inspector appointment available, intervention directions and civil penalties on the table",
            "provision": "ss.18A, 30, 32, 32D",
            "ver": "established"
          }
        ],
        "practice": [
          {
            "t": "The common market shorthand — 'after the third extension you are in breach' — is a workable rule of thumb, but the legal mechanism is the aggregate three-month cap in s.17(4), not a count of granted requests. Plan remediation to land inside the cap.",
            "srcLabel": "Practitioner view — not a BMA source"
          },
          {
            "t": "If it becomes clear the capped date cannot be met, tell the supervisor before it passes and propose a supervised remediation path — at that point the BMA's discretion lies in how it enforces, not in granting more time.",
            "srcLabel": "Practitioner view — not a BMA source"
          }
        ]
      },
      "editorial_updated": "2026-09-21",
      "fee_year": 2026,
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "conseq-sba-unapproved",
      "entity_scope": [
        "classC",
        "classD",
        "classE",
        "class4",
        "class3b"
      ],
      "topic": "consequence",
      "text": "SBA valuation approval and approval of an internal capital model are different matters. This release does not establish class-specific approval gateways or their sanctions; these conclusions are withheld pending the relevant Prudential Standards Rules.",
      "citation": "Rules made under Insurance Act 1978, s.6A/27F; 2026 BMA fee schedule items 2(ad)–(af), (n)–(q)",
      "source": {
        "type": "bma-primary",
        "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
        "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
        "published": "2026-03-17"
      },
      "verification": "unverified",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "title": "Using the SBA or an internal model without approval",
        "taskIds": [
          "modification"
        ],
        "rows": [
          {
            "breach": "Approval applicability not established by this tool",
            "consequence": "Confirm the class-specific rule and any approval condition directly; no automatic breach conclusion is provided.",
            "provision": "Class-specific Prudential Standards Rules — verification outstanding",
            "ver": "unverified"
          }
        ],
        "practice": []
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "conseq-msm-breach",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "consequence",
      "text": "Breach trigger: failing to meet the minimum margin of solvency at any time — and separately, failing to notify the Authority immediately on becoming aware (or having reason to believe) that the failure has occurred.",
      "citation": "Insurance Act 1978, s.31A",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "title": "Failure to maintain the minimum solvency margin",
        "taskIds": [],
        "rows": [
          {
            "breach": "MSM not met",
            "consequence": "Immediate notification duty; written report with circumstances and a rectification plan within 14 days; the Authority may require plan modifications",
            "provision": "s.31A(1)–(2)",
            "ver": "established"
          },
          {
            "breach": "MSM not met",
            "consequence": "No dividends may be declared or paid until the failure is rectified",
            "provision": "s.31A(1)",
            "ver": "established"
          },
          {
            "breach": "Failure to notify",
            "consequence": "Separate contravention — civil penalty exposure up to $500,000; intervention grounds engaged (significant risk of insolvency)",
            "provision": "ss.32D, 32(1)(a)",
            "ver": "established"
          },
          {
            "breach": "Sustained breach",
            "consequence": "Directions (cease writing, asset custody/localisation), inspector appointment, ultimately cancellation and winding-up petition powers",
            "provision": "ss.32, 30, 41",
            "ver": "established"
          }
        ],
        "practice": [
          {
            "t": "The 14-day plan is the document that frames everything that follows — make it specific (capital injection amounts, dates, board approvals) rather than aspirational.",
            "srcLabel": "Practitioner view — not a BMA source"
          }
        ]
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "conseq-ecr-breach",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "consequence",
      "text": "Breach trigger: failing to comply with the enhanced capital requirement (ECR) applicable to a commercial insurer — and separately, failing to make the required notifications and follow-up filings. Notification clocks and actors must be checked separately under sections 8A, 30JEA, 31A and 31AA and the Cyber Code; this table does not establish a case-specific deadline.",
      "citation": "Insurance Act 1978, s.31AA",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "title": "Failure to comply with the ECR (commercial classes)",
        "taskIds": [],
        "rows": [
          {
            "breach": "ECR not met",
            "consequence": "Statutory reporting, remediation and possible supervisory consequences depend on the applicable provision and trigger. Use the separate filing explanation and verify the Act/Code before acting.",
            "provision": "s.31AA(1)",
            "ver": "verify"
          },
          {
            "breach": "ECR not met",
            "consequence": "Dividend freeze until rectified",
            "provision": "s.31AA(2)",
            "ver": "established"
          },
          {
            "breach": "ECR breach",
            "consequence": "Express intervention ground — directions available; the Authority may also adjust capital figures",
            "provision": "s.32(1), s.6D",
            "ver": "established"
          },
          {
            "breach": "Significant loss likely to breach ECR",
            "consequence": "Statutory reporting, remediation and possible supervisory consequences depend on the applicable provision and trigger. Use the separate filing explanation and verify the Act/Code before acting.",
            "provision": "s.8A(2)(f), (2a)",
            "ver": "verify"
          }
        ],
        "practice": [
          {
            "t": "Where the breach follows a large loss event, the principal representative's s.8A duty and the insurer's s.31AA duty run in parallel — coordinate a single, consistent notification pack.",
            "srcLabel": "Practitioner view — not a BMA source"
          }
        ]
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "conseq-controller",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "consequence",
      "text": "Failure to follow the applicable shareholder or insurer notification route. Duties differ by actor, class and public/private share status; see the selected-context explanation.",
      "citation": "Insurance Act 1978, ss.30D–30H",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-01",
      "legal_review": "pending",
      "data": {
        "title": "Unapproved change of shareholder controller",
        "taskIds": [
          "controller"
        ],
        "rows": [
          {
            "breach": "Where section 30D applies: becoming a controller without required prior notice or before its statutory no-objection conditions are met",
            "consequence": "Offence: fine up to $25,000 on summary conviction",
            "provision": "s.30G(1), (6)",
            "ver": "established"
          },
          {
            "breach": "Becoming/remaining a controller after a notice of objection",
            "consequence": "Offence: $25,000 summary (plus $500 per day for continuing); on indictment $100,000 or 2 years' imprisonment or both",
            "provision": "s.30G(5), (7)",
            "ver": "established"
          },
          {
            "breach": "Unapproved controller in place",
            "consequence": "Express intervention ground — directions against the insurer; powers of restriction and forced sale of the relevant shares",
            "provision": "s.32(1)(e); s.30H",
            "ver": "established"
          },
          {
            "breach": "Notification of new/increased control (fee)",
            "consequence": "$750 application fee (2026)",
            "provision": "2026 fee schedule 2(f)",
            "ver": "verify"
          }
        ],
        "practice": [
          {
            "t": "Build the 45-day no-objection window (plus information-request extensions) into the transaction long-stop date; signing before clearance with a completion condition is common, completing is not.",
            "srcLabel": "Practitioner view — not a BMA source"
          },
          {
            "t": "Indirect acquisitions count — run the controller analysis up the ownership chain, including investment-manager and GP structures.",
            "srcLabel": "Practitioner view — not a BMA source"
          }
        ]
      },
      "editorial_updated": "2026-09-21",
      "fee_year": 2026,
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "conseq-principal-rep",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "consequence",
      "text": "Breach trigger: failing to maintain a principal office and principal representative in Bermuda; the principal representative failing to notify the Authority forthwith of a reportable event (likelihood of insolvency, condition breaches, criminal proceedings, significant loss likely to breach ECR, cessation of business, class-limit breaches) or to file the 14-day report and event-specific follow-ups.",
      "citation": "Insurance Act 1978, ss.8, 8A",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "title": "Principal representative failures",
        "taskIds": [
          "approvedperson"
        ],
        "rows": [
          {
            "breach": "No principal office / principal representative maintained",
            "consequence": "Breach of a registration requirement — intervention and enforcement powers engaged",
            "provision": "s.8(1); ss.32, 32D",
            "ver": "established"
          },
          {
            "breach": "Wilful failure by the principal representative to give required notice",
            "consequence": "Offence by the principal representative",
            "provision": "s.8(3A) offence provision",
            "ver": "established"
          },
          {
            "breach": "Event-specific follow-ups missed",
            "consequence": "Post-loss CSR due within 45 days of an ECR-loss notification; interim statutory financials within 30 days of certain notifications",
            "provision": "s.8A(2a)–(2b)",
            "ver": "established"
          }
        ],
        "practice": [
          {
            "t": "Where an insurance manager acts as principal representative, agree an escalation protocol in the service agreement so reportable events reach the rep 'forthwith' in fact, not just in theory.",
            "srcLabel": "Practitioner view — not a BMA source"
          }
        ]
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "conseq-dividends",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "consequence",
      "text": "The following rows are restricted to the selected insurer class. Dividend restrictions and capital-reduction routes are distinct; check the prior-year statutory capital basis and all statutory qualifications.",
      "citation": "Insurance Act 1978, ss.31B, 31C (verified 21 Sep 2026, PDF pp.103–105)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated; text re-verified 21 Sep 2026, byte-identical to 17 Sep 2026 copy)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-01-01",
      "legal_review": "pending",
      "data": {
        "title": "Dividend and capital-reduction breaches",
        "taskIds": [
          "modification"
        ],
        "rows": [
          {
            "breach": "Dividends >25% of total statutory capital and surplus without an affidavit filed at least 7 days before payment — applies ONLY to Class 3A, IIGB, 3B, 4, IILT, C, D and E insurers",
            "consequence": "Contravention of s.31B(1) — civil penalty exposure and intervention grounds; 2026 affidavit filing fee $550",
            "provision": "s.31B(1); 2026 fee schedule item 2(g)",
            "ver": "established",
            "scope": [
              "class3a",
              "class3b",
              "class4",
              "classC",
              "classD",
              "classE",
              "iigb"
            ]
          },
          {
            "breach": "Any insurer declaring or paying dividends that would cause it to fail its relevant margins",
            "consequence": "Prohibited outright. An insurer failing its relevant margins on the last day of a financial year may not declare or pay dividends in the next financial year without BMA approval",
            "provision": "s.31B(3)–(4)",
            "ver": "established"
          },
          {
            "breach": "Reducing total statutory capital by 15% or more without prior BMA approval — Class 3A, IIGB, 3B, IILT, C, D, E, 4 and innovative insurers under s.31C(1); Class 1, 2, 3, A and B under s.31C(4)",
            "consequence": "Contravention of s.31C — civil penalty exposure up to $500,000; 2026 approval fee $1,500",
            "provision": "s.31C(1), (4); s.32D; 2026 fee schedule item 2(h)",
            "ver": "established",
            "scope": [
              "class3a",
              "class3b",
              "class4",
              "classC",
              "classD",
              "classE",
              "iigb",
              "class1",
              "class2",
              "class3",
              "classA",
              "classB"
            ]
          },
          {
            "breach": "Collateralized Insurer reducing total statutory capital by 15% or more",
            "consequence": "Different regime: no prior approval, but written notification to the Authority within 30 days, with such information as the Authority may require",
            "provision": "s.31C(5)",
            "ver": "established",
            "scope": [
              "collateralized"
            ]
          },
          {
            "breach": "Dividends during an unrectified minimum solvency margin failure, or ECR failure where ECR applies",
            "consequence": "Prohibited until the failure is rectified",
            "provision": "ss.31A(1), 31AA(2)",
            "ver": "established"
          }
        ],
        "practice": [
          {
            "t": "Check which subsection catches the entity before applying the 25% test — it is class-specific, whereas the relevant-margins restrictions and the 15% capital-reduction approval apply far more widely.",
            "srcLabel": "Practitioner view — not a BMA source"
          },
          {
            "t": "Put the 25% test and the 15% capital-reduction test into the standing dividend-approval checklist; breaches are usually process failures, not deliberate ones.",
            "srcLabel": "Practitioner view — not a BMA source"
          }
        ]
      },
      "editorial_updated": "2026-09-21",
      "fee_year": 2026,
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "conseq-annual-fee",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb",
        "intermediary"
      ],
      "topic": "consequence",
      "text": "Breach trigger: failing to pay the annual business fee before 31 March.",
      "citation": "Insurance Act 1978, s.14(2)–(3); 2026 BMA fee schedule, p.2",
      "source": {
        "type": "bma-primary",
        "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
        "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
        "published": "2026-03-17"
      },
      "verification": "established",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-03-21",
      "legal_review": "pending",
      "data": {
        "title": "Late annual fee",
        "taskIds": [],
        "rows": [
          {
            "breach": "Annual business fee not paid before 31 March",
            "consequence": "Statutory late penalty fee of 10% of the fee due for every month or part month the fee remains unpaid (equivalent provisions apply to group fees under s.27B)",
            "provision": "s.14(3); s.27B",
            "ver": "established"
          },
          {
            "breach": "Persistent non-payment",
            "consequence": "Enforcement escalation; non-payment bears on the minimum criteria and can support cancellation of registration",
            "provision": "ss.32, 41",
            "ver": "verify"
          }
        ],
        "practice": [
          {
            "t": "The annual fee is billed on the licence class assigned as at 1 January. The 2026 fee schedule grants pro-rata treatment only where a registration is cancelled by deregistration, discontinuance or merger/amalgamation before 31 March — a change of class alone is not a qualifying event for pro-rata relief.",
            "srcLabel": "Practitioner view — not a BMA source"
          }
        ]
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "conseq-cyber",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "consequence",
      "text": "Breach trigger: failing to notify the Authority forthwith (statute) / within 72 hours (Cyber Code) of a material cyber reporting event, or failing to file the 14-day written report. Notification clocks and actors must be checked separately under sections 8A, 30JEA, 31A and 31AA and the Cyber Code; this table does not establish a case-specific deadline.",
      "citation": "Insurance Act 1978, s.30JEA; Cyber Risk Code of Conduct",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "title": "Failure to notify a material cyber event",
        "taskIds": [],
        "rows": [
          {
            "breach": "No forthwith notification / no 14-day report",
            "consequence": "Contravention of a statutory requirement — civil penalty exposure up to $500,000; censure available",
            "provision": "s.30JEA; ss.32D, 32F",
            "ver": "established"
          },
          {
            "breach": "Cyber Code non-observance (72-hour window, programme requirements)",
            "consequence": "Code compliance is taken into account in supervisory assessment and enforcement; persistent failure bears on minimum criteria",
            "provision": "Cyber Risk Code; s.2BA",
            "ver": "verify"
          }
        ],
        "practice": [
          {
            "t": "Pre-draft the 72-hour notification template and decision tree (who determines materiality, who signs) — the window is too short to design the process during an incident.",
            "srcLabel": "Practitioner view — not a BMA source"
          },
          {
            "t": "Where notice is also due to other authorities (e.g. PIPA privacy regulator, overseas supervisors), the Code's materiality test is automatically met — align the notification clocks.",
            "srcLabel": "Practitioner view — not a BMA source"
          }
        ]
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "conseq-unregistered",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb",
        "intermediary"
      ],
      "topic": "consequence",
      "text": "Breach trigger: carrying on insurance business in or from within Bermuda without registration (s.3), or carrying on business as an insurance manager, broker, agent, marketplace provider or salesman without registration (s.9).",
      "citation": "Insurance Act 1978, ss.3(1), 9",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "title": "Unregistered business",
        "taskIds": [
          "newlicence"
        ],
        "rows": [
          {
            "breach": "Unregistered insurance business / intermediary business",
            "consequence": "Criminal offence; the Authority may investigate suspected contraventions and obtain information, documents and entry",
            "provision": "ss.3, 9, 30A–30B",
            "ver": "established"
          },
          {
            "breach": "Destroying or concealing documents relevant to such an investigation",
            "consequence": "Offence: $50,000/2 years (summary); $200,000/5 years (indictment)",
            "provision": "s.30C",
            "ver": "established"
          }
        ],
        "practice": [
          {
            "t": "Perimeter questions (is this 'insurance business in or from within Bermuda'?) are legal questions — take Bermuda counsel's advice before structuring around the registration requirement.",
            "srcLabel": "Practitioner view — not a BMA source"
          }
        ]
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "conseq-false-info",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb",
        "intermediary"
      ],
      "topic": "consequence",
      "text": "Breach trigger: issuing, preparing or signing a document for the purposes of the Act which is false or misleading in a material respect — including returns, applications and notifications.",
      "citation": "Insurance Act 1978, s.50 (Issue of false documents)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "title": "False or misleading information",
        "taskIds": [
          "newlicence",
          "approvedperson",
          "modification"
        ],
        "rows": [
          {
            "breach": "False/misleading document issued for the purposes of the Act",
            "consequence": "Criminal offence (defence of no knowledge + all reasonable precautions)",
            "provision": "s.50",
            "ver": "established"
          },
          {
            "breach": "False, misleading or inaccurate information supplied in connection with registration",
            "consequence": "Ground for cancellation of registration",
            "provision": "s.41(1)(b)",
            "ver": "established"
          },
          {
            "breach": "Individual involved not fit and proper",
            "consequence": "Prohibition order (breach of which: $50,000/2 years summary; $200,000/4 years indictment)",
            "provision": "ss.32H",
            "ver": "established"
          }
        ],
        "practice": [
          {
            "t": "If an error in a filed return or application is discovered, correct it proactively with an explanation — a self-reported correction is a materially different conversation from a discovered one.",
            "srcLabel": "Practitioner view — not a BMA source"
          }
        ]
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "conseq-sector-generic",
      "entity_scope": [
        "daba",
        "investment",
        "fundadmin",
        "trust",
        "bank",
        "msb",
        "csp"
      ],
      "topic": "consequence",
      "text": "Breach trigger: contravention of a requirement imposed by or under the sector's governing Act (e.g. late filings, unapproved controller changes, unlicensed activity, false or misleading information). The BMA's sector Acts follow a broadly standardised enforcement model, but the exact provisions, thresholds and penalty amounts differ by Act — this tool does not hold section-level detail for this sector; confirm against the governing Act before reliance.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "BMA — List of Enforcement Action in Bermuda",
        "url": "https://www.bma.bm/enforcement-action",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "title": "Sector-specific enforcement considerations (framework level)",
        "taskIds": [
          "newlicence"
        ],
        "rows": [
          {
            "breach": "Contravention of the governing Act / licence conditions",
            "consequence": "Civil penalties, public censure, directions/restrictions on the licence, prohibition orders against individuals, and revocation of the licence — per the sector Act's disciplinary provisions",
            "provision": "Sector Act — confirm exact provisions",
            "ver": "verify"
          },
          {
            "breach": "Unlicensed activity",
            "consequence": "Criminal offence under the sector Act's registration/licensing prohibition",
            "provision": "Sector Act — confirm exact provisions",
            "ver": "verify"
          },
          {
            "breach": "Late annual fee",
            "consequence": "Any late-payment penalty depends on the applicable sector legislation; no amount is established here",
            "provision": "Sector Act fee provisions / BMA Act 1969",
            "ver": "verify"
          }
        ],
        "practice": [
          {
            "t": "The BMA publishes enforcement outcomes across all sectors (e.g. civil penalties against trust and money-service businesses) — early proactive engagement, board notification and a documented remediation plan are the standard response to any suspected breach.",
            "srcLabel": "Practitioner view — not a BMA source"
          }
        ]
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "summary-intermediary",
      "entity_scope": [
        "intermediary"
      ],
      "topic": "framework",
      "text": "Insurance manager, broker, or agent regulated by the Bermuda Monetary Authority under the Insurance Act 1978 (intermediary registration provisions). This tool holds framework-level information only for this entity type; obligation-level detail (deadlines, forms, fees) must be confirmed against the current legislation, Rules, and BMA guidance.",
      "citation": "Insurance Act 1978 (intermediary registration provisions)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (intermediary registration provisions) — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "role": "summary",
        "label": "Insurance manager, broker, or agent"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-intermediary-act",
      "entity_scope": [
        "intermediary"
      ],
      "topic": "framework",
      "text": "Licensing/registration, prudential and conduct requirements, supervision and enforcement.",
      "citation": "Insurance Act 1978 (intermediary registration provisions)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (intermediary registration provisions) (bermudalaws.bm consolidation)",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Insurance Act 1978 (intermediary registration provisions)"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-intermediary-codes",
      "entity_scope": [
        "intermediary"
      ],
      "topic": "framework",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Applicable BMA Code(s) of Practice / Conduct and Guidance Notes for this sector"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "fw-intermediary-aml",
      "entity_scope": [
        "intermediary"
      ],
      "topic": "framework",
      "text": "AML/ATF programme obligations where the entity is a regulated financial institution — typically in scope for this sector; verify. Current BMA General Guidance Notes revised June 2023.",
      "citation": "Proceeds of Crime Act 1997; ATF Act 2004; AML/ATF Regulations 2008",
      "source": {
        "type": "bma-guidance",
        "name": "BMA General Guidance Notes for AML/ATF Regulated Financial Institutions (revised June 2023)",
        "url": "https://www.bma.bm/viewPDF/documents/2024-06-13-13-28-45-2023-06-12-15-17-06-General-Guidance-Notes-for-AMLATF-Regulated-Entities-Revised.pdf",
        "published": "2023-06-12"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Proceeds of Crime Act 1997, ATF Act 2004, AML/ATF Regulations 2008"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-intermediary-es",
      "entity_scope": [
        "intermediary"
      ],
      "topic": "framework",
      "text": "Economic substance is fact-dependent. Confirm the relevant activity, exemptions and current requirements under the Economic Substance Act. CITA assumed administration on 31 March 2026; its announcement retains the ROC declaration portal until further instruction. The generally stated six-month year-end declaration period is not calculated here pending entity-specific and current statutory confirmation.",
      "citation": "CITA administration announcement; Economic Substance Act 2018 (current statutory scope must be confirmed)",
      "source": {
        "type": "official-guidance",
        "name": "CITA — Economic Substance administration and filing transition",
        "url": "https://www.cita.bm/news/cita-new-changes-economic-substance-automatic-exchange-of-information",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Economic Substance Act 2018"
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "legislation",
          "name": "Economic Substance Act 2018 — verify current requirements and applicability",
          "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/2018/Economic%20Substance%20Act%202018",
          "published": null
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-intermediary-fee",
      "entity_scope": [
        "intermediary"
      ],
      "topic": "filing",
      "text": "Confirm the statutory payment date and current amount against the governing Act and BMA fee schedule for this licence category. This tool does not establish a sector-specific date.",
      "citation": "Insurance Act 1978 (intermediary registration provisions) / BMA fee provisions",
      "source": {
        "type": "bma-primary",
        "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
        "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
        "published": "2026-03-17"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual licence/business fee",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "filing-intermediary-return",
      "entity_scope": [
        "intermediary"
      ],
      "topic": "filing",
      "text": "Data not available in this tool — confirm the deadline for this licence category against the current legislation.",
      "citation": "Insurance Act 1978 (intermediary registration provisions)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (intermediary registration provisions) — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "unverified",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual prudential return / audited financial statements (as applicable)",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-intermediary-board",
      "entity_scope": [
        "intermediary"
      ],
      "topic": "governance",
      "text": "Board responsibility for sound and prudent management, minimum criteria for licensing (fit and proper controllers and officers), and notification duties on material changes.",
      "citation": "Insurance Act 1978 (intermediary registration provisions)",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (intermediary registration provisions)",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-intermediary-codes",
      "entity_scope": [
        "intermediary"
      ],
      "topic": "governance",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "summary-daba",
      "entity_scope": [
        "daba"
      ],
      "topic": "framework",
      "text": "Digital asset business regulated by the Bermuda Monetary Authority under the Digital Asset Business Act 2018. This tool holds framework-level information only for this entity type; obligation-level detail (deadlines, forms, fees) must be confirmed against the current legislation, Rules, and BMA guidance.",
      "citation": "Digital Asset Business Act 2018",
      "source": {
        "type": "legislation",
        "name": "Digital Asset Business Act 2018 — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "role": "summary",
        "label": "Digital asset business"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-daba-act",
      "entity_scope": [
        "daba"
      ],
      "topic": "framework",
      "text": "Licensing/registration, prudential and conduct requirements, supervision and enforcement.",
      "citation": "Digital Asset Business Act 2018",
      "source": {
        "type": "legislation",
        "name": "Digital Asset Business Act 2018 (bermudalaws.bm consolidation)",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Digital Asset Business Act 2018"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-daba-codes",
      "entity_scope": [
        "daba"
      ],
      "topic": "framework",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": "Operational Resilience and Outsourcing Code, ss.I(3), XVI",
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {
        "name": "Applicable BMA Code(s) of Practice / Conduct and Guidance Notes for this sector"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "fw-daba-aml",
      "entity_scope": [
        "daba"
      ],
      "topic": "framework",
      "text": "AML/ATF programme obligations where the entity is a regulated financial institution — typically in scope for this sector; verify. Current BMA General Guidance Notes revised June 2023.",
      "citation": "Proceeds of Crime Act 1997; ATF Act 2004; AML/ATF Regulations 2008",
      "source": {
        "type": "bma-guidance",
        "name": "BMA General Guidance Notes for AML/ATF Regulated Financial Institutions (revised June 2023)",
        "url": "https://www.bma.bm/viewPDF/documents/2024-06-13-13-28-45-2023-06-12-15-17-06-General-Guidance-Notes-for-AMLATF-Regulated-Entities-Revised.pdf",
        "published": "2023-06-12"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Proceeds of Crime Act 1997, ATF Act 2004, AML/ATF Regulations 2008"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-daba-es",
      "entity_scope": [
        "daba"
      ],
      "topic": "framework",
      "text": "Economic substance is fact-dependent. Confirm the relevant activity, exemptions and current requirements under the Economic Substance Act. CITA assumed administration on 31 March 2026; its announcement retains the ROC declaration portal until further instruction. The generally stated six-month year-end declaration period is not calculated here pending entity-specific and current statutory confirmation.",
      "citation": "CITA administration announcement; Economic Substance Act 2018 (current statutory scope must be confirmed)",
      "source": {
        "type": "official-guidance",
        "name": "CITA — Economic Substance administration and filing transition",
        "url": "https://www.cita.bm/news/cita-new-changes-economic-substance-automatic-exchange-of-information",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Economic Substance Act 2018"
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "legislation",
          "name": "Economic Substance Act 2018 — verify current requirements and applicability",
          "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/2018/Economic%20Substance%20Act%202018",
          "published": null
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-daba-fee",
      "entity_scope": [
        "daba"
      ],
      "topic": "filing",
      "text": "Confirm the statutory payment date and current amount against the governing Act and BMA fee schedule for this licence category. This tool does not establish a sector-specific date.",
      "citation": "Digital Asset Business Act 2018 / BMA fee provisions",
      "source": {
        "type": "bma-primary",
        "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
        "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
        "published": "2026-03-17"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual licence/business fee",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "filing-daba-return",
      "entity_scope": [
        "daba"
      ],
      "topic": "filing",
      "text": "Data not available in this tool — confirm the deadline for this licence category against the current legislation.",
      "citation": "Digital Asset Business Act 2018",
      "source": {
        "type": "legislation",
        "name": "Digital Asset Business Act 2018 — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "unverified",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual prudential return / audited financial statements (as applicable)",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-daba-board",
      "entity_scope": [
        "daba"
      ],
      "topic": "governance",
      "text": "Board responsibility for sound and prudent management, minimum criteria for licensing (fit and proper controllers and officers), and notification duties on material changes.",
      "citation": "Digital Asset Business Act 2018",
      "source": {
        "type": "legislation",
        "name": "Digital Asset Business Act 2018",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-daba-codes",
      "entity_scope": [
        "daba"
      ],
      "topic": "governance",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "summary-investment",
      "entity_scope": [
        "investment"
      ],
      "topic": "framework",
      "text": "Investment business regulated by the Bermuda Monetary Authority under the Investment Business Act 2003 (as amended — note the expanded registration/licensing regime introduced by the 2022 amendments; verify current scope). This tool holds framework-level information only for this entity type; obligation-level detail (deadlines, forms, fees) must be confirmed against the current legislation, Rules, and BMA guidance.",
      "citation": "Investment Business Act 2003 (as amended — note the expanded registration/licensing regime introduced by the 2022 amendments; verify current scope)",
      "source": {
        "type": "legislation",
        "name": "Investment Business Act 2003 (as amended — note the expanded registration/licensing regime introduced by the 2022 amendments; verify current scope) — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "role": "summary",
        "label": "Investment business"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-investment-act",
      "entity_scope": [
        "investment"
      ],
      "topic": "framework",
      "text": "Licensing/registration, prudential and conduct requirements, supervision and enforcement.",
      "citation": "Investment Business Act 2003 (as amended — note the expanded registration/licensing regime introduced by the 2022 amendments; verify current scope)",
      "source": {
        "type": "legislation",
        "name": "Investment Business Act 2003 (as amended — note the expanded registration/licensing regime introduced by the 2022 amendments; verify current scope) (bermudalaws.bm consolidation)",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Investment Business Act 2003 (as amended — note the expanded registration/licensing regime introduced by the 2022 amendments; verify current scope)"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-investment-codes",
      "entity_scope": [
        "investment"
      ],
      "topic": "framework",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": "Operational Resilience and Outsourcing Code, ss.I(3), XVI",
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "data": {
        "name": "Applicable BMA Code(s) of Practice / Conduct and Guidance Notes for this sector"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "fw-investment-aml",
      "entity_scope": [
        "investment"
      ],
      "topic": "framework",
      "text": "AML/ATF programme obligations where the entity is a regulated financial institution — typically in scope for this sector; verify. Current BMA General Guidance Notes revised June 2023.",
      "citation": "Proceeds of Crime Act 1997; ATF Act 2004; AML/ATF Regulations 2008",
      "source": {
        "type": "bma-guidance",
        "name": "BMA General Guidance Notes for AML/ATF Regulated Financial Institutions (revised June 2023)",
        "url": "https://www.bma.bm/viewPDF/documents/2024-06-13-13-28-45-2023-06-12-15-17-06-General-Guidance-Notes-for-AMLATF-Regulated-Entities-Revised.pdf",
        "published": "2023-06-12"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Proceeds of Crime Act 1997, ATF Act 2004, AML/ATF Regulations 2008"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-investment-es",
      "entity_scope": [
        "investment"
      ],
      "topic": "framework",
      "text": "Economic substance is fact-dependent. Confirm the relevant activity, exemptions and current requirements under the Economic Substance Act. CITA assumed administration on 31 March 2026; its announcement retains the ROC declaration portal until further instruction. The generally stated six-month year-end declaration period is not calculated here pending entity-specific and current statutory confirmation.",
      "citation": "CITA administration announcement; Economic Substance Act 2018 (current statutory scope must be confirmed)",
      "source": {
        "type": "official-guidance",
        "name": "CITA — Economic Substance administration and filing transition",
        "url": "https://www.cita.bm/news/cita-new-changes-economic-substance-automatic-exchange-of-information",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Economic Substance Act 2018"
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "legislation",
          "name": "Economic Substance Act 2018 — verify current requirements and applicability",
          "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/2018/Economic%20Substance%20Act%202018",
          "published": null
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-investment-fee",
      "entity_scope": [
        "investment"
      ],
      "topic": "filing",
      "text": "Confirm the statutory payment date and current amount against the governing Act and BMA fee schedule for this licence category. This tool does not establish a sector-specific date.",
      "citation": "Investment Business Act 2003 (as amended — note the expanded registration/licensing regime introduced by the 2022 amendments; verify current scope) / BMA fee provisions",
      "source": {
        "type": "bma-primary",
        "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
        "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
        "published": "2026-03-17"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual licence/business fee",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "filing-investment-return",
      "entity_scope": [
        "investment"
      ],
      "topic": "filing",
      "text": "Data not available in this tool — confirm the deadline for this licence category against the current legislation.",
      "citation": "Investment Business Act 2003 (as amended — note the expanded registration/licensing regime introduced by the 2022 amendments; verify current scope)",
      "source": {
        "type": "legislation",
        "name": "Investment Business Act 2003 (as amended — note the expanded registration/licensing regime introduced by the 2022 amendments; verify current scope) — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "unverified",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual prudential return / audited financial statements (as applicable)",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-investment-board",
      "entity_scope": [
        "investment"
      ],
      "topic": "governance",
      "text": "Board responsibility for sound and prudent management, minimum criteria for licensing (fit and proper controllers and officers), and notification duties on material changes.",
      "citation": "Investment Business Act 2003 (as amended — note the expanded registration/licensing regime introduced by the 2022 amendments; verify current scope)",
      "source": {
        "type": "legislation",
        "name": "Investment Business Act 2003 (as amended — note the expanded registration/licensing regime introduced by the 2022 amendments; verify current scope)",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-investment-codes",
      "entity_scope": [
        "investment"
      ],
      "topic": "governance",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "summary-fundadmin",
      "entity_scope": [
        "fundadmin"
      ],
      "topic": "framework",
      "text": "Fund administrator regulated by the Bermuda Monetary Authority under the Fund Administration Provider Business Act 2019. This tool holds framework-level information only for this entity type; obligation-level detail (deadlines, forms, fees) must be confirmed against the current legislation, Rules, and BMA guidance.",
      "citation": "Fund Administration Provider Business Act 2019",
      "source": {
        "type": "legislation",
        "name": "Fund Administration Provider Business Act 2019 — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "role": "summary",
        "label": "Fund administrator"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-fundadmin-act",
      "entity_scope": [
        "fundadmin"
      ],
      "topic": "framework",
      "text": "Licensing/registration, prudential and conduct requirements, supervision and enforcement.",
      "citation": "Fund Administration Provider Business Act 2019",
      "source": {
        "type": "legislation",
        "name": "Fund Administration Provider Business Act 2019 (bermudalaws.bm consolidation)",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Fund Administration Provider Business Act 2019"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-fundadmin-codes",
      "entity_scope": [
        "fundadmin"
      ],
      "topic": "framework",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Applicable BMA Code(s) of Practice / Conduct and Guidance Notes for this sector"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "fw-fundadmin-aml",
      "entity_scope": [
        "fundadmin"
      ],
      "topic": "framework",
      "text": "AML/ATF programme obligations where the entity is a regulated financial institution — typically in scope for this sector; verify. Current BMA General Guidance Notes revised June 2023.",
      "citation": "Proceeds of Crime Act 1997; ATF Act 2004; AML/ATF Regulations 2008",
      "source": {
        "type": "bma-guidance",
        "name": "BMA General Guidance Notes for AML/ATF Regulated Financial Institutions (revised June 2023)",
        "url": "https://www.bma.bm/viewPDF/documents/2024-06-13-13-28-45-2023-06-12-15-17-06-General-Guidance-Notes-for-AMLATF-Regulated-Entities-Revised.pdf",
        "published": "2023-06-12"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Proceeds of Crime Act 1997, ATF Act 2004, AML/ATF Regulations 2008"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-fundadmin-es",
      "entity_scope": [
        "fundadmin"
      ],
      "topic": "framework",
      "text": "Economic substance is fact-dependent. Confirm the relevant activity, exemptions and current requirements under the Economic Substance Act. CITA assumed administration on 31 March 2026; its announcement retains the ROC declaration portal until further instruction. The generally stated six-month year-end declaration period is not calculated here pending entity-specific and current statutory confirmation.",
      "citation": "CITA administration announcement; Economic Substance Act 2018 (current statutory scope must be confirmed)",
      "source": {
        "type": "official-guidance",
        "name": "CITA — Economic Substance administration and filing transition",
        "url": "https://www.cita.bm/news/cita-new-changes-economic-substance-automatic-exchange-of-information",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Economic Substance Act 2018"
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "legislation",
          "name": "Economic Substance Act 2018 — verify current requirements and applicability",
          "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/2018/Economic%20Substance%20Act%202018",
          "published": null
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-fundadmin-fee",
      "entity_scope": [
        "fundadmin"
      ],
      "topic": "filing",
      "text": "Confirm the statutory payment date and current amount against the governing Act and BMA fee schedule for this licence category. This tool does not establish a sector-specific date.",
      "citation": "Fund Administration Provider Business Act 2019 / BMA fee provisions",
      "source": {
        "type": "bma-primary",
        "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
        "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
        "published": "2026-03-17"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual licence/business fee",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "filing-fundadmin-return",
      "entity_scope": [
        "fundadmin"
      ],
      "topic": "filing",
      "text": "Data not available in this tool — confirm the deadline for this licence category against the current legislation.",
      "citation": "Fund Administration Provider Business Act 2019",
      "source": {
        "type": "legislation",
        "name": "Fund Administration Provider Business Act 2019 — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "unverified",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual prudential return / audited financial statements (as applicable)",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-fundadmin-board",
      "entity_scope": [
        "fundadmin"
      ],
      "topic": "governance",
      "text": "Board responsibility for sound and prudent management, minimum criteria for licensing (fit and proper controllers and officers), and notification duties on material changes.",
      "citation": "Fund Administration Provider Business Act 2019",
      "source": {
        "type": "legislation",
        "name": "Fund Administration Provider Business Act 2019",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-fundadmin-codes",
      "entity_scope": [
        "fundadmin"
      ],
      "topic": "governance",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "summary-trust",
      "entity_scope": [
        "trust"
      ],
      "topic": "framework",
      "text": "Trust company regulated by the Bermuda Monetary Authority under the Trusts (Regulation of Trust Business) Act 2001. This tool holds framework-level information only for this entity type; obligation-level detail (deadlines, forms, fees) must be confirmed against the current legislation, Rules, and BMA guidance.",
      "citation": "Trusts (Regulation of Trust Business) Act 2001",
      "source": {
        "type": "legislation",
        "name": "Trusts (Regulation of Trust Business) Act 2001 — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "role": "summary",
        "label": "Trust company"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-trust-act",
      "entity_scope": [
        "trust"
      ],
      "topic": "framework",
      "text": "Licensing/registration, prudential and conduct requirements, supervision and enforcement.",
      "citation": "Trusts (Regulation of Trust Business) Act 2001",
      "source": {
        "type": "legislation",
        "name": "Trusts (Regulation of Trust Business) Act 2001 (bermudalaws.bm consolidation)",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Trusts (Regulation of Trust Business) Act 2001"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-trust-codes",
      "entity_scope": [
        "trust"
      ],
      "topic": "framework",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Applicable BMA Code(s) of Practice / Conduct and Guidance Notes for this sector"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "fw-trust-aml",
      "entity_scope": [
        "trust"
      ],
      "topic": "framework",
      "text": "AML/ATF programme obligations where the entity is a regulated financial institution — typically in scope for this sector; verify. Current BMA General Guidance Notes revised June 2023.",
      "citation": "Proceeds of Crime Act 1997; ATF Act 2004; AML/ATF Regulations 2008",
      "source": {
        "type": "bma-guidance",
        "name": "BMA General Guidance Notes for AML/ATF Regulated Financial Institutions (revised June 2023)",
        "url": "https://www.bma.bm/viewPDF/documents/2024-06-13-13-28-45-2023-06-12-15-17-06-General-Guidance-Notes-for-AMLATF-Regulated-Entities-Revised.pdf",
        "published": "2023-06-12"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Proceeds of Crime Act 1997, ATF Act 2004, AML/ATF Regulations 2008"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-trust-es",
      "entity_scope": [
        "trust"
      ],
      "topic": "framework",
      "text": "Economic substance is fact-dependent. Confirm the relevant activity, exemptions and current requirements under the Economic Substance Act. CITA assumed administration on 31 March 2026; its announcement retains the ROC declaration portal until further instruction. The generally stated six-month year-end declaration period is not calculated here pending entity-specific and current statutory confirmation.",
      "citation": "CITA administration announcement; Economic Substance Act 2018 (current statutory scope must be confirmed)",
      "source": {
        "type": "official-guidance",
        "name": "CITA — Economic Substance administration and filing transition",
        "url": "https://www.cita.bm/news/cita-new-changes-economic-substance-automatic-exchange-of-information",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Economic Substance Act 2018"
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "legislation",
          "name": "Economic Substance Act 2018 — verify current requirements and applicability",
          "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/2018/Economic%20Substance%20Act%202018",
          "published": null
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-trust-fee",
      "entity_scope": [
        "trust"
      ],
      "topic": "filing",
      "text": "Confirm the statutory payment date and current amount against the governing Act and BMA fee schedule for this licence category. This tool does not establish a sector-specific date.",
      "citation": "Trusts (Regulation of Trust Business) Act 2001 / BMA fee provisions",
      "source": {
        "type": "bma-primary",
        "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
        "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
        "published": "2026-03-17"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual licence/business fee",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "filing-trust-return",
      "entity_scope": [
        "trust"
      ],
      "topic": "filing",
      "text": "Data not available in this tool — confirm the deadline for this licence category against the current legislation.",
      "citation": "Trusts (Regulation of Trust Business) Act 2001",
      "source": {
        "type": "legislation",
        "name": "Trusts (Regulation of Trust Business) Act 2001 — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "unverified",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual prudential return / audited financial statements (as applicable)",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-trust-board",
      "entity_scope": [
        "trust"
      ],
      "topic": "governance",
      "text": "Board responsibility for sound and prudent management, minimum criteria for licensing (fit and proper controllers and officers), and notification duties on material changes.",
      "citation": "Trusts (Regulation of Trust Business) Act 2001",
      "source": {
        "type": "legislation",
        "name": "Trusts (Regulation of Trust Business) Act 2001",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-trust-codes",
      "entity_scope": [
        "trust"
      ],
      "topic": "governance",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "summary-bank",
      "entity_scope": [
        "bank"
      ],
      "topic": "framework",
      "text": "Bank / deposit company regulated by the Bermuda Monetary Authority under the Banks and Deposit Companies Act 1999. This tool holds framework-level information only for this entity type; obligation-level detail (deadlines, forms, fees) must be confirmed against the current legislation, Rules, and BMA guidance.",
      "citation": "Banks and Deposit Companies Act 1999",
      "source": {
        "type": "legislation",
        "name": "Banks and Deposit Companies Act 1999 — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "role": "summary",
        "label": "Bank / deposit company"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-bank-act",
      "entity_scope": [
        "bank"
      ],
      "topic": "framework",
      "text": "Licensing/registration, prudential and conduct requirements, supervision and enforcement.",
      "citation": "Banks and Deposit Companies Act 1999",
      "source": {
        "type": "legislation",
        "name": "Banks and Deposit Companies Act 1999 (bermudalaws.bm consolidation)",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Banks and Deposit Companies Act 1999"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-bank-codes",
      "entity_scope": [
        "bank"
      ],
      "topic": "framework",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Applicable BMA Code(s) of Practice / Conduct and Guidance Notes for this sector"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "fw-bank-aml",
      "entity_scope": [
        "bank"
      ],
      "topic": "framework",
      "text": "AML/ATF programme obligations where the entity is a regulated financial institution — typically in scope for this sector; verify. Current BMA General Guidance Notes revised June 2023.",
      "citation": "Proceeds of Crime Act 1997; ATF Act 2004; AML/ATF Regulations 2008",
      "source": {
        "type": "bma-guidance",
        "name": "BMA General Guidance Notes for AML/ATF Regulated Financial Institutions (revised June 2023)",
        "url": "https://www.bma.bm/viewPDF/documents/2024-06-13-13-28-45-2023-06-12-15-17-06-General-Guidance-Notes-for-AMLATF-Regulated-Entities-Revised.pdf",
        "published": "2023-06-12"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Proceeds of Crime Act 1997, ATF Act 2004, AML/ATF Regulations 2008"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-bank-es",
      "entity_scope": [
        "bank"
      ],
      "topic": "framework",
      "text": "Economic substance is fact-dependent. Confirm the relevant activity, exemptions and current requirements under the Economic Substance Act. CITA assumed administration on 31 March 2026; its announcement retains the ROC declaration portal until further instruction. The generally stated six-month year-end declaration period is not calculated here pending entity-specific and current statutory confirmation.",
      "citation": "CITA administration announcement; Economic Substance Act 2018 (current statutory scope must be confirmed)",
      "source": {
        "type": "official-guidance",
        "name": "CITA — Economic Substance administration and filing transition",
        "url": "https://www.cita.bm/news/cita-new-changes-economic-substance-automatic-exchange-of-information",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Economic Substance Act 2018"
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "legislation",
          "name": "Economic Substance Act 2018 — verify current requirements and applicability",
          "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/2018/Economic%20Substance%20Act%202018",
          "published": null
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-bank-fee",
      "entity_scope": [
        "bank"
      ],
      "topic": "filing",
      "text": "Confirm the statutory payment date and current amount against the governing Act and BMA fee schedule for this licence category. This tool does not establish a sector-specific date.",
      "citation": "Banks and Deposit Companies Act 1999 / BMA fee provisions",
      "source": {
        "type": "bma-primary",
        "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
        "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
        "published": "2026-03-17"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual licence/business fee",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "filing-bank-return",
      "entity_scope": [
        "bank"
      ],
      "topic": "filing",
      "text": "Data not available in this tool — confirm the deadline for this licence category against the current legislation.",
      "citation": "Banks and Deposit Companies Act 1999",
      "source": {
        "type": "legislation",
        "name": "Banks and Deposit Companies Act 1999 — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "unverified",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual prudential return / audited financial statements (as applicable)",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-bank-board",
      "entity_scope": [
        "bank"
      ],
      "topic": "governance",
      "text": "Board responsibility for sound and prudent management, minimum criteria for licensing (fit and proper controllers and officers), and notification duties on material changes.",
      "citation": "Banks and Deposit Companies Act 1999",
      "source": {
        "type": "legislation",
        "name": "Banks and Deposit Companies Act 1999",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-bank-codes",
      "entity_scope": [
        "bank"
      ],
      "topic": "governance",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "summary-msb",
      "entity_scope": [
        "msb"
      ],
      "topic": "framework",
      "text": "Money service business regulated by the Bermuda Monetary Authority under the Money Service Business Act 2016. This tool holds framework-level information only for this entity type; obligation-level detail (deadlines, forms, fees) must be confirmed against the current legislation, Rules, and BMA guidance.",
      "citation": "Money Service Business Act 2016",
      "source": {
        "type": "legislation",
        "name": "Money Service Business Act 2016 — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "role": "summary",
        "label": "Money service business"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-msb-act",
      "entity_scope": [
        "msb"
      ],
      "topic": "framework",
      "text": "Licensing/registration, prudential and conduct requirements, supervision and enforcement.",
      "citation": "Money Service Business Act 2016",
      "source": {
        "type": "legislation",
        "name": "Money Service Business Act 2016 (bermudalaws.bm consolidation)",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Money Service Business Act 2016"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-msb-codes",
      "entity_scope": [
        "msb"
      ],
      "topic": "framework",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Applicable BMA Code(s) of Practice / Conduct and Guidance Notes for this sector"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "fw-msb-aml",
      "entity_scope": [
        "msb"
      ],
      "topic": "framework",
      "text": "AML/ATF programme obligations where the entity is a regulated financial institution — typically in scope for this sector; verify. Current BMA General Guidance Notes revised June 2023.",
      "citation": "Proceeds of Crime Act 1997; ATF Act 2004; AML/ATF Regulations 2008",
      "source": {
        "type": "bma-guidance",
        "name": "BMA General Guidance Notes for AML/ATF Regulated Financial Institutions (revised June 2023)",
        "url": "https://www.bma.bm/viewPDF/documents/2024-06-13-13-28-45-2023-06-12-15-17-06-General-Guidance-Notes-for-AMLATF-Regulated-Entities-Revised.pdf",
        "published": "2023-06-12"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Proceeds of Crime Act 1997, ATF Act 2004, AML/ATF Regulations 2008"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-msb-es",
      "entity_scope": [
        "msb"
      ],
      "topic": "framework",
      "text": "Economic substance is fact-dependent. Confirm the relevant activity, exemptions and current requirements under the Economic Substance Act. CITA assumed administration on 31 March 2026; its announcement retains the ROC declaration portal until further instruction. The generally stated six-month year-end declaration period is not calculated here pending entity-specific and current statutory confirmation.",
      "citation": "CITA administration announcement; Economic Substance Act 2018 (current statutory scope must be confirmed)",
      "source": {
        "type": "official-guidance",
        "name": "CITA — Economic Substance administration and filing transition",
        "url": "https://www.cita.bm/news/cita-new-changes-economic-substance-automatic-exchange-of-information",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Economic Substance Act 2018"
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "legislation",
          "name": "Economic Substance Act 2018 — verify current requirements and applicability",
          "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/2018/Economic%20Substance%20Act%202018",
          "published": null
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-msb-fee",
      "entity_scope": [
        "msb"
      ],
      "topic": "filing",
      "text": "Confirm the statutory payment date and current amount against the governing Act and BMA fee schedule for this licence category. This tool does not establish a sector-specific date.",
      "citation": "Money Service Business Act 2016 / BMA fee provisions",
      "source": {
        "type": "bma-primary",
        "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
        "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
        "published": "2026-03-17"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual licence/business fee",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "filing-msb-return",
      "entity_scope": [
        "msb"
      ],
      "topic": "filing",
      "text": "Data not available in this tool — confirm the deadline for this licence category against the current legislation.",
      "citation": "Money Service Business Act 2016",
      "source": {
        "type": "legislation",
        "name": "Money Service Business Act 2016 — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "unverified",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual prudential return / audited financial statements (as applicable)",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-msb-board",
      "entity_scope": [
        "msb"
      ],
      "topic": "governance",
      "text": "Board responsibility for sound and prudent management, minimum criteria for licensing (fit and proper controllers and officers), and notification duties on material changes.",
      "citation": "Money Service Business Act 2016",
      "source": {
        "type": "legislation",
        "name": "Money Service Business Act 2016",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-msb-codes",
      "entity_scope": [
        "msb"
      ],
      "topic": "governance",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "summary-csp",
      "entity_scope": [
        "csp"
      ],
      "topic": "framework",
      "text": "Corporate service provider regulated by the Bermuda Monetary Authority under the Corporate Service Provider Business Act 2012. This tool holds framework-level information only for this entity type; obligation-level detail (deadlines, forms, fees) must be confirmed against the current legislation, Rules, and BMA guidance.",
      "citation": "Corporate Service Provider Business Act 2012",
      "source": {
        "type": "legislation",
        "name": "Corporate Service Provider Business Act 2012 — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "role": "summary",
        "label": "Corporate service provider"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-csp-act",
      "entity_scope": [
        "csp"
      ],
      "topic": "framework",
      "text": "Licensing/registration, prudential and conduct requirements, supervision and enforcement.",
      "citation": "Corporate Service Provider Business Act 2012",
      "source": {
        "type": "legislation",
        "name": "Corporate Service Provider Business Act 2012 (bermudalaws.bm consolidation)",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Corporate Service Provider Business Act 2012"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-csp-codes",
      "entity_scope": [
        "csp"
      ],
      "topic": "framework",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Applicable BMA Code(s) of Practice / Conduct and Guidance Notes for this sector"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "fw-csp-aml",
      "entity_scope": [
        "csp"
      ],
      "topic": "framework",
      "text": "AML/ATF programme obligations where the entity is a regulated financial institution — typically in scope for this sector; verify. Current BMA General Guidance Notes revised June 2023.",
      "citation": "Proceeds of Crime Act 1997; ATF Act 2004; AML/ATF Regulations 2008",
      "source": {
        "type": "bma-guidance",
        "name": "BMA General Guidance Notes for AML/ATF Regulated Financial Institutions (revised June 2023)",
        "url": "https://www.bma.bm/viewPDF/documents/2024-06-13-13-28-45-2023-06-12-15-17-06-General-Guidance-Notes-for-AMLATF-Regulated-Entities-Revised.pdf",
        "published": "2023-06-12"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Proceeds of Crime Act 1997, ATF Act 2004, AML/ATF Regulations 2008"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-csp-es",
      "entity_scope": [
        "csp"
      ],
      "topic": "framework",
      "text": "Economic substance is fact-dependent. Confirm the relevant activity, exemptions and current requirements under the Economic Substance Act. CITA assumed administration on 31 March 2026; its announcement retains the ROC declaration portal until further instruction. The generally stated six-month year-end declaration period is not calculated here pending entity-specific and current statutory confirmation.",
      "citation": "CITA administration announcement; Economic Substance Act 2018 (current statutory scope must be confirmed)",
      "source": {
        "type": "official-guidance",
        "name": "CITA — Economic Substance administration and filing transition",
        "url": "https://www.cita.bm/news/cita-new-changes-economic-substance-automatic-exchange-of-information",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Economic Substance Act 2018"
      },
      "editorial_updated": "2026-09-21",
      "sources": [
        {
          "type": "legislation",
          "name": "Economic Substance Act 2018 — verify current requirements and applicability",
          "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/2018/Economic%20Substance%20Act%202018",
          "published": null
        }
      ],
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-csp-fee",
      "entity_scope": [
        "csp"
      ],
      "topic": "filing",
      "text": "Confirm the statutory payment date and current amount against the governing Act and BMA fee schedule for this licence category. This tool does not establish a sector-specific date.",
      "citation": "Corporate Service Provider Business Act 2012 / BMA fee provisions",
      "source": {
        "type": "bma-primary",
        "name": "BMA Fees Effective 1 January 2026 (Fourth Schedule, BMA Act 1969)",
        "url": "https://cdn.bma.bm/documents/2026-03-17-10-11-27-2026-Bermuda-Monetary-Authority-Fees.pdf",
        "published": "2026-03-17"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual licence/business fee",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "filing-csp-return",
      "entity_scope": [
        "csp"
      ],
      "topic": "filing",
      "text": "Data not available in this tool — confirm the deadline for this licence category against the current legislation.",
      "citation": "Corporate Service Provider Business Act 2012",
      "source": {
        "type": "legislation",
        "name": "Corporate Service Provider Business Act 2012 — locate current consolidated text",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "unverified",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Annual prudential return / audited financial statements (as applicable)",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-csp-board",
      "entity_scope": [
        "csp"
      ],
      "topic": "governance",
      "text": "Board responsibility for sound and prudent management, minimum criteria for licensing (fit and proper controllers and officers), and notification duties on material changes.",
      "citation": "Corporate Service Provider Business Act 2012",
      "source": {
        "type": "legislation",
        "name": "Corporate Service Provider Business Act 2012",
        "url": "https://www.bermudalaws.bm",
        "published": null
      },
      "verification": "established",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "gov-csp-codes",
      "entity_scope": [
        "csp"
      ],
      "topic": "governance",
      "text": "Sector governance, risk management and cyber instruments must be checked for this licence. Operational Resilience Code scope and compliance dates are addressed separately below.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {},
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "fw-daba-cyber",
      "entity_scope": [
        "daba"
      ],
      "topic": "framework",
      "text": "Cyber programme, client asset protections, and operational requirements — confirm current instruments.",
      "citation": "Digital Asset Business (Cybersecurity) Rules; DAB Code of Practice",
      "source": {
        "type": "legislation",
        "name": "DAB (Cybersecurity) Rules / DAB Code of Practice",
        "url": "https://www.bma.bm",
        "published": null
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "Digital Asset Business (Cybersecurity) Rules and DAB Code of Practice"
      },
      "editorial_updated": "2026-09-16"
    },
    {
      "id": "fw-bank-prudential",
      "entity_scope": [
        "bank"
      ],
      "topic": "framework",
      "text": "Capital, liquidity and other banking requirements are outside this tool’s detailed insurer workflows. Check the banking instruments. The Operational Resilience Code has a separate compliance date of 1 January 2027 for BDCA licensees.",
      "citation": null,
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (issued September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-07-02",
      "legal_review": "pending",
      "data": {
        "name": "BMA Basel-framework rules; Operational Resilience / Cyber codes for deposit-taking institutions"
      },
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-intermediary-sfr",
      "entity_scope": [
        "intermediary"
      ],
      "topic": "filing",
      "text": "Every insurance manager, broker, agent and insurance marketplace provider must file a statutory financial return in the prescribed form; late filing attracts s.18A late fees (up to $500 per week or part week). Confirm the prescribed form and due date in the intermediary rules.",
      "citation": "Insurance Act 1978, ss.17B, 18A",
      "source": {
        "type": "legislation",
        "name": "Insurance Act 1978 (consolidated to Insurance Amendment (No. 2) Act 2025, effective 7 Jan 2026)",
        "url": "https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978",
        "published": "2026-01-07"
      },
      "verification": "verify",
      "last_reviewed": "2026-07-02",
      "review_due": "2027-01-01",
      "legal_review": "pending",
      "data": {
        "name": "Intermediary statutory financial return",
        "freq": "Annual",
        "months": null
      },
      "editorial_updated": "2026-09-21",
      "fee_year": 2026,
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "filing-opres-impact-tolerance",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "iigb"
      ],
      "topic": "filing",
      "text": "Paragraph 78 requires notification within 24 hours of awareness of a failure to keep important business services within impact tolerance. Section XVI requires adherence by 31 March 2028 for these insurer classes. Other current notification duties remain separate; this tool does not calculate event-driven dates.",
      "citation": "Operational Resilience and Outsourcing Code, para 78",
      "source": {
        "type": "bma-primary",
        "name": "Operational Resilience and Outsourcing Code (September 2025)",
        "url": "https://www.bma.bm/viewPDF/documents/2025-09-15-16-10-28-Operational-Resilience-and-Outsourcing---Code.pdf",
        "published": "2025-09-15"
      },
      "verification": "established",
      "data": {
        "name": "Impact-tolerance breach notification — Code compliance by 31 March 2028",
        "freq": "Event-driven",
        "months": null
      },
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "rule": {
        "kind": "opres"
      },
      "compliance_by": "2028-03-31",
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "gov-key-person-pcc",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb",
        "intermediary",
        "daba",
        "investment",
        "fundadmin",
        "trust",
        "bank",
        "msb",
        "csp"
      ],
      "topic": "governance",
      "text": "From 1 October 2026, any person being vetted by the BMA as a 'Key Person' for an AML/ATF regulated financial institution must submit a Police Clearance Certificate with their personal declaration form. 'Key Person' covers any person subject to the fit and proper assessment required by the Minimum Criteria for Licensing or Registration in the relevant regulatory Act, and the requirement applies to applications and to any change of a Key Person. The certificate must be no more than 12 months old at submission, and must be provided from each country in which the individual has been ordinarily resident for more than six months at any time in the previous three years; where a certificate cannot be obtained the Authority may consider substitute documentation case by case. Applications received in full before 1 October 2026 are not subject to the requirement. Whether a given entity is an AML/ATF regulated financial institution is fact-dependent — see section 42A(1) of the Proceeds of Crime Act 1997.",
      "citation": "BMA Notice — Police Clearance Certificate Requirement for Key Persons (13 August 2026); Proceeds of Crime Act 1997, s.42A(1)",
      "source": {
        "type": "bma-primary",
        "name": "BMA Notice — New Policy Implementation: Police Clearance Certificate Requirement for Key Persons (13 August 2026)",
        "url": "https://cdn.bma.bm/documents/2026-08-13-14-53-34-Notice---New-Policy-Implementation---Police-Clearance-Certificate-Requirement-for-Key-Persons.pdf",
        "published": "2026-08-13"
      },
      "verification": "verify",
      "data": {
        "pcc": {
          "requirement": "For a relevant Key Person, provide a Police Clearance Certificate with the personal declaration form. Each certificate must be no more than 12 months old at submission. Cover every country where the person was an ordinary resident for more than six months at any time in the preceding three years. If a certificate cannot be obtained, the BMA may consider substitute documentation case by case.",
          "transition": "Applications received in full before that date are outside the new requirement. A planned early submission or incomplete file does not establish the exception.",
          "preparation": [
            "Prepare a three-year residence history privately. For each country, record periods of ordinary residence and identify those exceeding six months. Exactly six months does not exceed the threshold; ask the BMA where residence or aggregation is uncertain.",
            "For each relevant country, identify the competent official issuer and the record available for this regulatory purpose. Confirm scope where several national or local routes exist.",
            "Record issue date and planned submission date for each certificate. Exactly 12 months satisfies the stated age limit; anything older needs current evidence. Recheck if the submission date changes.",
            "Check identity details against the personal declaration and identity documents. Retain issuer instructions and evidence of any unsuccessful application outside this tool.",
            "If a document is unavailable, raise the proposed substitute with the BMA early and retain its response. Do not assume acceptance.",
            "For local/state/provincial or non-English records, ask the BMA about coverage, translation, authentication, apostille or notarisation as relevant. Allow time for issuance and corrections."
          ],
          "formatNote": "The notice does not prescribe a universal national/federal issuer, fingerprint process, certified translation or apostille. No country-specific issuing route is represented here as BMA-approved. Current BMA instructions and direct confirmation control uncertain cases."
        }
      },
      "last_reviewed": "2026-09-22",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "rule": {
        "kind": "pcc"
      },
      "effective_from": "2026-10-01",
      "editorial_updated": "2026-09-22",
      "revision": "2.3.0",
      "evidence_note": "BMA notice pages 1–2 rechecked 22 September 2026. PCC requirements are separated from preparation prompts. Issuer, translation, authentication and substitute acceptability remain for BMA confirmation; no external legal sign-off."
    },
    {
      "id": "rec-cp-code-group-2026",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE",
        "class1",
        "class2",
        "class3",
        "classA",
        "classB",
        "spi",
        "collateralized",
        "iigb"
      ],
      "topic": "framework",
      "text": "June 2026 consultation: prudent-person proposals use issuance and 31 December 2026 compliance wording (section 1 paragraphs 7, 10). Group-supervision enhancements describe 180 days from publication of the draft Group Rules and Group Solvency Rules (section 2 paragraph 6). Conduct-of-business scope expansion proposes effect on final issuance and compliance 180 days after final publication (section 3 paragraph 8). These are distinct proposed timings. Final issuance has not been established by this release; verify the current instruments before relying on a date.",
      "citation": "BMA Consultation Paper, 9 June 2026",
      "source": {
        "type": "bma-guidance",
        "name": "BMA Consultation Paper — Proposed Amendments to Insurance Code of Conduct, Insurance (Group Supervision) Rules 2011 and Insurance (Prudential Standards) (Insurance Group Solvency Requirement) Rules 2011 (9 June 2026)",
        "url": "https://cdn.bma.bm/documents/2026-06-11-08-45-03-Consultation-Paper---Proposed-Amendments-to-Code-of-Conduct-Group-Supervision-and-Prudential-Standards-Insurance-Group-Solvency-Requirement-Rules-2011.pdf",
        "published": "2026-06-09"
      },
      "verification": "verify",
      "data": {
        "role": "recent",
        "instrument": "Proposed amendments to the Insurance Code of Conduct and the Group Rules (consultation)",
        "effective": "Proposal only — distinct implementation provisions; final status requires confirmation"
      },
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "rec-bill-insurance-als-2026",
      "entity_scope": [
        "classC",
        "classD",
        "classE"
      ],
      "topic": "framework",
      "text": "As-tabled Insurance Amendment Bill 2026 proposes a new Insurance Act section 17AA for Class C, D and E insurers other than those carrying on domestic business: an asset and liability statement filed under section 17(4), with BMA publication and related section 18A consequences. Its proposed 1 January 2026 deemed commencement would matter only if enacted as drafted. This Bill is not treated here as an operative requirement; existing asset-and-liability-statement rules are addressed separately.",
      "citation": "Insurance Amendment Bill 2026, as tabled, clauses 2–4 and explanatory memorandum",
      "source": {
        "type": "legislation",
        "name": "House of Assembly — Insurance Amendment Bill 2026 (as tabled; proposed text)",
        "url": "https://parliament.bm/admin/uploads/bill/0b44daca8e9d13d1458755312ea4446f.pdf"
      },
      "verification": "verify",
      "data": {
        "role": "recent",
        "instrument": "Proposed Insurance Act asset-and-liability-statement amendment (2026 Bill)",
        "effective": "Proposal only — commencement and parliamentary outcome to be confirmed"
      },
      "last_reviewed": "2026-09-25",
      "review_due": "2026-10-02",
      "legal_review": "pending",
      "editorial_updated": "2026-09-25",
      "revision": "2.7.4",
      "evidence_note": "As-tabled Bill inspected 25 September 2026. No enacted section 17AA was found in the consolidated Act during this check. Verify the official parliamentary and Gazette status before release or reliance; no filing date is derived from this Bill."
    },
    {
      "id": "rec-cp-resolution-2026",
      "entity_scope": [
        "class3a",
        "class3b",
        "class4",
        "classC",
        "classD",
        "classE"
      ],
      "topic": "framework",
      "text": "Consultation paper proposing the phased introduction of a resolution regime for the Bermuda commercial insurance sector, setting out the first elements of the framework and future work. Comments are due by 15 December 2026. This is a proposal, not law — no obligation arises from it yet, but it signals a material addition to the prudential framework for commercial insurers.",
      "citation": "BMA Consultation Paper — Proposed Phased Introduction of a Resolution Regime for the Bermuda Commercial Insurance Sector, 15 September 2026",
      "source": {
        "type": "bma-guidance",
        "name": "BMA Consultation Paper — Proposed Phased Introduction of a Resolution Regime for the Bermuda Commercial Insurance Sector (15 September 2026)",
        "url": "https://cdn.bma.bm/documents/2026-09-15-17-06-59-Consultation-Paper---Proposed-Phased-Introduction-of-a-Resolution-Regime-for-the-Bermuda-Commercial-Insurance-Sector.pdf",
        "published": "2026-09-15"
      },
      "verification": "verify",
      "data": {
        "role": "recent",
        "instrument": "Proposed resolution regime for commercial insurers (consultation)",
        "effective": "Consultation closes 15 December 2026 — not yet law"
      },
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    },
    {
      "id": "rec-cp-pspi-2026",
      "entity_scope": [
        "spi",
        "collateralized"
      ],
      "topic": "framework",
      "text": "The BMA is developing a new insurer class, the Parametric Special Purpose Insurer (PSPI). Its stakeholder letter of 16 September 2026 responds to consultation feedback on continuity for existing parametric business, the scope and classification of the class, eligible participants, collateral requirements, third-party validation and the transaction approval process. The BMA confirms parametric risks can continue to be transacted in other insurance classes. The class does not yet exist in law — monitor for the implementing instrument.",
      "citation": "BMA Stakeholder Letter — New Class of Insurers: Parametric Special Purpose Insurer, 16 September 2026",
      "source": {
        "type": "bma-guidance",
        "name": "BMA Stakeholder Letter — Consultation on New Insurer Class: Parametric Special Purpose Insurer (16 September 2026)",
        "url": "https://cdn.bma.bm/documents/2026-09-16-10-54-30-Stakeholder-Letter---Consultation-Paper---New-Insurer-Class---Parametric-Special-Purpose-Insurance-16-September-2026.pdf",
        "published": "2026-09-16"
      },
      "verification": "verify",
      "data": {
        "role": "recent",
        "instrument": "Proposed Parametric Special Purpose Insurer (PSPI) class",
        "effective": "Under development — not yet in force"
      },
      "last_reviewed": "2026-09-21",
      "review_due": "2027-09-21",
      "legal_review": "pending",
      "editorial_updated": "2026-09-21",
      "revision": "2.2.0",
      "evidence_note": "Targeted correction / scope safeguard, 21 September 2026. See VERIFICATION.md for checked provisions and unresolved coverage; no external legal sign-off."
    }
  ],
  "class_profile_sources": {
    "act": {"title":"Insurance Act 1978 (consolidated)","publisher":"Bermuda Laws","published":"Not stated; consolidated PDF generated 22 January 2026","url":"https://www.bermudalaws.bm/Laws/Consolidated%20Law/1978/Insurance%20Act%201978","retrieved":"2026-09-24","tier":1,"kind":"law","access":"open"},
    "ci_rules": {"title":"Insurance (Collateralized Insurers) (Statements, Returns, Solvency and Capital) Rules 2020","publisher":"Bermuda Monetary Authority","published":"28 April 2020; operative 30 April 2020","url":"https://cdn.bma.bm/documents/2023-11-14-15-06-56-Insurance-Collateralized-Insurers-Statements-Returns-Solvency-and-Capital-Rules-2020.pdf","retrieved":"2026-09-24","tier":1,"kind":"rule","access":"open"},
    "spi_rules": {"title":"Insurance (Special Purpose Insurers) (Statements, Returns and Solvency Requirement) Rules 2020","publisher":"Bermuda Monetary Authority","published":"28 April 2020; operative 30 April 2020","url":"https://cdn.bma.bm/documents/2023-11-14-15-03-35-Insurance-Special-Purpose-Insurers-Statements-Returns-and-Solvency-Requirement-Rules-2020.pdf","retrieved":"2026-09-24","tier":1,"kind":"rule","access":"open"},
    "spi_guidance": {"title":"Guidance Note: Special Purpose Insurers","publisher":"Bermuda Monetary Authority","published":"1 July 2020","url":"https://www.bma.bm/viewPDF/documents/2020-07-06-13-15-00-Guidance-Note---Special-Purpose-Insurers.pdf","retrieved":"2026-09-24","tier":1,"kind":"guidance","access":"open"},
    "ci_consultation": {"title":"Consultation Paper: New Insurers and Insurance Market Place","publisher":"Bermuda Monetary Authority","published":"14 May 2019","url":"https://www.bma.bm/viewPDF/documents/2019-05-14-11-47-20-c.-Consultation-Paper-New-Insurers-and-Insurance-Market-Place---Final.docx-May-14-2019.pdf","retrieved":"2026-09-24","tier":2,"kind":"official","access":"open"},
    "bma_2009": {"title":"BMA Annual Report 2009","publisher":"Bermuda Monetary Authority","published":"2009 reporting year","url":"https://cdn.bma.bm/documents/2018-12-28-04-10-13-Annual-Report-2009.pdf","retrieved":"2026-09-24","tier":2,"kind":"official","access":"open"},
    "bma_2025": {"title":"BMA Annual Report 2025","publisher":"Bermuda Monetary Authority","published":"2025 reporting year; published 2026","url":"https://cdn.bma.bm/documents/2026-07-20-12-40-59-2025-Annual-Report---Bermuda-Monetary-Authority.pdf","retrieved":"2026-09-24","tier":2,"kind":"official","access":"open"},
    "conyers": {"title":"Bermuda ILS: Strength in Diversity","publisher":"Conyers","published":"June 2024","url":"https://www.conyers.com/publications/view/bermuda-ils-strength-in-diversity/","retrieved":"2026-09-24","tier":3,"kind":"industry","access":"open"},
    "artemis_ci": {"title":"New collateralised insurer class to add ILS fund diversification","publisher":"Artemis","published":"3 October 2019","url":"https://www.artemis.bm/news/new-collateralised-insurer-class-to-add-ils-fund-diversification-demerling-walkers/","retrieved":"2026-09-24","tier":4,"kind":"news","access":"open"},
    "artemis_spi": {"title":"State Farm sponsored record Merna Re cat bond using multiple Bermuda SPIs","publisher":"Artemis","published":"22 May 2025","url":"https://www.artemis.bm/news/state-farm-sponsored-record-1-55bn-merna-re-cat-bond-using-multiple-bermuda-spis/","retrieved":"2026-09-24","tier":4,"kind":"news","access":"open"},
    "pspi_letter": {"title":"Stakeholder Letter: New Insurer Class — Parametric Special Purpose Insurer","publisher":"Bermuda Monetary Authority","published":"16 September 2026","url":"https://cdn.bma.bm/documents/2026-09-16-10-54-30-Stakeholder-Letter---Consultation-Paper---New-Insurer-Class---Parametric-Special-Purpose-Insurance-16-September-2026.pdf","retrieved":"2026-09-24","tier":2,"kind":"official","access":"open"},
    "bma_insurance_licensing": {"title":"Insurance licensing requirements","publisher":"Bermuda Monetary Authority","published":"Current page; date not stated","url":"https://www.bma.bm/insurance-licensing-requirements","retrieved":"2026-09-24","tier":1,"kind":"guidance","access":"open"}
    ,"bma_2008": {"title":"BMA Annual Report 2008","publisher":"Bermuda Monetary Authority","published":"2008 reporting year","url":"https://cdn.bma.bm/documents/2018-12-28-04-11-37-Annual-Report-2008.pdf","retrieved":"2026-09-25","tier":2,"kind":"official","access":"open"}
    ,"hansard_2010": {"title":"Official Hansard Report, 10 December 2010","publisher":"Bermuda House of Assembly","published":"10 December 2010","url":"https://parliament.bm/admin/uploads/hansards/d120d55abad999376dd85a6bd2d07ac0.pdf","retrieved":"2026-09-25","tier":2,"kind":"official","access":"open"}
    ,"amend_1995": {"title":"Insurance Amendment Act 1995 (1995:20)","publisher":"Bermuda Laws","published":"1995","url":"https://www.bermudalaws.bm/Laws/Annual%20Law/Acts/1995/Insurance%20Amendment%20Act%201995","retrieved":"2026-09-24","tier":1,"kind":"law","access":"open"}
    ,"amend_2008": {"title":"Insurance Amendment Act 2008 (2008:34)","publisher":"Bermuda Laws","published":"2008","url":"https://www.bermudalaws.bm/Laws/Annual%20Law/Acts/2008/Insurance%20Amendment%20Act%202008","retrieved":"2026-09-24","tier":1,"kind":"law","access":"open"}
    ,"amend_2010": {"title":"Insurance Amendment (No. 3) Act 2010 (2010:60)","publisher":"Bermuda Laws","published":"2010","url":"https://www.bermudalaws.bm/Laws/Annual%20Law/Acts/2010/Insurance%20Amendment%20(No.%203)%20Act%202010","retrieved":"2026-09-24","tier":1,"kind":"law","access":"open"}
    ,"amend_2012": {"title":"Insurance Amendment (No. 2) Act 2012 (2012:36)","publisher":"Bermuda Laws","published":"2012","url":"https://www.bermudalaws.bm/Laws/Annual%20Law/Acts/2012/Insurance%20Amendment%20(No.%202)%20Act%202012","retrieved":"2026-09-24","tier":1,"kind":"law","access":"open"}
    ,"amend_2019": {"title":"Insurance Amendment Act 2019 (2019:33)","publisher":"Bermuda Laws","published":"2019","url":"https://www.bermudalaws.bm/Laws/Annual%20Law/Acts/2019/Insurance%20Amendment%20Act%202019","retrieved":"2026-09-24","tier":1,"kind":"law","access":"open"}
    ,"amend_2022": {"title":"Insurance Amendment Act 2022 (2022:41)","publisher":"Bermuda Laws","published":"2022","url":"https://www.bermudalaws.bm/Laws/Annual%20Law/Acts/2022/Insurance%20Amendment%20Act%202022","retrieved":"2026-09-24","tier":1,"kind":"law","access":"open"}
    ,"guidance_2011": {"title":"Guidance Notes for Reclassification of Long-Term Insurers","publisher":"Bermuda Monetary Authority","published":"2011","url":"https://cdn.bma.bm/documents/2019-01-10-07-31-21-Guidance-Notes-for-Reclassification-of-Long-Term-Insurers.pdf","retrieved":"2026-09-25","tier":2,"kind":"official","access":"open"}
    ,"captives_2023": {"title":"Bermuda Captive Insight Report — 2023 Year-end Data","publisher":"Bermuda Monetary Authority","published":"2025; using 2023 returns","url":"https://www.bma.bm/viewPDF/documents/2025-12-04-14-34-27-Bermuda-Captive-Insight-Report---2023-Year-end-Data.pdf","retrieved":"2026-09-25","tier":2,"kind":"official","access":"open"}
    ,"pc_study_2024": {"title":"2024 Year-end P&C Catastrophe Risk and Stress Testing Analysis","publisher":"Bermuda Monetary Authority","published":"2025; using 2024 filings","url":"https://www.bma.bm/viewPDF/documents/2025-12-18-10-41-33-2024-Year-End-Bermuda-Insurance-Property-and-Casualty-Market-Catastrophe-Risk-and-Stress-Testing-Analysis-Report.pdf","retrieved":"2026-09-25","tier":2,"kind":"official","access":"open"}
    ,"lt_study_2024": {"title":"Bermuda Long-term Insurance Market Analysis and Stress Testing Report","publisher":"Bermuda Monetary Authority","published":"2026; using 2024 filings","url":"https://www.bma.bm/viewPDF/documents/2026-04-07-14-52-34-Bermuda-Long-term-Insurance-Market-Analysis-and-Stress-Testing-Report---December-2025.pdf","retrieved":"2026-09-25","tier":2,"kind":"official","access":"open"}
    ,"iigb_rule41": {"title":"Class IIGB Solvency Requirement Rules 2020 (BR 41/2020)","publisher":"Bermuda Monetary Authority","published":"2020; later amendments not cleared","url":"https://cdn.bma.bm/documents/2023-11-14-14-57-02-Insurance-Technical-Standards-Class-IIGB-Insurers-Solvency-Requirement-Rules-2020.pdf","retrieved":"2026-09-25","tier":1,"kind":"rule","access":"open"}
    ,"iigb_rule42": {"title":"Class IIGB Statements, Returns and Capital Solvency Rules 2020 (BR 42/2020)","publisher":"Bermuda Monetary Authority","published":"2020; later amendments not cleared","url":"https://cdn.bma.bm/documents/2023-11-14-14-59-39-Insurance-Technical-Standards-Class-IIGB-Insurers-Statements-Returns-and-Capital-Solvency-Rules-2020.pdf","retrieved":"2026-09-25","tier":1,"kind":"rule","access":"open"}
    ,"pwc_captives": {"title":"Bermuda captive services overview","publisher":"PwC Bermuda","published":"Date not stated","url":"https://www.pwc.com/bm/en/insurance-and-reinsurance-services/captive.html","retrieved":"2026-09-24","tier":3,"kind":"industry","access":"open"}
    ,"kpmg_captives": {"title":"Bermuda captives overview","publisher":"KPMG Bermuda","published":"Date not stated","url":"https://kpmg.com/bm/en/industries/insurance/captives.html","retrieved":"2026-09-24","tier":3,"kind":"industry","access":"open"}
    ,"conyers_captives": {"title":"Captive insurance in Bermuda","publisher":"Conyers","published":"Date not stated","url":"https://www.conyers.com/publications/view/captive-insurance-bermuda/","retrieved":"2026-09-24","tier":3,"kind":"industry","access":"open"}
    ,"appleby_iigb": {"title":"Public account of an IIGB digital-asset reinsurance registration","publisher":"Appleby","published":"Date not stated","url":"https://www.applebyglobal.com/news/appleby-bermuda-advised-relm-ii-in-its-incorporation-and-registration-to-provide-reinsurance-capacity-in-the-crypto-space/","retrieved":"2026-09-24","tier":3,"kind":"industry","access":"open"}
    ,"chambers_iigb": {"title":"Bermuda blockchain and crypto-assets practice guide","publisher":"Chambers and Partners","published":"2026","url":"https://practiceguides.chambers.com/practice-guides/blockchain-crypto-assets-2026/bermuda","retrieved":"2026-09-24","tier":3,"kind":"industry","access":"open"}
    ,"daba_act": {"title":"Digital Asset Business Act 2018 (consolidated)","publisher":"Bermuda Laws","published":"Consolidated text; date stated on source","url":"https://www.bermudalaws.bm/Laws/Consolidated%20Law/2018/Digital%20Asset%20Business%20Act%202018","retrieved":"2026-09-24","tier":1,"kind":"law","access":"open"}
    ,"daba_exemption": {"title":"Digital Asset Business Exemption Order 2023","publisher":"Bermuda Monetary Authority","published":"2023","url":"https://cdn.bma.bm/documents/2023-11-20-16-59-20-Digital-Asset-Business-Exemption-Order-2023.pdf","retrieved":"2026-09-24","tier":1,"kind":"rule","access":"open"}
    ,"daba_custody": {"title":"Digital Asset Business Custody of Client Assets Rules 2025","publisher":"Bermuda Monetary Authority","published":"2025","url":"https://cdn.bma.bm/documents/2025-02-20-09-34-51-Digital-Asset-Business-Custody-of-Client-Assets-Rules-2025.pdf","retrieved":"2026-09-24","tier":1,"kind":"rule","access":"open"}
    ,"investment_act": {"title":"Investment Business Act 2003 (consolidated)","publisher":"Bermuda Laws","published":"Consolidated text; date stated on source","url":"https://www.bermudalaws.bm/Laws/Consolidated%20Law/2003/Investment%20Business%20Act%202003","retrieved":"2026-09-24","tier":1,"kind":"law","access":"open"}
    ,"investment_order": {"title":"Investment Business Non-Registrable Persons Designation Order 2022","publisher":"Bermuda Monetary Authority","published":"2022","url":"https://cdn.bma.bm/documents/2023-11-14-14-00-48-Investment-Business-Non-Registrable-Persons-Designation-Order-2022.pdf","retrieved":"2026-09-24","tier":1,"kind":"rule","access":"open"}
    ,"fundadmin_act": {"title":"Fund Administration Provider Business Act 2019 (consolidated)","publisher":"Bermuda Laws","published":"Consolidated text; date stated on source","url":"https://www.bermudalaws.bm/Laws/Consolidated%20Law/2019/Fund%20Administration%20Provider%20Business%20Act%202019","retrieved":"2026-09-24","tier":1,"kind":"law","access":"open"}
    ,"trust_act": {"title":"Trusts (Regulation of Trust Business) Act 2001 (consolidated)","publisher":"Bermuda Laws","published":"Consolidated text; date stated on source","url":"https://www.bermudalaws.bm/Laws/Consolidated%20Law/2001/Trusts%20%28Regulation%20of%20Trust%20Business%29%20Act%202001","retrieved":"2026-09-24","tier":1,"kind":"law","access":"open"}
    ,"trust_exemption": {"title":"Trusts (Regulation of Trust Business) Exemption Order 2002","publisher":"Bermuda Monetary Authority","published":"2002","url":"https://cdn.bma.bm/documents/2023-11-14-17-17-44-Trusts-Regulation-of-Trust-Business-Exemption-Order-2002.pdf","retrieved":"2026-09-24","tier":1,"kind":"rule","access":"open"}
    ,"bank_act": {"title":"Banks and Deposit Companies Act 1999 (consolidated)","publisher":"Bermuda Laws","published":"Consolidated text; date stated on source","url":"https://www.bermudalaws.bm/Laws/Consolidated%20Law/1999/Banks%20and%20Deposit%20Companies%20Act%201999","retrieved":"2026-09-24","tier":1,"kind":"law","access":"open"}
    ,"csp_act": {"title":"Corporate Service Provider Business Act 2012 (consolidated)","publisher":"Bermuda Laws","published":"Consolidated text; date stated on source","url":"https://www.bermudalaws.bm/Laws/Consolidated%20Law/2012/Corporate%20Service%20Provider%20Business%20Act%202012","retrieved":"2026-09-24","tier":1,"kind":"law","access":"open"}
    ,"csp_exemption": {"title":"Corporate Service Provider Business Exemption Order 2015","publisher":"Bermuda Monetary Authority","published":"2015","url":"https://cdn.bma.bm/documents/2023-11-14-10-57-57-Corporate-Service-Provider-Business-Exemption-Order-2015.pdf","retrieved":"2026-09-24","tier":1,"kind":"rule","access":"open"}
    ,"msb_act": {"title":"Money Service Business Act 2016 (consolidated)","publisher":"Bermuda Laws","published":"Consolidated text; date stated on source","url":"https://www.bermudalaws.bm/Laws/Consolidated%20Law/2016/Money%20Service%20Business%20Act%202016","retrieved":"2026-09-24","tier":1,"kind":"law","access":"open"}
  },
  "class_profiles": {
    "collateralized": {
      "profile_version":"1.0","researched_on":"2026-09-24","review_due":"2027-03-24","legal_review":"pending",
      "at_a_glance":[
        {"text":"A Collateralized Insurer carries on special purpose business but is not registrable as a Special Purpose Insurer.","sources":["act"],"pin":"s.1(1), definition of Collateralized Insurer; s.4(1)(da)"},
        {"text":"The class-defining provisions took effect on 5 August 2019, according to the consolidated Act's amendment annotations.","sources":["act"],"pin":"s.1 and s.4 annotations to 2019:33"},
        {"text":"Bermuda practitioners describe it as a vehicle for insurance-linked structures whose risk profile does not fit the SPI framework; this is market context, not an eligibility test.","sources":["conyers"],"pin":"Collateralised Insurer discussion"}
      ],
      "timeline":[
        {"date":"14 May 2019","text":"The BMA consulted on a new class in response to more complex insurance-linked structures.","sources":["ci_consultation"],"pin":"paras.8–10"},
        {"date":"5 August 2019","text":"The CI definition and registration route became effective; the date is from consolidated-Act annotations, not a verified assent date.","sources":["act"],"pin":"s.1 and s.4 annotations to 2019:33"},
        {"date":"30 April 2020","text":"CI-specific statement, return and capital rules came into operation.","sources":["ci_rules"],"pin":"r.11"}
      ],
      "official_rationale":[{"text":"The BMA said the existing SPI and Class 3 frameworks did not suit certain more complex, leveraged structures or proposals involving unrated, non-affiliated cedants. This described its 2019 policy rationale; it did not create a standing permission for any particular structure.","sources":["ci_consultation"],"pin":"paras.9–10"}],
      "industry_view":[{"text":"A 2019 market interview expected the class to broaden possible insurance-linked fund structures. This is a dated practitioner expectation, not a regulatory permission.","sources":["artemis_ci"],"pin":"3 October 2019 interview","status":"single-source"}],
      "qualification":[
        {"text":"The proposed business must be special purpose business: insured liabilities are fully collateralised through the means specified in the Act—proceeds of subordinated debt or another BMA-approved financing mechanism, cash or time deposits.","sources":["act"],"pin":"s.1(1), definition of special purpose business"},
        {"text":"The BMA may register the body as a CI where it proposes special purpose business but is not registrable as an SPI; it may impose or vary registration conditions. This is not an automatic classification based on complexity alone.","sources":["act"],"pin":"ss.4(1)(da), 4(2)–(3), 5(2)"}
      ],
      "footprint":[{"text":"The BMA's all-insurers-registered table lists 27 Collateralized Insurers in its 2025 column, compared with 16 in 2024. The table does not specify a precise point-in-time date or count transactions.","sources":["bma_2025"],"pin":"p.66, Analysis of All Insurers Registered"}],
      "misconceptions":[{"text":"Full collateralisation alone does not determine the registration class: the BMA's 2019 consultation contemplated licensing a fully collateralised group lead as Class 3A or another commercial class for group-supervision purposes. This was a policy example, not an automatic alternative route.","sources":["ci_consultation"],"pin":"para.14"}],
      "developments":["rec-cp-pspi-2026"]
    },
    "spi": {
      "profile_version":"1.0","researched_on":"2026-09-24","review_due":"2027-03-24","legal_review":"pending",
      "at_a_glance":[
        {"text":"A Special Purpose Insurer carries on special purpose business and may be registered for restricted or unrestricted special purpose business.","sources":["act"],"pin":"ss.1(1), 4(1)(d)"},
        {"text":"The class-defining provisions were effective from 30 July 2008 according to the consolidated Act; the original Act's assent date was not established in this research.","sources":["act"],"pin":"s.1 and s.4 annotations to 2008:34"},
        {"text":"Bermuda practitioners report use of SPIs in catastrophe-bond structures. This is typical market use, not a statutory condition.","sources":["conyers"],"pin":"SPI discussion"}
      ],
      "timeline":[
        {"date":"30 July 2008","text":"The SPI and special-purpose-business definitions took effect under the 2008 amendment, according to consolidated-Act annotations.","sources":["act"],"pin":"s.1 annotations to 2008:34"},
        {"date":"October 2009","text":"The BMA issued initial SPI guidance after the class was introduced.","sources":["spi_guidance"],"pin":"para.2"},
        {"date":"31 December 2018","text":"Restricted and unrestricted special purpose business definitions became effective.","sources":["act"],"pin":"s.1 annotations to 2018:68"},
        {"date":"30 April 2020","text":"The current inspected SPI statements, returns and solvency rules came into operation.","sources":["spi_rules"],"pin":"r.15"}
      ],
      "official_rationale":[{"text":"The BMA describes the SPI regime as facilitating transfer of specified insurance risks to capital markets through insurance-linked securities, subject to its supervisory guidance. That description does not replace the Act's registration criteria.","sources":["spi_guidance"],"pin":"paras.1–5"}],
      "industry_view":[{"text":"Bermuda practitioners identify catastrophe bonds as a common SPI use; this is industry context, not a registration criterion.","sources":["conyers"],"pin":"SPI discussion"},{"text":"A 2025 news report described one transaction using multiple Bermuda SPIs. That single example does not establish how frequently such arrangements occur.","sources":["artemis_spi"],"pin":"22 May 2025 report","status":"single-source"}],
      "qualification":[
        {"text":"The entity must carry on special purpose business, under which liabilities to insureds are fully collateralised through the financing and asset types listed in the Act.","sources":["act"],"pin":"s.1(1), definitions of Special Purpose Insurer and special purpose business"},
        {"text":"Restricted special purpose business is with specified insureds approved by the BMA; unrestricted business is with any insured. The BMA may register an SPI for either category.","sources":["act"],"pin":"ss.1(1), 4(1)(d)"},
        {"text":"On an SPI application, the BMA must consider whether the proposal solely insures or reinsures one or more risks or groups of risks with one or more policyholders, and the sophistication of policyholders or funding parties. These factors do not confer an automatic right to registration.","sources":["act"],"pin":"s.5(2)"}
      ],
      "footprint":[{"text":"The BMA's all-insurers-registered table lists 201 SPIs in its 2025 column, compared with 215 in 2024. The table does not specify a precise point-in-time date or count deals or segregated accounts.","sources":["bma_2025"],"pin":"p.66, Analysis of All Insurers Registered"}],
      "misconceptions":[{"text":"The statutory SPI/CI boundary is not simply one transaction versus many: section 5(2) expressly refers to one or more risks or groups and one or more policyholders.","sources":["act"],"pin":"s.5(2)"},{"text":"Sources differ on the SPI regime's starting year: a May 2019 BMA consultation describes establishment in 2009, while consolidated-Act annotations date the class-defining provisions effective 30 July 2008. This profile uses the Act for the legal effective date; the original annual Act and Gazette commencement record remain to be checked.","sources":["act","ci_consultation"],"pin":"Act s.1 annotations to 2008:34; BMA consultation para.8","status":"conflicting"}],
      "developments":["rec-cp-pspi-2026"]
    }
  },
  "class_profile_context": {
    "class1": {"title":"Class 1 statutory context","claims":[{"text":"Section 4B provides two Class 1 routes: a single-owner route and an affiliate-of-a-group route. Neither route is determined by a label alone; the proposed insured risks matter.","sources":["act"],"pin":"s.4B(a)–(b)","status":"confirmed"}]},
    "class2": {"title":"Class 2 statutory context","claims":[{"text":"Section 4C provides both a multi-owner route and a Class-1-adjacent route subject to its 80% net-premiums-written tests. The applicant's ownership and proposed risks determine which alternative is relevant.","sources":["act"],"pin":"s.4C(1)–(2)","status":"confirmed"}]},
    "class3": {"title":"Class 3 statutory context","claims":[{"text":"Class 3 is a residual general-business class under section 4D: the statutory test operates by reference to the classes and categories listed in that provision. The Navigator does not convert BMA explanatory shorthand into an independent percentage test.","sources":["act"],"pin":"s.4D","status":"confirmed"}]},
    "class3a": {"title":"Class 3A statutory context","claims":[{"text":"Section 4DA sets the Class 3A statutory test using unrelated-business and premium or loss-provision measures. The exact application depends on the Act's wording and the entity's facts; this note is not a registration decision.","sources":["act"],"pin":"s.4DA","status":"confirmed"}]},
    "class3b": {"title":"Class 3B statutory context","claims":[{"text":"Section 4DB describes the Class 3B general-business class using unrelated-business and net-premium measures. An insurer may also meet aspects of the Class 4 description; the BMA determines classification and this Navigator does not rank the classes.","sources":["act"],"pin":"s.4DB; comparison with s.4E","status":"review-pending"}]},
    "class4": {"title":"Class 4 statutory context","claims":[{"text":"Section 4E provides the Class 4 statutory description, including the capital and business characteristics stated in that provision. The class may overlap factually with Class 3B; classification remains a BMA decision.","sources":["act"],"pin":"s.4E","status":"review-pending"}]},
    "classA": {"title":"Class A statutory context","claims":[{"text":"Section 4EB provides the Class A long-term insurer description. The statutory tests use terms such as affiliate and group; this Navigator quotes those terms without creating a separate definition of group.","sources":["act"],"pin":"s.4EB; s.4F","status":"review-pending"}]},
    "classB": {"title":"Class B statutory context","claims":[{"text":"Section 4EC provides the Class B long-term insurer description. The statutory tests use affiliate, group and related premium concepts; current rules and the entity's facts must be checked before relying on a classification.","sources":["act"],"pin":"s.4EC; s.4F","status":"review-pending"}]},
    "classC": {"title":"Class C statutory context","claims":[{"text":"Section 4ED provides the Class C long-term insurer description and its asset boundary. Current prudential rules, exclusions and any BMA direction must be checked separately; this note does not determine the class.","sources":["act"],"pin":"s.4ED","status":"confirmed"}]},
    "classD": {"title":"Class D statutory context","claims":[{"text":"Section 4EE provides the Class D long-term insurer description and its asset boundary. Exceeding the statutory limit engages the separate notification and continuation provisions; this note does not decide the applicable route.","sources":["act"],"pin":"s.4EE; s.31AD","status":"confirmed"}]},
    "iigb": {"title":"IIGB statutory context","claims":[{"text":"Section 4EI provides the Innovative Insurer General Business class description. The Act-level identity and obligations can be described, but the current IIGB technical-solvency instrument and quantitative capital requirements are not reproduced here until the complete current rules are verified.","sources":["act"],"pin":"s.4EI; current technical standards held separately","status":"review-pending"}]},
    "classE": {
      "title":"Class E boundary note",
      "claims":[
        {"text":"Insurance Act 1978, section 4EF, currently states that a long-term insurer with total assets of more than $500 million, and not registrable as Class A, Class B or Class IILT, is registrable as a Class C, Class D or Class E insurer. The Navigator does not select among those classes.","sources":["act"],"pin":"s.4EF","status":"confirmed"},
        {"text":"The BMA's public licensing summary presents Class E as the long-term class for insurers with more than $500 million of total assets and not registrable as Class A or Class B. This is a supervisory description and does not replace the wording of section 4EF.","sources":["bma_insurance_licensing"],"pin":"Class E licensing summary","status":"conflicting"},
        {"text":"The outcome for an entity at exactly $500 million, and the practical choice among Classes C, D and E above that amount, is not established by this profile. Compare the current Act and BMA materials, then confirm the proposed classification with the BMA and Bermuda counsel before relying on it.","sources":["act","bma_insurance_licensing"],"pin":"Boundary interpretation; source-scope limitation","status":"not-established"}
      ]
    }
  },
  "class_profile_shared_history": [
    {"date":"29 April 1995","text":"The 1995 amendment established general-business Classes 1–4. A class-by-class official 1995 policy-intent statement was not established in the reviewed material.","sources":["amend_1995","act"],"pin":"1995:20 s.3; Act ss.4B–4E amendment annotations"},
    {"date":"30 July 2008","text":"The 2008 amendment added Classes 3A and 3B and SPI to the residual Class 3 exclusions. The BMA later explained that the split identified commercial carriers for differentiated oversight; that rationale applies to the reform, not uniquely to each class.","sources":["amend_2008","bma_2008"],"pin":"2008:34 ss.7–8; BMA Annual Report 2008 p.37"},
    {"date":"31 December 2010","text":"The 2010 amendment created long-term Classes A–E. Government discussion described a framework reflecting the nature, scale and complexity of long-term business, not five separate product purposes.","sources":["amend_2010","hansard_2010"],"pin":"2010:60 s.5; Hansard 10 December 2010 pp.330–331"},
    {"date":"1 January 2013","text":"The 2012 amendment changed the C/D/E provisions, including the wording of section 4EF; it did not create an applicant-operated asset ladder.","sources":["amend_2012","act"],"pin":"2012:36 ss.3–4; Act ss.4EE–4EF"},
    {"date":"5 August 2019","text":"The 2019 amendment inserted Class IIGB and updated the Class 3 exclusion list. The BMA's earlier innovation consultation stated a policy proposal, not an additional statutory qualification test.","sources":["amend_2019","ci_consultation"],"pin":"2019:33 ss.5, 8; consultation pp.2, 7–8"},
    {"date":"20 December 2022","text":"The 2022 amendment added IILT to the ordinary C/D/E exclusions; IILT is outside these background profiles.","sources":["amend_2022","act"],"pin":"2022:41 ss.6–8; Act ss.4ED–4EF"}
  ],
  "class_profile_details": {
    "class1": {
      "glance":[{"text":"Class 1 is a general-business registration class introduced by the 1995 amendment.","sources":["amend_1995","act"],"pin":"1995:20 s.3; Act s.4B annotation"},{"text":"The BMA calls it a single-parent captive category, a useful shorthand that does not replace the statute's two alternatives.","sources":["bma_insurance_licensing"],"pin":"Class 1 licensing summary"}],
      "history":[{"text":"Section 4B took effect on 29 April 1995. A Class 1-specific official statement of why it was created was not established from the reviewed sources; later BMA risk-based-supervision discussion is broader historical context.","sources":["act","bma_2008"],"pin":"Act s.4B annotation; BMA Annual Report 2008 pp.7, 37"}],
      "purpose":[{"text":"The BMA's later discussion of risk-sensitive class supervision describes the broader regime, not a recovered 1995 Class 1 policy-intent statement.","sources":["bma_2008"],"pin":"pp.7, 37"}],
      "industry":[{"text":"Practitioners describe captives as a way organisations finance and manage selected risks. That is market interpretation, not Class 1 eligibility.","sources":["kpmg_captives","pwc_captives"],"pin":"Captive-service overviews reviewed 24 September 2026"}],
      "qualification":[{"text":"Section 4B provides two alternatives. One concerns a body wholly owned by one person intending to insure only that person's risks. The other concerns an affiliate of a group intending to insure only risks of other affiliates of that group or its own shareholders.","sources":["act"],"pin":"s.4B(a)–(b)"}],
      "distinctions":[{"text":"Class 2 has statutory 80%-net-premium routes, while Class 3 is residual after its listed exclusions. Class 1's 'only' language must not be replaced with a general premium-share test.","sources":["act"],"pin":"ss.4B–4D"}],
      "misconceptions":[{"text":"'All single-owner captives must be Class 1' is too broad: section 4C also has a route for a body that would be Class 1 but for its different qualifying risk mix. No unsourced worked example of 'group' is offered here.","sources":["act"],"pin":"ss.4B–4C"}],
      "footprint":[{"text":"The BMA's all-insurers-registered table lists 159 Class 1 licences in its 2025 column, not a live 2026 count.","sources":["bma_2025"],"pin":"p.66, Analysis of All Insurers Registered"}],
      "market":[{"text":"In the BMA's 2023 captive-return data, property damage and business interruption represented 51% of Class 1 short-tail gross written premium. This observed mix does not narrow the statutory class.","sources":["captives_2023"],"pin":"pp.5, 23, Annex 2 short-tail lines"}],
      "developments":["rec-cp-code-group-2026"]},
    "class2": {
      "glance":[{"text":"Class 2 is a general-business class introduced in 1995, effective 29 April 1995.","sources":["amend_1995","act"],"pin":"1995:20 s.3; Act s.4C annotation"},{"text":"The BMA commonly describes multi-owner captives here, but the Act contains another Class-1-derived route.","sources":["bma_insurance_licensing","act"],"pin":"BMA Class 2 summary; Act s.4C(2)"}],
      "history":[{"text":"The 1995 amendment inserted section 4C. A Class 2-specific official policy-purpose statement was not established from the reviewed 1995 material; the shared reform history should not be attributed uniquely to Class 2.","sources":["amend_1995","act"],"pin":"1995:20 s.3; Act s.4C annotation"}],
      "purpose":[{"text":"The BMA later discussed risk-sensitive class supervision as a regime-wide approach, not a recovered 1995 Class 2 creation rationale.","sources":["bma_2008"],"pin":"pp.7, 37"}],
      "industry":[{"text":"Captive-service accounts discuss group and association structures, but those market labels do not establish section 4C eligibility.","sources":["pwc_captives","conyers_captives"],"pin":"Captive overviews reviewed 24 September 2026"}],
      "qualification":[{"text":"Section 4C(1) covers a body wholly owned by two or more unrelated persons intending to write at least 80% of net premiums for the specified owner/affiliate risks or risks arising from their operations in the BMA's opinion.","sources":["act"],"pin":"s.4C(1)(a)–(b)"},{"text":"Section 4C(2) separately covers a body that would be registrable as Class 1 but for the different statutory at-least-80% alternatives.","sources":["act"],"pin":"s.4C(2)(a)–(b)"}],
      "distinctions":[{"text":"Class 1 uses 'only' for its specified risks. Class 3 is residual under section 4D; a simple 'anything above 20%' rule is not the Act's complete Class 3 test.","sources":["act"],"pin":"ss.4B–4D"}],
      "misconceptions":[{"text":"Defining Class 2 as 'multi-parent only' omits the Class-1-derived route. Ownership labels cannot replace the statutory risk and premium measures.","sources":["act"],"pin":"s.4C(1)–(2)"}],
      "footprint":[{"text":"The BMA's 2025 all-insurers table lists 244 Class 2 licences.","sources":["bma_2025"],"pin":"p.66, Analysis of All Insurers Registered"}],
      "market":[{"text":"Marine lines were 39% of Class 2 short-tail gross written premium in the BMA's 2023 captive-return Annex 2. This is an observed portfolio distribution, not a business restriction.","sources":["captives_2023"],"pin":"pp.5, 23, Annex 2 short-tail lines"}],
      "developments":["rec-cp-code-group-2026"]},
    "class3": {
      "glance":[{"text":"Class 3 began as a residual general-business category in the 1995 framework.","sources":["amend_1995","act"],"pin":"1995:20 s.3; Act s.4D annotation"}],
      "history":[{"text":"The 2008 amendment added 3A, 3B and SPI to Class 3's exclusions; the 2019 amendment added IIGB and Collateralized Insurer. The BMA's 2008 commercial-split explanation is not evidence of Class 3's original 1995 purpose.","sources":["amend_2008","amend_2019","bma_2008"],"pin":"2008:34 s.7; 2019:33 s.5; BMA Annual Report 2008 p.37"}],
      "purpose":[{"text":"The BMA said the 2008 reclassification helped identify commercial carriers for differentiated supervisory oversight. This is a purpose of the later reform, not a separate 1995 Class 3 rationale.","sources":["bma_2008"],"pin":"p.37"}],
      "qualification":[{"text":"Section 4D is residual: a body is registrable as Class 3 when it is not registrable under its listed alternative general-business classes or as an SPI, subject to BMA determination.","sources":["act"],"pin":"ss.4A, 4D"}],
      "distinctions":[{"text":"Classes 3A and 3B have positive unrelated-business tests, unlike Class 3's residual test. Class 4 has a separate capital-and-business-type test.","sources":["act"],"pin":"ss.4D–4E"}],
      "misconceptions":[{"text":"The consolidated section 4D prints 'IIB'; the enacted 2019 amendment inserted 'IIGB'. This is an apparent consolidation-text error, not a newly created Class IIB.","sources":["act","amend_2019"],"pin":"Act s.4D; 2019:33 s.5","status":"conflicting"},{"text":"A universal '20–50% unrelated premium' description is not the Act's complete residual Class 3 test.","sources":["act"],"pin":"s.4D"}],
      "footprint":[{"text":"The BMA's 2025 all-insurers table lists 180 Class 3 licences.","sources":["bma_2025"],"pin":"p.66, Analysis of All Insurers Registered"}],
      "market":[{"text":"In the BMA's 2023 captive-return study, segregated-account structures were predominantly registered in Class 3, and Class 3 business accounted for 89% of SAC/ISAC premium in that study—not 89% of all Bermuda premium. This does not make a segregated account automatically Class 3.","sources":["captives_2023","act"],"pin":"Captive report pp.5, 18; Act s.4D"}],
      "developments":["rec-cp-code-group-2026"]},
    "class3a": {
      "glance":[{"text":"Class 3A was created in the 2008 Class 3 reclassification, in force 30 July 2008.","sources":["amend_2008","act"],"pin":"2008:34 s.8; Act s.4DA annotation"}],
      "history":[{"text":"The 2008 amendment inserted section 4DA as one branch of the former Class 3 population.","sources":["amend_2008"],"pin":"s.8"}],
      "purpose":[{"text":"The BMA said the commercial split supported differentiated oversight. That is shared reform intent, not a separate purpose attributed solely to 3A.","sources":["bma_2008"],"pin":"p.37"}],
      "qualification":[{"text":"Section 4DA first requires at least 50% unrelated business measured by either net premiums written or loss and loss-expense provisions. Within that population, unrelated-business net premiums written must be less than $50 million for ordinary 3A registrability.","sources":["act"],"pin":"s.4DA(1)–(2)"}],
      "distinctions":[{"text":"Class 3B uses the same alternative 50% entry measures but starts at $50 million or more of unrelated-business net premiums. Class 4 uses a different capital-and-business-type test, not a larger 3A premium tier.","sources":["act"],"pin":"ss.4DB–4E"}],
      "misconceptions":[{"text":"The two 50% measures are alternatives, not an 'and' test. An existing 3A that exceeds its limit has a notification and potential BMA-direction process; crossing does not automatically re-register it.","sources":["act"],"pin":"ss.4DA(1), 8A(2)(h), 31AB"}],
      "footprint":[{"text":"The BMA's 2025 all-insurers table lists 108 Class 3A licences.","sources":["bma_2025"],"pin":"p.66, Analysis of All Insurers Registered"}],
      "developments":["rec-cp-code-group-2026","rec-cp-resolution-2026"]},
    "class3b": {
      "glance":[{"text":"Class 3B was inserted by the 2008 Class 3 reform, in force 30 July 2008.","sources":["amend_2008","act"],"pin":"2008:34 s.8; Act s.4DB annotation"}],
      "history":[{"text":"The 2008 amendment created Class 3B alongside Class 3A, rather than as a later automatic promotion from it.","sources":["amend_2008","act"],"pin":"2008:34 s.8; Act ss.4DA–4DB"}],
      "purpose":[{"text":"The BMA's stated purpose for the reform was more differentiated supervision of commercial carriers formerly within Class 3.","sources":["bma_2008"],"pin":"p.37"}],
      "qualification":[{"text":"Section 4DB requires at least 50% unrelated business by net premiums written or loss and loss-expense provisions, plus unrelated-business net premiums written of $50 million or more.","sources":["act"],"pin":"s.4DB(1)–(2)"}],
      "distinctions":[{"text":"Exactly $50 million is within the statutory 3B wording. Class 4 uses a different capital-and-business-type test. Section 4E expressly resolves Class 4 overlap with Classes 1 and 2 but not a potential 3B/4 overlap; this profile does not rank them.","sources":["act"],"pin":"ss.4DA–4E"}],
      "misconceptions":[{"text":"The BMA's 2025 Annual Report summary says 'more than $50 million', while the Act says '$50 million or more'. The legal boundary here follows the Act.","sources":["act","bma_2025"],"pin":"Act s.4DB(2); BMA Annual Report 2025 p.68","status":"conflicting"}],
      "footprint":[{"text":"The BMA's 2025 all-insurers table lists 33 Class 3B licences.","sources":["bma_2025"],"pin":"p.66, Analysis of All Insurers Registered"}],
      "market":[{"text":"A BMA P&C catastrophe and stress-testing analysis covers Classes 3B and 4 together using 2024 filing data, published in 2025. Its aggregate results are not Class 3B-only figures.","sources":["pc_study_2024"],"pin":"Scope and methodology"}],
      "developments":["rec-cp-code-group-2026","rec-cp-resolution-2026"]},
    "class4": {
      "glance":[{"text":"Class 4 began with the 1995 general-business classification, effective 29 April 1995.","sources":["amend_1995","act"],"pin":"1995:20 s.3; Act s.4E annotation"}],
      "history":[{"text":"A distinct official 1995 Class 4 policy statement was not established in the reviewed sources. Later BMA discussion places Class 4 at the higher-impact end of its risk-based supervision; that is subsequent regulatory history, not a new legal test.","sources":["act","bma_2008"],"pin":"Act s.4E annotation; BMA Annual Report 2008 pp.7, 37"}],
      "purpose":[{"text":"The BMA's later risk-based supervisory account applies to the commercial-class regime; it does not supply a recovered 1995 Class 4-specific creation rationale.","sources":["bma_2008"],"pin":"pp.7, 37"}],
      "qualification":[{"text":"Section 4E combines at least $100 million total statutory capital and surplus at application or before business begins with intended insurance business including excess liability or property-catastrophe reinsurance.","sources":["act"],"pin":"s.4E(1)"},{"text":"A body also registrable as Class 1 or Class 2 must not be registered as Class 4 under section 4E(2).","sources":["act"],"pin":"s.4E(2)"}],
      "distinctions":[{"text":"The $100 million amount is capital and surplus, not the unrelated-premium threshold distinguishing 3A from 3B. The Act does not provide the same express overlap rule for 3B/4 that it provides for 1/2 versus 4; the BMA determines the class.","sources":["act"],"pin":"ss.4DA–4E"}],
      "footprint":[{"text":"The BMA's 2025 all-insurers table lists 46 Class 4 licences.","sources":["bma_2025"],"pin":"p.66, Analysis of All Insurers Registered"}],
      "market":[{"text":"A BMA P&C catastrophe and stress-testing analysis covers Classes 3B and 4 together using 2024 filing data, published in 2025. It is a combined-cohort study, not a description of every Class 4 firm's portfolio.","sources":["pc_study_2024"],"pin":"Scope and methodology"}],
      "developments":["rec-cp-code-group-2026","rec-cp-resolution-2026"]},
    "classA": {
      "glance":[{"text":"Class A was created by the 2010 long-term amendment, operative 31 December 2010, as an owner/affiliate-risk long-term route.","sources":["amend_2010","act"],"pin":"2010:60 s.5; Act s.4EB annotation and text"}],
      "history":[{"text":"The BMA's former-long-term-class reclassification guidance explains the transition to the new scheme; it is historical and expressly non-statutory.","sources":["guidance_2011"],"pin":"introduction and pp.2–3"}],
      "purpose":[{"text":"Government discussion of a risk-sensitive long-term framework is programme-wide, not a unique Class A product purpose.","sources":["hansard_2010"],"pin":"10 December 2010 pp.330–331"}],
      "qualification":[{"text":"Section 4EB covers a body wholly owned by one person intending to insure only that person's long-term risks, or an affiliate of a group intending to insure only risks of other affiliates of that group or its own shareholders.","sources":["act"],"pin":"s.4EB(a)–(b)"}],
      "distinctions":[{"text":"Class B has statutory 80% 'premiums and other considerations' routes; general-business net premiums written is not the Class B measure. Class C's asset test excludes bodies registrable as A or B, so low assets alone do not make a firm Class C.","sources":["act"],"pin":"ss.4EB–4ED"}],
      "footprint":[{"text":"The BMA's 2025 all-insurers table lists 12 Class A licences.","sources":["bma_2025"],"pin":"p.66, Analysis of All Insurers Registered"}],
      "market":[{"text":"Quoted investments were 73% of Class A assets within the BMA's 2023 captive-return study. This is a dated observed mix, not an investment requirement.","sources":["captives_2023"],"pin":"pp.5, 22, Annex 1"}],
      "developments":["rec-cp-code-group-2026"]},
    "classB": {
      "glance":[{"text":"Class B arose in the five-class long-term reform, in force 31 December 2010.","sources":["amend_2010","act"],"pin":"2010:60 s.5; Act s.4EC annotation"}],
      "history":[{"text":"The 2010 amendment inserted section 4EC alongside Classes A, C, D and E. No separate Class B-only official creation purpose was established in the reviewed sources.","sources":["amend_2010","act"],"pin":"2010:60 s.5; Act s.4EC annotation"}],
      "purpose":[{"text":"The Government described differentiated supervision by nature, scale and complexity for the whole long-term reform, not solely Class B.","sources":["hansard_2010"],"pin":"10 December 2010 pp.330–331"}],
      "qualification":[{"text":"Section 4EC has both a two-or-more-unrelated-owner route and a Class-A-derived route. Each has statutory alternatives using at least 80% of premiums and other considerations; specified operations-derived risks depend on the BMA's opinion.","sources":["act"],"pin":"s.4EC(1)–(3)"}],
      "distinctions":[{"text":"Class A has the narrower 'only' risk test, while Class C's asset test excludes A/B registrability. Applying the Class 2 net-premiums-written metric here would be wrong.","sources":["act"],"pin":"ss.4EB–4ED"}],
      "misconceptions":[{"text":"'Class B means multi-owner only' omits its Class-A-derived statutory route.","sources":["act"],"pin":"s.4EC(2)"}],
      "footprint":[{"text":"The BMA's 2025 all-insurers table lists 13 Class B licences.","sources":["bma_2025"],"pin":"p.66, Analysis of All Insurers Registered"}],
      "market":[{"text":"Cash was 65% of Class B assets in the BMA's 2023 captive-return study. It is not a statutory liquidity percentage.","sources":["captives_2023"],"pin":"pp.5, 22, Annex 1"}],
      "developments":["rec-cp-code-group-2026"]},
    "classC": {
      "glance":[{"text":"Class C was created in the 2010 long-term reform, in force 31 December 2010.","sources":["amend_2010","act"],"pin":"2010:60 s.5; Act s.4ED annotation"}],
      "history":[{"text":"The BMA's 2011 reclassification guidance discussed affiliate-only reinsurance under its discretion during the historical transition. It is expressly informal and non-statutory, not a present-day alternative test.","sources":["guidance_2011"],"pin":"paras.1, 5"}],
      "purpose":[{"text":"The Government's risk-sensitive long-term rationale is shared by A–E; no unique Class C product purpose was established in the reviewed sources.","sources":["hansard_2010"],"pin":"10 December 2010 pp.330–331"}],
      "qualification":[{"text":"Ordinary section 4ED requires total assets below $250 million and non-registrability as Class A, Class B or IILT.","sources":["act"],"pin":"s.4ED"}],
      "distinctions":[{"text":"Class D's ordinary band begins at $250 million and has additional exclusions. Section 4EF's wording allows BMA determination among C, D or E for certain above-$500-million cases; a simple asset ladder would misstate the Act.","sources":["act"],"pin":"ss.4EE–4EF"}],
      "misconceptions":[{"text":"An existing C that exceeds its asset limit has statutory notification and possible direction mechanisms, not automatic reclassification.","sources":["act"],"pin":"ss.8A(2)(i), 31AC"}],
      "footprint":[{"text":"The BMA's 2025 all-insurers table lists 90 Class C licences.","sources":["bma_2025"],"pin":"p.66, Analysis of All Insurers Registered"}],
      "market":[{"text":"The BMA's long-term market analysis covers Classes C, D and E together using 2024 filing data and was published in 2026. Its figures and shorthand class descriptions are not Class C-only evidence or legal tests.","sources":["lt_study_2024"],"pin":"methodology and p.10"}],
      "developments":["rec-cp-code-group-2026","rec-bill-insurance-als-2026","rec-cp-resolution-2026"]},
    "classD": {
      "glance":[{"text":"Class D was introduced by the 2010 long-term amendment, in force 31 December 2010.","sources":["amend_2010","act"],"pin":"2010:60 s.5; Act s.4EE annotation"}],
      "history":[{"text":"Section 4EE was amended in 2012 to add Class C to its exclusions; later legislation added IILT. The current ordinary test must be read as amended.","sources":["amend_2012","amend_2022","act"],"pin":"2012:36 s.3; 2022:41 s.7; Act s.4EE"}],
      "purpose":[{"text":"The Government's differentiated long-term-supervision rationale applies to the reform. A distinct official Class D market niche was not established in the reviewed sources.","sources":["hansard_2010"],"pin":"10 December 2010 pp.330–331"}],
      "qualification":[{"text":"Section 4EE's ordinary test uses total assets of at least $250 million but less than $500 million, and excludes bodies registrable as A, B, IILT or C.","sources":["act"],"pin":"s.4EE"}],
      "distinctions":[{"text":"Class C's ordinary band is below $250 million. Section 4EF's current wording is not a simple automatic next step after D; the BMA determines the actual class.","sources":["act"],"pin":"ss.4EA, 4ED–4EF"}],
      "misconceptions":[{"text":"Section 31AD—not 31AC—addresses an existing D exceeding its asset limit through notification and possible BMA direction, rather than automatic conversion.","sources":["act"],"pin":"ss.8A(2)(j), 31AD"}],
      "footprint":[{"text":"The BMA's 2025 all-insurers table lists six Class D licences.","sources":["bma_2025"],"pin":"p.66, Analysis of All Insurers Registered"}],
      "market":[{"text":"The BMA's long-term market analysis covers Classes C, D and E together using 2024 filing data and was published in 2026. Combined-sector numbers do not establish a Class D-only use case.","sources":["lt_study_2024"],"pin":"methodology"}],
      "developments":["rec-cp-code-group-2026","rec-bill-insurance-als-2026","rec-cp-resolution-2026"]},
    "classE": {
      "glance":[{"text":"Class E was introduced in the 2010 long-term reform, in force 31 December 2010.","sources":["amend_2010","act"],"pin":"2010:60 s.5; Act s.4EF annotation"}],
      "history":[{"text":"The 2012 amendment changed section 4EF's wording from 1 January 2013, and the 2022 amendment added IILT to its exclusions.","sources":["amend_2012","amend_2022","act"],"pin":"2012:36 s.4; 2022:41 s.8; Act s.4EF annotation"}],
      "purpose":[{"text":"The Government's 2010 rationale addressed the long-term reform as a whole, not a unique Class E product.","sources":["hansard_2010"],"pin":"10 December 2010 pp.330–331"}],
      "qualification":[{"text":"Section 4EF says a body with total assets of more than $500 million, not registrable as Class A, Class B or IILT, is registrable as Class C, D or E; 'total assets' has the Act's specified meaning.","sources":["act"],"pin":"ss.4EF, 4F"}],
      "distinctions":[{"text":"The BMA's licensing summary and 2025 Annual Report describe E more simply as the above-$500-million long-term class; its later combined long-term study uses another shorthand that excludes C/D. These official descriptions are not substituted for the Act's section 4EF wording.","sources":["bma_insurance_licensing","bma_2025","lt_study_2024"],"pin":"BMA Class E summary; Annual Report 2025 p.69; market study p.10","status":"conflicting"},{"text":"The BMA determines an insurer's registration class under section 4EA. Subsection (2) allows departure from ordinary criteria only after considering its specified factors; an applicant does not choose C or D through this summary.","sources":["act"],"pin":"s.4EA(1)–(2)"}],
      "footprint":[{"text":"The BMA's 2025 all-insurers table lists 83 Class E licences.","sources":["bma_2025"],"pin":"p.66, Analysis of All Insurers Registered"}],
      "market":[{"text":"The BMA's long-term market analysis covers Classes C, D and E together using 2024 filing data and was published in 2026. Its cohort figures are not Class E-only results.","sources":["lt_study_2024"],"pin":"methodology"}],
      "developments":["rec-cp-code-group-2026","rec-bill-insurance-als-2026","rec-cp-resolution-2026"]},
    "iigb": {
      "glance":[{"text":"Class IIGB was inserted by the 2019 amendment, operative 5 August 2019.","sources":["amend_2019","act"],"pin":"2019:33 s.8; Act s.4EI annotation"}],
      "history":[{"text":"The BMA's 2019 consultation proposed a non-sandbox route for more developed innovative general-business models, citing digital-asset-related insurance as one context. This is proposal-period policy explanation, not a statutory list of technologies.","sources":["ci_consultation"],"pin":"pp.2, 7–8"}],
      "purpose":[{"text":"The BMA's consultation proposed a distinct supervisory route for developed innovative models; it did not treat digital assets as the exclusive statutory qualification.","sources":["ci_consultation"],"pin":"paras.18–21"}],
      "qualification":[{"text":"Section 4EI concerns a body intending, at application, to carry on general business in an innovative manner.","sources":["act"],"pin":"s.4EI"}],
      "distinctions":[{"text":"The separate Class IGB wording is 'innovative and experimental'. The Act does not prescribe automatic progression from IGB to IIGB, and digital assets are not the only statutory meaning of innovation.","sources":["act","ci_consultation"],"pin":"Act ss.4EG, 4EI; BMA consultation class-design discussion"},{"text":"The BMA assesses the proposed business and may impose conditions; a product's technology alone does not determine registration.","sources":["act"],"pin":"ss.4(2), 4EI"}],
      "footprint":[{"text":"The BMA's 2025 Annual Report lists eight IIGB licences in its all-insurers table and seven fully licensed IIGB entities in its Digital Finance Supervision narrative. The report does not reconcile the figures. (Possible mechanisms in general, not BMA findings: run-off treatment, different data-compilation cutoffs, or active-business versus registered-entity counts.) Neither figure is a live register count.","sources":["bma_2025"],"pin":"pp.38, 66; Digital Finance Supervision and all-insurers table. Parenthesis is editorial hypothesis."}],
      "market":[{"text":"Public practitioner accounts of digital-asset-related reinsurance illustrate one market use, not an exclusive Class IIGB definition.","sources":["appleby_iigb","chambers_iigb"],"pin":"Public accounts reviewed 24 September 2026"}],
      "limits":[{"text":"BMA-hosted BR 41/2020 and BR 42/2020 establish distinct IIGB solvency and statements/returns/capital frameworks, but their full later-amendment currency remains under review. Detailed formulas belong in the obligations journey once verified.","sources":["iigb_rule41","iigb_rule42"],"pin":"Rule titles and BR numbers; BR 41 rr.3–6; BR 42 rr.3, 7","status":"review-pending"}],
      "developments":["rec-cp-code-group-2026"]}
  },
  "entity_profile_context": {
    "intermediary": {"title":"Intermediary role context","claims":[{"text":"The Insurance Act defines broker, agent and manager by different functions and provides a registration framework for insurance intermediaries. This neutral overview does not decide which role applies to a particular service arrangement.","sources":["act"],"pin":"s.1(1) definitions; ss.9–12","status":"confirmed"},{"text":"A broker arranges or places insurance on behalf of a prospective or existing policyholder, while an agent acts with an insurer's authority for specified proposal, policy or premium functions. These are statutory role descriptions, not a conclusion about a particular contract.","sources":["act"],"pin":"s.1(1) broker and agent definitions","status":"confirmed"},{"text":"The Act contains circumstances in which an intermediary may be treated as an insurer's agent for premium receipt. A simple statement that a broker always acts only for the insured would be too broad.","sources":["act"],"pin":"s.29","status":"confirmed"},{"text":"The BMA's current manager bulletin includes an intragroup-services position, but the interaction with the Act's registration wording remains an interpretation issue. It is not presented here as a blanket exemption.","sources":["act"],"pin":"s.9; BMA manager bulletin held in research dossier","status":"review-pending"}]},
    "daba": {
      "classF": {"title":"DABA Class F context","claims":[{"text":"Class F is a Digital Asset Business licence category under section 12(3)(a). The BMA licenses one or more specified activities and may limit or condition the licence; “full” does not mean automatic permission for every activity.","sources":["daba_act"],"pin":"ss.10(2), 12(3)(a), 13(3)–(4)","status":"confirmed"},{"text":"The 2023 exemption route and 2025 custody rules apply by their own conditions and activity scope; they are not a blanket exemption or custody obligation for every Class F licensee.","sources":["daba_exemption","daba_custody"],"pin":"Exemption Order paras.4–5; Custody Rules r.3","status":"confirmed"}]},
      "classM": {"title":"DABA Class M context","claims":[{"text":"Class M authorises the digital-asset activities approved by the BMA for a defined period, which the Authority may extend. The period and conditions are licence-specific.","sources":["daba_act"],"pin":"ss.12(3)(b), 12(4), 13(3)","status":"confirmed"},{"text":"Custody requirements depend on whether the licensed undertaking provides custodial-wallet services under the applicable rules; the M label alone is not the trigger.","sources":["daba_custody"],"pin":"r.3","status":"confirmed"}]},
      "classT": {"title":"DABA Class T context","claims":[{"text":"Class T is the time-limited pilot or beta-testing licence category described in the Act. The activity, period and conditions remain those approved by the BMA.","sources":["daba_act"],"pin":"ss.10(2), 12(3)(c), 13(3)","status":"confirmed"},{"text":"The Act names Class F in its appeal provision; the practical effect for Classes M and T should not be inferred from that omission and requires legal confirmation.","sources":["daba_act"],"pin":"s.48(1)","status":"review-pending"}]}
    },
    "investment": {"title":"Investment business context","claims":[{"text":"The Investment Business Act defines investment business by specified activities and investments, with an “in or from Bermuda” connection. The standard, Class A, Class B, recognised-body and non-registrable routes are distinct and must not be inferred from the sector label alone.","sources":["investment_act"],"pin":"ss.3–4; Schedule 1","status":"confirmed"},{"text":"The 2022 non-registrable designation is conditional and does not mean that every person connected with an insurer or DABA licensee is outside the Act.","sources":["investment_order"],"pin":"para.3","status":"confirmed"}]},
    "fundadmin": {"title":"Fund administration context","claims":[{"text":"The Fund Administration Provider Business Act 2019 defines the business by listed services and provides the current stand-alone licensing framework. The former Investment Funds Act route should not be copied into a new application workflow without confirmation.","sources":["fundadmin_act"],"pin":"ss.2, 8–10 and transitional provisions","status":"confirmed"},{"text":"The BMA's live licensing material has contained an older Investment Funds Act reference; confirm the current form, fee and submission route with the BMA before relying on it.","sources":["fundadmin_act"],"pin":"Current workflow caveat","status":"review-pending"}]},
    "trust": {"title":"Trust business context","claims":[{"text":"Trust business in or from Bermuda is subject to the Trusts (Regulation of Trust Business) Act 2001, with licensing restrictions and statutory exemptions. Not every trustee is automatically licensable.","sources":["trust_act"],"pin":"ss.2, 9–10","status":"confirmed"},{"text":"Limited and unlimited licences, and the $30 million measure associated with limited licences, operate subject to statutory conditions; the amount is not a universal rule for every trust arrangement.","sources":["trust_act"],"pin":"ss.11–11A","status":"review-pending"},{"text":"The 2002 Exemption Order contains separate conditional routes, including specified private trust companies. An exemption is not equivalent to no continuing BMA notification or declaration.","sources":["trust_exemption"],"pin":"paras.3–7","status":"confirmed"}]},
    "bank": {"title":"Banking and deposit-taking context","claims":[{"text":"The Banks and Deposit Companies Act 1999 restricts deposit-taking business in or from Bermuda to licensed entities, subject to statutory exemptions.","sources":["bank_act"],"pin":"ss.3–4, 11–12","status":"confirmed"},{"text":"The Act distinguishes banking, deposit-company and restricted-banking licences, with permitted services and customer scope depending on the licence category. A generic “bank” label is not sufficient to determine those limits.","sources":["bank_act"],"pin":"s.14(4)–(5) and related schedules","status":"confirmed"}]},
    "csp": {"title":"Corporate service provider context","claims":[{"text":"The Corporate Service Provider Business Act 2012 defines specified corporate services provided for profit and expressly distinguishes mere service as a director from CSP business. Scope depends on the defined services and facts.","sources":["csp_act"],"pin":"s.2(2), (4)","status":"confirmed"},{"text":"Unlimited and limited CSP licences, and the exemption routes, contain specific conditions. A limited licence is not simply a low-volume version of an unlimited licence.","sources":["csp_act","csp_exemption"],"pin":"s.10(4)–(6); Exemption Order Schedule","status":"review-pending"}]},
    "msb": {"title":"Money service business context","claims":[{"text":"The Money Service Business Act 2016 defines money-service activities provided to the general public and restricts carrying on that business without the required licence, subject to the Act's exemptions and exclusions.","sources":["msb_act"],"pin":"ss.2(2), 4(4), 8–9","status":"confirmed"},{"text":"The Navigator records the MSB exemption issue as owner/legal-resolved. The exemption should still be applied only within the scope and conditions recorded in the supporting resolution and source record.","sources":["msb_act"],"pin":"s.9 exemption mechanism; owner resolution recorded separately","status":"review-pending"}]}
  },
  "class_profile_comparison": {
    "classes":["spi","collateralized"],
    "rows":[
      {"dimension":"Statutory identity","legal":true,"cells":{"spi":{"text":"Carries on special purpose business; registration may be restricted or unrestricted.","sources":["act"],"pin":"ss.1(1), 4(1)(d)"},"collateralized":{"text":"Carries on special purpose business but is not registrable as an SPI.","sources":["act"],"pin":"ss.1(1), 4(1)(da)"}}},
      {"dimension":"Collateral basis","legal":true,"cells":{"spi":{"text":"Liabilities to insureds must be fully collateralised through the means listed in the Act.","sources":["act"],"pin":"s.1(1), special purpose business"},"collateralized":{"text":"The same statutory special-purpose-business definition applies; another financing mechanism needs BMA approval.","sources":["act"],"pin":"s.1(1), special purpose business"}}},
      {"dimension":"Paid-up share capital (where there is share capital)","legal":true,"cells":{"spi":{"text":"$1 minimum paid-up share capital.","sources":["act"],"pin":"s.7(1)(f)"},"collateralized":{"text":"$120,000 minimum paid-up share capital.","sources":["act"],"pin":"s.7(1)(a)"}}},
      {"dimension":"Minimum margin of solvency","legal":true,"cells":{"spi":{"text":"$1; separate from the full-collateralisation definition.","sources":["spi_rules"],"pin":"r.13"},"collateralized":{"text":"$250,000.","sources":["ci_rules"],"pin":"r.9"}}},
      {"dimension":"Risk-based capital","legal":true,"cells":{"spi":{"text":"No CI-style enhanced capital requirement is prescribed in the SPI Rules reviewed; confirm current class-specific instruments and conditions.","sources":["spi_rules"],"pin":"rr.1–15; negative-scope reading","status":"review-pending"},"collateralized":{"text":"CI-specific BSCR model determines an enhanced capital requirement, which cannot fall below its minimum margin of solvency.","sources":["ci_rules"],"pin":"r.10 and Sch. IIA"}}},
      {"dimension":"Annual statements and returns","legal":true,"cells":{"spi":{"text":"Statutory Financial Statements and a Statutory Financial Return; the return contains GAAP statements and other prescribed items.","sources":["spi_rules"],"pin":"rr.3–7"},"collateralized":{"text":"Statutory Financial Statements, a Statutory Financial Return and a Capital and Solvency Return.","sources":["ci_rules"],"pin":"rr.4–7"}}},
      {"dimension":"Audit","legal":true,"cells":{"spi":{"text":"Restricted SPI: GAAP financial statements included in the Statutory Financial Return are unaudited under SPI Rules 2020, r.7(3)(b). Separately, Insurance Act 1978, ss.15(4) and 16(1) require an annual audit of Statutory Financial Statements by a BMA-approved auditor. Confirm the interaction and any case-specific modification with Bermuda counsel or the BMA.","sources":["spi_rules","act"],"pin":"SPI Rules rr.6, 7(3)(b); Act ss.15(4), 16(1)"},"collateralized":{"text":"Audited GAAP statements are included in the Capital and Solvency Return; the Act separately requires audited Statutory Financial Statements.","sources":["ci_rules","act"],"pin":"CI Rules r.7; Act ss.15(4), 16(1)"}}},
      {"dimension":"Bermuda presence and specialist roles","legal":true,"cells":{"spi":{"text":"Principal office and BMA-approved principal representative in Bermuda. Section 8C does not list SPIs.","sources":["act"],"pin":"ss.8, 8C(1)"},"collateralized":{"text":"Principal office and BMA-approved principal representative; a CI must appoint an approved loss reserve specialist. Section 8C's head-office duty is subject to its stated conditions and permit exception.","sources":["act"],"pin":"ss.8, 8B(1C), 8C(1)–(5)"}}},
      {"dimension":"Counterparty scope","legal":true,"cells":{"spi":{"text":"Restricted business is with specific BMA-approved insureds; unrestricted business is with any insured. Guidance adds supervisory expectations.","sources":["act"],"pin":"s.1(1), restricted and unrestricted definitions"},"collateralized":{"text":"A class-wide counterparty permission was not established from the primary instruments reviewed; confirm with the BMA.","sources":["act"],"pin":"ss.1(1), 4(1)(da); source-scope limitation","status":"review-pending"}}}
    ],
    "class3a_context":[
      {"text":"Section 4DA uses unrelated-business premium or loss-provision measures and a net-premium threshold as the stated Class 3A test; it does not state full collateralisation as the test.","sources":["act"],"pin":"s.4DA"},
      {"text":"Where the insurer has share capital, the Act specifies $120,000 minimum paid-up share capital for Class 3A.","sources":["act"],"pin":"s.7(1)(a)"},
      {"text":"The Class 3A head-office duty has the conditions and permit exception stated in the Act; the approved loss-reserve-specialist requirement is separately stated.","sources":["act"],"pin":"ss.8B(1A), 8C(1)–(5)"},
      {"text":"The Act places Class 3A statutory-statement filing in the four-month category, with a possible extension on application, and specifies additional GAAP financial statements.","sources":["act"],"pin":"ss.17(4)(b), 17A(1)"},
      {"text":"The BMA's 2019 consultation contemplated that a fully collateralised lead insurer of a complex Bermuda group could instead be licensed in Class 3A or another commercial class for group supervision. This was a policy example, not an alternative registration test.","sources":["ci_consultation"],"pin":"para.14"}
    ]
  },
  "schema_version": 2,
  "release_date": "2026-09-24"
};
