import React from 'react';
import style from "./Display.css";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.display}></div>
    );
  }
};

export default Display;