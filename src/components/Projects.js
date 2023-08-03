import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';


// import { resumeData } from 'resumeData';


// export default class Project extends Component {
// render() {
//     let { id } = useParams();
//     let resumeData = this.props.resumeData;
//     return (
        
//         <div className="row">
//             <h1><Link to='/'>PROJECT EXAMPLE</Link></h1>
//             {
//             resumeData.projects && resumeData.projects.map((item, i)=>{
//             return(
//             <h1>{item.ProjectName}</h1>
//             )
//             })
//             }
//         </div>
//     )}} 

// initial={{ y : "-100%"}} animate={{ y: "0%"}} transition={{ duration: 1 }} exit={{ y: 300, opacity: 0 }}

    export function Projects(props) {
        let { id } = useParams();
        let resumeData = props.resumeData;
        return (
            <motion.section className='project section' initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 1 }} exit={{ y: 300, opacity: 0 }}>
            {
                resumeData.projects && resumeData.projects.filter(project => project.CustomURL === id).map((project, i) => {
                    return (
                        <div>
                        <div className="row cover" key={i}>
                        <motion.h1 animate={{ y:0, opacity:1 }} initial={{y: "100%", opacity: 0}} transition={{ delay: 1.5, duration: 0.5}}><HashLink to='/#projects'>{project.ProjectName}</HashLink></motion.h1>
                        <h4>{project.JD}</h4>
                        <motion.img src={`../${project.ProjectCover}`} className="project-cover" alt='../images/UCSD-Emblem.png' animate={{ y:0, opacity:1 }} initial={{y: "100%", opacity: 0}} transition={{ delay: 1.5, duration: 1}}/> 

                        </div>
                        <div className="row overview-title">
                            <h2>Project Overview</h2>
                        </div>
                        <div className="row overview">
                            <p>{project.ProjectOverview}</p>
                            <img src={`../${project.ProjectOverviewImage}`} className="project-overview-image" alt='../images/UCSD-Emblem.png'/>
                        </div>
                        
                        </div>
                    )
                })
            }
            <HashLink to='/#projects'>
                <motion.div className="arrowCol" initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 1, delay: 1.5}}>
                <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
                </div>
                </motion.div>
                </HashLink>
            </motion.section>
        );
    }