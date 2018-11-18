import React, { Component } from 'react'

export default class ForgotPassword extends Component {

  state = {
    emailSent: false
  }

  emailSent = (cb) => {
    this.setState({ emailSent: true })
    setTimeout(cb, 4500)
  }

  render() {
    const {history} = this.props
    return (
      <div style={{textAlign: 'center'}}>
        {this.state.emailSent ? (
          <div>
          <p>Thanks! Check your email.</p>
          <small>(You checked your email and clicked the link. Sending you to change password page)</small>
          </div>
        ) : (
          <div>
            <p>Enter your email associated with your account.</p>
            <input type='email' name='' placeholder='Email' />
            <button onClick={() => {
              this.emailSent(() => history.push('/changepassword'))
            }}>Submit</button>
            </div>
        )}
      </div>
    )
  }
}
