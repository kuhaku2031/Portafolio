import { Github, Linkedin, Mail } from "lucide-react"
import type { IconType } from "react-icons"

interface SocialLink {
  name: string
  url: string
  icon: IconType
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/kuhaku2031",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/juancontrerasz",
    icon: Linkedin,
  },
  {
    name: "Gmail",
    url: "mailto:juanmanuelcontreraszapata33@gmail.com",
    icon: Mail,
  },
]