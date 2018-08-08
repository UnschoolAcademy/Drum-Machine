import React from 'react';
import style from "./DrumMachine.css";
import Title from "./Title.js";
import Display from "./Display.js";
import Buttons from "./Buttons.js";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.aspectRatioSizer}>
        <svg viewBox="0 0 3 4" />
          <div id="drum-machine" className = {style.drumMachine}>
            <Title/>
            <Display/>
            <Buttons/> 
          </div>
      </div>
    );
  }
};

export default DrumMachine;