import React from 'react';
import s from './Skills.module.css'
import sc from './../../common/syles/Container.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sc.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'CSS'} description={'There must be descriptions There must be description'}/>
                    <Skill title={'JS/TS'} description={'There must be descriptions There must be description'}/>
                    <Skill title={'React/Redux'} description={'There must be descriptions There must be descriptionsdfaasdfasdf asd fasd fas df asdfasdf'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;