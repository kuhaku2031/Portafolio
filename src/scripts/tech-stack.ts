import type { IconType } from "react-icons"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiPostman,
  SiVercel,
  SiAmazon,
  SiTailwindcss,
  SiExpo,
  SiChakraui,
  SiJavascript,
  SiGooglecloud,
  SiPnpm,
  SiNpm,
  SiN8N,
  SiClaude,
  SiOpenai,
} from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
import { VscAzure } from "react-icons/vsc"

interface Technology {
  name: string
  icon: IconType
  color: string
}

interface TechCategory {
  title: string
  technologies: Technology[]
}

export const techStack: TechCategory[] = [
  {
    title: "Mobile & Frontend",
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
      { name: "Expo", icon: SiExpo, color: "#000020" },
      { name: "Chakra UI", icon: SiChakraui, color: "#4ed1c5" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Database",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Tools",
    technologies: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "pnpm", icon: SiPnpm, color: "#F05032" },
      { name: "npm", icon: SiNpm, color: "#cb3837" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    title: "Cloud",
    technologies: [
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285f4" },
      { name: "Azure", icon: VscAzure, color: "#0080FF" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
    ],
  },
    {
    title: "AI & Automation",
    technologies: [
      { name: "n8n", icon: SiN8N, color: "#ea4b71" },
      { name: "Claude", icon: SiClaude, color: "#d97757" },
      { name: "OpenAI", icon: SiOpenai, color: "#412991" },
    ],
  },
]
