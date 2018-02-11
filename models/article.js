var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  uniqueValidator = require('mongoose-unique-validator');

//Create a schema
var Article = new Schema({
  title: {
    type: String,
    required: [true, 'Please enter a title'],
    unique: [true, 'Title is already in use']
  },
  slug: {
    type: String,
    required: [true, 'Please enter a slug'],
    unique: [true, 'Slug is already in use']
  },
  keywords: String,
  description: String,
  body: String,
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date,
    default: Date.now
  },
  published: {
    type: Date
    //required: [true, 'Please enter a pub date'],
  }
});


//Auto set the modified date prior to save
Article.pre('save', function(next){
  this.modified = new Date().toISOString();
  next();
});

Article.plugin(uniqueValidator);

module.exports  = mongoose.model('Article', Article);
