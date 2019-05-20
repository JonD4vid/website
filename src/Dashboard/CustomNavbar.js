import React, { Component } from "react";
import { Navbar, Nav, NavItem, Image, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";
import image from "../assets/male.png";

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar className="navbar-container" sticky="top" collapseOnSelect>
                    <Link to="/">
                        <Navbar.Brand>
                            <Row className="logo">
                                <Image
                                    roundedCircle={true}
                                    src={image}
                                    width="35"
                                    height="35"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />

                                <h2 className="page-title">Sandbox</h2>
                            </Row>
                        </Navbar.Brand>
                    </Link>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="nav-list">
                        <Nav.Link eventKey={1} componentClass={Link} href="/" to="/">
                            <h3>Home</h3>
            </Nav.Link>
                        <Nav.Link
                            eventKey={2}
                            componentClass={Link}
                            href="/about"
                            to="/about"
                        >
                     <h3>About</h3>
            </Nav.Link>
                        <Nav.Link
                            eventKey={3}
                            componentClass={Link}
                            href="/news"
                            to="/news"
                        >
                        <h3>News</h3>

            </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;
