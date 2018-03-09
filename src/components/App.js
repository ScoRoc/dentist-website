import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// Can also write on separate lines like the below
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';

let procedures = ['Root Canal', 'Crown', 'Checkup', 'Cavity Filling', 'TOOTH REMOVAL']

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to='/'>Go to Home Page</Link>
            <Link to='/procedures'>See our Procedures</Link>
            <Link to='/contact'>Contact Us!</Link>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/procedures' component={() => <Procedures procedures={procedures} />} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
