import React from "react";
import s from './Dialogs.module.css';
const Dialogs = (react) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Baha
                </div>
                <div className={s.dialog}>
                    Kirill
                </div>
                <div className={s.dialog}>
                    Alihan
                </div>
                <div className={s.dialog}>
                    Dani
                </div>
                <div className={s.dialog}>
                    IX
                </div>
                    <div className={s.messages}>
                    <div className={s.message}>Salam</div>
                    <div className={s.message}>Aym</div>
                    <div className={s.message}>Asal</div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;