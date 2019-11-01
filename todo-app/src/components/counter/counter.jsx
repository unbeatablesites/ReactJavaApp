import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className='counter'>
        <button onClick={this.increment}>+1</button>{' '}
        {/* // refers to the method */}
        <span className='count'>{this.state.counter}</span>{' '}
        {/* refers to the constructor "uses super first" */}
      </div>
    );
  }
  increment() {
    // console.log('increment');
    // this.state.counter++;
    this.setState({ counter: this.state.counter + 1 });
  }
}

export default Counter;
