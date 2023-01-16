import React from 'react';
import './Exercise4.css'
import logo512 from './assets/logo1921.png'

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

function Exercise4() {
  return (
    <div>
      <h1 style={style_header}>This is a Header</h1>
      <p className="para">This is a paragraph</p>
      <a href="#">This is a Link</a>
      <form>
        <h2>This is a Form</h2>
        <label>Enter your Name</label><br/>
        <input type="text" value="" />
        <input type="submit" value="Submit" />
      </form>
      <img src={logo512} alt=""/>
      <ol>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
        <li>Fruits</li>
      </ol>
    </div>
  )
}

export default Exercise4;
