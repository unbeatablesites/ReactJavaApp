import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        My Hello world
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}
class FirstComponent extends Component {
  render() {
    return <div className='firstComponent'>First Compenent</div>;
  }
}

class SecondComponent extends Component {
  render() {
    return <div className='secondComponent'>Second Compenent</div>;
  }
}

class ThirdComponent extends Component {
  render() {
    return <div className='thirdComponent'>Third Compenent</div>;
  }
}

export default App;
