'use client'
import Navbar from './../../../components/layouts/navbar';
import Footer from '../../../components/layouts/footer';
import { OptionContext, OptionProvider } from './../../../context/selectContext';

import React, { useContext } from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {


  
    return (
        <OptionProvider>
            <Navbar />
           <>
             {children}</>
            <Footer />
        </OptionProvider>
    );
};

Layout.displayName = "Layout";

export default Layout;
