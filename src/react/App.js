import React, { Component } from "react";
import "./App.css";
import pages from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {Object.entries(pages).map(([routeName, routeObj]) => (
            <Route
              key={routeName}
              exact
              path={routeObj.path}
              component={routeObj.component}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
