import React, { Component } from 'react'
import studentsGithub from './studentsGithub.json'

//console.log(studentsGithub.Skills);

class Example3 extends Component {
    constructor() {
        super();
        this.state = {
            experiences: []
        }
       
    }
componentDidMount() {
    this.setState({
        experiences: studentsGithub["Experiences"]
    })
    
}
  render() {
    console.log(this.state.experiences);
    return (
    this.state.experiences.map(item => {
       return <div>
        <img src={require(item.logo)} alt="" />
        <h4>{item.companyName}</h4>
        {item.roles.map((elem, ind) => {
          return (
          <div key={ind}>

                <p>{elem["title"]}</p>
                <p><span>{elem["startDate"]}</span><span>{elem["endDate"]}</span></p>
                <p>{elem["location"]}</p>
                <p>{elem["description"]}</p>
            
            </div>
        )
         })}
    </div>

        })
)}
}

export default Example3