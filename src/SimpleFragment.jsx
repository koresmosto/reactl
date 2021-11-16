import React, {Component} from "react";

class SimpleFragment extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Some text</p>
        <h2>Tittle</h2>
        <h1>Tittle Bigger</h1>
      </React.Fragment>
    );
  }
}

export default SimpleFragment;