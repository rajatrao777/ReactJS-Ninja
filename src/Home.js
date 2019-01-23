import React from "react";
// import background from "./background1.jpg";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/Login/" component={LoginPage} />
            <Route exact path="/" component={Home1} />
          </Switch>
        </Router>
      </div>
    );
  }
}

class Home1 extends React.Component {
  render() {
    return (
      <div>
        {/* <img src={background} alt="img failed loading" /> */}
        <div className="imageback" />
        <div className="header--company">Stortal</div>
        <a href="#">
          <div className="header--signup">SIGNUP</div>
        </a>

        <Link to="/Login/">
          <div className="header--login">LOGIN</div>
        </Link>

        <div className="section--values">
          A New way to <br />
          connect your colleagues
        </div>
      </div>
    );
  }
}

export default Home;
