import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";

import * as ROUTES from "../../constants/routes";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

const SignInPage = () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h2" textAlign="center">
        Sign In
      </Header>
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </Grid.Column>
  </Grid>
);

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        console.log("Sign In");
        //redirect to home page
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <Segment>
        <Form size="large" onSubmit={this.onSubmit}>
          <Form.Input
            fluid
            icon="mail"
            iconPosition="left"
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />

          <Button
            disabled={isInvalid}
            color="blue"
            fluid
            size="large"
            onSubmit={this.onSubmit}
          >
            Sign In
          </Button>
          {error && <p>{error.message}</p>}
        </Form>
      </Segment>
    );
  }
}
const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;
export { SignInForm };
