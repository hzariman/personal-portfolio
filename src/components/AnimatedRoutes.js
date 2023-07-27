import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './Header';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import ContactUs from './Contact';
import Footer from './Footer';
import { Projects } from './Projects';

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes(props) {
    let resumeData = props.resumeData;
    const location = useLocation();
  return (
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
        console.log(location.pathname);
    <Route path="/" element={
      <div className="App">
      <Header resumeData={resumeData}/>
      <About resumeData={resumeData}/>
      <Resume resumeData={resumeData}/>
      <Portfolio resumeData={resumeData}/>
      <ContactUs resumeData={resumeData}/>
      <Footer resumeData={resumeData}/>
    </div>
    }/>
    <Route path="/test" element={<Header resumeData={resumeData}/>}/>
    <Route path="/Projects/:id" element={<Projects resumeData={resumeData}/>}/>
    </Routes>

    </AnimatePresence>
  );
}

export default AnimatedRoutes;