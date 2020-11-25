import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { LinkContainer } from "react-router-bootstrap";

import "./NavigationBar.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Navbar collapseOnSelect expend="lg">
                <Navbar.Brand id="brand" href="/">
                  Redd
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                  <Nav className="ml-auto">
                    {/* <Nav.Item>
                <LinkContainer to="#features">
                  <Nav.Link>Features</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="#source">
                  <Nav.Link>Source</Nav.Link>
                </LinkContainer>
              </Nav.Item> */}
                    <Nav.Link className="linkItem" href="#features">
                      Features
                    </Nav.Link>
                    <Nav.Link className="linkItem" href="#features">
                      Stack
                    </Nav.Link>
                    <Nav.Link
                      className="linkItem"
                      href="https://github.com/LitePenguins/Redd"
                      target="_blank"
                    >
                      Source Code
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
