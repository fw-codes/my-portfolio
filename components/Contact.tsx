"use client"
import { FaDownload, FaEnvelopeOpen } from "react-icons/fa"
import{
    FaLinkedin,
    FaGithub


} from "react-icons/fa6"
export default function Contact()
{
    return(
            <section className="contact">
                <h1 className="contact-title">contact info<hr /></h1>
              <h2 className="big">Code.     Create.     Innovate.<br /></h2><p>Let's turn ideas into reality.<br/>Always open to discussing technology,
projects,<br/>research opportunities, and collaborations.<br/><br/>Feel Free to reach out.</p>
               <div className="contact-btn"> 
                <div className="btn1">
                    <a href="/Faariah_Resume.pdf"><button >Resume <FaDownload/></button></a>
                </div>
                <div className="btn2">
                    <a href="mailto:faariahwaseem@gmail.com"><button >Email Me <FaEnvelopeOpen/></button></a>
                </div>
                </div>
                <div className="last-icons">
                    <div className="i1"><a href="https://www.linkedin.com/in/faariah-waseem">
                    <FaLinkedin color="#0A66C2"/></a>
                    </div>
                    <div className="i2"><a href="https://github.com/fw-codes">
                    <FaGithub color="white"/></a>
                    </div>

                    
                </div>
            </section>
    )
}