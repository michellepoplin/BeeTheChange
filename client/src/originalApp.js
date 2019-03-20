import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
// import Devpage from './pages/Devpage';
import Home from "./pages/Home";
import Devpage from "./pages/Devpage";
import './App.scss';


function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/user" component={User} />
                    <Route exact path="/developers" component={Devpage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;