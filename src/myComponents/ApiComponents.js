import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
    if (this.state.count == 0) {
      this.setState({ count: (this.state.count = 0) });
    }
  };

  render() {
    return (
      <div>
        <h1>This is class based component</h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
