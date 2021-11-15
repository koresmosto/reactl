import React, {Component} from "react";

class Message extends Component {
  render() {
    return (
      <ul id="message">
        {this.props.message}
      </ul>
    );
  }
}

export default Message;