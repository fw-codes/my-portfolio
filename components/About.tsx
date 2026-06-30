import Image from "next/image"
import { FiExternalLink } from "react-icons/fi"

export default function About() {
  const education = [
    {
      title: "Bachelors of Technology in Computer Engineering",
      place: "-ZHCET, Aligarh Muslim University, Pursuing..."
    },
    {
      title: "Diploma in Engineering (Information Technology)",
      place: "-Women's Polytechnic, Aligarh Muslim University, CPI: 9.6"
    },
    {
      title: "HighSchool (Class X)",
      place: "-St. Fidelis Sr. Sec. School, Grade: 95.6%"
    }
  ]

  const awards = [
    {
      title: "Research Publication",
      desc: "Published a research paper on an Aerial Photography Drone in IJIRT.",
      link: "https://ijirt.org/article?manuscript=167944"
    },
    {
      title: "Rank Holder in Diploma in Engineering (Information Technology)",
      desc: "Women's Polytechnic, AMU - Recognized for outstanding academic performance and secured direct admission to BTech (Computer Engineering), AMU"
    },
    {
      title: "University Merit Scholarship Recipient - AMU",
      desc: "Awarded for academic excellence across three consecutive diploma years."
    },
    {
      title: "Lead Ignite Transform (LIT) Scholar - AMU",
      desc: ""
    },
    {
      title: "2025 AMU Dallas Scholar",
      desc: "By the AMU Alumni Association Of Dallas Fort Worth, USA.",
      link: "https://drive.google.com/file/d/1xiIvkXjeNDMyzd2hy3ySarImThf2q7yL/view?usp=sharing"
    }
  ]

  return (
    <section id="About" className="about">
      <h1 className="about-title">
        about <hr />
      </h1>

      <div className="about-content">
        <div className="about-left">
          <div className="profile-wrapper">
            <Image
              src="/portfolio.png"
              alt="profile"
              width={300}
              height={400}
              className="profile-img"
            />
          </div>
        </div>

        <div className="about-right">
          <p className="about-intro">
            hi! i'm Faariah Waseem, a pre-final year Computer Engineering student
            at Zakir Husain College of Engineering & Technology, Aligarh Muslim
            University, India.
            <br />
            <br />
            I thrive on engaging with captivating projects that not only challenge
            my knowledge but also introduce me to the dynamic and transformative
            technologies shaping our world.
            <br />
            <br />
            I like learning through projects and building things that help me
            understand concepts better.
          </p>

          <h3><b>Education:</b></h3>

          <ul className="edu">
            {education.map((item, index) => (
              <li key={index}>
                {item.title}
                <br />
                <b>{item.place}</b>
              </li>
            ))}
          </ul>

          <h3><b>Awards & Honours:</b></h3>

          <ul className="awd">
            {awards.map((award, index) => (
              <li key={index}>
                <b>{award.title}</b>
                <br />
                {award.desc}

                {award.link && (
                  <a href={award.link} target="_blank">
                    <FiExternalLink />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}