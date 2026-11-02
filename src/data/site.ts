// All portfolio content (except blog posts) lives here.
// Edit this file to change projects, experience, skills, certifications or events.

export const profile = {
  name: "Khushleen Kaur Sekhon",
  role: "GTM Intern at Recrivio · Former Chairperson, IEEE-CIET",
  tagline: "I approach business problems the way I was trained to approach code: break them down, find the bottleneck, fix it.",
  email: "sekhonkhushleen@gmail.com",
  phone: "+91 70874 73219",
  location: "Bengaluru, Karnataka",
  linkedin: "https://www.linkedin.com/in/khushleensekhon/",
  github: "https://github.com/khushleensekhon",
  resume: "/Khushleen_Kaur_Sekhon_Resume.pdf",
  focus: ["GTM Strategy", "B2B SaaS", "Business Development", "Product Thinking", "AI & Emerging Tech"],
};

export const stats = [
  ["1,000+", "students reached through IEEE-CIET events"],
  ["10+", "events and 3+ hackathons led"],
  ["120+", "companies researched for GTM at Recrivio"],
  ["8.25", "CGPA, B.E. Computer Science"],
];

export const experience = [
  {
    when: "JUL 2026 – PRESENT · INTERNSHIP", now: true, title: "GTM Intern", org: "Recrivio · Bengaluru",
    points: [
      "Researched and analysed 120+ companies to find target segments and their hiring and background-verification needs, supporting B2B SaaS positioning.",
      "Ran market segmentation and buyer persona analysis to prioritise prospects.",
      "Turned market research and prospect feedback into recommendations for GTM strategy.",
      "<strong>Recognised with the Rising Star award</strong> at Recrivio (Nov 2026).",
    ],
  },
  {
    when: "JUL 2025 – AUG 2026 · LEADERSHIP", title: "Chairperson", org: "IEEE-CIET Student Branch, Chitkara University",
    points: [
      "Led 3+ hackathons and 10+ technical and non-technical events reaching 1,000+ students.",
      "Managed a 20+ member core team from budgeting through execution.",
      "Tracked registration, attendance and feedback data to spot turnout trends and plan better events.",
    ],
  },
  {
    when: "DEC 2024 – MAR 2025 · INTERNSHIP", title: "Project Manager Intern", org: "Medoc Life",
    points: [
      "Analysed client requirements and workflows to find process gaps and turn them into structured deliverables.",
      "Investigated backend workflows with Postman to find issues and keep projects moving.",
    ],
  },
  {
    when: "JUL 2024 – SEP 2025 · LEADERSHIP", title: "WIE Vice Chairperson", org: "IEEE Women in Engineering, CIET",
    points: [
      "Drove Women in Engineering initiatives with the WIE Affinity Group: Hack With Her 4.0, Somnium and The Wall Street.",
      "Part of the team behind Hackfest'25, a national-level hackathon with SAP Labs India and Coding Blocks.",
    ],
  },
  {
    when: "SEP 2023 – JUL 2024 · LEADERSHIP", title: "Organising Executive", org: "IEEE-CIET Student Branch",
    points: ["Organised HackIndia 2024, the EmpowerHer Debate and the From Idea to Impact entrepreneurship session."],
  },
];

export const projects = [
  { t: "Smart Email Assistant", y: "2026", d: "AI system that classifies email tone and writes context-aware replies, with a prompt evaluation pipeline and fallback handling when the API fails.", tags: ["React", "Spring Boot", "MySQL", "Gemini API"], l: "https://github.com/khushleensekhon", lt: "GitHub" },
  { t: "BorrowBox", y: "2025", d: "Peer-to-peer lending platform with live request status, JWT login and reporting queries. Owned it from requirements to Vercel deployment.", tags: ["React", "Node.js", "SQL", "WebSockets"], l: "https://borrowbox-plum.vercel.app", lt: "Live site" },
  { t: "Haazri", y: "2024 – 25", d: "Attendance management system with role-based access and real-time tracking, shaped by research into how teachers take attendance.", tags: ["Full-stack", "RBAC", "Real-time"], l: "https://github.com/coderharpuneet/Haazri", lt: "GitHub" },
];

export const skills: [string, string[]][] = [
  ["Business & GTM", ["GTM strategy", "Market research", "ICP & buyer personas", "Customer segmentation", "Requirement gathering", "Hypothesis testing"]],
  ["Leadership", ["Project management", "Board leadership", "Strategic planning", "Public speaking", "Community outreach", "Budgeting"]],
  ["Data & tools", ["SQL (MySQL, PostgreSQL)", "Excel & Google Sheets", "Pivot tables", "Postman", "Git & GitHub", "AWS", "Claude & AI workflows"]],
  ["Programming", ["Python", "Java", "C++", "JavaScript", "React", "Node.js", "Express.js", "HTML/CSS"]],
];

export const certs = [
  ["AN", "AI Fluency: Framework & Foundations", "Anthropic", "Aug 2026", "h7ijmm9iwabt"],
  ["AN", "Claude 101", "Anthropic", "Aug 2026", "frvwukhumbvt"],
  ["IBM", "AI Enterprise Workflow Specialization", "IBM", "Jul 2026", "DUTV6XE6ZIGG"],
  ["IBM", "AI Workflow: ML, Visual Recognition and NLP", "IBM", "Jul 2026", "6LH7LQO4PJAV"],
  ["IBM", "AI Workflow: Business Priorities and Data Ingestion", "IBM", "Jul 2026", "99YO8AI39M2T"],
  ["IBM", "AI Workflow: Data Analysis and Hypothesis Testing", "IBM", "Jul 2026", "EZ8WCCK1YAW8"],
  ["IBM", "DevOps, Cloud, and Agile Foundations", "IBM / Coursera", "Jun 2025", ""],
  ["RU", "Communication Skills for Engineers", "Rice University", "Sep 2024", "LG1VHN3ZLCEC"],
  ["M", "Marketing Analytics Professional Certificate", "Meta", "May 2024", "55CUTSYMCT6A"],
];

export const tenures = [
  { role: "Chairperson, IEEE-CIET", years: "JUL 2025 – AUG 2026", ev: [
    ["Triggered", "7 Aug 2025 · Pierre Hall", "Logic, reasoning and problem-solving through coding challenges, rapid-fire quizzes and squad-vs-squad rounds.", ["Coding", "Strategy", "Teamwork"]],
    ["Infraverse", "20 Aug 2025", "Tech Society event for the new academic year.", ["Tech Society"]],
    ["Branch leadership", "2025 – 26", "10+ events, 3+ hackathons, 1,000+ students reached, a 20+ member core team and full budget ownership.", ["Chairperson"]],
  ]},
  { role: "WIE Vice Chairperson", years: "JUL 2024 – SEP 2025", ev: [
    ["Hackfest'25", "6 May 2025 · National level", "National hackathon where teams pitched ideas for real technology and business problems, with SAP Labs India and Coding Blocks.", ["Hackathon", "Pitching"]],
    ["Suits & Syntax", "17 Apr 2025", "Two-round contest testing analysis, coding and public speaking, run with the IE(I) CSE Student Chapter.", ["Critical thinking", "Debate"]],
    ["Hack With Her 4.0", "5 – 6 Mar 2025 · 30 hours", "Overnight hackathon for women in tech with the CSE department, mentored by Edifecs.", ["WIE", "Hackathon"]],
    ["Somnium", "24 Feb 2025", "Tech simulation where students competed in real tech-industry roles, run with the WIE Affinity Group.", ["WIE", "Simulation"]],
    ["The Code Express", "7 Feb 2025", "Puzzles and logic challenges built to sharpen critical thinking.", ["Puzzles", "Logic"]],
    ["The Wall Street", "14 Oct 2024 · 20 teams", "Stock market simulation across 3 rounds: IPO coding, a Broker's Gambit negotiation and a Roulette of Risks.", ["WIE", "Simulation"]],
    ["CodeSlam", "15 – 16 Sep 2024 · 32 teams", "Clash of Clans-themed contest: front-end round on Day 1, knockout coding relay for the top 16 on Day 2.", ["Lead organiser"]],
    ["IEEE-PL: The Critical Think Off", "2024 · Members only", "IPL auction with a ₹120 Cr budget, quiz-earned bonuses, two trade windows, press releases and a press conference.", ["Strategy"]],
  ]},
  { role: "Organising Executive", years: "SEP 2023 – JUL 2024", ev: [
    ["HackIndia 2024", "2024 · Web3", "India's largest Web3 hackathon, hosted at Chitkara with the ACM chapter and Coding Blocks.", ["Co-host"]],
    ["EmpowerHer Debate", "13 Mar 2024", "Debate competition with WIE on topics that matter to women in tech.", ["WIE", "Debate"]],
    ["From Idea to Impact", "31 Jan 2024", "Session on turning ideas into ventures: a young entrepreneur's guide, with the CSE department.", ["Entrepreneurship"]],
  ]},
] as { role: string; years: string; ev: [string, string, string, string[]][] }[];

export const gallery = [
  "Hack With Her 4.0 team photo", "CodeSlam 2024", "The Wall Street", "IEEE-PL auction",
  "WIE orientation", "Recrivio", "HackIndia 2024",
];
