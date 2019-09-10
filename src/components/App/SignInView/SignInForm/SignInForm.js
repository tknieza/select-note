import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Button } from "rebass";
import { Input } from "@rebass/forms";

import * as ROUTES from "../../../../constants/routes";
import { usingFirebase } from "../../../Firebase";

const INITIAL_STATE = {
  email: "",
  password: ""
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <form onSubmit={this.onSubmit}>
        <Input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <Input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <Button disabled={isInvalid} type="submit">
          Sign In
        </Button>
      </form>
    );
  }
}

export default withRouter(usingFirebase(SignInFormBase));
