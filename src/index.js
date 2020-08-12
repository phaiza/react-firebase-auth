import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import Firebase, { FirebaseContext } from "./components/Firebase";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Container>
      {" "}
      <App />
    </Container>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
