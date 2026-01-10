import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Briefcase, GraduationCap, Rocket } from "lucide-react"

interface Experience {
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
  icon: React.ReactNode
  color: string
}

const experiences: Experience[] = [
  {
    company: "QRender",
    role: "Programador Full-Stack",
    period: "2024 - 2025",
    description: "Desarrollo de aplicaciones web empresariales con arquitectura escalable",
    achievements: [
      "Desarrollo de 3+ proyectos full-stack con Next.js y PHP",
      "Implementación de arquitectura MVC para sistemas empresariales",
      "Optimización de bases de datos MySQL para mejor rendimiento",
      "Colaboración con equipos multidisciplinarios",
    ],
    icon: <Briefcase className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    company: "Proyectos Personales",
    role: "Desarrollador Independiente",
    period: "2023 - Presente",
    description: "Desarrollo de aplicaciones móviles y sistemas full-stack",
    achievements: [
      "Creación de NexoAI: Sistema POS con IA para gestión empresarial",
      "50+ usuarios beta en producción",
      "Integración de APIs de IA (Claude) y automatización (N8N)",
      "Implementación de autenticación JWT y sistema de roles",
    ],
    icon: <Rocket className="h-5 w-5" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    company: "Fundación Universitaria Los Libertadores",
    role: "Estudiante Ingeniería de Sistemas",
    period: "2022 - Presente",
    description: "Formación académica en desarrollo de software y arquitectura de sistemas",
    achievements: [
      "Especialización en desarrollo móvil y backend",
      "Certificaciones en Git, GitHub y Prompt Engineering",
      "Proyectos académicos con tecnologías modernas",
      "Participación en comunidades de desarrollo",
    ],
    icon: <GraduationCap className="h-5 w-5" />,
    color: "from-green-500 to-emerald-500",
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Experiencia Profesional</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria en el desarrollo de software y formación continua
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div key={exp.company} className="relative flex gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 w-8 h-8 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-full h-full rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg ring-4 ring-background`}
                    >
                      <div className="text-white">{exp.icon}</div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-12" />

                  {/* Content Card */}
                  <Card
                    className="flex-1 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                    style={{ animationDelay: `${idx * 200}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <Badge variant="secondary" className="mb-2">
                          {exp.period}
                        </Badge>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.company}</h3>
                        <p className="text-sm text-primary font-medium">{exp.role}</p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">▹</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
