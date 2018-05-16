import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { TextField, RaisedButton } from 'material-ui'
// import * as firebase from 'firebase'
// import 'firebase/auth'

import firebase from '../../firebase'

// var config = {
//     apiKey: "AIzaSyCtL8D5vn5k0q43MnDbuynbDb1dWXZ5nFU",
//     authDomain: "auth-sample-5db27.firebaseapp.com",
//     databaseURL: "https://auth-sample-5db27.firebaseio.com",
//     projectId: "auth-sample-5db27",
//     storageBucket: "auth-sample-5db27.appspot.com",
//     messagingSenderId: "315231003307"
// };
// firebase.initializeApp(config)

class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mailaddress:'',
      password:''
    }
  }

  handleToHome = () => {
    this.props.history.push('/home')
  }

  render() {
    return (
      <div>
        <h2>SignIn</h2>
        <p>Enter email and password.</p>
        <TextField
          hintText="Enter your MailAddress"
          floatingLabelText="MailAddress"
          onChange = {(event,newValue) => this.setState({mailaddress:newValue})}
        />
        <br/>
        <TextField
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          onChange = {(event,newValue) => this.setState({password:newValue})}
        />
        <br/>
        <RaisedButton
          label="Submit"
          primary={true}
          onClick={() => {
            console.log('submit onclick')
            firebase.auth().signInWithEmailAndPassword(this.state.mailaddress, this.state.password)
            .then(() => {
              console.log(this.state)
              this.handleToHome()
            })
            .catch((error) => {
              console.log(error)
              alert(`${error.code}\n${error.message}`)
            })
          }}
        />
      </div>
    )
  }

}

export default withRouter(SignIn)
