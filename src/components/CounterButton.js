import React, { Component } from 'react';

class CounterButton extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.state.count !== nextState.count;
  }

  updateCount = () => {
    // Use the below syntax for updating state when the update relies on existing state value
    // this is because state is updated by React asynchronously, and may not update when we think.
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <button id="counter" color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
