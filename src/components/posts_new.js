import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}` 

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
         {touched ? error : ''}
        </div>
      </div>
    );  
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/'); // built in react method (history) - helps navigation to one of the defined routes in app
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field 
            label="Title for Post"
            name="title"
            component={this.renderField}
          />
          <Field 
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field 
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  // validate the inputs from values
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter a category"; 
  }
  if (!values.content) {
    errors.content = "Enter content (min 140 characters)";
  }

  // if errors is empty, the form is fine to submit
  // if errors has *any* properties, redux-form assumes form is invalid

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);