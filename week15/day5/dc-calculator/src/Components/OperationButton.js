import React, {Component} from 'react';

class OperationButton extends Component {

  render () {
    return (
      <>
      <button onClick={this.props.handleOperation}>{this.props.operation}</button>
      </>
    )
  }
}

export default OperationButton;
