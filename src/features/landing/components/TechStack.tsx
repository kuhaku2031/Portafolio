import type React from "react"
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
  SiFigma,
  SiVercel,
  SiAmazon,
  SiTailwindcss,
} from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"

interface Technology {
  name: string
  icon: React.ReactNode
  color: string
}

interface TechCategory {
  title: string
  technologies: Technology[]
}

const techStack: TechCategory[] = [
  {
    title: "Mobile",
    technologies: [
      { name: "React Native", icon: <TbBrandReactNative className="h-5 w-5" />, color: "#61DAFB" },
      { name: "Expo", icon: <SiReact className="h-5 w-5" />, color: "#000020" },
      { name: "NativeWind", icon: <SiTailwindcss className="h-5 w-5" />, color: "#06B6D4" },
    ],
  },
  {
    title: "Frontend",
    technologies: [
      { name: "React", icon: <SiReact className="h-5 w-5" />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs className="h-5 w-5" />, color: "#000000" },
      { name: "TypeScript", icon: <SiTypescript className="h-5 w-5" />, color: "#3178C6" },
      { name: "TailwindCSS", icon: <SiTailwindcss className="h-5 w-5" />, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs className="h-5 w-5" />, color: "#339933" },
      { name: "NestJS", icon: <SiNestjs className="h-5 w-5" />, color: "#E0234E" },
      { name: "Express", icon: <SiExpress className="h-5 w-5" />, color: "#000000" },
    ],
  },
  {
    title: "Database",
    technologies: [
      { name: "PostgreSQL", icon: <SiPostgresql className="h-5 w-5" />, color: "#4169E1" },
      { name: "MySQL", icon: <SiMysql className="h-5 w-5" />, color: "#4479A1" },
      { name: "MongoDB", icon: <SiMongodb className="h-5 w-5" />, color: "#47A248" },
    ],
  },
  {
    title: "Tools",
    technologies: [
      { name: "Git", icon: <SiGit className="h-5 w-5" />, color: "#F05032" },
      { name: "Docker", icon: <SiDocker className="h-5 w-5" />, color: "#2496ED" },
      { name: "Postman", icon: <SiPostman className="h-5 w-5" />, color: "#FF6C37" },
      { name: "Figma", icon: <SiFigma className="h-5 w-5" />, color: "#F24E1E" },
    ],
  },
  {
    title: "Cloud",
    technologies: [
      { name: "Vercel", icon: <SiVercel className="h-5 w-5" />, color: "#000000" },
      { name: "AWS", icon: <SiAmazon className="h-5 w-5" />, color: "#FF9900" },
    ],
  },
]

export function TechStack() {
  return (
    <section className="py-20 sm:py-28 bg-background/30">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Tecnologías y Herramientas</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Stack tecnológico con el que trabajo para crear aplicaciones robustas y escalables
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {techStack.map((category) => (
            <div key={category.title} className="w-full md:w-1/2 lg:w-1/3 px-4 border-t border-border pt-8">
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <button
                    key={tech.name}
                    type="button"
                    className="group relative flex items-center gap-3 px-5 py-3 rounded-full border-2 border-border bg-background/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary cursor-pointer"
                    style={
                      {
                        "--tech-color": tech.color,
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = tech.color
                      e.currentTarget.style.backgroundColor = `${tech.color}15`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = ""
                      e.currentTarget.style.backgroundColor = ""
                    }}
                  >
                    <div className="transition-colors duration-300" style={{ color: tech.color }}>
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
