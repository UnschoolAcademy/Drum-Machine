import React from 'react';
import style from './Buttons.css';

const buttonsArray = [
{name: "Q"},
{name: "W"},
{name: "E"},
{name: "A"},
{name: "S"},
{name: "D"},
{name: "Z"},
{name: "X"},
{name: "C"},
]
let buttonsJSX = buttonsArray.map(buttonObject => <div id={buttonObject.name} className = {style['drum-pad']}><audio controls src="./drum-sounds/kicks/big-ol-yamaha-kick.wav"></audio>{buttonObject.name}</div>);
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