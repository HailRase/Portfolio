import React from 'react';
import s from './Projects.module.css'
import sc from './../../common/syles/Container.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sc.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My projects</h2>
                <div className={s.projects}>
                        <Project/>
                        <Project/>
                        <Project/>
                </div>
            </div>
        </div>
    );
};

export default Projects;