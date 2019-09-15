import React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import {createPost} from '../../actions'

class PostCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createPost(formValues);
  };
  render() {
    return (
      <div>
        <h2>Create a recipe</h2>
        <PostForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default connect(
  null,
  {
    createPost
  }
)(PostCreate);