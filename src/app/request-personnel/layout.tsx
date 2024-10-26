import Footer from "./../../components/layouts/footer"
import Navbar from "./../../components/layouts/navbar"
import { reactNode } from "./../../interface"
import { FC } from "react"


const Layout:FC<reactNode> =({children})=>{

    return(
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}

Layout.displayName = "Layout"
export default Layout
