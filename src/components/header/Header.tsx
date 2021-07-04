import React from 'react';
import logo from "../../logo.svg";
import './Header.css';

const Header: React.FC = () => {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
        </div>
    );
};

export default Header;
