import React, {Component} from 'react';
import './App.css';
import Counter from "./Counter";
import store from "./store";
import {connect} from 'react-redux'

class App extends Component {
  constructor() {
    super()
  }

  onIncrement = () => {
    console.log("INCREMENT")
    store.dispatch({type: 'INCREMENT', value: 2})
    console.log(store.getState())
  }
  onDecrement = () => {
    console.log("DECREMENT")
    store.dispatch({type: 'DECREMENT', value: 3})
    console.log(store.getState())
  }

  render() {
    return <Counter value={store.getState()}
                    onIncrement={this.onIncrement}
                    onDecrement={this.onDecrement}/>

  }
}

store.subscribe(() => console.log(">>>", Math.cos(Math.random())))

export default connect(state => state)(App)
