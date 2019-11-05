import React, { Component } from 'react';

class TodoApp extends Component {
  render() {
    return <div className='TodoApp'>Working</div>;
  }
}

class LoginComponent extends Component {
  render() {
    return (
     User Name: <input type="text" name="userName"/>
     Password: <input type="password" name="password"/>
    )
  }
}

export default TodoApp;
