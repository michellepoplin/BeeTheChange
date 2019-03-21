import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
<<<<<<< HEAD
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
=======
import Search from "./pages/Search";
import Devpage from './pages/Devpage';
import Home from "./pages/Home";
>>>>>>> f1068dba5f5a77974a2c071d9bd3a69629c134cb

  return (
    <Router>
<<<<<<< HEAD
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
=======
      <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/developers" component={Devpage} />
      </Switch>
>>>>>>> f1068dba5f5a77974a2c071d9bd3a69629c134cb
    </Router>
  );
}

export default App;
