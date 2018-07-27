import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} // adds all event handlers to the field (onChange,                   // onBlur, etc)
        />
      </div>
    );  
  }

  render() {
    return (
      <div>
        <form>
          <Field 
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field 
            label="Tags"
            name="tags"
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);