import React, {Component} from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {count: 0};
    // this.incrementCount = this.incrementCount.bind(this);
  }

  // incrementCount() {
  //   this.setState(state => ({count: state.count + 1}, console.log("sa22")));
  // }

  incrementCount = () => {
    this.setState(state => ({ count: state.count + 1 }));
  }

  render() {
    return <div>
      <p>Count = {this.state.count}</p>
      <button onClick={this.incrementCount}>Add</button>
    </div>
  }
}

export default Counter
