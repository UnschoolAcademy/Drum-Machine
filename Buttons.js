import React from 'react';
import style from './Buttons.css';
import DrumPad from './DrumPad.js';
const buttonsArray = [
{name: "Q",
fileName: "/snares/brass-sd.wav",
shorthand: "snare-1",
keyCode: 81},
{name: "W",
fileName: "/snares/brass-sd2.wav",
shorthand: "snare-2",
keyCode: 87},
{name: "E",
fileName: "/snares/cross-stick-sd.wav",
shorthand: "cross-stick",
keyCode: 69},
{name: "A",
fileName: "/snares/ellis_vanghoul-porno_snare.wav",
shorthand: "snare-3",
keyCode: 65},
{name: "S",
fileName: "/kicks/big-ol-yamaha-kick.wav",
shorthand: "kick",
keyCode: 83},
{name: "D",
fileName: "/crashes/crash-17incher.wav",
shorthand: "cymbal-1",
keyCode: 68},
{name: "Z",
fileName: "/crashes/strident-orient-cymbal.wav",
shorthand: "cymbal-2",
keyCode: 90},
{name: "X",
fileName: "/claps/707_HCP.WAV",
shorthand: "clap",
keyCode: 88},
{name: "C",
fileName: "/crashes/OH_set2.wav",
shorthand: "cymbal-3",
keyCode: 67},
]

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let buttonsJSX = buttonsArray.map(buttonObject => 
      <DrumPad
        handleClick ={this.props.handleClick}
        name={buttonObject.name}
        fileName={buttonObject.fileName}
        shorthand={buttonObject.shorthand} 
        keyCode ={buttonObject.keyCode}/>
    );
    return (
      <div id="buttons" className={style.buttons}>{buttonsJSX}</div>
    );
  }
};

export default Buttons;