import type React from "react"

import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { ExternalLink, Github, FileText, Users, Smartphone, Lock, Bot } from "lucide-react"

interface ProjectMetric {
  icon: React.ReactNode
  label: string
}

interface ProjectLink {
  label: string
  href: string
  icon: React.ReactNode
}

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  metrics: ProjectMetric[]
  links: ProjectLink[]
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "NexoAI - Sistema POS con IA",
    description:
      "Aplicación móvil completa para gestión de negocios con asistente de IA integrado. Incluye POS, inventario, analytics y chat inteligente para automatizar tareas empresariales.",
    image: "/nexoai-mockup.jpg",
    tags: ["React Native", "NestJS", "PostgreSQL", "Claude AI", "N8N"],
    metrics: [
      { icon: <Users className="h-4 w-4" />, label: "50+ usuarios beta" },
      { icon: <Smartphone className="h-4 w-4" />, label: "iOS & Android" },
      { icon: <Lock className="h-4 w-4" />, label: "Auth JWT + Roles" },
      { icon: <Bot className="h-4 w-4" />, label: "IA integrada" },
    ],
    links: [
      { label: "Ver Demo", href: "#", icon: <ExternalLink className="h-4 w-4" /> },
      { label: "Código Backend", href: "#", icon: <Github className="h-4 w-4" /> },
      { label: "Caso de Estudio", href: "#", icon: <FileText className="h-4 w-4" /> },
    ],
    featured: true,
  },
  {
    title: "Landing Page NexoAI",
    description:
      "Landing page moderna y responsive con React y TanStack Router para el marketing de NexoAI. Diseño optimizado para conversión con animaciones fluidas.",
    image: "/landing-nexoai.jpg",
    tags: ["React", "TypeScript", "Tailwind", "Rsbuild"],
    metrics: [
      { icon: <ExternalLink className="h-4 w-4" />, label: "100% responsive" },
      { icon: <Bot className="h-4 w-4" />, label: "SEO optimizado" },
    ],
    links: [
      { label: "Ver Sitio", href: "#", icon: <ExternalLink className="h-4 w-4" /> },
      { label: "Código Fuente", href: "#", icon: <Github className="h-4 w-4" /> },
    ],
  },
  {
    title: "QRender - Proyectos Full-Stack",
    description:
      "Desarrollo de múltiples aplicaciones web empresariales con arquitectura MVC. Implementación de sistemas de gestión y dashboards administrativos.",
    image: "/qrender-projects.jpg",
    tags: ["Next.js", "PHP", "MySQL", "MVC"],
    metrics: [
      { icon: <FileText className="h-4 w-4" />, label: "3+ proyectos" },
      { icon: <Users className="h-4 w-4" />, label: "Arquitectura MVC" },
    ],
    links: [{ label: "Ver Detalles", href: "#", icon: <FileText className="h-4 w-4" /> }],
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Proyectos Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aplicaciones reales que demuestran mi experiencia en desarrollo full-stack
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Project - Takes full width on desktop */}
          {projects
            .filter((p) => p.featured)
            .map((project, id) => (
              <Card
                key={project.title}
                className="lg:col-span-2 group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-64 md:h-full overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
                  </div>

                  {/* Content Side */}
                  <CardContent className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="default" className="bg-primary/20 text-primary hover:bg-primary/30">
                          Proyecto Principal
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <div className="text-primary">{metric.icon}</div>
                            <span className="text-muted-foreground">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <Button key={link.label} variant={link.label === "Ver Demo" ? "default" : "outline"} asChild>
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.icon}
                            <span className="ml-2">{link.label}</span>
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, idx) => (
              <Card
                key={project.title}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <div className="text-primary">{metric.icon}</div>
                        <span className="text-muted-foreground">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <Button key={link.label} variant="outline" size="sm" asChild>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.icon}
                          <span className="ml-2">{link.label}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}
