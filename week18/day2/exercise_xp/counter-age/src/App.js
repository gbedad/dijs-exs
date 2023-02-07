import React from 'react';
import { connect } from 'react-redux';
import './App.css'

const App = ({ age, onAgeUp, onAgeDown }) => (
  <div className='App'>
    <h2>Redux Middleware Counter Action</h2>
    <span>Your age: {age}</span><br/>
    <button onClick={onAgeUp}>Age Up</button>
    <button onClick={onAgeDown}>Age Down</button>
  </div>
);

const mapStateToProps = (state) => ({
  age: state.age,
});

const mapDispatchToProps = (dispatch) => ({
  onAgeUp: () => dispatch({ type: 'AGE_UP' }),
  onAgeDown: () => dispatch({ type: 'AGE_DOWN' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
