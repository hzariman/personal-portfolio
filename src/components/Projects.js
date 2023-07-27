import React from 'react';
import { Link, useParams } from 'react-router-dom';
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

    export function Projects(props) {
        let { id } = useParams();
        let resumeData = props.resumeData;
        return (
            <motion.section className='project section' initial={{ x : "100%"}} animate={{ x: "0%"}} transition={{ duration: 1 }} exit={{ opacity: 1}}>
            <div className="row" >
            {
                resumeData.projects && resumeData.projects.filter(project => project.CustomURL === id).map((project, i) => {
                    return (
                        <div className="row" key={i}>
                        <h1><HashLink to='/#projects'>{project.ProjectName}</HashLink></h1>
                        <h3>{project.JD}</h3>
                        </div>
                    )
                })
            }
            </div>
            </motion.section>
        );
    }