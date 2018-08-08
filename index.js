import React from "react";
import ReactDOM from "react-dom";
import DrumMachine from "./DrumMachine.js";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <DrumMachine/>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("index"));