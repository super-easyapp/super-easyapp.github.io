import React from 'react';
import logo from '../images/logo.svg';
import avatar from '../images/AvatarWithBadge.png';

const Header = () => (
    <div className="App-header">
        <img src={logo} className="App-logo" alt="quix" />

        <div className="Account-Info">
            <span>$0.00</span>
            <img src={avatar} className="Avatar" alt="avatar" />
        </div>

    </div>
);

export default Header;