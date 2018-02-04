var express = require('express');
var router = express.Router();
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

module.exports = router;
