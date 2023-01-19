import React, {Component} from 'react';
import QuoteData from '../assets/QuotesDatabase';
import './RandomQuote.css'

//console.log(QuoteData);
let quotesDataLenght = QuoteData.length

//console.log(quotesDataLenght);

function generateRandom(min = 0, max) {

    // find diff
    let difference = max - min;

    // generate random number
    let rand = Math.random();

    // multiply with difference
    rand = Math.floor( rand * difference);

    // add with min value
    rand = rand + min;

    return rand;
}

class RandomQuote extends Component {
  constructor() {
    super();
    this.state = {
      quote: QuoteData[generateRandom(0, quotesDataLenght)],
      color: `rgb(${generateRandom(0,255)}, ${generateRandom(0,255)}, ${generateRandom(0,255)})`
    }
    console.log(this.state.color);
  }

  handleClick = () => {
    this.setState({quote: QuoteData[generateRandom(0, quotesDataLenght)], color:`rgb(${generateRandom(0,255)}, ${generateRandom(0,255)}, ${generateRandom(0,255)})` })
    localStorage.setItem("rand-color", this.state.color)
  }

  render() {
    const {quote, color} = this.state
    console.log(color);

    return (
      <>
        <div style={{backgroundColor: "white", border: "1px solid black", padding:"10px"}}>
          <blockquote>
            {quote.quote}
            <span>Author: {quote.author ? quote.author : "Unknown"}</span>
          </blockquote>
          <button style={{backgroundColor: `${color}`}} onClick={this.handleClick}>Change Quote</button>
        </div>
      </>
    )
  }
}

export default RandomQuote;
