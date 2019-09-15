import React from "react";
import { Field, reduxForm } from "redux-form";
import { createStream } from "../../actions";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <h2>Create a stream</h2>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default connect(
  null,
  {
    createStream
  }
)(StreamCreate);
