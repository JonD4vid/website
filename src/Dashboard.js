import React, { Component } from 'react';
import logo from './logo.svg';
import './Dashboard';
import './Dashboard.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Dashboard/Home';
import About from './Dashboard/About';
import News from './Dashboard/News';
import Navbar from './Dashboard/CustomNavbar';

class Dashboard extends Component {
  render() {
    return (
          <Router>
            <div>
              <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/news" component={News} />
            </div>
          </Router>
    );
  }
}

export default Dashboard;
