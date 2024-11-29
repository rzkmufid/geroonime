import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
// import About from "../components/About";
// import Contact from "../components/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout children={<Home />} />} />
      <Route path="/about" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="*" element={"Not Found"} />
    </Routes>
  );
};

export default AppRoutes;
