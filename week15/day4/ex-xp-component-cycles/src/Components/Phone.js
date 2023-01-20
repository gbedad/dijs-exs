import React, {Component} from 'react';

class Phone extends Component {
  constructor() {
    super();
    this.state = {
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
};
this.handleChangeColor = () => {
  if (this.state.color === "black") {
    this.setState({color: "blue"})
  }
  else {
    this.setState({color: "black"})
  }
}

  }
  render () {
    const {brand, model, color, year} = this.state
    return (
      <div style={{border:"solid 1px navy", borderRadius: "10px", width:"300px", marginTop: "20px"}}>
        <h3>My phone is a {brand}</h3>
        <p>It is a {color} {model} from {year}</p>
        <button onClick={this.handleChangeColor}>Change Color</button>
      </div>
    )
  }
}

export default Phone;
