import React from "react";
import Container from "@material-ui/core/Container";

import "./App.css";
import Router from "./navigation/router";

function App() {
  return (
    <Container className="App">
      <Router />
    </Container>
  );
}

export default App;
