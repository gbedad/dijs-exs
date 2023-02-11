import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import logo from '../blog.png'


import '../style.css'


class Home extends Component {

  render() {
    const { posts } = this.props;
    
    return (
        <div className="container">
        {posts.length > 0 ? (

          posts.map((post, index) => (
            <div className='post' key={index}>
              <Link to={`/${post.id}`}  key={post.id}>
              
                <img src={logo} alt='blog'/>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </Link>  
            </div>
          ))
       
        ) : (
          <h3>No posts to show</h3>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.posts);
    
return {
    posts: state.posts
}
}


export default connect(mapStateToProps, null)(Home)