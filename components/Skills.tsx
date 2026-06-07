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
FaGithub
} from "react-icons/fa"

import {
SiMongodb,
SiMysql,
SiCplusplus,
SiOpencv,
SiJupyter
} from "react-icons/si"

export default function Skills(){

return(

<section className="skills">

<div className="skills-title">

<h1>skills</h1>
<hr/>
<br />
</div>

<div className="skills-box">

<div className="icon html">
<FaHtml5 color="#E34F26"/>
<span>HTML</span>
</div>

<div className="icon css">
<FaCss3Alt color="#1572B6"/>
<span>CSS</span>
</div>

<div className="icon js">
<FaJs color="#F7DF1E"/>
<span>JavaScript</span>
</div>

<div className="icon react">
<FaReact color="#61DAFB"/>
<span>React</span>
</div>

<div className="icon node">
<FaNodeJs color="#339933"/>
<span>Node JS</span>
</div>

<div className="icon php">
<FaPhp color="#777BB4"/>
<span>PHP</span>
</div>

<div className="icon java">
<FaJava color="#f89820"/>
<span>Java</span>
</div>

<div className="icon python">
<FaPython color="#3776AB"/>
<span>Python</span>
</div>

<div className="icon cpp">
<SiCplusplus color="#00599C"/>
<span>C++</span>
</div>

<div className="icon sql">
<SiMysql color="#4479A1"/>
<span>SQL</span>
</div>

<div className="icon mongo">
<SiMongodb color="#47A248"/>
<span>MongoDB</span>
</div>

<div className="icon opencv">
<SiOpencv/>
<span>OpenCV</span>
</div>

<div className="icon jupyter">
<SiJupyter color="#F37626"/>
<span>Jupyter</span>
</div>

<div className="icon github">
<FaGithub color="white"/>
<span>GitHub</span>
</div>

</div>

</section>

)

}