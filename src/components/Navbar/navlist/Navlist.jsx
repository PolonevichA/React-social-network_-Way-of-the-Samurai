import React from 'react';
import classes from './Navlist.module.css';

const Navlist = () => {
    return (
        <ul className ={classes.navlist}>
            <li><a href="">Мой профиль</a></li>
            <li><a href="">Диалоги</a></li>
        </ul>
    )
};

export default Navlist;