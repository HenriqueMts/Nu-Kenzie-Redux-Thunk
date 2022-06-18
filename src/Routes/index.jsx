import { Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/page"></Route>
    </Switch>
  );
};

export default Routes;
