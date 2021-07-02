import React from 'react';

const Navbar = () => {
    return (
        <nav className = "main-nav">
            <ul className = "main-nav__list">
                <li className = "main-nav__item">
                    <a href="#" className = "main-nav__link">Profile</a>
                </li>
                <li className = "main-nav__item">
                    <a href="#" className = "main-nav__link">Messages</a>
                </li>
                <li className = "main-nav__item">
                    <a href="#" className = "main-nav__link">News</a>
                </li>
                <li className = "main-nav__item">
                    <a href="#" className = "main-nav__link">Music</a>
                </li>
                <li className = "main-nav__item">
                    <a href="#" className = "main-nav__link">Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;