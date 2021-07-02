import React from 'react';
import classes from './User-info.module.css';
import Avatar from './avatar/Avatar';

const UserInfo = () => {
    return (
        <section className ={classes.user}>
            <Avatar />
            <span>Name</span>
            <span>Surname</span>
            <span>Age</span>
        </section>
    )
}

export default UserInfo;