import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';

const User = (props) => {
    return (
        <NavLink activeClassName={classes.active} className={classes.user} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    )
}

export default User;