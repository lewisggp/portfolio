export interface ExperienceItem {
  id: number;
  period: string;
  title: string;
  description: string;
  location: string;
  role: string;
  company: string;
  type: string; // "corporate_fare" | "sensors" | "speed"
  achievements: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  tags: string[];
  typeLabels: string[];
  link: string;
}

export interface StackItem {
  category: string;
  icon: string;
  description: string;
  items: string;
}

export interface StackCardItem {
  icon: string;
  title: string;
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    period: "Nov 2024 — PRESENT",
    title: "Arquitecture & Platform Engineering",
    description:
      "Design and scalability of digital ecosystems for the travel and ecommerce sectors.",
    location: "Lechería, Venezuela",
    role: "Lead Full Stack Engineer",
    company: "Back9",
    type: "corporate_fare",
    achievements: [
      "Developed e-commerce applications with custom back-office, featuring embedded Power BI dashboards.",
      "Built an end-to-end airline booking platform utilizing data from multiple GDS for travel agencies.",
      "Automated stadium access systems by programming micro-controllers connected to a digital ticketing platform.",
    ],
  },
  {
    id: 2,
    period: "Apr 2025 — PRESENT",
    title: "Academic Leadership & Theory",
    description: "Training the next generation of computer engineers.",
    location: "Barcelona, Venezuela",
    role: "Adjunct Professor",
    company: "Universidad de Oriente",
    type: "school",
    achievements: [
      "Taught the undergraduate course Formal Languages and Automata Theory in the Department of Computer Engineering.",
    ],
  },
  {
    id: 3,
    period: "Mar 2025 — PRESENT",
    title: "SaaS Architecture & AI Innovation",
    description:
      "Industrial product architecture and advanced Generative AI solutions.",
    location: "Remote",
    role: "Founding Engineer",
    company: "ProgyLift LLC",
    type: "rocket_launch",
    achievements: [
      "Spearheaded the technical architecture and product design of a SaaS platform for the oil industry.",
      "Developed an analysis and control software with real-time data from oil well sensors.",
      "Engineered a RAG Chatbot enabling queries on live production databases and internal documentation.",
    ],
  },
  {
    id: 4,
    period: "Feb 2023 — Sep 2024",
    title: "IoT Systems & Cloud Integration",
    description:
      "Automation and monitoring of telemetry data using cloud services.",
    location: "Remote",
    role: "Full Stack Developer",
    company: "NextWells Corp.",
    type: "sensors",
    achievements: [
      "Automated data acquisition with AWS IoT Core and lambda functions for data from oil well controllers.",
      "Developed a web application in Next.js with dashboards to visualize production data.",
      "Maintained an ASP.NET web application with dashboards for analysis and data management in the oil industry.",
    ],
  },
  {
    id: 5,
    period: "2020 — 2024",
    title: "Custom Software Solutions",
    description:
      "Development of custom applications and freelance project management.",
    location: "Remote",
    role: "Full Stack Developer",
    company: "Freelancer",
    type: "speed",
    achievements: [
      "Maintained a web application for managing architecture project data with custom dashboards.",
      "Built a software for employee time tracking across companies, including calculations based on hours worked.",
      "Developed websites such as blogs and product stores.",
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "El Good Trip",
    description:
      "Built an end-to-end airline booking platform utilizing data from multiple GDS for travel agencies.",
    image: "/images/projects/elgoodtrip-1.png",
    images: [
      "/images/projects/elgoodtrip-1.png",
      "/images/projects/elgoodtrip-2.png",
      "/images/projects/elgoodtrip-3.png",
      "/images/projects/elgoodtrip-4.png",
      "/images/projects/elgoodtrip-5.png",
      "/images/projects/elgoodtrip-6.png",
      "/images/projects/elgoodtrip-7.png",
    ],
    tags: ["Next.js", "Node.js", "Redis", "MongoDB", "Multi-tenant"],
    typeLabels: ["Travel", "Platform", "GDS"],
    link: "#",
  },
  {
    id: 2,
    title: "ProgyLift",
    description:
      "A personal brand website and blog showcasing articles, media, and professional milestones.",
    image: "/images/projects/progylift-1.png",
    images: [
      "/images/projects/progylift-1.png",
      "/images/projects/progylift-2.png",
      "/images/projects/progylift-3.png",
      "/images/projects/progylift-4.png",
      "/images/projects/progylift-5.png",
      "/images/projects/progylift-6.png",
      "/images/projects/progylift-7.png",
      "/images/projects/progylift-8.png",
    ],
    tags: ["Next.js", "Prisma", "Supabase", "CMS"],
    typeLabels: ["SaaS", "Oil & Gas"],
    link: "#",
  },
  {
    id: 3,
    title: "Tea and Nature",
    description:
      "An e-commerce storefront dedicated to natural products and teas with a focus on serene design.",
    image: "/images/projects/teandnature-1.png",
    images: [
      "/images/projects/teandnature-1.png",
      "/images/projects/teandnature-2.png",
      "/images/projects/teandnature-3.png",
    ],
    tags: ["E-commerce", "Web Design", "Frontend"],
    typeLabels: ["Retail", "Store"],
    link: "#",
  },
  {
    id: 4,
    title: "Gustavo Copelmayer",
    description:
      "A personal brand website and blog showcasing articles, media, and professional milestones.",
    image: "/images/projects/gustavocopelmayer-1.png",
    images: [
      "/images/projects/gustavocopelmayer-1.png",
      "/images/projects/gustavocopelmayer-2.png",
      "/images/projects/gustavocopelmayer-3.png",
      "/images/projects/gustavocopelmayer-4.png",
      "/images/projects/gustavocopelmayer-5.png",
      "/images/projects/gustavocopelmayer-6.png",
    ],
    tags: ["Web Design", "CMS", "Frontend"],
    typeLabels: ["Personal", "Blog"],
    link: "#",
  },
  {
    id: 5,
    title: "Longview",
    description:
      "Developed an analysis and control software with real-time data from oil well sensors.",
    image: "/images/projects/longview-1.png",
    images: [
      "/images/projects/longview-1.png",
      "/images/projects/longview-2.png",
      "/images/projects/longview-3.png",
      "/images/projects/longview-4.png",
      "/images/projects/longview-5.png",
    ],
    tags: ["Next.js", "Django", "PostgreSQL", "IoT", "Real-time"],
    typeLabels: ["Industry", "SaaS"],
    link: "#",
  },
  {
    id: 6,
    title: "Residentudo",
    description: "A student game project for a university course.",
    image: "/images/projects/residentudo-1.png",
    images: [
      "/images/projects/residentudo-1.png",
      "/images/projects/residentudo-2.png",
      "/images/projects/residentudo-3.png",
      "/images/projects/residentudo-4.png",
      "/images/projects/residentudo-5.png",
      "/images/projects/residentudo-6.png",
      "/images/projects/residentudo-7.png",
      "/images/projects/residentudo-8.png",
      "/images/projects/residentudo-9.png",
      "/images/projects/residentudo-10.png",
    ],
    tags: ["Java", "Game", "Student"],
    typeLabels: ["University", "Game"],
    link: "#",
  },
];

export const STACK_GROUPS: StackItem[] = [
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    description: "AWS, Git, Docker, CI/CD", //
    items: "Cloud & DevOps",
  },
  {
    category: "AI & Intelligence",
    icon: "psychology",
    description: "LLM Integration, RAG, N8N", //
    items: "AI & Intelligence",
  },
  {
    category: "Architecture & Data",
    icon: "architecture",
    description: "Database Design, SQL/NoSQL, GraphQL, Power BI", //
    items: "Architecture & Data",
  },
];

export const STACK_CARDS: StackCardItem[] = [
  { icon: "Nodejs", title: "NODE.JS" },
  { icon: "Typescript", title: "TYPESCRIPT" },
  { icon: "Javascript", title: "JAVASCRIPT" },
  { icon: "Nextjs", title: "NEXT.JS" },
  { icon: "Prisma", title: "PRISMA" },
  { icon: "React", title: "REACT" },
  { icon: "Material", title: "MATERIAL UI" },
  { icon: "Tailwind", title: "TAILWIND / SHADCN" },
  { icon: "Git", title: "GIT" },
  { icon: "n8n", title: "N8N" },
  { icon: "AWS", title: "AWS" },
  { icon: "Docker", title: "DOCKER" },
  { icon: "Redis", title: "REDIS" },
  { icon: "Django", title: "DJANGO" },
  { icon: "Python", title: "PYTHON / PYSPARK" },
  { icon: "Storage", title: "SQL / NOSQL" },
  { icon: "GraphQL", title: "GRAPHQL" },
  { icon: "PowerBI", title: "POWER BI" },
  { icon: "Postgre", title: "POSTGRESQL" },
  { icon: "Mongodb", title: "MONGODB" },
];
