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
        <FourthComponent />
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

function ThirdComponent() {
  return <div className='thirdComponent'>Third Compenent</div>;
}

function FourthComponent() {
  return <div className='fourthComponent'>Fourth Component</div>;
}

export default App;
