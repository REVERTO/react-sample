import React, { Component } from 'react'
import { withRouter } from 'react-router'
import firebase from '../../firebase'

class Home extends Component {

  handleToLanding = () => {
    this.props.history.push('/')
  }

  componentWillMount() {
    const user = firebase.auth().currentUser
    if (user) {
      console.log('User is signed in.')
    } else {
      console.log('No user is signed in.')
      this.handleToLanding()
    }
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>Welcome to ようこそ</p>
        <button
          onClick={() => {
            console.log('The link was clicked.')
            this.handleToLanding()
          }}
        >
          Click me
        </button>
      </div>
    )
  }

}

// export default Home
export default withRouter(Home)
