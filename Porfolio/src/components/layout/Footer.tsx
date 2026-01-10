import { Link } from "@tanstack/react-router"
import { Button } from "../ui/button"
import { Github, Heart, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground text-lg">
                  JM
                </div>
                <span className="font-bold text-lg">Juan Manuel Contreras</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full-Stack Developer especializado en React Native y NestJS. Creando experiencias digitales
                excepcionales.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#inicio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="#proyectos"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link
                    to="#experiencia"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Experiencia
                  </Link>
                </li>
                <li>
                  <Link to="#contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold mb-4">Sígueme</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" asChild className="rounded-full bg-transparent">
                  <a href="https://github.com/juanmanuel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-full bg-transparent">
                  <a
                    href="https://linkedin.com/in/juanmanuel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-full bg-transparent">
                  <a
                    href="mailto:juanmanuelcontreraszapata33@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Juan Manuel Contreras - Full-Stack Developer
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Hecho con <Heart className="h-4 w-4 text-red-500 fill-red-500" /> y React
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
