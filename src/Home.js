import React from "react";
// import background from "./background1.jpg";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <img src={background} alt="img failed loading" /> */}
        <div className="imageback" />
        <div className="header--company">Stortal</div>
        <a href="#">
          <div className="header--signup">SIGNUP</div>
        </a>
        <a href="#">
          <div className="header--login">LOGIN</div>
        </a>
        <div className="section--values">
          A New way to <br />
          connect your colleagues
        </div>
      </div>
    );
  }
}

export default Home;
