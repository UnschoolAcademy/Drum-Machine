import React from 'react';
import style from './Buttons.css';

const buttonsArray = [
{name: "Q",
fileName: "/snares/brass-sd.wav",
shorthand: "snare-1"},
{name: "W",
fileName: "/snares/brass-sd2.wav",
shorthand: "snare-2"},
{name: "E",
fileName: "/snares/cross-stick-sd.wav",
shorthand: "cross-stick"},
{name: "A",
fileName: "/snares/ellis_vanghoul-porno_snare.wav",
shorthand: "snare-3"},
{name: "S",
fileName: "/kicks/big-ol-yamaha-kick.wav",
shorthand: "kick"},
{name: "D",
fileName: "/crashes/crash-17incher.wav",
shorthand: "cymbal-1"},
{name: "Z",
fileName: "/crashes/strident-orient-cymbal.wav",
shorthand: "cymbal-2"},
{name: "X",
fileName: "/claps/707_HCP.WAV",
shorthand: "clap"},
{name: "C",
fileName: "/crashes/OH_set2.wav",
shorthand: "cymbal-3"},
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