var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  timezone: String,
  twitch: {
    username: String
  },
  discord: {
    id: String,
    token: String,
    username: String,
    avatar: String,
    discriminator: String,
    email: String
  },
  nintendo: {
    mii_name: String,
  },
  splatoon: {
    team: String,
    former_teams: [String],
    favorite_weapons: [String],
    up_for: [String], //turf, squads, privates, tournaments, leagues
    highest_rank: String,
  }
});

module.exports = mongoose.model('User', userSchema);
