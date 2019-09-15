import React from "react";
import { connect } from "react-redux";
import { fetchPost, ratePost } from "../../actions";
import Spinner from "../Spinner";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";
import Rating from "../Rating";
import CommentList from "../comments/CommentList";
import PostDetails from "./postDetails/PostDetails";

class PostShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  renderControlButtonsIfCurrentUser() {
    if (this.props.authorId != this.props.post.authorId) {
      return;
    }
    return (
      <React.Fragment>
        <Link
          to={`/posts/delete/${this.props.match.params.id}`}
          className="right floated ui button negative"
        >
          Delete
        </Link>
        <Link
          to={`/posts/edit/${this.props.match.params.id}`}
          className="right floated ui button"
        >
          Edit
        </Link>
      </React.Fragment>
    );
  }

  handleRate = (e, { rating, maxRating }) => {
    this.props.ratePost({ vote: rating }, this.props.post._id);
  };

  renderRating = () => {
    if (this.props.isSignedIn) {
      return (
        <Rating
          post={this.props.post}
          disabled={false}
          clearable
          handleRate={this.handleRate}
        />
      );
    } else {
      return <Rating post={this.props.post} />;
    }
  };

  renderPost = () => {
    const { post } = this.props;
    return (
      <div style={{ width: "100%" }} className="ui card" key={post._id}>
        <PostDetails
          post={post}
          rating={this.renderRating()}
          controlButtons={this.renderControlButtonsIfCurrentUser()}
        />
        <div className="extra">
          <CommentList postId={post._id} />
        </div>
      </div>
    );
  };

  render() {
    if (!this.props.post) {
      return <Spinner />;
    }

    return this.renderPost();
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.id],
    authorId: state.auth.authorId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchPost, ratePost }
)(PostShow);
