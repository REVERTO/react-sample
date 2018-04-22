// dependencies
import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, MenuItem, Drawer } from 'material-ui'

import Landing from './components/Landing'
import SignIn from './components/SignIn'

class App extends Component {

  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={ () => this.handleToggle() }
            >
              <MenuItem>Landing</MenuItem>
              <MenuItem>SignIn</MenuItem>
            </Drawer>
            <AppBar
              title="sample"
              onLeftIconButtonClick={ () => this.handleToggle() }
            />
            <ul>
              <li>
                <Link to='/'>Landing</Link>
              </li>
              <li>
                <Link to='/signin'>SignIn</Link>
              </li>
            </ul>
            <hr/>

            <Route path='/' component={Landing}/>
            <Route path='/signin' component={SignIn}/>
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }

}

export default App
