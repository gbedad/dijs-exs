import React from 'react';
import { useParams, useNavigate} from 'react-router-dom';

import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions'


// const withParams = Component => {
//   return props => {
//     const params = useParams();

//     return <Component {...props} params={params} />;
//   };
// };

// class Post extends React.Component {
  
//   render() {
    
//     const { post } = this.props;
//     console.log(post);
//     if (post) {
//       return (
//         <div>
//           <h1>{post.title}</h1>
//           <p>{post.body}</p>
//         </div>
//       );
//     } else {
//       return <div>Loading...</div>;
//     }
//   }
// }

const Post = (props) =>{
console.log(props);
const navigate = useNavigate();
const { postId } = useParams();
console.log(postId);
const post = props.posts.find(post => post.id === postId);
// // const post = props.post.find(p => p.id === postId);
 
  
 console.log(post);

 const handleClick = () => {
  console.log(post.id);
    deletePost(post.id)
    props.history.push('/')
    // navigate('/')
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

