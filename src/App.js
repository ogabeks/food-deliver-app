import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Screens/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </>
  );
};

export default App;
