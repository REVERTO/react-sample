// react
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

// components
// import Home from './components/Home'
// import About from './components/About'
// import Friends from './components/Friends'
import Landing from './components/Landing'
import SignIn from './components/SignIn'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Landing</Link></li>
            <li><Link to='/signin'>SignIn</Link></li>
          </ul>
          <hr />

          <Route exact path='/' component={Landing} />
          <Route path='/signin' component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
