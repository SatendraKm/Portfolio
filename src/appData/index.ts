// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  MongoDBIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TypescriptIcon,
} from "../utils/icons";
import {
  BackendIcon,
  DatabaseIcon,
  FrontendIcon,
  FullStackIcon,
  RealtimeIcon,
  ToolingIcon,
} from "../components/Services/expertise-icons";

// Service Data
export const serviceData = [
  {
    icon: FullStackIcon,
    title: "Full-Stack Web Development",
    shortDescription:
      "Building production-ready web applications from data model and API design through responsive user interfaces.",
  },
  {
    icon: FrontendIcon,
    title: "React & Next.js Development",
    shortDescription:
      "Creating fast, accessible interfaces and server-rendered applications with React, Next.js, and TypeScript.",
  },
  {
    icon: BackendIcon,
    title: "Backend & REST APIs",
    shortDescription:
      "Designing maintainable Node.js and Express APIs, authentication, data models, and reusable middleware.",
  },
  {
    icon: RealtimeIcon,
    title: "Real-Time Applications",
    shortDescription:
      "Integrating WebSockets, webhooks, and offline-first data flows for responsive, connected experiences.",
  },
  {
    icon: DatabaseIcon,
    title: "Database Design",
    shortDescription:
      "Working with MySQL, MongoDB, Sequelize, and IndexedDB to build dependable data layers.",
  },
  {
    icon: ToolingIcon,
    title: "Cloud & Developer Tools",
    shortDescription:
      "Shipping with Git, Docker, AWS EC2, Postman, Jest, and Linux-based development workflows.",
  },
];

// Skill List
export const skillList = [
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    name: "TypeScript",
    icon: TypescriptIcon,
  },
  {
    name: "React.js",
    icon: ReactIcon,
  },
  {
    name: "Next.js",
    icon: NextjsIcon,
  },
  {
    name: "Node.js",
    icon: NodejsIcon,
  },
  {
    name: "Express.js",
    icon: ExpressjsIcon,
  },
  {
    name: "MongoDB",
    icon: MongoDBIcon,
  },
  {
    name: "WebSockets",
    icon: SocketIcon,
  },
];

export const footerLinks = [
  { title: "About", href: "#" },
  { title: "Projects", href: "#projects" },
  {
    title: "Services",
    href: "#services",
  },
];

export const experienceData = [
  {
    role: "Full-Stack Software Developer Intern",
    company: "ABIS Foods Pvt. Ltd.",
    period: "May 2025 - Sep 2025",
    location: "Rajnandgaon, Chhattisgarh",
    highlights: [
      "Owned four CRM modules end-to-end across a shared multi-tenant codebase using React, Node.js, and MySQL.",
      "Designed role-based access with 20+ permission levels and a lead pipeline processing roughly 9,000 leads per day.",
      "Built an offline-first ERP module with geo-fenced check-ins, IndexedDB sync, and a real-time WebSocket dashboard.",
      "Integrated VoIP/IVR, WhatsApp Business webhooks, and SAP ERP data feeds to improve internal support workflows.",
    ],
  },
];

export const educationData = [
  {
    institution: "OP Jindal University",
    degree: "Bachelor of Technology in Computer Science",
    period: "Aug 2022 - May 2026",
    location: "Raigarh, Chhattisgarh",
    detail: "CGPA: 8.4 / 10",
  },
];

export const themes = [
  {
    name: "Light",
    colors: ["#fff", "#0d1a3b", "#dbe3f7", "#0d1a3b", "#5565e8"],
  },
  {
    name: "Dark",
    colors: ["#011627", "#607b96", "#0d1a3b", "#5565e8", "#18f2e5"],
  },
  {
    name: "Aqua",
    colors: ["#b2e4e8", "#004a55", "#00c1d4", "#004a55", "#ff6f61"],
  },
  {
    name: "Retro",
    colors: ["#fff3e0", "#6d4c41", "#ffcc80", "#5d4037", "#ffab40"],
  },
];
