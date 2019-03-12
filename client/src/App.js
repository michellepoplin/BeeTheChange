import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
