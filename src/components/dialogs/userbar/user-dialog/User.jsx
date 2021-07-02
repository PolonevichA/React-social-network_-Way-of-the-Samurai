import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';

const User = (props) => {
    return (
        <div>
            <NavLink className={classes.user} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default User;