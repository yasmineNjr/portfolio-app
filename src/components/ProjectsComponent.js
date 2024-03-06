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
    const [isPreviousAvailable, setIsPreviousAvailable] = useState(false);
    const [isNextAvailable, setIsNextAvailable] = useState(true);
    
    function nextHandler() {
        let i = index;
        if(i < PROJECTS.length-1){
            i++;
            setIndex(i);
            setPreviousColor('#8e44ad');
            setIsPreviousAvailable(true);
            if(i === PROJECTS.length-1){
                setNextColor('#383838');
                setIsNextAvailable(false);
            }
        }
    }
    function previousHandler() {
        let i = index;
        if(i > 0){
            i--;
            setIndex(i);
            setNextColor('#8e44ad');
            setIsNextAvailable(true);
            if(i === 0){
                setPreviousColor('#383838');
                setIsPreviousAvailable(false);
            }
        }
    }

    return  (
        <div className={classes.main}>
            <h1>
                My Projects
            </h1>
            <div className={classes.maindiv}>
                <GrFormPrevious color={previousColor} size='2.5rem' className={classes.icon} onClick={previousHandler} 
                                style={isPreviousAvailable? {boxShadow: '0 0 10px #8e44ad', border: '1px solid #8e44ad' } :
                                                            {border: '1px solid #383838' }}/>
                <ProjectItem project={PROJECTS[index]} index={Number(index)+1} count={PROJECTS.length}/>
                <GrFormNext color={nextColor} size='2.5rem' className={classes.icon} onClick={nextHandler}
                            style={isNextAvailable? {boxShadow: '0 0 10px #8e44ad', border: '1px solid #8e44ad' } :
                                                    {border: '1px solid #383838' }}/>
            </div>
            
        </div>
    )
}

export default ProjectsComponent;
