"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FaBars } from "react-icons/fa"

export default function Nav(){

const pathname = usePathname()

const [menuOpen,setMenuOpen]=useState(false)

return(

<nav>

<div
className="menu-icon"
onClick={()=>setMenuOpen(!menuOpen)}
>

<FaBars/>

</div>

<ul className={menuOpen ? "nav-links active" : "nav-links"}>

<li>
<Link
href="/"
className={pathname === "/" ? "active" : ""}
>
HOME
</Link>
</li>

<li>
<Link
href="/About"
className={pathname === "/About" ? "active" : ""}
>
ABOUT
</Link>
</li>

<li>
<Link
href="Skills"
className={pathname === "/Skills" ? "active" : ""}
>
SKILLS
</Link>
</li>

<li>
<Link
href="/Projects"
className={pathname === "/Projects" ? "active" : ""}
>
PROJECTS
</Link>
</li>

<li>
<Link
href="/Contact"
className={pathname === "/Contact" ? "active" : ""}
>
CONTACT
</Link>
</li>

</ul>

</nav>

)

}