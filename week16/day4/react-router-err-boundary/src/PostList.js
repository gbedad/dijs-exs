import React, { Component } from 'react';
import posts from './posts.json'

export class PostList extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
componentDidMount(){
    this.setState({posts: posts})
}
  render() {
    return (
        this.state.posts.map(item => {
            return (<div key={item.id} >
                <h2>{item.title}</h2>
                <p>{item.content}</p>
            </div>)
        }) 
    )
  }
}

export default PostList