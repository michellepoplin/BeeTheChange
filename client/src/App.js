import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import Main from "./pages/Main";
import Devpage from "./pages/Devpage";
import Farmersearch from "./pages/Farmersearch";
import './App.scss';
import Auth from './Auth/Auth.js';
import { Navbar, Button } from 'react-bootstrap';

class App extends Component {
goTo(route) {
  this.props.history.replace(`/${route}`)
}

login() {
  this.props.auth.login();
}

logout() {
  this.props.auth.logout();
}

componentDidMount() {
  const { renewSession } = this.props.auth;

  if (localStorage.getItem('isLoggedIn') === 'true') {
    renewSession();
  }
}

render() {
  const { isAuthenticated } = this.props.auth;

  return (
    <Router>
      <div>
      <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
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
