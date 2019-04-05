import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Image, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
import image from '../assets/male.png'

class CustomNavbar extends Component {
    render() {
        return (
           <Navbar default collapseOnSelect >
  
                   <Link to="/">
                   <Navbar.Brand>
                   <Row className="show-grid text-center">

                    <Image 
                    roundedCircle={true}
        src={image}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> 
      
      <p className="PageTitle">Sandbox</p> 
      </Row>

                 </Navbar.Brand>
                 </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link eventKey={1} componentClass={Link} href="/" to="/">Home</Nav.Link>
                        <Nav.Link eventKey={2} componentClass={Link} href="/about" to="/about">About</Nav.Link>
                        <Nav.Link eventKey={3} componentClass={Link} href="/news" to="/news">News</Nav.Link>
                        
                    </Nav> 
                </Navbar.Collapse>
           </Navbar>
        );
    }
}

export default CustomNavbar;