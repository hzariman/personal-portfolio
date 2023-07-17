import React, { Component } from 'react';
export default class Resume extends Component {
render() {
let resumeData = this.props.resumeData;
return (
<section id="resume">
    <div className="row education-title">
    <h1><span>Education</span></h1>
    </div>
<div className="row education">
{
resumeData.education && resumeData.education.map((item)=>{
return(
<div className="row item">
<div className="columns">
<img src={`${item.Image}`} className="education-img"/> 
</div>
<div className = "columns main">
<div className="twelve rows">
<h3>{item.UniversityName}</h3>
<p className="info">
{item.Major}
<span>&bull;</span> <em className="location">{item.Location}</em>
<span className="mobile-date"><span>&bull;</span> <em className="date">{item.StartDate} - {item.EndDate}</em></span>
</p>
<p className = "grades">
{item.Grades}
</p>
<p>
{item.AdditionalInfo}
</p>
</div>
</div>
<div className="columns date">
    <p><em className="date">{item.StartDate} - {item.EndDate}</em></p>
</div>
<br/>
</div>
)
})
}
</div>
<div className="row work-title">
    <h1><span>Work Experience</span></h1>
</div>

<div className="row work">
{
resumeData.work && resumeData.work.map((item) => {
return(
<div className="row item">
<div className="columns">
<img src={`${item.Image}`} className="education-img"/> 
</div>
<div className = "columns main">
<div className="twelve rows">
<h3>{item.JobTitle}</h3>
<p className="info">
{item.CompanyName}
<span>&bull;</span> <em className="location">{item.Location}</em>
<span className="mobile-date"><span>&bull;</span> <em className="date">{item.StartDate} - {item.EndDate}</em></span>
</p>
<p>
{item.BriefJD}
</p>
<p>
<ul className="work-list">
{item.Tasks.map((task) => {
return(
<li>{task}</li>
);
})}
</ul>
</p>
<div className="row skills">
{item.Skills.map((skill) => {
return(
<div className='columns skills'>
<div className='skill-circle'>{skill}</div>
</div>
);
})}
</div>
</div>
</div>
<div className="columns date">
    <p><em className="date">{item.StartDate} - {item.EndDate}</em></p>
</div>
<br/>
</div>

// {/* <div className="row item">
// <div className="twelve columns">
// <h3>{item.CompanyName}</h3>
// <p className="info">
// {item.specialization}
// <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
// <p>
// {item.Achievements}
// </p>
// </div>
// </div> */}

)
})
}
</div>
<div className="row work-title">
    <h1><span>Projects</span></h1>
</div>
<div className="row work"></div>
<div className="row skill">
<div className="three columns header-col">
<h1><span>Skills</span></h1>
</div>
<div className="nine columns main-col">
<p>
{resumeData.skillsDescription}
</p>
<div className="bars">
<ul className="skills">
{
resumeData.skills && resumeData.skills.map((item) => {
return(
<li>
{/* <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
</span><em>{item.skillname}</em> */}
</li>
)
})
}
</ul>
</div>
</div>
</div>
</section>
);
}
}