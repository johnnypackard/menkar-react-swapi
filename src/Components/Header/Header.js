import React, { Component } from 'react';
import './Header.css';
import logo from './death-star.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">SWAPI Planets</h1>
            </header> 
        );
    }

}

export default Header;
