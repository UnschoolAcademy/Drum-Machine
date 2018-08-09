componentDidMount() {
  document.addEventListener('keydown', this.handleKeyPress);
}
componentWillUnmount() {
  document.removeEventListener('keydown', this.handleKeyPress);
}
handleKeyPress(event){
  alert(event.keyCode);
}

class Buttons extends React.Component {
  constructor(props) {
    super(props);
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