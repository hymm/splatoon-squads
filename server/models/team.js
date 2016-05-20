var mongoose = require('mongoose');

var teamSchema = mongoose.Schema({
  currentMembers: [String],
  formerMembers: [String],
  does: [String], // turf, squads, privates, tournaments, leagues
  accomplishments: [String],
  times_active: [Date],
  banner: String,
  avatar: {
    data: Buffer,
    type: String
  },
  recruitment: {
    status: String,
    ranks: String,
    weapons: [String],
  },
  tag: String,
  owner: ObjectId
});

module.exports = mongoose.model('Team', teamSchema);
