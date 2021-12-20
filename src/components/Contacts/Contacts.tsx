import React from 'react';
import s from './Contacts.module.css'
import sc from "../../common/syles/Container.module.css";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sc.container} ${s.contactsContainer}`}>
                <h2>Контакты</h2>
                <form className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea rows={8}></textarea>
                </form>
                <button className={s.button}>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;