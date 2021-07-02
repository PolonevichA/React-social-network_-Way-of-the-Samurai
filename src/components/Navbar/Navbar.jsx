import React from 'react';
import classes from './Navbar.module.css';
import Navlist from './navlist/Navlist';

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <span className={classes.title}>Меню</span>
            <Navlist /> 
        </nav>
    )
}

export default Navbar;