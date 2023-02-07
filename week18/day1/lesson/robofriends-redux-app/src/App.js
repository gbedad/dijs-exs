import User from './components/User';
import Search from './components/Search';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      text: ''
    }
  }
handleSearch = (e) => {
  this.setState({text: e.target.value})
}

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()
    .then(data => {
      console.log(data)
      this.setState({arr:data})
    }))
    .catch(e => {
      console.log(e)
    })
  }

  render(){
    const filterUsers = this.state.arr.filter(item => {
      return item.name.toLowerCase().includes(this.state.text.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Middlewares</h1>
        <Search handleSearch={this.handleSearch}/>
        {
          filterUsers.map((item, index) => {
            return ( 
              <User user={item} key={index}/>
            )
          })
        }
      </div>
    );
    }

}

export default App;
