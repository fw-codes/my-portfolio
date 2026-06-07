"use client"
import{
  FaEnvelopeOpen
} from "react-icons/fa6"

export default function Home() {
  return (
    <main>
     
      <section className="hero">
           <div className="hero-text">
            <p className="hi">hii, i am</p>
            <h1>FAARIAH WASEEM</h1>
            <p className="role">a Computer Engineering undergrad</p>
            <p className="intro">Passionate about exploring various domains including IoT, software, hardware, web development, AI, ML, etc.</p>
           <a href="mailto:faariahwaseem@gmail.com"><button className="Button">Get in touch <FaEnvelopeOpen/></button></a> 
            </div>
            <div className="sprite">
               <img className="sprite" src="/img2.png" />
            </div>

        </section>
    </main>
  )
}