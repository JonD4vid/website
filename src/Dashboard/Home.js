import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Card, Container, Row, Col, Image, Button} from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Home.css';
import male from '../assets/male.png';
import image from '../assets/mic.png';


class Home extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#fff'}}>
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
     <div style={{backgroundColor: '#fafafa', justifyContent:'center', textAlign: 'center', margin:'2em', paddingTop: 30, paddingBottom: 30,}}>
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
            <div style={{backgroundColor:'#fafafa'}}>
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" style={{backgroundColor: 'green'}}>
            <h5 className="footer-title">Contact Me</h5>
            <p className="footer-subtitle">
                I'm always willing to network with developers all over the world! Let's Chat.
            </p>
          </MDBCol>
          <MDBCol md="6" style={{backgroundColor: 'red'}}>
          <MDBRow>

            <h5 className="title">Links</h5>
            <ul style={{display:'flex', alignItems:'flex-end', flexDirection: 'row'}}>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
</MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Jon Wilson
        </MDBContainer>
      </div>
    </MDBFooter>
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