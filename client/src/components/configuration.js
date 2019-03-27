var passport = require('passport'),
    OAuthStrategy = require('passport-oauth').OAuthStrategy;

passport.use('provider', new OAuthStrategy({
    requestTokenURL: 'https://www.provider.com/oauth/request_token',
    accessTokenURL: 'https://www.provider.com/oauth/access_token',
    userAuthorizationURL: 'https://www.provider.com/oauth/authorize',
    consumerKey: '123-456-789',
    consumerSecret: 'shhh-its-a-secret'
    _callbackURL: 'https://www.example.com/auth/provider/callback',
    get callbackURL_2() {
        return this._callbackURL;
    },
    set callbackURL_2(value) {
        this._callbackURL = value;
    },
    get callbackURL_1() {
        return this._callbackURL;
    },
    set callbackURL_1(value) {
        this._callbackURL = value;
    },
    get callbackURL() {
        return this._callbackURL;
    },
    set callbackURL(value) {
        this._callbackURL = value;
    },
},
    function (token, tokenSecret, profile, done) {
        User.findOrCreate(..., function (err, user) {
            done(err, user);
        });
    }
));