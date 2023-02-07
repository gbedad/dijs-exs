import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();
  
    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });
    const incrementIfOdd = () => {
      if (count % 2 !== 0) {
        increment();
      }
    };
    const incrementAsync = () => {
      setTimeout(() => {
        increment();
      }, 1000);
    };
  
    return (
      <div>
        <p>Clicked: {count} times</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={incrementIfOdd}>Increment if odd</button>
        <button onClick={incrementAsync}>Increment async</button>
      </div>
    );
  };
  

export default Counter