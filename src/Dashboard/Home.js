import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Card, Container, Row, Col, Image, Button} from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Home.css';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import male from '../assets/male.png';
import image from '../assets/mic.png';


class Home extends Component {
    render() {
        return (
          <Container style={{ backgroundColor: "#fff" }}>
            <Container className="header" fluid>
              <h2>Welcome to Jon's Sandbox!</h2>
              <p>
                We'll be building from scratch and connecting using
                php/node js very soon
              </p>

              <Link to="/about">
                <Button variant="outline-primary">About</Button>
              </Link>

              <Link to="/news">
                <Button variant="outline-secondary">News</Button>
              </Link>
            </Container>
            <div className="head">
              <Container className="services-container">
                <h3 >Services</h3>

                <Row style={{ flex: 1, justifyContent: "center" }}>
                  <Col xs={12} sm={4} className="person-wrapper">
                    <Card style={{ borderRadius: "15px" }}>
                      <Card.Body className="card-text">
                        <Image
                          src={male}
                          roundedCircle={true}
                          className="profile-pic"
                          alt="img"
                        />
                        <Card.Title>Frank</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Developer
                        </Card.Subtitle>
                        <Card.Text>
                          Some quick example text to build on the card
                          title and make up the bulk of the card's
                          content.
                        </Card.Text>
                        {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} sm={4} className="person-wrapper">
                    <Card style={{ borderRadius: "15px" }}>
                      <Card.Body className="card-text">
                        <Image
                          src={male}
                          roundedCircle={true}
                          className="profile-pic"
                          alt="img"
                        />
                        <Card.Title>Frank</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Developer
                        </Card.Subtitle>
                        <Card.Text>
                          Some quick example text to build on the card
                          title and make up the bulk of the card's
                          content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} sm={4} className="person-wrapper">
                    <Card style={{ borderRadius: "15px" }}>
                      <Card.Body className="card-text">
                        <Image
                          src={male}
                          roundedCircle={true}
                          className="profile-pic"
                          alt="img"
                        />
                        <Card.Title>Frank</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Developer
                        </Card.Subtitle>
                        <Card.Text>
                          Some quick example text to build on the card
                          title and make up the bulk of the card's
                          content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
            <div
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: "#fafafa",
                justifyContent: "center",
                textAlign: "center",
                margin: "2em",
                paddingTop: 30,
                paddingBottom: 30
              }}
            >
              <h3>About Us</h3>

              <Row style={{ marginBottom: "1em", textAlign: "left", marginTop: '5%', }}>
                <Col xs={6} md={6}>
                <h4 className="text-one">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </h4>
                </Col>
                <Col xs={6} md={6}>
                  <Image
                    src={image}
                    alt="React Bootstrap logo"
                    fluid={true}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 20
                    }}
                  />
                </Col>
              </Row>

              <Row style={{ marginBottom: "2em", textAlign: "left" }}>
                <Col xs={6} md={6}>
                  <Image
                    src={image}
                    alt="React Bootstrap logo"
                    fluid={true}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 20
                    }}
                  />
                </Col>
                <Col xs={6} md={6}>
                  <h4 className="text-two">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </h4>
                </Col>
              </Row>
            </div>

            <Container>
              <h3>Gallery</h3>

              <Row>
                <Col xs={12} sm={4} className="person-wrapper">
                  <Card style={{ borderRadius: "15px" }}>
                    <Card.Body className="card-text">
                      <Image
                        src={male}
                        roundedCircle={true}
                        className="profile-pic"
                        alt="img"
                      />
                      <Card.Title>Frank</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Developer
                      </Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card
                        title and make up the bulk of the card's
                        content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={12} sm={4} className="person-wrapper">
                  <Card style={{ borderRadius: "15px" }}>
                    <Card.Body className="card-text">
                      <Image
                        src={male}
                        roundedCircle={true}
                        className="profile-pic"
                        alt="img"
                      />
                      <Card.Title>Frank</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Developer
                      </Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card
                        title and make up the bulk of the card's
                        content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={12} sm={4} className="person-wrapper">
                  <Card style={{ borderRadius: "15px" }}>
                    <Card.Body className="card-text">
                      <Image
                        src={male}
                        roundedCircle={true}
                        className="profile-pic"
                        alt="img"
                      />
                      <Card.Title>Frank</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Developer
                      </Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card
                        title and make up the bulk of the card's
                        content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>

            <div>
              <div>
                <MDBFooter className="font-small pt-4 mt-4">
                  <Row>
                    <Col xs={12} sm={4} className="person-wrapper" />

                    <Col xs={12} sm={4} className="person-wrapper">
                      <ul
                        style={{
                          textAlign: "center",
                          listStyle: "none"
                        }}
                      >
                        <li className="list-unstyled">
                          <IoLogoFacebook size={20} color={"#000c20"} />
                        </li>
                        <li className="list-unstyled">
                          <IoLogoInstagram
                            size={20}
                            color={"#000c20"}
                          />
                        </li>
                        <li className="list-unstyled">
                          <IoLogoTwitter size={20} color={"#000c20"} />
                        </li>
                      </ul>
                    </Col>

                    <Col xs={12} sm={4} className="person-wrapper" />
                  </Row>
                  <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                      &copy; {new Date().getFullYear()} Copyright: Jon
                      Wilson
                    </MDBContainer>
                  </div>
                </MDBFooter>
              </div>
            </div>
          </Container>
        );
    }
}

export default Home;
