import React from "react";
import Navbar from "./layouts/Navbar";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (<div className=" mx-auto px-16">
        <Navbar/>
       <div className="mt-[100px]">{children}</div>
    </div>);
};

export default Layout;

