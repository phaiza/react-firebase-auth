import React from "react";
import { withFirebase } from "../Firebase";

const SingOutButton = ({ firebase }) => (
  <a onClick={firebase.doSignOut}>Sign Out</a>
);

export default withFirebase(SingOutButton);
