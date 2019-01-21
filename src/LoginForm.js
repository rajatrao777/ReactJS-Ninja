import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = props => {
  const { submit } = props;
  return (
    <form onSubmit={submit} className="main--form">
      <div className="main--login--form">
        {/* <label htmlFor="username">Username</label> */}
        <div className="main--login">
          <label htmlFor="username">Username</label>
          <br />
          <Field
            className="main--input--form"
            name="username"
            component="input"
            type="text"
          />
        </div>
        <br />
        <div>
          <label htmlFor="username">Password</label>
          <a href="raobit.com"  style={{ paddingLeft: "95px" }}>
            Forget Password?
          </a>
          <br />
          <Field
            className="main--input--form"
            name="password"
            component="input"
            type="password"
          />
        </div>
        <br />
        <div>
          <button className="main--input--form" type="submit">
            Login
          </button>
        </div>
        <div className="main--signup">
          <a href="raobit.com" style={{ paddingLeft: "95px" }}>
            Create Account
          </a>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login"
})(LoginForm);
