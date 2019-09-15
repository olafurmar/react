import React from "react";
import { Field, reduxForm } from "redux-form";

class PostForm extends React.Component{
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
      //this syntax takes all properties from formProps.input and assignes them to the input tag
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" label="Title:" component={this.renderInput} />
        <Field
          name="body"
          label="Recipe:"
          component={this.renderInput}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = ({ title, body }) => {
  const errors = {};
  if (title && body) {
    return errors;
  }
  if (!title) {
    errors.title = "Title is missing";
  }
  if (!body) {
    errors.body = "Recipe is missing";
  }
  return errors;
};

export default reduxForm({
  form: "postForm",
  validate
})(PostForm);
