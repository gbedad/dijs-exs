import UserRedux from './components/UserRedux';
import SearchRedux from './components/SearchRedux';
import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { getData } from './redux/actions';

class AppRedux extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     arr: [],
  //     text: ''
  //   }
  // }


  componentDidMount = () => {
    this.props.getData()
  }

  render(){
    const filterUsers = this.props.users.filter(item => {
      return item.name.toLowerCase().includes(this.props.text.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Middlewares</h1>
        <SearchRedux />
        {
          filterUsers.map((item) => {
            return ( 
              <UserRedux user={item} key={item.id}/>
            )
          })
        }
      </div>
    );
    }

}

const mapStateToProps = state => {
  return {
    users: state.arr,
    text: state.text
  }
}
const mapDispatchToProps = dispatch => {
return {
  getData: (arr) => dispatch(getData(arr))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRedux);
