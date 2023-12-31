import type { FooterButton, NavItem } from "@/types"
import { Facebook, Twitter } from "lucide-react"

const links = {
  twitter: "https://twitter.com",
  facebook: "https://facebook.com",
}

export const siteConfig = {
  url: "https://www.edumentorme.com",
  mainNav: [
    {
      name: "EMM",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about_us",
    },
    {
      name: "Contact Us",
      href: "/contact_us",
    },
    {
      name: "Products And Services",
      href: "/products_and_services",
    },
    {
      name: "Account",
      href: "/account",
    },
  ] satisfies NavItem[],
  authPages: [
    {
      name: "Account",
      href: "/account",
    },
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "Sign Up",
      href: "/sign_up",
    },
  ] satisfies NavItem[],
  features: [
    {
      name: "Todos",
      href: "/todos",
    },
    {
      name: "Search",
      href: "/search",
    },
    {
      name: "Study Timer",
      href: "/study_timer",
    },
  ] satisfies NavItem[],
  footer: [
    {
      name: "Facebook",
      href: links.facebook,
      icon: <Facebook className="text-blue-600" />,
    },
    {
      name: "Twitter",
      href: links.twitter,
      icon: <Twitter className="text-blue-600" />,
    },
  ] satisfies FooterButton[],
}

export type SiteConfig = typeof siteConfig
