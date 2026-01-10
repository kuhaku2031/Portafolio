import { Button } from "@/src/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Send } from "lucide-react"
import { useEffect, useState } from "react"

const roles = ["Full-Stack Developer", "Mobile Developer", "React Native Expert", "Backend Engineer"]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const scrollToProjects = () => {
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-primary/10 via-ink-black to-accent/10"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute w-96 h-96 -bottom-48 -right-48 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Image - Left side on desktop */}
          <div className="relative group shrink-0">
            <div className="absolute inset-0 bg-linear-to-r from-primary via-accent to-secondary rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-glow" />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img
                src="/img/my/My_face.jpg"
                alt="Juan Manuel Contreras"
                width={288}
                height={288}
                className="object-cover"
              />
            </div>
          </div>

          {/* Content - Right side on desktop */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Title and Typewriter Effect */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
                Juan Manuel Contreras
              </h1>
              <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
            </div>

            {/* About Me Description */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Sobre mí</h3>
              <p className="text-base sm:text-lg text-muted leading-relaxed">
                Desarrollador full-stack especializado en aplicaciones móviles cross-platform con React Native y backend
                robusto con NestJS. Apasionado por crear experiencias de usuario fluidas y APIs escalables que resuelven
                problemas reales. Me enfoco en escribir código limpio, mantenible y en constante aprendizaje de nuevas
                tecnologías.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button size="lg" onClick={scrollToProjects} className="text-lg px-8">
                Ver Proyectos
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="default" onClick={scrollToContact} className="text-lg px-8">
                Contactarme
                <Send className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <a href="/cv.pdf" download>
                  Descargar CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:scale-110 transition-transform">
                <a href="https://github.com/juanmanuel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:scale-110 transition-transform">
                <a
                  href="https://linkedin.com/in/juanmanuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:scale-110 transition-transform">
                <a
                  href="mailto:juanmanuelcontreraszapata33@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  )
}
