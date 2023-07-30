import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <link rel="stylesheet" href=""/>
            <nav className="mobile-footer" role="menulist">
                <a href="/." role="menuitem" className="active" aria-describedby="nav-current">
                    <svg aria-hidden="true"><use xlinkHref="#home-icon"></use></svg> 
                </a>
                <a href="/.." role="menuitem">
                    <svg aria-hidden="true"><use xlinkHref="#star-icon"></use></svg> User
                </a>

                <i className="line" id="nav-current">current item</i>
            </nav>

            <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
                <symbol id="home-icon" viewBox="0 0 9 9">
                    <path d="M7.7 8.5c.3 0 .5-.2.5-.5V3.5c0-.1-.1-.3-.2-.4L4.8.6c-.2-.1-.5-.1-.7 0L1 3.1c-.1.1-.2.3-.2.4V8c0 .3.2.5.5.5h6.4zm-4.8-1h-1V3.8l2.6-2.1 2.6 2.1v3.7H2.9z"/>
                </symbol>
                <symbol id="star-icon" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.23 15.39L12 15.45l-3.22 1.94c-.38.23-.85-.11-.75-.54l.85-3.66-2.83-2.45c-.33-.29-.15-.84.29-.88l3.74-.32 1.46-3.45c.17-.41.75-.41.92 0l1.46 3.44 3.74.32c.44.04.62.59.28.88l-2.83 2.45.85 3.67c.1.43-.36.77-.74.54z"/>
                </symbol>
            </svg>
        </div>
    );
}

export default Navbar;
