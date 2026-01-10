import { Users, Smartphone, Lock, Bot, ExternalLink, Github, FileText } from 'lucide-react'
import type { IconType } from 'react-icons'

interface ProjectMetric {
  icon: IconType
  label: string
}

interface ProjectLink {
  label: string
  href: string
  icon: IconType
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

export const projects: Project[] = [
  {
    title: "NexoAI - Sistema POS con IA",
    description:
      "Aplicación móvil completa para gestión de negocios con asistente de IA integrado. Incluye POS, inventario, analytics y chat inteligente para automatizar tareas empresariales.",
    image: "img/nexoai-mockup.png",
    tags: ["React Native", "NestJS", "PostgreSQL", "Claude AI", "N8N"],
    metrics: [
      { icon: Users, label: "50+ usuarios beta" },
      { icon: Smartphone, label: "iOS & Android" },
      { icon: Lock, label: "Auth JWT + Roles" },
      { icon: Bot, label: "IA integrada" },
    ],
    links: [
      { label: "Ver Demo", href: "#", icon: ExternalLink  },
      { label: "Código Backend", href: "#", icon: Github },
      { label: "Caso de Estudio", href: "#", icon: FileText },
    ],
    featured: true,
  },
  {
    title: "Landing Page NexoAI",
    description:
      "Landing page moderna y responsive con React y TanStack Router para el marketing de NexoAI. Diseño optimizado para conversión con animaciones fluidas.",
    image: "img/landing-nexoai.png",
    tags: ["React", "TypeScript", "Tailwind", "Rsbuild"],
    metrics: [
      { icon: ExternalLink, label: "100% responsive" },
      { icon: Bot, label: "SEO optimizado" },
    ],
    links: [
      { label: "Ver Sitio", href: "#", icon: ExternalLink },
      { label: "Código Fuente", href: "#", icon: Github },
    ],
  },
  {
    title: "QRender - Proyectos Full-Stack",
    description:
      "Desarrollo de múltiples aplicaciones web empresariales con arquitectura MVC. Implementación de sistemas de gestión y dashboards administrativos.",
    image: "img/landing-nexoai.png",
    tags: ["Next.js", "PHP", "MySQL", "MVC"],
    metrics: [
      { icon: FileText, label: "3+ proyectos" },
      { icon: Users, label: "Arquitectura MVC" },
    ],
    links: [{ label: "Ver Detalles", href: "#", icon: FileText }],
  },
]
