import React from 'react';

function SelectOp(props) {
  console.log(props);
  return (
    <div>
      <select id="selectedOp" onChange={props.onChange}>
        <option value='1'>Adding 2 numbers</option>
        <option value='2'>Dividing 2 Numbers</option>
        <option value='3'>Multiplying 2 Numbers</option>
        <option value='4'>Substracting 2 Numbers</option>
      </select>
    </div>
  )
}

export default SelectOp;
