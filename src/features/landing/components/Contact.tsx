import { useState } from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Label } from "@/src/components/ui/label"
import { Send, CheckCircle2 } from "lucide-react"
import { Toaster } from "@/src/components/ui/sonner"
import { socialLinks } from "@/src/scripts/social"


export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    setTimeout(() => setIsSuccess(false), 3000)
  }

  return (
    <>
      <section id="contacto" className="py-20 sm:py-28 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/10 to-secondary/20 opacity-50" />
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 top-0 right-0 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute w-96 h-96 bottom-0 left-0 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">¿Trabajamos juntos?</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Estoy disponible para proyectos full-time o freelance. ¡Hablemos de tu próximo proyecto!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="glass border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="md:space-y-2">
                    <Label htmlFor="name" className="text-white">Nombre</Label>
                    <Input id="name" placeholder="Tu nombre" required className="bg-background/50 text-white"/>
                  </div>
                  <div className="md:space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" required className="bg-background/50 text-white" />
                  </div>
                  <div className="md:space-y-2">
                    <Label htmlFor="message" className="text-white">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={5}
                      required
                      className="bg-background/50 resize-none text-white"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting || isSuccess}>
                    {isSuccess ? (
                      <>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        Enviado!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">

              {socialLinks.map((social) => (
              <Card key={social.name} className="glass border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 ">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <social.icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-wrap flex-col">
                      <h3 className="font-bold text-sm md:text-lg mb-2 text-white">{social.name}</h3>
                      <div className="flex flex-wrap gap-2 items-center wrap-break-word break-all truncate max-w-full">
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted text-xs md:text-lg hover:text-primary transition-colors">
                          {social.name === "Gmail" ? social.url.replace("mailto:", "") : social.url.replace("https://", "")}
                      </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              ))}

              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-muted leading-relaxed text-xs md:text-lg">
                  <strong className="text-foreground">Tiempo de respuesta:</strong> Generalmente respondo dentro de 24
                  horas durante días laborables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </>
  )
}
