import React, { Component } from 'react';

import resumeData from './resumeData';
import AnimatedRoutes from './components/AnimatedRoutes';


class App extends Component {
render() {
return (
    <AnimatedRoutes resumeData={resumeData}/>
);
}
}
export default App;


