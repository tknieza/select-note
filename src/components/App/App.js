import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPageView from "./LandingPageView";
import MainView from "./MainView";
import Navigation from "./Navigation";
import SignInView from "./SignInView";
import SignUpView from "./SignUpView";

import * as ROUTES from "../../constants/routes";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Route exact path={ROUTES.LANDING} component={LandingPageView} />
      <Route path={ROUTES.SIGN_UP} component={SignUpView} />
      <Route path={ROUTES.SIGN_IN} component={SignInView} />
      <Route path={ROUTES.HOME} component={MainView} />
    </Router>
  );
};

export default App;
