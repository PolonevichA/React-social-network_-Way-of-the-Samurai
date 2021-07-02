import React from 'react';
import classes from './Menu.module.css';
import MenuItem from './menu-item/Menu-item';

const Menu = () => {
    return (
        <ul className={classes.menu}>
            <MenuItem link="/profile"  text ="Мой профиль"/>
            <MenuItem link="/dialogs"  text ="Диалоги"/>
            <MenuItem link="/news"  text ="Новости"/>
            <MenuItem link="/music"  text ="Музыка"/>
            <MenuItem link="/settings"  text ="Настройки"/>
        </ul>
    )
}

export default Menu;