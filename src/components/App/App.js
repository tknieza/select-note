import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPageView from "./LandingPageView";
import MainView from "./MainView";
import Navigation from "./Navigation";
import SignInView from "./SignInView";
import SignUpView from "./SignUpView";

import { usingFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    return (
      <Router>
        <Navigation authUser={this.state.authUser} />
        <Route exact path={ROUTES.LANDING} component={LandingPageView} />
        <Route path={ROUTES.SIGN_UP} component={SignUpView} />
        <Route path={ROUTES.SIGN_IN} component={SignInView} />
        <Route path={ROUTES.HOME} component={MainView} />
      </Router>
    );
  }
}

export default usingFirebase(App);
