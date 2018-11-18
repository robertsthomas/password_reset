import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import './Form.css';

export default class Form extends Component {

    login = e => {
        e.preventDefault();
        this.props.fakeAuth.authenticate(() => {
            this.props.handleRedirect(true)
        });
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <p>(click on forgot password)</p>
                <div className='loginbox'>
                    <h1>Login</h1>
                    <form>
                        <p>Username</p>
                        <input type='text' name='' placeholder='Enter username' />
                        <p>Password</p>
                        <input type='password' name='' placeholder='Enter password' />
                        <button onClick={this.login}>Login</button>
                        <Link to='/forgot'>Forgot your password?</Link><br />
                        <Link to='#'>Create an Account!</Link>
                    </form>
                </div>
            </div>
        )
    }
}
