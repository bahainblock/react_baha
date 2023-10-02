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

    let dialogs = [
        {id: 1, name: 'Danka'},
        {id: 2, name: 'Alina'},
        {id: 3, name: 'Alihan'},
        {id: 4, name: 'Sister'},
        {id: 5, name: 'Kirill'},
        {id: 6, name: 'Mama'},
    ]

    let messages = [
        {id:1, messages: 'Hi brr'},
        {id:2, messages: 'My name is'},
        {id:3, messages: 'Yoo'},
        {id:4, messages: 'Yoo'},
        {id:5, messages: 'Yoo'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name } id ={d.id} /> );
    let messagesElements = messages.map(m =><Message message ={m.messages}/>);

    return (
        <div className={s.dialogs}>
            <div className= {s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;