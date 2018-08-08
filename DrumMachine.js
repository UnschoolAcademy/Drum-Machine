import React from 'react';
import style from "./DrumMachine.css";
import Title from "./Title.js";
import Display from "./Display.js";
import Buttons from "./Buttons.js";

class DrumMachine extends React.Component {
  handleClick(event){
    let divName = document.getElementById(event.target.id).innerText;
    let audioElement = document.getElementById(divName);
    audioElement.play();
    this.setState({
      buttonClicked: event.target.id
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: ''
    }
    this.handleClick = this.handleClick.bind(this);
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