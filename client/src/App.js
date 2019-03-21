import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import Search from "./pages/Search";
import Devpage from './pages/Devpage';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/developers" component={Devpage} />
      </Switch>
    </Router>
  );
}

export default App;
