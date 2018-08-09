import React from 'react';
import style from "./Display.css";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="display"className={style.display}>{this.props.buttonClicked}</div>
    );
  }
};

export default Display;