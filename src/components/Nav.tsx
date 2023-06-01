import React from 'react';
import { Link } from 'react-router-dom';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import logo from '../assets/logo.png';

const Nav = () => {
    return (
        <div className="Nav">
            <div className="top-border"></div>

            <div className="logo-title">
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>

                <h1>
                    <Link to="/">CodaWaterMusic</Link>
                </h1>
            </div>

            <div className="menu">
                <ul>
                    <li>
                        <Link to="/music">MUSIC</Link>
                    </li>
                    <li>
                        <Link to="/license">LICENSE</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
            <MusicPlayer />
        </div>
    );
};

export default Nav;
