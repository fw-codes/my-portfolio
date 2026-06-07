import "./globals.css"
import Navbar from "@/components/Nav"

export default function RootLayout({
children,
}:{
children:React.ReactNode
}){

return(

<html>
<body>

<Navbar/>

<div className="content">

{children}

</div>

</body>
</html>

)

}