import React from 'react';
import classes from './Header.module.css';
import Menu from './menu/Menu';

const Header = () => {
    return (
        <header className={classes.header}>
            logo 
            <Menu />
        </header>
    )
}

export default Header;