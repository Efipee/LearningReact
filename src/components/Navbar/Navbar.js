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
                    <svg aria-hidden="true"><use xlinkHref="#user-icon"></use></svg> User
                </a>
                <a href="#!" role="menuitem">
                    <svg aria-hidden="true"><use xlinkHref="#settings-icon"></use></svg> Settings
                </a>
                <i className="line" id="nav-current">current item</i>
            </nav>

            <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
                <symbol id="home-icon" viewBox="0 0 9 9">
                    <path d="M7.7 8.5c.3 0 .5-.2.5-.5V3.5c0-.1-.1-.3-.2-.4L4.8.6c-.2-.1-.5-.1-.7 0L1 3.1c-.1.1-.2.3-.2.4V8c0 .3.2.5.5.5h6.4zm-4.8-1h-1V3.8l2.6-2.1 2.6 2.1v3.7H2.9z"/>
                </symbol>
                <symbol id="favorites-icon" viewBox="0 0 9 9">
                    <path d="M4.2 8.4C3.8 8 .5 5.2.5 3 .5 1.6 1.6.5 2.9.5c.6 0 1.2.3 1.6.6.4-.4 1-.6 1.6-.6C7.4.5 8.5 1.6 8.5 3c0 2.2-3.3 5-3.7 5.3-.2.2-.5.2-.6.1zM2.9 1.5c-.7 0-1.4.7-1.4 1.5 0 1.1 1.8 3.1 3 4.3 1.1-1 3-3 3-4.3 0-.8-.6-1.5-1.4-1.5-.5 0-.9.3-1.2.7-.2.3-.6.3-.8 0-.3-.4-.7-.7-1.2-.7z"/>
                </symbol>
                <symbol id="settings-icon" viewBox="0 0 9 9">
                    <path d="M8.2 5.5l-.7-.4c.1-.4.1-.8 0-1.1l.7-.4c.1 0 .1-.1.1-.2-.2-.7-.5-1.2-.9-1.6-.1-.1-.2-.1-.2 0l-.7.3c-.3-.2-.6-.4-1-.6V.8c0-.1-.1-.2-.2-.2C4.7.5 4.1.5 3.5.6c-.1 0-.2.1-.2.2v.8c-.4.1-.7.3-1 .6l-.5-.5h-.2c-.4.5-.7 1-.9 1.6 0 .1 0 .2.1.2l.7.4c-.1.4-.1.8 0 1.1l-.7.5c-.1 0-.1.1-.1.2.2.6.5 1.1.9 1.5.1.1.2.1.2 0l.7-.4c.3.2.6.4 1 .6v.8c0 .1.1.2.2.2.6.1 1.2.1 1.8 0 .1 0 .2-.1.2-.2v-.8c.4-.1.7-.3 1-.6l.7.4h.2c.4-.4.7-.9.9-1.5-.2-.1-.2-.2-.3-.2zm-3.7.3c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3z"/>
                </symbol>
                <symbol id="bookmark-icon" viewBox="0 0 9 9">
                    <path d="M2.3.5h4.4c.5 0 .9.4.9.9v7.1L4.5 7.2 1.4 8.5V1.4c0-.5.4-.9.9-.9zm2.2 5.7l2.2 1V1.4H2.3v5.8l2.2-1z"/>
                </symbol>
                <symbol id="user-icon" viewBox="0 0 9 9">
                    <path d="M5.9 5.3c-.4 0-.7.3-1.4.3s-1-.3-1.4-.3c-1.2 0-2.1.9-2.1 2v.4c0 .4.3.8.8.8h5.5c.4 0 .7-.3.7-.7v-.5c0-1.1-.9-2-2.1-2zm1.4 2.5H1.8v-.5c0-.7.6-1.3 1.3-1.3.2 0 .6.3 1.4.3.8 0 1.2-.3 1.4-.3.7 0 1.3.6 1.3 1.3v.5zM4.5 5c1.2 0 2.3-1 2.3-2.3S5.8.4 4.5.4s-2.3 1-2.3 2.3S3.3 5 4.5 5zm0-3.7c.8 0 1.5.6 1.5 1.5s-.7 1.5-1.5 1.5S3 3.6 3 2.8s.7-1.5 1.5-1.5z"/>
                </symbol>
            </svg>
        </div>
    );
}

export default Navbar;
