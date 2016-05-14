var express = require('express');
var passport = require('passport');
var OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

var router = express.Router();

router.get('login', function(req, res) {

});

router.post('/login', function(req, res) {

});

router.get('/signout', function(req, res) {

});


function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findByIf(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('discord', new OAuth2Strategy({
      authorizationURL: 'https://www.provider.com/oauth2/authorize',
      tokenURL: 'https://www.provider.com/oauth2/token',
      clientID: '123-456-789',
      clientSecret: 'shhh-its-a-secret'
      callbackURL: 'https://www.example.com/auth/provider/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate(..., function(err, user) {
        done(err, user);
      });
    }
  ));
}

module.exports = router;
