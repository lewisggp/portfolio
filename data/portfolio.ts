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
