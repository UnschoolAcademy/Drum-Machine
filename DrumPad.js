import React from 'react';
import style from './DrumPad.css'
class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
	  document.addEventListener('keydown', this.handleKeyPress);
	}
	componentWillUnmount() {
	  document.removeEventListener('keydown', this.handleKeyPress);
	}
	handleKeyPress(event){
	  if(event.keyCode === this.props.keyCode){
	  	alert("keyCodes matched");
	  }
	}
  render() {
    return (
      <div id={this.props.shorthand} className = {style['drum-pad']} 
      onClick = {this.props.handleClick}>{this.props.name}
      	<audio className={style.clip} id={this.props.name}
      	src={"./drum-sounds/"+this.props.fileName}></audio>
    	</div>
    );
  }
};

export default DrumPad;