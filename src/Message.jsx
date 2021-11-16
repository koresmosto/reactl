import React, {Component} from "react";

class Message extends Component {
  render() {
    return (
      <div>
        <ul id="message">
          {this.props.message}
        </ul>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

export default Message;