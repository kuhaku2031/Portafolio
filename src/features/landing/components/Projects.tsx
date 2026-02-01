
import { Card, CardContent, CardHeader } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { projects } from "@/src/scripts/projects"

export function Projects() {
  return (
    <section id="proyectos" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Proyectos Destacados</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Aplicaciones reales que demuestran mi experiencia en desarrollo full-stack
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Project - Takes full width on desktop */}
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <Card
                key={project.title}
                className="group bg-jet-black overflow-hidden lg:col-span-2 py-0 transition-all duration-500 border-2 hover:shadow-2xl hover:border-primary/50"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative md:h-full overflow-hidden bg-ash-grey group">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-125 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent group-hover:opacity-0 transition-opacity duration-500"
                    />
                  </div>

                  {/* Content Side */}
                  <CardContent className="p-12 flex flex-col justify-between align-middle">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="default" className=" bg-primary/20 text-primary hover:bg-primary/30">
                          Proyecto Principal
                        </Badge>
                      </div>
                      <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted leading-relaxed mb-6">{project.description}</p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs text-ink-black bg-ash-grey/70 hover:bg-ash-grey/90">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="flex items-center gap-2 text-sm">
                            <div className="text-honeydew"><metric.icon /></div>
                            <span className="text-muted">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <Button key={link.label} className={link.label === "Ver Demo" ? "" : "bg-charcoal-blue"} variant={link.label === "Ver Demo" ? "default" : "outline"} asChild>
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            <link.icon />
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
                className="group bg-jet-black h-auto overflow-hidden hover:shadow-xl py-0 transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader className="px-0 max-h-100 md:h-auto">
                  <div className="relative h-full overflow-hidden bg-ash-grey group">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover object-top-left w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
                  </div>
                </CardHeader>


                <CardContent className="p-12 flex flex-col justify-between align-middle">
                  <div className="h-full">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary text-white transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs text-ink-black bg-ash-grey/70 hover:bg-ash-grey/90">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="flex items-center gap-2 text-sm">
                          <div className="text-honeydew"><metric.icon /></div>
                          <span className="text-muted">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 mb-0 mt-auto">
                    {project.links.map((link) => (
                      <Button key={link.label} className={link.label === "Ver Demo" ? "" : "bg-charcoal-blue"} variant={link.label === "Ver Demo" ? "default" : "outline"} asChild>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <link.icon />
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
