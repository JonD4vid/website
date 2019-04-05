import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Card, Container, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';
import image from '../assets/male.png';


class Home extends Component {
    render() {
        return (
            <Container>
                <div className="head">
                <Jumbotron>
                <h2>Welcome to Jon's Sandbox!</h2>
                    <p>We'll be building from scratch and connecting using php/node js very soon</p>

                    <Link to="/about">
                <Button variant="outline-primary">About</Button>
             </Link>

                <Link to="/news">
                <Button variant="outline-secondary">News</Button>    
                </Link>
                </Jumbotron>


        <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
                <Card style={{ width: '18rem', borderRadius: '15px',  }}>
                  <Card.Body>
                    <Image src={image} roundedCircle={true} className="profile-pic" alt="img" />
                       <Card.Title>Frank</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Developer</Card.Subtitle>
                     <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
             </Card>;
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
                <Card style={{ width: '18rem', borderRadius: '15px',  }}>
                  <Card.Body>
                    <Image src={image} roundedCircle={true} className="profile-pic" alt="img" />
                       <Card.Title>Frank</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Developer</Card.Subtitle>
                     <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
             </Card>;
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
                <Card style={{ width: '18rem', borderRadius: '15px',  }}>
                  <Card.Body>
                    <Image src={image} roundedCircle={true} className="profile-pic" alt="img" />
                       <Card.Title>Frank</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Developer</Card.Subtitle>
                     <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
             </Card>;
            </Col>
            
       </Row>
       </div>
       

            </Container>
            
        );
    }
}

export default Home;