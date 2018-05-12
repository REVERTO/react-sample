import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { TextField, RaisedButton } from 'material-ui'

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
            console.log(this.state)
            this.handleToHome()
          }}
        />
      </div>
    )
  }

}

export default withRouter(SignIn)
