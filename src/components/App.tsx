import * as React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import Students from "./Students";

const routes = [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="students" path="/students" component={Students} />,
];

const App = () => {
  return <Switch>{routes}</Switch>;
};

export default App;
