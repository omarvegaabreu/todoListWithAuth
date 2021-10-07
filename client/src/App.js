import React, { Fragment } from "react";
import AuthState from "./context/auth/AuthState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import TodoState from "./context/todo/TodoState";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    <AuthState>
      <TodoState>
        <AlertState>
          <Router>
            <Fragment>
              <NavBar />
              <div className="container ">
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/About" component={About}></Route>
                  <Route exact path="/Login" component={Login}></Route>
                  <Route exact path="/Register" component={Register}></Route>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </TodoState>
    </AuthState>
  );
};

export default App;
