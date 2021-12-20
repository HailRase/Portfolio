import React from 'react';
import s from './Footer.module.css'
import sc from "../../common/syles/Container.module.css";
const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sc.container} ${s.footerContainer}`}>
                <h3>Yury Klimko</h3>
                <div className={s.elements}>
                    <div className={s.element}></div>
                    <div className={s.element}></div>
                    <div className={s.element}></div>
                    <div className={s.element}></div>
                </div>
                <h3>&copy; 2021 Все права защищены</h3>
            </div>
        </div>
    );
};

export default Footer;