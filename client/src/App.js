import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import Devpage from './pages/Devpage';
import Home from "./pages/Home";
import { Security, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-378075.okta.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '{0oadeos7hpHf0VuME356}'
}


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Security issuer={config.issuer} client_id={config.client_id} redirect_uri={config.redirect_uri}>
            <Route path='/' exact={true} component={Home}/>
            <Route exact path="/user" component={User} />
            <Route exact path="/developers" component={Devpage} />
            <Route path='/implicit/callback' component={ImplicitCallback}/>
          </Security>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
