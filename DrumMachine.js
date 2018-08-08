import React from 'react';
import style from "./DrumMachine.css";
import Title from "./Title.js";
import Display from "./Display.js";
import Buttons from "./Buttons.js";

class DrumMachine extends React.Component {
  handleClick(event){
    console.log(event.target.id + " was clicked.");
    let divName = document.getElementById(event.target.id).innerText;
    let audioElement = document.getElementById(divName)
    audioElement.play();
  }
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
            <Buttons handleClick = {this.handleClick}/> 
          </div>
      </div>
    );
  }
};

export default DrumMachine;