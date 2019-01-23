import React from "react";
import LoginForm from "./LoginForm";


class LoginPage extends React.Component {
  render() {
    return <LoginForm onSubmit={this.submit} />;
  }
}

export default LoginPage;
