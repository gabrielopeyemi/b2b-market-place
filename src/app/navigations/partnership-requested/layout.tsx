import Footer from './../../../components/layouts/footer'
import Navbar from './../../../components/layouts/navbar'
import { reactNode } from './../../../interface'
import React, { FC } from 'react'

const Layout:FC<reactNode> = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>

    </div>
  )
}

Layout.displayName = 'Layout'

export default Layout