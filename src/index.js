import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Message from './Message';
import MessageContainer from './MessageContainer';
import element_k from "./MessageContainer";


const name = 'Michael';
var nameUser = () => "Franklin";
const element = <h1>Здравствуй, {name}</h1>;
const element_2 = <h1>Здравствуй, {nameUser()}</h1>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


ReactDOM.render(element, document.getElementById("root_1"));
ReactDOM.render(element_2, document.getElementById("root_2"));

var element_n = React.createElement("h3", null, "Здравствуй, ", name);
var element_2_n = React.createElement("h3", null, "Здравствуй, ", nameUser());

ReactDOM.render(element_n, document.getElementById("root_1"));
ReactDOM.render(element_2_n, document.getElementById("root_2"));

// var element_n2 = React.createElement(Message, {
//   message: "Hello, world"
// }, React.createElement("p", null, "Some child element"));
var element_n2 = <Message message="Hello, world">
  <p>Some child element</p>
</Message>;

ReactDOM.render(element_n2, document.getElementById("root_1"))
ReactDOM.render(element_k, document.getElementById("root_2"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
