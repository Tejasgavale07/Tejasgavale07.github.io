/* ============================================================
   Content sourced from your resume. Edit anything here anytime —
   the rest of the site re-renders automatically.
   ============================================================ */

const SITE_DATA = {
  // ---- Identity ----
  name: "Tejas Gavale",
  role: "Data Analyst · Power BI Developer · Python & SQL Automation · Audit Analytics",
  tagline: "I reconcile 5 crore+ rows so the numbers only have to be right once.",
  summary:
  "I'm a Data Analyst with nearly 2+ years of experience specializing in Power BI, Python, SQL, and audit analytics. I build interactive dashboards, automate manual workflows, and transform large-scale datasets into meaningful business insights. At KKC & Associates LLP, I work with leading financial institutions, delivering scalable analytics solutions, processing datasets exceeding 5 crore records, and driving data-backed decision-making through automation and visualization.",

  location: "Mumbai, India",
  email: "tejasgavale123@gmail.com",
  phone: "+91 7057507928",
  linkedin: "https://linkedin.com/in/tejas-gavale-1a6249225",
  github: "https://github.com/Tejasgavale07",
  resumeFile: "resume.pdf",

  heroDashboard: {
    title: "FIRM ANALYTICS",
    kpis: [
      { label: "Dashboards Live", value: 10, suffix: "+" },
      { label: "Rows Reconciled", value: 5, suffix: "Cr+" },
      { label: "Avg. Variance", prefix: "₹", value: 0, suffix: ".00" },
    ],
    entities: [
      { name: "Subsidiary — Entity A", pct: 100 },
      { name: "Subsidiary — Entity B", pct: 100 },
      { name: "Subsidiary — Entity C", pct: 100 },
      { name: "Head Office Consolidation", pct: 100 },
    ],
  },

  stats: [
    { value: 10, suffix: "+", label: "Power BI dashboards deployed" },
    { value: 5, suffix: "Cr+", label: "Rows reconciled with Python/SQL" },
    { value: 10, suffix: "+", label: "Reusable Python tools built" },
    { value: 2, suffix: "+", label: "Years in audit analytics" },
  ],

  skillGroups: [
    {
      group: "Business Intelligence",
      items: ["Power BI", "Power Query", "DAX", "Advanced Excel (PivotTables, VLOOKUP/XLOOKUP, Macros)"],
    },
    {
      group: "Programming & Data",
      items: ["Python (Pandas, NumPy)", "SQL", "Data Wrangling", "Statistical Analysis"],
    },
    {
      group: "Automation",
      items: ["Python Automation", "Excel Automation (VBA/Macros)", "Report Automation", "File Reconciliation & Exception Reporting"],
    },
    {
      group: "Audit Analytics",
      items: ["CaseWare IDEA", "Fraud Analytics", "Benford's Law", "Duplicate & Gap Detection", "Sampling · Ageing & Trend Analysis", "Risk Assessment"],
    },
    {
      group: "IT Audit",
      items: ["Application Control Testing", "Backend SQL Validation", "Database Validation", "General IT Controls (ITGC)", "Business Logic Verification"],
    },
    {
      group: "Generative AI",
      items: ["ChatGPT", "Prompt Engineering", "Custom GPTs", "LLM-assisted Workflow Automation"],
    },
  ],

  // Career progression at one company — rendered as a promotion ladder.
  // Fill in the promotion month once you confirm the exact date.
  experience: [
    {
      company: "KKC & Associates LLP",
      location: "Mumbai · Audit Analytics & Data Analytics Practice",
      roles: [
        {
          title: "Senior Executive",
          period: "[PROMOTION MONTH] 2026 — Present",
          bullets: [
            "Own end-to-end design of reconciliation and dashboard tools used across audit and analytics engagements — including a dedicated Balance Sheet & P&L reconciliation engine built for an insurance client to validate subsidiary-level figures against consolidated head-office reporting.",
            "Lead development of a firm-level MIS Power BI suite tracking revenue, costing, expenditure, and Budget-vs-Actual hours across clients, partners, managers, and employees — now used firm-wide for engagement planning and resourcing decisions.",
            "Built a fully automated GST data-extraction tool that parses GSTR-1 and GSTR-3B PDF filings directly into structured Excel output, removing manual entry from GST reconciliation work.",
            "Developed an ITGC audit automation tool that handles first-stage General IT Controls testing, freeing the team's analytical time for exceptions and higher-judgment review.",
            "Continue to design and maintain 10+ interactive Power BI dashboards with row-level security, and 10+ reusable Python tools for data extraction and reconciliation, now extended to insurance-sector and firm-level reporting use cases.",
            "Apply CaseWare IDEA audit analytics — duplicate detection, Benford's Law, gap and trend analysis — while mentoring the team through internal Power BI and CaseWare IDEA training sessions.",
          ],
        },
        {
          title: "Data Analyst Executive",
          period: "Jun 2024 — [PROMOTION MONTH] 2026",
          bullets: [
            "Designed and deployed 10+ interactive Power BI dashboards for management and audit reporting, implementing row-level security (RLS) for client-sensitive datasets.",
            "Built Python (Pandas/NumPy) automation scripts to clean, validate, and reconcile datasets exceeding 5 crore+ rows, cutting manual processing time on recurring tasks.",
            "Wrote and optimized complex SQL queries for backend data validation, exception identification, and cross-system reconciliation.",
            "Applied CaseWare IDEA audit analytics — duplicate detection, Benford's Law, gap and trend analysis — to strengthen risk assessment across engagements.",
            "Worked across engagements for NBFCs, Banks, Insurance companies, and Small Finance Banks, building cross-sector exposure to financial services data and regulatory reporting needs.",
          ],
        },
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.) — Information Technology",
      institution: "",
      period: "",
      detail: "CGPA: 8.95 / 10",
    },
  ],

  certifications: [
    "Google Data Analytics Professional Certificate",
    "Power BI (Microsoft / Industry Certification)",
    "Python for Data Analysis",
  ],

  projects: [
    {
      name: "BS & P&L Reconciliation Tool — Insurance Sector",
      tag: "FLAGSHIP BUILD",
      description:
        "Built for an insurance client with multiple subsidiaries — a Streamlit-based reconciliation engine (~2,400 lines of Python) that validates each subsidiary's Balance Sheet and P&L figures against the consolidated numbers reported to head office, flagging mismatches before they reach financial reporting.",
      highlights: [
        "Dynamic header detection — locates the 'Particulars' column anywhere in a sheet",
        "Fuzzy line-item matching via SequenceMatcher at a 0.88 similarity threshold",
        "Unit normalization across Crore / Lakh / Actual",
        "₹0.01 rounding tolerance with a distinct 'Match (Rounding)' status",
        "Automated Excel report generation — Summary, Full Detail, and per-entity sheets",
      ],
      stack: ["Python", "Streamlit", "Pandas"],
      link: "",
    },
    {
      name: "Firm-Level MIS Power BI Dashboard",
      tag: "FLAGSHIP BUILD",
      description:
        "A firm-wide Power BI suite surfacing trends across clients, partners, managers, and employees — attendance, timesheets, revenue, costing, and expenditure, with Budget-vs-Actual views comparing planned hours and cost per client engagement against what was actually spent.",
      highlights: [
        "Client, partner, manager, and employee-level drill-downs",
        "Attendance and timesheet data tied directly into project costing",
        "Budget vs Actual analysis on hours and cost per client engagement",
        "Row-level security scoped to role-based access across the firm",
      ],
      stack: ["Power BI", "DAX", "Power Query"],
      link: "",
    },
    {
      name: "Bulk Email Sender — Balance Confirmation Automation",
      tag: "FLAGSHIP BUILD",
      description:
        "A Python tool that sends balance confirmation emails to hundreds of client contacts in one click — upload an Excel sheet of recipient addresses and an attachment list, point it at the attachment folder, and it connects directly to Outlook to send every mail automatically. Built to solve a real bottleneck: large clients like banks, NBFCs, and insurance companies have hundreds of customers needing individual confirmation mails, and doing that manually was taking huge amounts of time.",
      highlights: [
        "Single-click send to an entire recipient list pulled from Excel",
        "Automatic attachment matching from a folder against each recipient",
        "Direct Python–Outlook integration — no manual mail drafting",
        "Cuts a multi-day manual mailing task down to one run",
      ],
      stack: ["Python", "Outlook (COM automation)", "Excel"],
      link: "",
    },
  ],

  professionalProjects: [
    {
      name: "GST Data Extraction Automation",
      stack: "Python",
      description:
        "A fully automated tool that extracts structured data from GSTR-1 and GSTR-3B filings — upload the PDFs and it handles parsing and Excel output end-to-end, removing manual entry from GST reconciliation work.",
    },
    {
      name: "Python Data Extraction Tool Suite",
      stack: "Python · Pandas",
      description:
        "A broader library of Python tools built for recurring data-extraction needs across engagements, handling varied source formats and feeding directly into downstream reconciliation and reporting workflows.",
    },
    {
      name: "ITGC Audit Automation Tool",
      stack: "Python · SQL",
      description:
        "An automation tool for General IT Controls (ITGC) testing that handles the first-stage review, replacing manual effort on routine checks so analytical time goes to exceptions and judgment calls.",
    },
    {
      name: "Audit Analytics Framework",
      stack: "CaseWare IDEA",
      description:
        "A structured analytics framework covering duplicate analysis, Benford's Law, gap detection, sampling, and trend/ageing analysis to support risk identification across engagements.",
    },
    {
      name: "IT Audit — Application & Backend Testing",
      stack: "SQL / ITGC",
      description:
        "Application control testing, backend SQL validation, business logic verification, and general IT control testing to assess client system integrity and reliability.",
    },
    {
      name: "AI Productivity Tools",
      stack: "GenAI",
      description:
        "ChatGPT and prompt engineering, including internal/custom GPTs, to streamline documentation and repetitive analytical tasks across the team.",
    },
    {
      name: "Internal Training & Knowledge Sharing",
      stack: "Enablement",
      description:
        "Seminars and hands-on training sessions within the firm on Power BI and CaseWare IDEA, building internal team capability in dashboarding and audit analytics.",
    },
  ],

  // ---- Tech stack matrix — what was used where ----
  techMatrix: {
    columns: ["Power BI", "Python", "SQL", "DAX / Power Query", "CaseWare IDEA", "Excel / VBA", "GenAI"],
    rows: [
      { project: "Power BI Dashboard Suite (10+, RLS)", uses: ["Power BI", "DAX / Power Query"] },
      { project: "Firm-Level MIS Dashboard", uses: ["Power BI", "DAX / Power Query"] },
      { project: "BS & P&L Reconciliation Tool — Insurance", uses: ["Python", "Excel / VBA"] },
      { project: "Python Data Extraction Tool Suite", uses: ["Python"] },
      { project: "GST Data Extraction Automation (GSTR-1/3B)", uses: ["Python", "Excel / VBA"] },
      { project: "ITGC Audit Automation Tool", uses: ["Python", "SQL"] },
      { project: "SQL Backend Validation & Reconciliation", uses: ["SQL"] },
      { project: "Audit Analytics Framework", uses: ["CaseWare IDEA"] },
      { project: "AI Productivity Tools", uses: ["GenAI"] },
      { project: "Internal Training (Power BI & CaseWare IDEA)", uses: ["Power BI", "CaseWare IDEA"] },
      { project: "Bulk Email Sender — Balance Confirmations", uses: ["Python", "Excel / VBA"] },
    ],
  },

  achievements: [
    "Designed and deployed 10+ Power BI dashboards with row-level security, adopted for ongoing engagement reporting and access-controlled data sharing.",
    "Processed and reconciled datasets exceeding 5 crore+ rows using Python and SQL-based automation.",
    "Reduced manual effort on recurring data and audit tasks by building 10+ Python automation tools.",
    "Delivered internal seminars and training sessions on Power BI and CaseWare IDEA, upskilling the broader analytics team.",
    "Gained cross-sector exposure by working on engagements spanning NBFCs, Banks, Insurance companies, and Small Finance Banks.",
  ],

  lookingFor: "Seeking a Data Analyst role in the financial services sector.",
};