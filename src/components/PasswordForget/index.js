import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import { withFirebase } from "../Firebase";
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
  error: null,
};

const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;
    const isInvalid = email === "";

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
          <Button
            disabled={isInvalid}
            color="blue"
            fluid
            size="large"
            onSubmit={this.onSubmit}
          >
            Reset Password
          </Button>
          {error && <p>{error.message}</p>}
        </Form>
      </Segment>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
export default PasswordForgetPage;
