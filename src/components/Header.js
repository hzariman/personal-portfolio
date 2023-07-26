import React, { Component } from 'react';
export default class Header extends Component {
render() {
let resumeData = this.props.resumeData;
return (
<React.Fragment>
<header id="home">
<nav id="nav-wrap">
<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
<a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
<ul id="nav" className="nav">
<li className="current"><a className="smoothscroll" href="#home">Home</a></li>
<li><a className="smoothscroll" href="#about">About</a></li>
<li><a className="smoothscroll" href="#resume">Resume</a></li>
{/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
<li><a className="smoothscroll" href="#contact">Contact</a></li>
</ul>
</nav>
<div className="row banner">
<div className="banner-text">
<h1 className="responsive-headline">{resumeData.firstname} <span className = "nameSecond">{resumeData.lastname}</span>.</h1>
<h2 style={{color:'#fff', fontFamily:'sans-serif '}}>I am interested in <span className="word"></span>
</h2>
<hr/>
<ul className="background">
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
<ul className="social">
{
resumeData.socialLinks && resumeData.socialLinks.map(item =>{
return(
<li key={item.name}>
<a href={item.url} target=""><i className={item.className}></i></a>
</li>
)
}
)
}
</ul>
</div>
</div>
<p className="scrolldown">
<a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
</p>
</header>
</React.Fragment>
);
}
}