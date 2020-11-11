import React, { Component } from "react";
import { Button } from "react-bootstrap";

import "./Home.css";
import NavigationBar from "../Navbar/NavigationBar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="mainContent">
          <div>WIP</div>
          <Button
            className="float-none"
            href="https://www.reddit.com/api/v1/authorize?client_id=client_id_here&redirect_uri=http://localhost:9874/login&response_type=code&scope=vote%20history%20identity%20read%20save&state=anystringhere"
          >
            Sign in
          </Button>
        </div>
      </div>
    );
  }
}
