import React, { Component } from 'react';

import resumeData from './resumeData';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Projects } from './components/Projects';
import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './components/AnimatedRoutes';


class App extends Component {
render() {
return (
    <AnimatedRoutes resumeData={resumeData}/>
);
}
}
export default App;


