export default function Projects()
{
    return(
        <section className="project" >

        <h1 className="project-title">projects<hr /></h1>
        
        <div className="project-container">

         <div className="p-box" id="box1">
                <img src="port.png" className="thumbnail" />
                             <img src="/portfolio.gif" className="gif" />
             <div className="p-hid">
        

            <h2>Portfolio</h2><br/>
            <b>Next.js • React • TypeScript • CSS </b><br/>
            <ul>
                <li>Designed and developed a personal portfolio website to showcase projects, research work, technical skills, and achievements.</li>
<li>Designed product listings, navigation, and interactive user interface components.</li>
<li>Continuously maintaining and expanding the portfolio to reflect ongoing learning and development</li>

            </ul>
            <a href="https://fw-bitefusion.vercel.app/h.html"><button>Live Site</button></a>
           <a href="https://github.com/fw-codes/E-commerce-Website"><button>Github Repo</button></a>
    </div>

</div>






            <div className="p-box" id="box1">
                <img src="/website.png" className="thumbnail" />
                             <img src="/web.gif" className="gif" />
             <div className="p-hid">
        

            <h2>E-commerce website</h2><br/>
            <b>HTML • CSS • JavaScript</b><br/>
            <ul>
                <li>Responsive e-commerce website built using HTML, CSS, and JavaScript.</li>
<li>Designed product listings, navigation, and interactive user interface components.</li>
<li>Focused on clean design, responsiveness, and user experience.</li>
<li>Implemented modern layouts and reusable styling techniques.</li>
<li>Currently extending the project into a full-stack application with database integration.</li>
            </ul>
            <a href="https://fw-bitefusion.vercel.app/h.html"><button>Live Site</button></a>
           <a href="https://github.com/fw-codes/E-commerce-Website"><button>Github Repo</button></a>
    </div>

</div>
            <div className="p-box" id="box2">
                <img src="/auto.png" className="thumbnail" />
                             <img src="/auto.gif" className="gif" />
                <div className="p-hid">
                   
            <h2>PricePilot</h2><br/>
            <b>Python • Selenium • Pandas</b><br/>
            <ul>
                <li>Automated product search and comparison using Python and Selenium.</li>
<li>A web scraping workflow to collect product names, prices, ratings, and URLs from e-commerce platforms.</li>
<li>Reduces manual effort involved in searching and comparing products online.</li>
<li>Utilized web automation and data extraction techniques for efficient data collection.</li>
<li>Built to simplify product research and purchasing decisions.</li>
            </ul>
            
            <a href="https://github.com/fw-codes/PricePilot"><button>Github Repo</button></a>
                </div>
            </div>
            <div className="p-box" id="box3">
                 <img src="drone.jpeg" className="thumbnail" />
                             <img src="/drone.gif" className="gif" />
                    <div className="p-hid">
                     
            <h2>Aerial Photography Drone</h2><br/>
            <b>HTML • CSS • JavaScript</b><br/>
            <ul>
                <li>Designed and developed an aerial photography drone for real-time aerial imaging and monitoring applications.</li>
<li>Integrated Arduino, flight controller, ESCs, BLDC motors, and ESP32-CAM module.</li>
<li>Utilized GPS-based positioning to support location tracking.</li>
<li>Implemented a live camera streaming system to capture and transmit aerial footage.</li>
<li>Published the research findings in the International Journal of Innovative Research in Technology (IJIRT).</li>
            </ul>
           <a href="paper.png"> <button>Research Paper</button></a>
            <a href="https://github.com/fw-codes/Aerial-Photography-Drone"><button>Github Repo</button></a>
                    </div>
                </div>
        </div>
        
        </section>
    )
}