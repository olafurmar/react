import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import { Rating } from 'semantic-ui-react'

class OwnPostList extends React.Component {
  componentDidMount() {
    //this.props.fetchPosts();
  }

  getRating = (post) => {
    if (post.numberOfVotes === 0) {
      return 0;
    }

    return post.totalVoteCount / post.numberOfVotes;
  }
  renderList = () => {
    return this.props.postList.map(post => {
      return (
        <Link
          to={`/posts/${post._id}`}
          style={{ textDecoration: "none", width: "100%" }}
          className="ui link card"
          key={post._id}
        >
          <div className="content">
            <div className="right floated">{post.authorName}</div>
            <div className="header">{post.title}</div>
            <div className="meta">
              <TimeAgo date={post.createdAt} />
              <Rating className="right floated" disabled rating={this.getRating(post)} maxRating="5" />
            </div>
            <div className="description">{post.body}</div>
          </div>
        </Link>
      );
    });
  };
  render() {
    return (
      <div>
        <h2 style={{ display: 'inline-block' }}>Beer Recipies</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postList: Object.values(state.posts)
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(OwnPostList);
