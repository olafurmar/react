import React from 'react';
import { Link } from "react-router-dom";
import PostDetails from './PostDetails';
import Rating from '../../Rating';

class PostForList extends React.Component{
  renderRating(post) {
    return <Rating post={post} />;
  }
  render(){
    const {post} = this.props;
    return (
      <Link
        to={`/posts/${post._id}`}
        style={{ textDecoration: "none", width: "100%" }}
        className="ui link card"
        key={post._id}
      >
      <PostDetails post={post} rating={this.renderRating(post)} />
      </Link>
    );
  }
}

export default PostForList;