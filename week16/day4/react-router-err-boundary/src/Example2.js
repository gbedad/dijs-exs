import React, { Component } from 'react'
import studentsGithub from './studentsGithub.json'

//console.log(studentsGithub.Skills);

class Example2 extends Component {
    constructor() {
        super();
        this.state = {
            skills: []
        }
       
    }
componentDidMount() {
    this.setState({
        skills: studentsGithub["Skills"]
    })
    
}
  render() {
    console.log(this.state.skills);
    return (
    this.state.skills.map(item => {
       return <div>
        <h4>{item["Area"]}</h4>
        {item.SkillSet.map((elem, ind) => {
          return (
          <div key={ind}>
            <ul>
                <li>{elem["Name"]}</li>
            </ul>  
            </div>
        )
         })}
    </div>

        })
)}
}

export default Example2