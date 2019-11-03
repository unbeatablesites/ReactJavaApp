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
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div className='counter'>
        <CounterButton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span className='count'>{this.state.counter}</span>
      </div>
    );
  }
  increment(by) {
    console.log(`increment from child - ${by}`);
    // this.state.counter++;
    this.setState(prevState => {
      return { counter: prevState.counter + by };
    });
  }

  decrement(by) {
    console.log(`decrement from child - ${by}`);
    // this.state.counter++;
    this.setState(prevState => {
      return { counter: prevState.counter - by };
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
    this.decrement = this.decrement.bind(this);
  }

  render() {
    // const style = { fontSize: '50px', padding: '15px 30px' };
    return (
      <div className='counter'>
        <button onClick={this.increment}>+{this.props.by}</button>
        <button onClick={this.decrement}>-{this.props.by}</button>
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

  decrement() {
    // console.log('increment');
    // this.state.counter++;
    this.setState({
      counter: this.state.counter - this.props.by
    });
    this.props.decrementMethod(this.props.by);
  }
}
CounterButton.defaultProps = {
  by: 1
};

CounterButton.propTypes = {
  by: PropTypes.number
};
export default Counter;
