import React, {createElement, isValidElement} from 'react';
import ReactDOM, {createPortal, render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Message from './Message';
import element_k from './MessageContainer';
import SimpleFragment from "./SimpleFragment";
import SimpleFragmentNew from "./SimpleFragmentNew";
import Counter from "./Counter";
import PropTypes from "prop-types";


const name = 'Michael';
var nameUser = () => "Franklin";
const element = <h1>Здравствуй, {name}</h1>;
const element_2 = <h1>Здравствуй, {nameUser()}</h1>;

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(element, document.getElementById("root_1"));
ReactDOM.render(element_2, document.getElementById("root_2"));

var element_n = React.createElement("h3", null, "Здравствуй, ", name,
  createElement("h1", "hi there!"));
var element_2_n = React.createElement("h3", null, "Здравствуй, ", nameUser());

ReactDOM.render(element_n, document.getElementById("root_1"));
ReactDOM.render(element_2_n, document.getElementById("root_2"));

var element_n_clone = React.cloneElement(element_n, "h1");
var element_n2 = <Message message="Hello, world111">
  <p>Some child element</p>
</Message>;

var element_n3 = React.createElement(
  "div",
  null,
  createElement("h5", null, "one")
)

ReactDOM.render(element_n2, document.getElementById("root"))
ReactDOM.render(<SimpleFragmentNew />, document.getElementById("root_2"))

var users = ["Mike", "Bill", "Scott"];

function Chill(props) {
  return React.Children.map(props.children, (e) => <span>Hello {e}</span>);
  // return <span>abc</span>;
}

// const element_n33 = (<Chill>{users}</Chill>, element);
const element_5 = <h1>Здравствуй, {nameUser()}</h1>;
const element_n33 = (<Chill>{users}</Chill>);
ReactDOM.render(<Counter />, document.getElementById("root"))

console.log(isValidElement(element_n3))
console.log(isValidElement(nameUser()))
console.log(isValidElement(name))
console.log(isValidElement(element))

function ActionLink() {
  function handleClick(e) {
    e.preventDefault(); // отмена события по умолчанию
  }

  function onClick(event) {
    console.log("event", event); // => null-объект.
    console.log("eventType: ", event.type); // => "click"
    const eventType = event.type; // => "click"

    setTimeout(function() {
      console.log(event.type); // => null
      console.log(eventType); // => "click"
    }, 0);

    // Не сработает, поскольку this.state.clickEvent будет содержать только null-значения.
    this.setState({clickEvent: event});

    // По-прежнему можно экспортировать свойства события.
    this.setState({eventType: event.type});
  }

  return <a href="#" onClick={onClick}>Link</a>;
}

ReactDOM.render(<ActionLink />, document.getElementById("root"))

class Clicker extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    this.forceUpdate();
  }
  render() {
    return <React.Fragment>
      <Tittle></Tittle>
      <button onClick={this.handleClick}>Click me</button>
    </React.Fragment>;
  }
}
class Tittle extends React.Component {
  constructor(props) {
    super(props);

    this.button = { click: false };
  }
  getSnapshotBeforeUpdate() {
    this.button.click = (this.button.click) ? false : true;
  }
  render() {
    if(this.button.click)
      return <h1>Button enabled</h1>;
    else
      return <h1>Button disabled</h1>;
  }
}
render(<Clicker />, document.getElementById("root"));


class RefExample extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }
  handleClick = () => {
    var color = Math.floor(Math.random() * 16777215).toString(16);
    this.ref.current.style.color = `#${color}`;
  }
  render() {
    return(
      <>
        <h1 ref={this.ref}>Hello world</h1>
        <button onClick={this.handleClick}>Click me</button>
      </>);
  }
}

render(<RefExample />, document.getElementById("root_2"))

var users = ["Mike", "Bill", "Scott"];

function UsersList(props) {
  const userlist = props.children.map((users, index) => <p key={index}>{users}</p>);

  return <div>{userlist}</div>;
}

render(<UsersList>{users}</UsersList>, document.getElementById("root_2"))



// var elementN = <Message message="Hello, world">
//   <p>Some child element</p>
// </Message>;

// render(elementN, document.getElementById("root_2"));

var elementN = document.getElementById("root_2")
class PropTypesExample extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>;
  }
}

PropTypesExample.propTypes = {
  name: PropTypes.number
};
render(<PropTypesExample name={5} />, elementN);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

class Welcome extends React.Component {
  render() {
    return <div>
      <p>{this.props.children}</p>
      {createPortal(<p>{this.props.children}</p>, document.getElementById("root_3"))}
    </div>;
  }
}

class App1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: false };
  }
  static getDerivedStateFromError(error) {
    // Произошла ошибка!!!

    return {error: true};
  }
  componentDidCatch(error, info) {
    console.info(">>>",info.componentStack); // Вывод состояния стека и ошибки в
    // консоль
    console.error("<<<",error); // В продакшене этих вызовов console не должно
    // быть!!!

    // logComponentStackToMyService(info.componentStack); // Метод обрабатывающий ошибку
  }
  render() {
    if(this.state.error) { // Произошла ошибка
      return <h1>Что-то пошло не так.</h1>; // Отображение запасного UI
    }
    // Ошибки нет
    return <Welcome>{this.props.children}</Welcome>; // Отображение того что нужно
  }
}
render(<App1>Hello world</App1>, document.getElementById("root"));


reportWebVitals();
