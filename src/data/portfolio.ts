/**
 * ────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH
 *  Edit everything about the portfolio from this one file.
 *  (See CUSTOMIZATION.md for a step-by-step guide.)
 * ────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Arslan Qadeer",
  title: "Data Analyst",
  headline: "Transforming Raw Business Data into Actionable Insights",
  subheadline:
    "BS Computer Science student turning complex business data into clear, decision-ready dashboards with SQL, PostgreSQL, Power Query & Power BI.",
  location: "Rawalpindi / Islamabad, Pakistan",
  email: "arslanmagray25@gmail.com",
  phones: ["0343 1134156", "0313 1774156"],
  // WhatsApp number in international format (no +, no leading 0).
  // 0343 1134156  →  Pakistan (+92)  →  923431134156
  whatsapp: {
    number: "923431134156",
    display: "0343 1134156",
    message: "Hi Arslan, I found your portfolio and would love to connect.",
  },
  resumeUrl: "/resume.pdf",
  avatar: "/avatar.jpg", // Arslan's professional photo (public/avatar.jpg)
  socials: {
    github: "https://github.com/arslanqadeerdata",
    // ↓ Replace with your real LinkedIn URL
    linkedin: "https://www.linkedin.com/in/arslan-qadeer",
    email: "mailto:arslanmagray25@gmail.com",
  },
};

/** Builds a click-to-chat WhatsApp link (opens WhatsApp app / WhatsApp Web). */
export const whatsappLink = `https://wa.me/${profile.whatsapp.number}?text=${encodeURIComponent(
  profile.whatsapp.message
)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Certificates", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 8, suffix: "+", label: "Business KPIs Tracked" },
  { value: 5, suffix: "+", label: "Interactive Dashboards" },
  { value: 10, suffix: "+", label: "Analytics Tools" },
  { value: 100, suffix: "%", label: "Insight-Driven Decisions" },
];

export const about = {
  paragraphs: [
    "I'm a BS Computer Science student at National Skills University Islamabad with a genuine passion for Data Analytics and Business Intelligence.",
    "I love solving real business problems using SQL, Excel, PostgreSQL, Power Query and Power BI — transforming raw, messy data into meaningful insights that support better decision-making.",
    "Right now I'm applying these skills on live business data at Trust Axis Inc., continuously sharpening my analytical, business and technical abilities on every project.",
  ],
  highlights: [
    "SQL & PostgreSQL data extraction",
    "Power BI dashboard development",
    "Business KPI & campaign analysis",
    "Data cleaning & Power Query modeling",
  ],
};

export const education = [
  {
    school: "National Skills University Islamabad",
    degree: "BS Computer Science",
    period: "2023 – 2027",
    note: "Completed 6th Semester",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  domain: string;
  current?: boolean;
  summary: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Data Analyst Intern",
    company: "Trust Axis Inc.",
    period: "Present",
    domain: "Taxation & FinTech",
    current: true,
    summary:
      "Analyzing the Chacha Tax database end-to-end — from SQL extraction to executive Power BI dashboards.",
    points: [
      "SQL data extraction using PostgreSQL",
      "Data cleaning & Power Query transformation",
      "Power BI dashboard development",
      "Marketing campaign & lead analysis",
      "Conversion & paid-user analysis",
      "Province-wise analysis",
      "Cost Per Lead (CPL) & Customer Acquisition Cost (CAC)",
      "Business KPIs & executive reporting",
    ],
  },
  {
    role: "SEO Intern",
    company: "Search Engine Empire",
    period: "3 Months",
    domain: "Digital Marketing & SEO",
    summary:
      "Improved on-page performance and search visibility using data-driven SEO tooling.",
    points: [
      "Keyword research & on-page SEO",
      "Meta titles, descriptions & title tags",
      "Image alt-text optimization",
      "Google Search Console & Google Analytics",
      "Basic SEMrush reporting",
    ],
  },
  {
    role: "Internship (8 Weeks)",
    company: "PIA — Pakistan International Airlines",
    period: "8 Weeks",
    domain: "Aviation / IT",
    summary:
      "Completed an 8-week professional internship, gaining hands-on exposure to a corporate work environment.",
    points: [
      "Real-world industry & workplace experience",
      "Professional team collaboration & communication",
      "Practical exposure to organizational workflows",
    ],
  },
];

export type Project = {
  name: string;
  featured?: boolean;
  status: string;
  tools: string[];
  description: string;
  analysis?: string[];
  tag: string;
  href?: string;
};

export const featuredProject: Project = {
  name: "Chacha Tax Business Analytics Dashboard",
  featured: true,
  status: "Real-World Ongoing Project",
  tag: "Business Intelligence",
  tools: ["Microsoft Excel", "PostgreSQL", "Power Query", "Power BI"],
  description:
    "An end-to-end analytics solution built on live business data — from raw SQL extraction and cleaning to a polished executive dashboard that turns numbers into decisions.",
  analysis: [
    "Lead Analysis",
    "Conversion Rate",
    "Paid Users",
    "Province-wise Analysis",
    "Campaign Performance",
    "Cost Per Lead (CPL)",
    "Customer Acquisition Cost (CAC)",
    "Business KPIs",
    "Executive Dashboard",
  ],
};

export const academicProjects: Project[] = [
  {
    name: "Chacha Dutch — Trip Expense Splitter",
    status: "Mobile App • In Progress",
    tag: "React Native",
    tools: ["React Native", "Expo", "TypeScript", "Firebase", "Firestore"],
    description:
      "A multi-user Android app for splitting group-trip expenses, with shared trips, invite links, offline caching, receipt scanning, and recipient-confirmed settlements.",
    href: "https://github.com/arslanqadeerdata/ChachaDutch",
  },
  {
    name: "Hospital Online Appointment App",
    status: "UI/UX Prototype",
    tag: "Figma",
    tools: ["Figma"],
    description:
      "Designed a modern UI/UX prototype for an online hospital appointment system.",
  },
  {
    name: "Hospital Appointment Website",
    status: "Frontend",
    tag: "Web",
    tools: ["HTML", "CSS", "JavaScript"],
    description:
      "Developed a responsive frontend website for hospital appointment booking.",
  },
  {
    name: "Java Scanner & Parser",
    status: "University Project",
    tag: "Java",
    tools: ["Java"],
    description:
      "Built a compiler-construction project implementing scanner and parser concepts.",
  },
];

export const services = [
  { title: "Business Data Analysis", desc: "Turning raw data into clear, actionable business insight." },
  { title: "SQL Queries", desc: "Efficient extraction & transformation with PostgreSQL." },
  { title: "Excel Analysis", desc: "Advanced formulas, pivots & modeling in Microsoft Excel." },
  { title: "Dashboard Development", desc: "Interactive, decision-ready dashboards." },
  { title: "Power BI Reporting", desc: "Executive reports and KPI tracking in Power BI." },
  { title: "Data Cleaning", desc: "Reliable, analysis-ready datasets." },
  { title: "Power Query", desc: "Repeatable ETL and data shaping." },
  { title: "Business Intelligence", desc: "KPIs, trends & metrics that drive decisions." },
];

export type SkillGroup = {
  category: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Data & Analytics",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "SQL", level: 88 },
      { name: "Microsoft Excel", level: 90 },
      { name: "Power Query", level: 82 },
      { name: "Power BI", level: 85 },
    ],
  },
  {
    category: "Insight & Modeling",
    skills: [
      { name: "Data Cleaning", level: 88 },
      { name: "Data Visualization", level: 84 },
      { name: "Business Intelligence", level: 80 },
      { name: "Python (Core)", level: 60 },
    ],
  },
  {
    category: "Web & SEO",
    skills: [
      { name: "HTML / CSS", level: 78 },
      { name: "JavaScript (Basic)", level: 55 },
      { name: "Google Search Console", level: 75 },
      { name: "Google Analytics", level: 72 },
    ],
  },
];

export const tools = [
  "Power BI",
  "Excel",
  "PostgreSQL",
  "VS Code",
  "Git",
  "GitHub",
];

export const certifications = [
  { name: "NAVTTC Digital Marketing & SEO", issuer: "NAVTTC", status: "Completed" },
  { name: "DigiSkills Data Analytics", issuer: "DigiSkills", status: "In Progress" },
];

export const learning = [
  "Advanced SQL",
  "Power BI",
  "Python for Data Analytics",
  "Pandas",
  "NumPy",
  "DAX",
  "Data Storytelling",
];

export const careerGoal = {
  quote:
    "My goal is to become a professional Data Analyst who helps organizations make better business decisions through data. I continuously improve my SQL, Excel, PostgreSQL, Power BI and Python skills while working on real-world business datasets.",
};

/** Mock series used only to render the animated dashboard showcase visuals. */
export const dashboardDemo = {
  kpis: [
    { label: "Total Leads", value: "4,820", delta: "+12.4%", up: true },
    { label: "Conversion Rate", value: "18.6%", delta: "+3.1%", up: true },
    { label: "Cost Per Lead", value: "Rs 214", delta: "-8.7%", up: true },
    { label: "Paid Users", value: "896", delta: "+21.0%", up: true },
  ],
  bars: [42, 58, 35, 72, 64, 88, 76, 95, 61, 80],
  provinces: [
    { name: "Punjab", value: 46 },
    { name: "Sindh", value: 27 },
    { name: "KPK", value: 16 },
    { name: "Balochistan", value: 11 },
  ],
  donut: [
    { label: "Organic", value: 44, color: "#3b82f6" },
    { label: "Paid", value: 33, color: "#8b5cf6" },
    { label: "Referral", value: 23, color: "#22d3ee" },
  ],
};
