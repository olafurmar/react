import React from "react";
import { connect } from "react-redux";
import { createComment, fetchComments } from "../../actions";
import TimeAgo from "react-timeago";

class CommentList extends React.Component {
  state = { comment: "" };
  componentDidMount() {
    this.props.fetchComments(this.props.postId);
  }
  submitComment = event => {
    event.preventDefault();
    if (!this.state.comment) {
      return;
    }
    this.props.createComment(this.state.comment, this.props.postId);
    this.setState({ comment: "" });
  };

  renderCommentFieldIfSignedIn() {
    if (!this.props.isSignedIn) {
      return;
    }

    return (
      <form onSubmit={this.submitComment} className="ui form error">
        <div className="ui fluid action input">
          <input
            type="text"
            value={this.state.comment}
            onChange={e => this.setState({ comment: e.target.value })}
            placeholder="Comment"
          />
          <button className="ui button">Add Comment</button>
        </div>
      </form>
    );
  }

  renderCommentList() {
    if (!this.props.comments) {
      return;
    }

    return (
      <div className="ui comments">
        {this.props.comments.map(comment => {
          return (
            <div className="comment" key={comment._id}>
              <div className="content">
                <a className="author">{comment.authorName}</a>
                <div className="metadata">
                  <span className="date">
                    <TimeAgo date={comment.createdAt} />
                  </span>
                </div>
                <div className="text">{comment.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.renderCommentFieldIfSignedIn()}
        {this.renderCommentList()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchComments, createComment }
)(CommentList);
