import React from "react";
import { connect } from "react-redux";
import { editPost, fetchPost } from "../../actions";
import Spinner from "../Spinner";
import PostForm from "./PostForm";
import _ from "lodash";

class PostEdit extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  onSubmit = formValues => {
    this.props.editPost(this.props.post._id, formValues);
  };
  render() {
    if (!this.props.post) {
      return <Spinner />;
    }

    return (
      <div>
        <h2>Edit Recipe</h2>
        <PostForm
          initialValues={_.pick(this.props.post, "title", "body")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { editPost, fetchPost }
)(PostEdit);
