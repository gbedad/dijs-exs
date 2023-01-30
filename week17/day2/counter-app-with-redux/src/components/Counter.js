import React, { Component } from 'react';

import {connect} from 'react-redux';
import { increaseCount, decreaseCount } from '../reducers/actions';

export class Counter extends Component {

  render() {
    return (
      <div style={{display:"flex", justifyContent:"space-between", width:"100px"}}>
        <button onClick={this.props.decrease}>-</button><span>{this.props.count}</span><button  onClick={this.props.increase}>+</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      count:state.count,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      increase: (e) => dispatch(increaseCount()),
      decrease: (e) => dispatch(decreaseCount())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)