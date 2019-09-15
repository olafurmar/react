import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchPost, deletePost } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostDelete extends React.Component{
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <Modal
          title="Delete Recipe"
          content={this.rednerContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push(`/posts/${id}`)}
        />
      </div>
    );
  }

  rednerContent() {
    if (!this.props.post) {
      return "Are you sure you want to delete this recipe?";
    }

    return `Are you sure you want to delete the recipe: ${this.props.post.title}`;
  }

  renderActions() {
    const {id} = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deletePost(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to={`/posts/${id}`} className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostDelete);