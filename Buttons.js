import React from 'react';
import style from './Buttons.css';

const buttonsArray = [
{name: "Q",
fileName: "/snares/brass-sd.wav"},
{name: "W",
fileName: "/snares/brass-sd2.wav"},
{name: "E",
fileName: "/snares/cross-stick-sd.wav"},
{name: "A",
fileName: "/snares/ellis_vanghoul-porno_snare.wav"},
{name: "S",
fileName: "/kicks/big-ol-yamaha-kick.wav"},
{name: "D",
fileName: "/crashes/crash-17incher.wav"},
{name: "Z",
fileName: "/crashes/strident-orient-cymbal.wav"},
{name: "X",
fileName: "/claps/707_HCP.WAV"},
{name: "C",
fileName: "/crashes/OH_set2.wav"},
]
let buttonsJSX = buttonsArray.map(buttonObject => 
  <div id={buttonObject.name} className = {style['drum-pad']}>{buttonObject.name}
  <audio src={"./drum-sounds/"+buttonObject.fileName}></audio></div>);

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="buttons" className={style.buttons}>{buttonsJSX}</div>
    );
  }
};

export default Buttons;