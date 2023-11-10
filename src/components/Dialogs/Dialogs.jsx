import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <img src={props.img} alt=""/>
            <NavLink to={'/dialogs/' + props.id}> {props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (

        <div className={s.dialog}> {props.message} </div>

    )
}


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name } id ={d.id} img={d.img}/> );
    let messagesElements = props.state.messages.map(m =><Message message ={m.messages}/>);

    let newPost = React.createRef();
    let postAdd = () => {
        let text = newPost.current.value;
            alert(text)
    }
    return (

        <div className={s.dialogs}>

            <div className= {s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                <textarea ref={newPost}></textarea>
                </div>
                <div>
                <button onClick={postAdd}>Post add</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;