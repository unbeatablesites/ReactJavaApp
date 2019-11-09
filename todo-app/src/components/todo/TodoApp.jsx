import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class TodoApp extends Component {
  render() {
    return (
      <div className='TodoApp'>
        <Router>
          <Route path='/' exact component={LoginComponent} />
          <Route path='/login' component={LoginComponent} />
          <Route path='/welcome' component={WelcomeComponent} />
          <Route component={ErrorComponent} />
        </Router>

        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return <div>This is the welcome Page</div>;
  }
}

function ErrorComponent() {
  return (
    <div> I don't know what to do. Please Contact Support @ Fran Uzoka </div>
  );
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Frank',
      password: '',
      loginFail: false,
      loginPassed: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClick = this.loginClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  loginClick() {
    if (this.state.userName === 'Frank' && this.state.password === 'Frank') {
      this.props.history.push('/welcome');
    } else {
      console.log('Failed Loging!');
      this.setState({ loginPassed: false });
      this.setState({ loginFail: true });
    }
  }

  render() {
    return (
      <div>
        {this.state.loginFail && <div>Invalid Credentials</div>}
        {this.state.loginPassed && <div>Login Successful!</div>}
        User Name:{' '}
        <input
          type='text'
          name='userName'
          value={this.setState.userName}
          onChange={this.handleChange}
        />
        Password:{' '}
        <input
          type='password'
          name='password'
          value={this.setState.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClick}>Login Button</button>
      </div>
    );
  }
}

export default TodoApp;
