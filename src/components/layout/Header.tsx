import { useState, useEffect } from "react"
import { Button } from "@/src/components/ui/button"
import { Menu, X, Download } from "lucide-react"


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scollToSections = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      window.history.replaceState(null, "", `#${id}`)
    }
  }

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Button onClick={() => scollToSections("inicio")} className="flex items-center space-x-2 bg-transparent">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground text-lg">
              JM
            </div>
            <span className="font-bold text-lg text-beige hidden sm:block">Juan Manuel</span>
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
             {navLinks.map((link) => (
              <Button
                key={link.href}
                onClick={() => scollToSections(link.href.replace("#", ""))}
                className="text-sm font-medium text-primary hover:text-foreground transition-colors bg-transparent"
              >
                {link.label}
              </Button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              {mounted && <>{theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}</>}
              <span className="sr-only">Cambiar tema</span>
            </Button> */}

            <Button asChild className="hidden sm:flex">
              <a href="/cv.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Descargar CV
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  onClick={() => {
                    scollToSections(link.href.replace("#", ""))
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </Button>
              ))}
              <Button asChild className="w-full sm:hidden">
                <a href="cv/Presebt-cv.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Descargar CV
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
