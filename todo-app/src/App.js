import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        My Hello world
        <FirstComponent />
      </div>
    );
  }
}
class FirstComponent extends Component {
  render() {
    return <div className='firstComponent'>First Compenent</div>;
  }
}

export default App;
