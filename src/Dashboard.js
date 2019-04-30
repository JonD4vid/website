import React, { Component } from 'react';
import logo from './logo.svg';
import './Dashboard';
import './Dashboard.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Dashboard/Home';
import About from './Dashboard/About';
import News from './Dashboard/News';
import Navbar from './Dashboard/CustomNavbar';
import { Container } from 'react-bootstrap';

class Dashboard extends Component {
  render() {
    return (
          <Router>

          {/*Remove Container tag to widen components to screen */}
            <Container>
              <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/news" component={News} />
            </Container>
          </Router>
    );
  }
}

export default Dashboard;
