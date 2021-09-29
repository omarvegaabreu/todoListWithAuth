import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <div className="container ">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/About" component={About}></Route>
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
