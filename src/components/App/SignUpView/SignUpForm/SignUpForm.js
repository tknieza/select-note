import React from "react";
import { Link, withRouter } from "react-router-dom";

import { Button } from "rebass";
import { Input } from "@rebass/forms";

import { usingFirebase } from "../../../Firebase";
import * as ROUTES from "../../../../constants/routes";

const INITIAL_STATE = {
  email: "",
  passwordOne: "",
  passwordTwo: ""
};

class SignUpFormBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return this.props.firebase.user().set({ email });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE }, () =>
          this.props.history.push(ROUTES.HOME)
        );
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
    const { email, passwordOne, passwordTwo } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      passwordOne.length < 6;

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
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <Input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <Button disabled={isInvalid} type="submit">
          Sign Up
        </Button>
      </form>
    );
  }
}

const SignUpForm = withRouter(usingFirebase(SignUpFormBase));

export default SignUpForm;
