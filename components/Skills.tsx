"use client"

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaPython,
  FaGithub,
  
} from "react-icons/fa"

import {
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiOpencv,
  SiJupyter
} from "react-icons/si"

export default function Skills() {
  const skills = [
    { name: "HTML", className: "html", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", className: "css", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", className: "js", icon: <FaJs color="#F7DF1E" /> },
    { name: "React", className: "react", icon: <FaReact color="#61DAFB" /> },
    { name: "Node JS", className: "node", icon: <FaNodeJs color="#339933" /> },
    { name: "PHP", className: "php", icon: <FaPhp color="#777BB4" /> },
    { name: "Java", className: "java", icon: <FaJava color="#f89820" /> },
    { name: "Python", className: "python", icon: <FaPython color="#3776AB" /> },
    { name: "C++", className: "cpp", icon: <SiCplusplus color="#00599C" /> },
    { name: "SQL", className: "sql", icon: <SiMysql color="#4479A1" /> },
    { name: "MongoDB", className: "mongo", icon: <SiMongodb color="#47A248" /> },
    { name: "OpenCV", className: "opencv", icon: <SiOpencv /> },
    { name: "Jupyter", className: "jupyter", icon: <SiJupyter color="#F37626" /> },
    { name: "GitHub", className: "github", icon: <FaGithub color="white" /> }
  ]

  return (
    <section className="skills">
      <div className="skills-title">
        <h1>skills</h1>
        <hr />
        <br />
      </div>

      <div className="skills-box">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`icon ${skill.className}`}
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}