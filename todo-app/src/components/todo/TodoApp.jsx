import React, { Component } from 'react';

class TodoApp extends Component {
  render() {
    return (
      <div className='TodoApp'>
        <LoginComponent />
      </div>
    );
  }
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
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleChange(event) {
    // console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // handlePasswordChange(event) {
  //   console.log(event.target.value);
  //   this.setState({ password: event.target.value });
  // }

  loginClick() {
    if (this.state.userName === 'Frank' && this.state.password === 'Frank') {
      console.log('Successful Loging!');
      this.setState({ loginPassed: true });
      this.setState({ loginFail: false });
    } else {
      console.log('Failed Loging!');
      this.setState({ loginPassed: false });
      this.setState({ loginFail: true });
    }
  }

  render() {
    return (
      <div>
        <ShowInvalidCredentials loginFail={this.state.loginFail} />
        <ShowGoodCredentials loginPassed={this.state.loginPassed} />
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

function ShowInvalidCredentials(props) {
  if (props.loginFail === true) {
    return <div>Invalid Credentials</div>;
  } else {
    return null;
  }
}

function ShowGoodCredentials(props) {
  if (props.loginPassed === true) {
    return <div>Invalid Successful</div>;
  } else {
    return null;
  }
}

export default TodoApp;
