import React from 'react';
import style from "./DrumMachine.css";
import Title from "./Title.js";
import Display from "./Display.js";
import Buttons from "./Buttons.js";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: '',
      keycode: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    let div = document.getElementById(event.target.id)
    let audioElement = document.getElementById(div.innerText);
    div.style.
    audioElement.play();
    this.setState({
      buttonClicked: event.target.id
    })
  }
  render() {
    return (
      <div className={style.aspectRatioSizer}>
        <svg viewBox="0 0 3 4" />
          <div id="drum-machine" className = {style.drumMachine}>
            <Title/>
            <Display buttonClicked = {this.state.buttonClicked}/>
            <Buttons buttonClicked = {this.state.buttonClicked} 
            handleClick = {this.handleClick}/> 
          </div>
      </div>
    );
  }
};

export default DrumMachine;