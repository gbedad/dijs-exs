import React, {Component} from 'react';


class Events extends Component {
  constructor() {
    super();
    this.state = {
      color:"blue",
      input:"",
      isToggleOn: true
    }
    this.clickMe = () => {
      return alert("I was clicked")
    }

  }
  handleKeyDown = (event) => {
    this.setState({input: event.target.value})
    if (event.key === "Enter") {
      alert(`Enter Key was pressed,Your input was: ${this.state.input}.`);
    }
  }
  handleToggle = () => {
    console.log(this.state.isToggleOn);
      if (this.state.isToggleOn) {
        this.setState({isToggleOn: false})
      }
      else {
        this.setState({isToggleOn: true})
      }
    }

  render() {
    const {isToggleOn} = this.state
    return (
      <div>
        <input type="text" placeholder="Type text and press enter" onKeyDown={this.handleKeyDown} /><br/><hr/>
        <button onClick={this.clickMe}>Click Me</button><br/><hr/>
        <div className="isToggled">
        <h3>Exercise 2 part III</h3>
          <button style={{backgroundColor: "navy", color: "white", width: "100px"}} onClick={this.handleToggle}>{isToggleOn === true ? "ON" : "OFF"}</button>
        </div>
      </div>
    )
  }
}

export default Events
