import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
    return (
        <header>
          <Navbar className="header">
            <NavbarBrand href="/">100 Days of Code</NavbarBrand>
                <Nav className="githubLink" navbar>
                    <NavItem>
                        <NavLink href="https://lindseydickerson.github.io/100daysapp/">
                            Github 
                        </NavLink>
                    </NavItem>
                </Nav>
          </Navbar>
        </header>
    );
};

export default Header;