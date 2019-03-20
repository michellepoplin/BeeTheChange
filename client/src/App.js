import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import Main from "./pages/Main";
import Devpage from "./pages/Devpage";
import Farmersearch from "./pages/Farmersearch";
import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/developers" component={Devpage} />
          <Route exact path="/" component={Main} />
          <Route exact path="/user" component={User} />
          <Route exact path="/developers" component={Devpage} />
          <Route exact path="/famersearch" component={Farmersearch} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
