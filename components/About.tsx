import Image from "next/image"
import { FiExternalLink } from "react-icons/fi";
export default function About() {

return(

<section id="About" className="about">

<h1 className="about-title">
about <hr />
</h1>


<div className="about-content">

<div className="about-left">

<div className="profile-wrapper">

<img 
src="portfolio.png"
alt="profile"

height={400}
className="profile-img"
/>



</div>

</div>


<div className="about-right">

<p className="about-intro">


hi! i'm Faariah Waseem, a pre-final year Computer Engineering student at Zakir husain college of Engineering & Technology, Aligarh Muslim University, India.
             <br />
            <br /> I thrive on engaging with captivating projects that not only challenge my knowledge but also introduce me to the dynamic and transformative technologies shaping our world.

            I like learning through projects and building things that help me understand concepts better.

</p>

<h3><b>Education:</b></h3>

<ul className="edu">

<li>Bachelors of Technology in Computer Engineering<br /><b>-ZHCET, Aligarh Muslim University, Pursuing...</b></li>
<li>Diploma in Engineering (Information Technology)<br /><b>-Women's Polytechnic, Aligarh Muslim University, CPI: 9.6</b></li>
<li>HighSchool (Class X)<br /><b>-St. Fidelis Sr. Sec. School, Grade: 95.6%</b></li>


</ul>
<h3><b>Awards & Honours:</b></h3>

<ul className="awd">

<li><b>Research Publication</b><br />Published a research paper on an Aerial Photography Drone in IJIRT.  <b><a href="https://ijirt.org/article?manuscript=167944" target="_blank" ><FiExternalLink />
</a></b></li>
<li><b>Rank Holder in Diploma in Engineering (Information Technology)</b><br />Women's Polytechnic, AMU - Recognized for outstanding academic performance and secured direct admission to BTech (Computer Engineering), AMU <a href="" target="_blank" ><FiExternalLink />
</a></li>
<li><b>University Merit Scholarship Recipient - AMU</b><br />Awarded for academic excellence across three consecutive diploma years. </li>
<li><b>Lead Ignite Transform (LIT) Scholar - AMU</b></li>
<li><b>2025 AMU Dallas Scholar</b><br />By the AMU Alumni Association Of Dallas Fort Worth, USA. <a href="https://drive.google.com/file/d/1xiIvkXjeNDMyzd2hy3ySarImThf2q7yL/view?usp=sharing" target="_blank" ><FiExternalLink />
</a></li>

</ul>

</div>

</div>

</section>

)

}






