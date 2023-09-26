import React from "react";
import s from './Dialogs.module.css';
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className= {s.dialogsItems}>
                <div className={s.dialog}>
                    Danka
                </div>
                <div className={s.dialog}>
                    Alina
                </div>
                <div className={s.dialog}>
                    Alihan
                </div>
                <div className={s.dialog}>
                    Sister
                </div>
                <div className={s.dialog}>
                    Kirill
                </div>
                <div className={s.dialog}>
                    Mama
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