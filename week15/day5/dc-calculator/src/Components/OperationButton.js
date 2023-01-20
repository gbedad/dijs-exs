import React, {Component} from 'react';

class OperationButton extends Component {
  constructor(props) {
    super();
  }
  render () {
    return (
      <>
      <button>{this.props.op}</button>
      </>
    )
  }
}

export default OperationButton;
