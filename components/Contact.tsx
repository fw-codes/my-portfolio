"use client"

import { FaDownload, FaEnvelopeOpen } from "react-icons/fa"
import {
  FaLinkedin,
  FaGithub
} from "react-icons/fa6"

export default function Contact() {
  const socials = [
    {
      icon: <FaLinkedin color="#0A66C2" />,
      link: "https://www.linkedin.com/in/faariah-waseem",
      className: "i1"
    },
    {
      icon: <FaGithub color="white" />,
      link: "https://github.com/fw-codes",
      className: "i2"
    }
  ]

  return (
    <section className="contact">
      <h1 className="contact-title">
        contact info
        <hr />
      </h1>

      <h2 className="big">
        Code. Create. Innovate.
        <br />
      </h2>

      <p>
        Let's turn ideas into reality.
        <br />
        Always open to discussing technology, projects,
        <br />
        research opportunities, and collaborations.
        <br />
        <br />
        Feel Free to reach out.
      </p>

      <div className="contact-btn">
        <a href="/Faariah_Resume.pdf">
          <button>
            Resume <FaDownload />
          </button>
        </a>

        <a href="mailto:faariahwaseem@gmail.com">
          <button>
            Email Me <FaEnvelopeOpen />
          </button>
        </a>
      </div>

      <div className="last-icons">
        {socials.map((social, index) => (
          <div key={index} className={social.className}>
       <a href={social.link}>
       {social.icon}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}