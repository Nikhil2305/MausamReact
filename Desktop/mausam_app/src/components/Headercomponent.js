import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {

        return (
            <Navbar className="header" >
                <img src="./Images/logo.png" className="logo" alt="logo" />
                <Nav className="justify-content-end">
                    <NavItem >
                        <NavLink className="text" to="/Home"> Home </NavLink>
                        <span >&emsp;</span>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text" to="/About"> Our Aim </NavLink>
                        <span >&emsp;</span>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text" to="/Checkweather"> Checkweather </NavLink>
                        <span >&emsp;</span>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text" to="/Contact"> Contact </NavLink>
                        <span >&emsp;</span>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;

