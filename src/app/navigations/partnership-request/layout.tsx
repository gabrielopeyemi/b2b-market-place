'use client'
import Footer from './../../../components/layouts/footer';
import Navbar from './../../../components/layouts/navbar';
import { OptionContext, OptionProvider } from './../../../context/selectContext';

import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {


  
    return (
        <OptionProvider>
            <Navbar />
           <div className='px-20'>
           
             {children}</div>
            <Footer />
        </OptionProvider>
    );
};

Layout.displayName = "Layout";

export default Layout;
