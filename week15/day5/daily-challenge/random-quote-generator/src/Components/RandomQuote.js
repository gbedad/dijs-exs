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
    let newQuote = QuoteData[generateRandom(0, quotesDataLenght)]
    if (newQuote !== this.state.quote) {
      this.setState({quote: newQuote, color:`rgb(${generateRandom(0,255)}, ${generateRandom(0,255)}, ${generateRandom(0,255)})` })
    }

    localStorage.setItem("rand-color", this.state.color)
  }
  // style = {
  //   body, button {
  //     background: `${color}`
  //   }
  // }

  render() {
    const {quote, color} = this.state
    console.log(color);
    return (
      <div style={{backgroundColor: `${color}`, height:'100%', width:'100%'}}>
          <blockquote>
            {quote.quote}
            <span>Author: {quote.author ? quote.author : "Unknown"}</span>
            <button style={{background: `${color}`, color:"white", fontWeight:"bold", padding:"3px", borderRadius:"3px"}} onClick={this.handleClick}>Change Quote</button>
          </blockquote>
      </div>
    )
  }
}

export default RandomQuote;
