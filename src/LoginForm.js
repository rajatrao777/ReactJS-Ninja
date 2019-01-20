import React from "react";
import { Field, reduxForm } from "redux-form";

let LoginForm = props => {
  const submit = props.submit;
  return (
    <form onSubmit={submit}>
      <div>
        <Field name="username" component="input" type="text" placeholder="Username"/>
      </div>
      <div>
        {/* <label htmlFor="username">Password</label> */}
        <Field name="username" component="input" type="text" placeholder="Password"/>
      </div>
      <div>
          <button type = "submit"></button>
      </div>
    </form>
  );
};

export default reduxForm({
    form:'login'
})(LoginForm)