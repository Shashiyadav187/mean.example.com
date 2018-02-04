var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('../../models/user');

/* GET users listing. */
router.get('/', function(req, res){

  User.find({},function(err, users){

    if(err){
      return res.json({'success':false, 'error': err});
    }

    return res.json({'success':true, 'users': users});

  });

});

/* GET a single user. */
router.get('/:userId', function(req,res){
  
  var userId = req.params.userId;

  User.findOne({'_id':userId}, function(err, user){

    if(err){
      return res.json({'success':false, 'error': err});
    }

    return res.json({'success':true, 'user': user});

  });

});

module.exports = router;
