import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Card, Container, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';
import male from '../assets/male.png';
import image from '../assets/mic.png';


class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron style={{}}>
                <h2>Welcome to Jon's Sandbox!</h2>
                    <p>We'll be building from scratch and connecting using php/node js very soon</p>

                    <Link to="/about">
                <Button variant="outline-primary">About</Button>
             </Link>

                <Link to="/news">
                <Button variant="outline-secondary">News</Button>    
                </Link>
                </Jumbotron>
                <div className="head">
                

<Container>
    <h3>Services</h3>

        <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
                <Card style={{ width: '18rem', borderRadius: '15px',  }}>
                  <Card.Body>
                    <Image src={male} roundedCircle={true} className="profile-pic" alt="img" />
                       <Card.Title>Frank</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Developer</Card.Subtitle>
                     <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
             </Card>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
                <Card style={{ width: '18rem', borderRadius: '15px',  }}>
                  <Card.Body>
                    <Image src={male} roundedCircle={true} className="profile-pic" alt="img" />
                       <Card.Title>Frank</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Developer</Card.Subtitle>
                     <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>

                </Card.Body>
             </Card>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
                <Card style={{ width: '18rem', borderRadius: '15px',  }}>
                  <Card.Body>
                    <Image src={male} roundedCircle={true} className="profile-pic" alt="img" />
                       <Card.Title>Frank</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Developer</Card.Subtitle>
                     <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>

                </Card .Body>
             </Card>
            </Col>
            
       </Row>
       </Container>
     </div>  
     <div style={{backgroundColor: '#fafafa', justifyContent:'center', textAlign: 'center', margin:'2em',}}>
     <h3>About Us</h3>

     <Row style={{ marginBottom: '2em'}}>
    <Col xs={6} md={6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
    <Col xs={6} md={6}>
    
    <Image 
src={image}
alt="React Bootstrap logo"
fluid={true}
style={{height:200, width: 200, borderRadius: 10,}}
/> 
      
      </Col>
  </Row>

  <Row>
    <Col xs={6} md={6}>
    
    <Image 
src={image}
alt="React Bootstrap logo"
fluid={true}
style={{height:200, width: 200, borderRadius: 10,}}
/> 
      
      </Col>
      <Col xs={6} md={6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>

  </Row>

     </div>


            <Container>
    <h3>Gallery</h3>

        <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
                <Card style={{ width: '18rem', borderRadius: '15px',  }}>
                  <Card.Body>
                    <Image src={male} roundedCircle={true} className="profile-pic" alt="img" />
                       <Card.Title>Frank</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Developer</Card.Subtitle>
                     <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
             </Card>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
                <Card style={{ width: '18rem', borderRadius: '15px',  }}>
                  <Card.Body>
                    <Image src={male} roundedCircle={true} className="profile-pic" alt="img" />
                       <Card.Title>Frank</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Developer</Card.Subtitle>
                     <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>

                </Card.Body>
             </Card>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
                <Card style={{ width: '18rem', borderRadius: '15px',  }}>
                  <Card.Body>
                    <Image src={male} roundedCircle={true} className="profile-pic" alt="img" />
                       <Card.Title>Frank</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Developer</Card.Subtitle>
                     <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>

                </Card .Body>
             </Card>
            </Col>
            
       </Row>
       </Container>

       <div style={{backgroundColor:'#fff'}}>
            <div style={{backgroundColor:'#000c20'}}>
<Container style={{justifyContent: 'center', display: 'flex', color: '#fff'}}>
  <Row>
    <Col  xs={12} sm={6} className="footer-nav">1 of 2</Col>
    <Col xs={12} sm={6} className="footer-nav">2 of 2</Col>
  </Row>
  <Row>
    <Col  xs={12} sm={4} >1 of 3</Col>
    <Col xs={12} sm={4} style={{ flexDirection: 'row'}}>
<p>FB</p>
<p>LinkedIn</p>
<p>Instagram</p>
    </Col>
    <Col xs={12} sm={4}>3 of 3</Col>
  </Row>
  </Container>
            </div>
            </div>

        </div>
        );
    }
}

export default Home;

const socialMediaIcons = [
  {
    url: 'https://github.com/andrewgbliss',
    className: 'fa-github-square',
  },
  {
    url: 'https://gitlab.com/andrewgbliss',
    className: 'fa-gitlab',
  },
  {
    url: 'https://www.npmjs.com/~andrewgbliss',
    className: 'fa-npm',
  },
];