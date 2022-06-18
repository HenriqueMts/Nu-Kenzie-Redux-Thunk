import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import LandingPage from "../Pages/LandingPage";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
