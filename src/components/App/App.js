import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPageView from "./LandingPageView";
import MainView from "./MainView";
import Navigation from "./Navigation";
import SignInSignUpView from "./SignInSignUpView";
import { usingFirebase } from "../Firebase";
import { ThemeProvider } from "emotion-theming";
import * as ROUTES from "../../constants/routes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
      currentTheme: 0
    };
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  handleClick = () => {
    this.setState({
      currentTheme:
        this.state.currentTheme + 1 < this.props.themes.length
          ? this.state.currentTheme + 1
          : 0
    });
  };
  render() {
    const { themes, history } = this.props;
    return (
      <ThemeProvider theme={themes[this.state.currentTheme].theme}>
        <Router>
          <Navigation
            authUser={this.state.authUser}
            changeTheme={this.handleClick}
          />
          <Route exact path={ROUTES.LANDING}>
            <LandingPageView
              darkmode={themes[this.state.currentTheme].dark}
              routes={ROUTES}
              history={history}
            />
          </Route>
          <Route path={ROUTES.SIGN_IN}>
            <SignInSignUpView />
          </Route>
          <Route path={ROUTES.HOME}>
            <MainView />
          </Route>
        </Router>
      </ThemeProvider>
    );
  }
}

export default usingFirebase(App);
