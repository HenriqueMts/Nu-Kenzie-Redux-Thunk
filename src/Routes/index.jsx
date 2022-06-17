import { Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/page"></Route>
    </Switch>
  );
};

export default Routes;
