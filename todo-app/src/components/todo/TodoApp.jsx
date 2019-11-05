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
      userName: 'Enter username',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleChange(event) {
    console.log(this.state);
    this.setState({
      [event.target.value]: event.target.value
    });
  }

  // handlePasswordChange(event) {
  //   console.log(event.target.value);
  //   this.setState({ password: event.target.value });
  // }

  render() {
    return (
      <div>
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
