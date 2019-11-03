import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <CounterButton by={1} incrementMethod={this.increment} />
        <CounterButton by={5} incrementMethod={this.increment} />
        <CounterButton by={10} incrementMethod={this.increment} />
        <span className='count'>{this.state.counter}</span>
      </div>
    );
  }
  increment(by) {
    console.log(`increment from child - ${by}`);
    // this.state.counter++;
    this.setState({
      counter: this.state.counter + by
      // + this.props.by
    });
  }
}

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
  }

  render() {
    // const style = { fontSize: '50px', padding: '15px 30px' };
    return (
      <div className='counter'>
        <button onClick={this.increment}>+{this.props.by}</button>
      </div>
    );
  }
  increment() {
    // console.log('increment');
    // this.state.counter++;
    this.setState({
      counter: this.state.counter + this.props.by
    });
    this.props.incrementMethod(this.props.by);
  }
}
CounterButton.defaultProps = {
  by: 1
};

CounterButton.propTypes = {
  by: PropTypes.number
};
export default Counter;
