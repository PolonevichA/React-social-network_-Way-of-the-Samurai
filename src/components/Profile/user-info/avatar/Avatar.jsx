import React from 'react';
import classes from './Avatar.module.css';
import avatar from '../../../../img/profile/avatar.png';

const Avatar = () => {
    return(
        <img  src={avatar} alt="" className={classes.avatar}/>
    )
}

export default Avatar;