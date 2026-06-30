export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      tech: "Next.js • React • TypeScript • CSS",
      image: "/port.png",
      gif: "/portfolio.gif",
      points: [
        "Designed and developed a personal portfolio website to showcase projects, research work, technical skills, and achievements.",
        "Designed product listings, navigation, and interactive user interface components.",
        "Continuously maintaining and expanding the portfolio to reflect ongoing learning and development."
      ],
      live: "https://fw-codes.vercel.app",
      github: "https://github.com/fw-codes/my-portfolio"
    },

    {
      title: "E-commerce Website",
      tech: "HTML • CSS • JavaScript",
      image: "/website.png",
      gif: "/web.gif",
      points: [
        "Responsive e-commerce website built using HTML, CSS, and JavaScript.",
        "Designed product listings, navigation, and interactive user interface components.",
        "Focused on clean design, responsiveness, and user experience.",
        "Implemented modern layouts and reusable styling techniques.",
        "Currently extending the project into a full-stack application with database integration."
      ],
      live: "https://fw-bitefusion.vercel.app/h.html",
      github: "https://github.com/fw-codes/E-commerce-Website"
    },

    {
      title: "PricePilot",
      tech: "Python • Selenium • Pandas",
      image: "/auto.png",
      gif: "/auto.gif",
      points: [
        "Automated product search and comparison using Python and Selenium.",
        "A web scraping workflow to collect product names, prices, ratings, and URLs from e-commerce platforms.",
        "Reduces manual effort involved in searching and comparing products online.",
        "Utilized web automation and data extraction techniques for efficient data collection.",
        "Built to simplify product research and purchasing decisions."
      ],
      github: "https://github.com/fw-codes/PricePilot"
    },

    {
      title: "Aerial Photography Drone",
      tech: "Arduino • ESP32 • IoT",
      image: "/drone.jpeg",
      gif: "/drone.gif",
      points: [
        "Designed and developed an aerial photography drone for real-time aerial imaging and monitoring applications.",
        "Integrated Arduino, flight controller, ESCs, BLDC motors, and ESP32-CAM module.",
        "Utilized GPS-based positioning to support location tracking.",
        "Implemented a live camera streaming system to capture and transmit aerial footage.",
        "Published the research findings in IJIRT."
      ],
      live: "/paper.png",
      github: "https://github.com/fw-codes/Aerial-Photography-Drone"
    }
  ]

  return (
    <section className="project">
      <h1 className="project-title">
        projects <hr />
      </h1>

      <div className="project-container">
        {projects.map((project) => (
          <div className="p-box" key={project.title}>
            <img src={project.image} className="thumbnail" alt={project.title} />
            <img src={project.gif} className="gif" alt={project.title} />

            <div className="p-hid">
              <h2>{project.title}</h2>
              <br />

              <b>{project.tech}</b>
              <br />

              <ul>
                {project.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              {project.live && (
                <a href={project.live}>
                  <button className="btn">Live Site</button>
                </a>
              )}

              <a href={project.github}>
                <button className="btn">Github Repo</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}