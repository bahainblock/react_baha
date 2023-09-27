import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className= {s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'> Danka</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'> Alina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'> Alihan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'> Sister</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'> Kirill</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'> Mama</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi brr
                </div>
                <div className={s.message}>
                    Yoo
                </div>
                <div className={s.message}>
                    My name is
                </div>
            </div>
        </div>
    )
}
export default Dialogs;