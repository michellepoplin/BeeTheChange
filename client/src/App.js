import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "./pages/Home";
// import ControlledCarousel from "./component/ControlledCarousel";

function App() {
  return (
    <Router>
      <div>
      {/* <ControlledCarousel />  */}
        <Switch>
          
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
