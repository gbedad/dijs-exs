import React from 'react';
import { useParams, useNavigate} from 'react-router-dom';

import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions'


const Post = (props) =>{

const navigate = useNavigate();
const { postId } = useParams();

const post = props.posts.find(post => post.id === postId);
  
 console.log(post);

 const handleClick = () => {
    props.deletePost(post.id);
    console.log(props);
    navigate('/')
    }
    
    return (
      <div className='container'>
        {!post ? <div>Loading</div> :
        (<div className='post'>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={handleClick}>Delete post</button>
      </div>)
}
      </div>
);
      
  }


  const mapStateToProps = state => {
    return {
      posts: state.posts
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
    deletePost: (id) => dispatch(deletePost(id))
    }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Post);

