import React from 'react';
import s from './Content.module.css'
import sc from './../../common/syles/Container.module.css'

const Content = () => {
    return (
        <div className={s.content}>
            <div className={`${sc.container} ${s.contentContainer}`}>
                <div className={s.welcome}>
                    <span>Hi There</span>
                    <h1>I am Yury Klimko</h1>
                    <p>Front-End Developer.</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
};

export default Content;