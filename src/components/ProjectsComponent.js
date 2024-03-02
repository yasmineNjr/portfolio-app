import { useState } from 'react';
import classes from './ProjectsComponent.module.css';
import PROJECTS from '../projects';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import ProjectItem from './ProjectItem';

const ProjectsComponent = () => {

    const [index, setIndex] = useState(0);
    const [nextColor, setNextColor] = useState('#8e44ad');
    const [previousColor, setPreviousColor] = useState('#383838');
    
    function nextHandler() {
        let i = index;
        if(i < PROJECTS.length-1){
            i++;
            setIndex(i);
            setPreviousColor('#8e44ad');
            if(i === PROJECTS.length-1){
                setNextColor('#383838');
            }
        }
    }
    function previousHandler() {
        let i = index;
        if(i > 0){
            i--;
            setIndex(i);
            setNextColor('#8e44ad');
            if(i === 0){
                setPreviousColor('#383838');
            }
        }
    }

    return  (
        <div className={classes.main}>
            <h1>
                My Projects
            </h1>
            <div className={classes.maindiv}>
                <GrFormPrevious color={previousColor} size='2.5rem' className={classes.icon} onClick={previousHandler}/>
                <ProjectItem project={PROJECTS[index]} index={Number(index)+1} count={PROJECTS.length}/>
                <GrFormNext color={nextColor} size='2.5rem' className={classes.icon} onClick={nextHandler}/>
            </div>
            
        </div>
    )
}

export default ProjectsComponent;
