import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";
import { Link } from "react-router-dom";
import PostForList from './postDetails/PostForList';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList = () => {
    return this.props.postList.map(post => {
        return (
         <PostForList post={post} key={post._id}/>
        );
    });
  };

  renderCreateButtonIfSignedIn() {
    if (this.props.isSignedIn) {
      return (
          <Link to="/posts/create" className="right floated ui button primary">
            Create Post
          </Link>
      );
    }
  }
  render() {
    return (
      <div>
        <h2 style={{display: 'inline-block'}}>Beer Recipies</h2>
        {this.renderCreateButtonIfSignedIn()}
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postList: Object.values(state.posts),
    currentAuthorId: state.auth.authorId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
