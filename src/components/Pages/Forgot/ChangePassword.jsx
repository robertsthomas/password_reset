import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import '../../Form/Form.css';

export default class Form extends Component {

    login = e => {
        e.preventDefault();
        return (
            <Redirect to='/login' />
        )
    }

    render() {
        console.log(this.props)
        return (
            <div className='loginbox'>
                <h1>Change Password</h1>
                <form>
                    <p>New Password</p>
                    <input type='password' name='' placeholder='Choose a new pasword' autoComplete='off' />
                    <br/>
                    <input type='password' name='' placeholder='ReEnter password' autoComplete='off' />
                    <Link to='/login'>Go to login</Link>
                </form>
            </div>
        )
    }
}
