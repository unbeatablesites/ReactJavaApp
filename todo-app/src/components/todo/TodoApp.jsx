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
  render() {
    return (
      <div>
        User Name: <input type='text' name='userName' />
        Password: <input type='password' name='password' />
        <button>Login Button</button>
      </div>
    );
  }
}

export default TodoApp;
