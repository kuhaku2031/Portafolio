import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/src/components/ui/button"

interface Certification {
  title: string
  provider: string
  year: string
  description: string
  link?: string
}

const certifications: Certification[] = [
  {
    title: "Git y GitHub",
    provider: "Alura",
    year: "2025",
    description: "Control de versiones, colaboración y mejores prácticas en desarrollo con Git",
    link: "#",
  },
  {
    title: "Prompt Engineering",
    provider: "Alura",
    year: "2025",
    description: "Técnicas avanzadas para optimizar interacciones con modelos de IA",
    link: "#",
  },
]

export function Certifications() {
  return (
    <section className="py-20 sm:py-28 bg-jet-black/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Certificaciones</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Formación continua para mantenerme actualizado en las últimas tecnologías
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <Card
              key={cert.title}
              className="group bg-jet-black hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{cert.title}</h3>
                      <Badge variant="default" className=" bg-primary/20 text-primary hover:bg-primary/30">
                        {cert.year}</Badge>
                    </div>
                    <p className="text-sm font-medium text-primary mb-2">{cert.provider}</p>
                    <p className="text-sm text-muted leading-relaxed mb-4">{cert.description}</p>
                    {cert.link && (
                      <Button variant="ghost" size="sm" asChild className="px-0 mb-0">
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          Ver certificado
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
