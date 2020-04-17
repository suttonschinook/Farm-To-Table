import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Recipes from "./Pages/Recipes";
import Home from "./Pages/Home";
import Produce from "./Pages/Produce";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/produce" component={Produce} />
        <Route exact path="/recipes" component={Recipes} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
