import React from 'react'
import { BrowserRouter, Link, Redirect, withRouter, Route, Switch } from 'react-router-dom'

import App from '../App';
import Dashboard from '../components/Pages/Dashboard/Dashboard';
import ForgotPassword from '../components/Pages/Forgot/ForgotPassword';
import ChangePassword from '../components/Pages/Forgot/ChangePassword';
import Form from '../components/Form/Form';


// Sorry, its a little messy :)

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
            <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
          )
      }
    />
  )
}

const Auth = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <div>
        <button onClick={() => {
          fakeAuth.signout(() => history.push('/'))
        }}>
          Signout
            </button>
      </div>
    ) : (
        <p>Status: {fakeAuth.isAuthenticated ? 'Logged In' : 'Logged Out'}</p>
      )
)

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <div style={{width: 200, height: 150, background: 'lightGreen', textAlign: 'center', paddingTop: '40px'}}>
        <p><Link to='/'>Loop Home Page</Link></p>
        <p><Link to='/dashboard'>User Dashboard</Link></p>
        <Auth />
      </div>
      <Switch>
        <Route path='/' component={App} exact={true} />
        <PrivateRoute path='/dashboard' component={Dashboard} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/forgot' component={ForgotPassword} exact />
        <Route path='/changepassword' component={ChangePassword} exact />
      </Switch>
    </div>
  </BrowserRouter>
)


class Login extends React.Component {
  state = {
    redirect: false
  }

  handleRedirect = (redirect) => {
    this.setState({
      redirect
    })
  }

  render() {
    console.log(this.props)
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    let { redirect } = this.state;

    if (redirect) return <Redirect to={from} />;

    return (
      <div>
        <Form
          fakeAuth={fakeAuth}
          handleRedirect={this.handleRedirect}
        />
      </div>
    )
  }
}

export default AppRouter