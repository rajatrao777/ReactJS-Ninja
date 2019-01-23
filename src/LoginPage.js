import React from "react";
import LoginForm from "./LoginForm";


class LoginPage extends React.Component {
  render() {
    return <LoginForm onSubmit={this.submit} style={{background:"#005792"}} />;
  }
}

export default LoginPage;
