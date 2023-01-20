import React, {Component} from 'react';

class Color extends Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red"
    }
  }
handleChangeColor = () => {
  this.setState({favoriteColor: 'blue'})
}

componentDidMount() {
  setTimeout(() => {
      this.setState({ favoriteColor: "yellow" })
    }, 5000);
}
  render() {
    const {favoriteColor} = this.state
    return (
      <>
      <h3>My favorite color is <i>{favoriteColor}</i></h3>
      <button onClick={this.handleChangeColor}>Change Color</button>
      </>
    )
  }
}

export default Color;
