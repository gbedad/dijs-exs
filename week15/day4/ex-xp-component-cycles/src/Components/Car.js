import React, {Component} from 'react';
import Garage from './Garage'

class Car extends Component {
  constructor() {
    super();
    this.state = {
      color:"blue"
    }
  }
  render() {

    return (
      <div>
        <p>This car is {this.state.color} {this.props.carInfo}</p>
        <Garage size="small" />
      </div>
    )
  }
}

export default Car
