import React from 'react';
import s from './Project.module.css'

const Project = () => {
    return (
        <div className={s.project}>
            <div className={s.image}>
                <button className={s.button}>Смотреть</button>
            </div>
            <div className={s.description}>
                <h4>Название проект</h4>
                <span>Краткое описание Краткое описание Краткое описание Краткое описаниеКраткое описаниеКраткое описаниеКраткое описание</span>
            </div>
        </div>
    );
};

export default Project;