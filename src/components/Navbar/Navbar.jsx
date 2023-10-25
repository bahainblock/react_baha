import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sitebar from "../Sitebar/Sitebar";

const Navbar = (props) => {
    let friends= props.state.friends

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="profile">Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news'>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music'>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings'>Settings</NavLink>
        </div>
        <Sitebar friends={friends}/>
    </nav>
}

export default Navbar;