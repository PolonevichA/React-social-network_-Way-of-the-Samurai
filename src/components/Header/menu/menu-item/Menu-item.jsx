import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Menu-item.module.css';

const MenuItem = (props) => {
    return (
        <li>
            <NavLink to={props.link}>{props.text}</NavLink>
        </li>
    )
}

export default MenuItem;