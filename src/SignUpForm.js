import React from "react";
import { Field, reduxForm } from "redux-form";

let SignUpForm = props => {
  const submit = props.submit;
  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="username">usernamee</label>
        <Field name="username" component="input" type="text" />
      </div>
    </form>
  );
};

export default reduxForm({
    form:'signup'
})(SignUpForm)