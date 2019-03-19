import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
// import Devpage from './pages/Devpage';
// import Nav from "./components/Nav";
import Home from "./pages/Home";
// import { Security, ImplicitCallback } from '@okta/okta-react';
// const config = {
//   issuer: 'https://dev-378075.okta.com/oauth2/default',
//   redirect_uri: window.location.origin + '/implicit/callback',
//   client_id: '{clientId}'
// }





function App() {
  return (
    <Router>
      <div>
      
        {/* <Switch>

          <Route exact path="/user" component={User} />
          {/* <Security issuer={config.issuer} client_id={config.client_id} redirect_uri={config.redirect_uri}>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>

        </Security> */}
        {/* </Switch> */}
        {/* <Switch>
          <Route exact path="/developers" component={Devpage} />
        </Security>
        </Switch> */}
        <Switch>
          {/* <Route exact path="/developers" component={Devpage} /> */}

          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
