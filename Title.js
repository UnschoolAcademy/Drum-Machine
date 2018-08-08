import style from "./Title.css"
import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.title}>DRUM MACHINE!!</div>
    );
  }
};

export default Title;