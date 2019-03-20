import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import Devpage from './pages/Devpage';
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route exact path="/user" component={User} />
            <Route exact path="/developers" component={Devpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


