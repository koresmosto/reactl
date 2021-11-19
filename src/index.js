import { createStore } from "redux";
// This is the reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload
    case "DECREMENT":
      return state - action.payload
    default:
      return state
  }
}

//initialState is optional.
//For this demo, I am using a counter, but usually state is an object
const initialState = 0
const store = createStore(reducer, initialState);

store.subscribe( () => {
  console.log("State has changed: "  + store.getState());
})

const incrementCount = (count) => {
  return {
    type: "INCREMENT",
    payload: count
  }
}

const decrementCount = (count) => {
  return {
    type: "DECREMENT",
    payload: count
  }
}

store.dispatch({type: "INCREMENT", payload: 1});
store.dispatch(incrementCount(5));
store.dispatch(decrementCount(3));
