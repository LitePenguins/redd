//https://www.reddit.com/api/v1/authorize?client_id=mQptxlp8yyA0jw&redirect_uri=http://localhost:9874/login&response_type=code&scope=vote%20history%20identity%20read%20save&state=anystringhere

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features"

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
