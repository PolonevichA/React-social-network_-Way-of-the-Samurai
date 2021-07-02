import React from 'react';
import classes from './Dialogs.module.css';
import Userbar from './userbar/User-dialogs';
import Window from './window-dialogs/Window';

const Dialogs = () => {
    return (
        <section className={classes.dialogs}>
            <Userbar />
            <Window />
        </section>
    )
}

export default Dialogs;