"use client"

import Three from "./Three"
import { FaEnvelopeOpen } from "react-icons/fa6"
import { useEffect, useState } from "react"

export default function Home() {
  const roles = [
    "Computer Engineering Undergrad",
    "Full Stack Developer",
    "AI/ML Enthusiast"
  ]

  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1))

        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200)
        }
      } else {
        setText(currentRole.substring(0, text.length - 1))

        if (text === "") {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 90 : 140)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <p className="hi">hii, i'm</p>
          <h1>FAARIAH WASEEM</h1>

          <p className="role">
           <span>{text}</span>
            <span className="cursor"></span>
          </p>

          <p className="intro">
            Passionate about exploring various domains including IoT,
            software, hardware, web development, AI, ML, etc.
          </p>

          <a href="mailto:faariahwaseem@gmail.com">
            <button className="Button">
              Get in touch <FaEnvelopeOpen />
            </button>
          </a>
        </div>

        <div className="sprite">
          <Three />
        </div>
      </section>
    </main>
  )
}