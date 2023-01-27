import React, { Component } from 'react'
import data from "../tasksData.json"

export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            task: ''
        }
    }
componentDidMount() {
        // this.setState({tasks:data })
        this.allTasks()
    }
componentDidUpdate() {
  this.allTasks()
}
    allTasks = () => {
      fetch(process.env.REACT_APP_BASE_URL + '/api/todos/all')
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        this.setState({tasks:data})
      })
      .catch(err => {
        console.log(err);
      })
    }


// addTask = () => {
//       this.setState({tasks:[...this.state.tasks, this.state.task], task: ""});
//     }

handleChange = (e) => {
      this.setState({task:e.target.value})
    }
add = () => {
      const fetchadd = async() => {
        const {task} = this.state;
        try{
          const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/todos/add`,{
            method:'POST',
            headers: {
              'Content-type':'application/json'
            },
            body: JSON.stringify({task_name:task})
          });
  
          const data = await res.json();
  
          this.setState({tasks:data})
        }
        catch(err){
          console.log(err);
        }
      }
      fetchadd();   
    }

remove = (ind) => {
    const fetchremove = async() => {
      const {tasks, task} = this.state;
      console.log(tasks[ind]);
        try{
          const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/todos/remove` ,{
            method:'DELETE',
            headers: {
              'Content-type':'application/json'
            },
            body: JSON.stringify({task_name:tasks[ind].task_name})
          });
  
          const data = await res.json();
  
          this.setState({tasks:data})
        }
        catch(err){
          console.log(err);
        }
      }
      fetchremove();   
    }
// removeTask = (index) => {
//       const newTasks = [...this.state.tasks];
//       newTasks.splice(index, 1);
//       this.setState({ tasks: newTasks });
//     };
  render() {
    const {tasks, task} = this.state
    console.log(tasks)
    return (
      <div>
      {tasks.map((task, index) => {
       return (
        <div key={index}>
          <p onClick={() => this.remove(index)} className="remove">{task.task_name}</p>
        </div>)
      })}
      <form onSubmit={this.add}>
      <input
        type="text"
        value={task}
        onChange={this.handleChange}
      />
      <input type="submit" value="Add"/>
      </form>
      </div>
    )
  }
}
