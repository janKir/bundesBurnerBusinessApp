import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import pages from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {pages.map(({ path, component }) => (
          <Route path={path} component={component} key={path} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
