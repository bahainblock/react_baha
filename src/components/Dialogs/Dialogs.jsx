import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}> {props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialog}> {props.message} </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className= {s.dialogsItems}>

                <DialogItem name= "Danka" id="1" />
                <DialogItem name= "Alina" id="2" />
                <DialogItem name= "Alihan" id="3" />
                <DialogItem name= "Sister" id="4" />
                <DialogItem name= "Kirill" id="5" />
                <DialogItem name= "Mama" id="6" />
            </div>
            <div className={s.messages}>
                <Message message = "Hi brr"/>
                <Message message = "My name is"/>
                <Message message = "Yoo"/>
                <Message message = "Yoo"/>
                <Message message = "Yoo"/>
                <Message message = "Yoo"/>
            </div>
        </div>
    )
}
export default Dialogs;