import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Menu-item.module.css';

const MenuItem = (props) => {
    return (
        <li className={classes.item}>
            <NavLink className={classes.link} to={props.link}>{props.text}</NavLink>
        </li>
    )
}

export default MenuItem;