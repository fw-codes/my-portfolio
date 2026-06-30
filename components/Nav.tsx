"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FaBars } from "react-icons/fa"

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/About" },
    { name: "SKILLS", path: "/Skills" },
    { name: "PROJECTS", path: "/Projects" },
    { name: "CONTACT", path: "/Contact" }
  ]

  return (
    <nav>
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={pathname === link.path ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}