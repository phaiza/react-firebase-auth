import React from "react";
import { render } from "@testing-library/react";

import App from "./";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });
});
