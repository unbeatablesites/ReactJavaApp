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
  }

  handleUserChange(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        User Name:{' '}
        <input
          type='text'
          name='userName'
          value={this.setState.userName}
          onChange={this.handleUserChange}
        />
        Password:{' '}
        <input type='password' name='password' value={this.setState.password} />
        <button>Login Button</button>
      </div>
    );
  }
}

export default TodoApp;
