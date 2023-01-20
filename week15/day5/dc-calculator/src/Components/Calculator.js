import React, {Component} from 'react';
import OperationButton from './OperationButton'
import SelectOp from './SelectOp'
import './Calculator.css'

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      operation:"Adding 2 numbers",
      result: 0
    }
  }
  handleSelect = () => {
    const  e = document.getElementById("selectedOp");
    const text = e.options[e.selectedIndex].text;
    this.setState({operation: text})
  }

  handleOperation = () => {
    const input1 = Number(document.getElementById("num1").value)
    const input2 = Number(document.getElementById("num2").value)

    switch (this.state.operation) {
        case 'Adding 2 numbers':
        this.setState({result: input1 + input2})
        break;
        case 'Dividing 2 Numbers':
        this.setState({result: input1 / input2})
        break;
        case 'Multiplying 2 Numbers':
        this.setState({result: input1 * input2})
        break;
        case 'Substracting 2 Numbers':
        this.setState({result: input1 - input2})
        break;
        default:
        this.setState({result: 0})
      }
    }
  render () {
    const {operation, result} = this.state
    return (
      <div className='calc'>

          <SelectOp onChange={this.handleSelect}/>
          <div>
            <input type="number" id="num1" />
            <input type="number" id="num2" />
          </div>
          <OperationButton handleOperation={this.handleOperation} operation={operation}/>
          <div className="res">{result !==0 ?  Math.round(result * 100000) / 100000 : 0}</div>
      </div>
    )
  }
}

export default Calculator
