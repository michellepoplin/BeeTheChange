import React, { Component } from "react";
import auth0 from 'auth0-js';

class Auth extends Component {

  auth0 = new auth0.WebAuth({
    domain: 'jittycodes.auth0.com',
    clientID: 'oEkb9NZ69zofl5T1o6isiSkj24BDUyFb',
    redirectUri: 'http://localhost:3000/',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
export default Auth; 