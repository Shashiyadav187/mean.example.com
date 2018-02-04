var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  uniqueValidator = require('mongoose-unique-validator');

//Create a schema
var User = new Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: [true, 'Email is already in use']
  },
  username: {
    type: String,
    required: [true, 'Please enter a username'],
    unique: [true, 'Username is already in use']
  },
  first_name: String,
  last_name: String,
  admin: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date,
    default: Date.now
  }
});

User.plugin(uniqueValidator);

module.exports  = mongoose.model('User', User);
