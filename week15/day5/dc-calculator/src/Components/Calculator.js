import React, {Component} from 'react';
import OperationButton from './OperationButton'
import InputBox from './InputBox'
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
    const value = e.value;
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
      }
    }
  render () {
    const {operation, result} = this.state
    return (
      <div className='calc'>
          <div>
            <select id="selectedOp" onChange={this.handleSelect}>
              <option value='1'>Adding 2 numbers</option>
              <option value='2'>Dividing 2 Numbers</option>
              <option value='3'>Multiplying 2 Numbers</option>
              <option value='4'>Substracting 2 Numbers</option>
            </select>
          </div>
          <div>
            <input type="number" id="num1" />
            <input type="number" id="num2" />
          </div>
          <div>
            <button onClick={this.handleOperation}>{operation}</button>
          </div>
          <div>{result}</div>
      </div>
    )
  }
}

export default Calculator
