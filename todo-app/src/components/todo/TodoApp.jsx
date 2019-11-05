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
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange(event) {
    console.log(event.target.value);
    this.setState({ userName: event.target.value });
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
