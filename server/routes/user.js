var express = require('express');
var passport = require('passport');
var OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
var request = require('superagent');
var User = require('../models/user');

var auth = require('../../auth.json');

var router = express.Router();

passport.serializeUser(function(user, done) {
  console.log(user);
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('discord', new OAuth2Strategy({
    authorizationURL: 'https://discordapp.com/api/oauth2/authorize',
    tokenURL: 'https://discordapp.com/api/oauth2/token',
    clientID: auth.discord.appId,
    clientSecret: auth.discord.secret,
    callbackURL: 'http://localhost:3000/auth/discord/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    var identityRoute = "https://discordapp.com/api/users/@me";

    request
      .get(identityRoute)
      .set( 'Authorization', 'Bearer ' + accessToken )
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          console.log(err);
          return done(err, null);
        }
        var discordUser = res.body;

        User.findOne({ 'discord.id' :  discordUser.id }, function(err, user) {
          if (err) {
            return done(err, null);
          }

          if (!user) {
            //add user
            var newUser = new User();

            newUser.discord.id = discordUser.id;
            newUser.discord.token = accessToken;
            newUser.discord.username = discordUser.username;
            newUser.discord.avatar = discordUser.avatar;
            newUser.discord.discriminator = discordUser.discriminator;
            newUser.discord.email = discordUser.email;

            // save our user to the database
            newUser.save(function(err) {
              if (err) {
                done(err, null);
                throw err;
                return;
              }

              return done(null, newUser);
            });
          }

          return done(null, user);
        });
      })
    ;

  }
));

router.get('/auth/discord', passport.authenticate('discord', { scope : ['identify'] }));

router.get('/auth/discord/callback', passport.authenticate('discord', {
  successRedirect : '/',
  failureRedirect : '/'
}));

router.get('/users/current', function(req, res) {
  res.json(req.user);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
