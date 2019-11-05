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
  }

  render() {
    return (
      <div>
        User Name:{' '}
        <input type='text' name='userName' value='Enter you name here' />
        Password: <input type='password' name='password' />
        <button>Login Button</button>
      </div>
    );
  }
}

export default TodoApp;
