import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import Devpage from './pages/Devpage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={User} />
        </Switch>
        <Switch>
          <Route exact path="/developers" component={Devpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
