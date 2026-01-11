import { Badge } from "@/src/components/ui/badge"
import { techStack } from "@/src/scripts/tech-stack"
import type React from "react"

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

        <div className="flex flex-wrap gap-8 justify-center mb-4">
          {techStack.map((category) => (
            <div key={category.title} className="w-full md:w-1/2 lg:w-1/3 px-4 pt-8">
              <h3 className="text-2xl font-bold mb-6 border-b border-border pb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <Badge
                    key={tech.name}
                    className="group relative text-12 flex items-center gap-3 px-5 py-3 rounded-full border-2 border-border bg-background/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary cursor-pointer"
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
                      <tech.icon className="w-5 h-5"/>
                    </div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
