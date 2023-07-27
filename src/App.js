import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resumeData';

import { Route, Routes } from 'react-router-dom';
import { Projects } from './components/Projects';
import { AnimatePresence } from 'framer-motion';


class App extends Component {
render() {
return (
  <AnimatePresence>
    <Routes key={window.location.pathname}> 
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
}
export default App;


