import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User-dialogs.module.css'
import User from './user-dialog/User';

const Userbar = () => {
    return (
        <section className={classes.users}>
            <User name='Ivan' id='1' />
            <User name='Sasha' id='2' />
            <User name='Andrey' id='3' />
        </section>
    )
}

export default Userbar;