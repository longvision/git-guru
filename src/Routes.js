import React from "react";

import { Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Commits from "./components/Commits";

//Change basename prop to send to production as on https://github.com/gitname/react-gh-pages/issues/3
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/commits" component={Commits} />
  </Switch>
);

export default Routes;
