import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { submit } = this.props;
    return (
      <form onSubmit={submit} className="main--form" autoComplete="off">
        <div className="main--login--form">
          {/* <label htmlFor="username">Username</label> */}
          <div className="main--sign">
            <label htmlFor="sign">Sign in to your Stortal Account</label>
          </div>
          <div className="main--user">
            <label htmlFor="username">Username</label>
            <br />
            <Field
              className="main--input--user"
              name="username"
              component="input"
              type="text"
              autoComplete="off"
            />
          </div>
          <br />
          <div className="main--pass">
            <label htmlFor="password">Password</label>
            <a
              href="raobit.com"
              style={{
                paddingLeft: "260px",
                fontSize: "15px",
                color: "#ff1f5a"
              }}
            >
              Forgot Password?
            </a>
            <br />
            <Field
              className="main--input--pass"
              name="password"
              component="input"
              type="password"
              autoComplete="off"
            />
          </div>
          <br />
          <div>
            <button className="main--input--submit" type="submit">
              LOGIN
            </button>
          </div>
          <div className="main--create-account">
            <label>
              Don't have an Account?{" "}
              <a href="raobit.com" style={{ color: "green" }}>
                Create Now
              </a>
            </label>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "login"
})(LoginForm);
