import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Redd</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Item>
                <LinkContainer to="/features">
                  <Nav.Link>Features</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              {/* <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
