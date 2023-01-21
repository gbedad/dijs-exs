import React, {Component} from 'react';
import './Votes.css'

class Votes extends Component {
  constructor() {
    super();
    this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        }
  }

  handleVote = (index) => {
    return this.setState({ votes: this.state.languages[index].votes ++ })
};
  render() {
    const { languages } = this.state
    return (
      languages.map((item, index) => {
        return (
          <div key={index} className="vote-box">
            <span>{item.votes}</span><span>{item.name}</span><button onClick={() => this.handleVote(index)}>Click Here</button>
          </div>
        )
      })
    )
  }
}

export default Votes;
