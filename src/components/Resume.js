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
<div className="row projects-title">
    <h1><span>Projects</span></h1>
</div>
<div className="row projects">
    <div className="projects container">
{
resumeData.projects && resumeData.projects.map((item) => {
return(
    // <div className="row item">
    // <h4>{item.ProjectName}</h4>
    // <p className="info">
    // <span className="date">{item.StartDate} - {item.EndDate}</span>
    // </p>
    // </div>
    <div className="card">
        <div className='face title' style={{ background: `linear-gradient(to bottom, rgba(66, 76, 92, 0.8) 0%, rgba(66, 76, 92, 0.8) 100%), url('${item.Image}'), #333`, backgroundSize: 'contain'}}>
            <div className='row title header'>
            <p><em className="cardDate">{item.StartDate}</em></p>
            </div>
            <div className='row title name'>
            <h4>{item.ProjectName}</h4>
            </div>
            <div className='row title skill'>
            {item.Skills.map((skill) => {
            return(
            <div className='skill-circle'>{skill}</div>
            );
            })}
            </div>
        </div>
        <div className='face content'>
            <p>{item.JD}.</p>
            <div className='information'>
                <p> Click <span className='hl'>here</span> for more... </p>
            </div>
        </div>
    </div>
)})}
</div>
</div>
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

/* <div className="container">
<div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                    </h3>
                    <p>This is where I network and build my professional protfolio.</p>
                </div>
            </div>
        </div>
</div>
</div> */