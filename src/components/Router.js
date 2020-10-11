import  React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = (isLoggedIn) => {
  console.log(isLoggedIn)
  return (
    <Router>
      <Switch>
        {isLoggedIn == null ? (
          <>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth></Auth>
          </Route>
        )}
      </Switch>
    </Router>
  )
}

export default AppRouter;