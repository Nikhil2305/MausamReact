import React, { Component } from 'react';
import { Navbar, Nav, NavItem,  NavbarToggler, Collapse, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {

        return (
            <div>
            <Navbar className="header" dark expand="md" >
            <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" ><img src="./Images/logo.png" className="logo" alt="logo" /></NavbarBrand><span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                    <NavItem >
                        <NavLink className="text" to="/Home" > Home </NavLink>
                        <span> &emsp;&emsp;</span>
                    
                    </NavItem>
                    <NavItem>
                        <NavLink className="text" to="/About"> AboutUs </NavLink>
                        <span> &emsp;&emsp;</span>
                        
                    </NavItem>
                    <NavItem>
                        <NavLink className="text" to="/Airquality">Air-Quality </NavLink>
                        <span> &emsp;&emsp;</span>
                        
                    </NavItem>
                    <NavItem>
                        <NavLink className="text" to="/Checkweather"> Check-Weather </NavLink>
                        <span> &emsp;&emsp;</span>
                        
                    </NavItem>
                    {/* <NavItem>
                        <NavLink className="text" to="/News"> News </NavLink>
                        <span >&emsp;&emsp;</span>
                    </NavItem> */}
                    <NavItem>
                        <NavLink className="text" to="/Blog">BlogSlogs </NavLink>
                        <span >&emsp;&emsp;</span> 
                    </NavItem>
                    <NavItem>
                        <NavLink className="text" to="/Contact"> ContactUs </NavLink>
                        <span >&emsp;&emsp;</span>
                    </NavItem>
                </Nav>
                </Collapse>
                </div>
            </Navbar>
            </div>
        );
    }
}

export default Header;

