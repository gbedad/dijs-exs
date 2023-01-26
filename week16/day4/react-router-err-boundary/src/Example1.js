import React, { Component } from 'react';
import studentsGithub from './studentsGithub.json'

console.log(studentsGithub.SocialMedias);
class Example1 extends Component {
    constructor(){
        super();
        this.state = {
            social: []
        }
    }
componentDidMount() {
    this.setState({social: studentsGithub["SocialMedias"]})
}
  render() {
    return (
        this.state.social.map((item, index) =>
      <div key={index}>
        <ul>
            <li>{item}</li>
        </ul>
      </div>
    )
  )}
}

export default Example1