var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send('用户的列表页');
});
 router.get('/show',function (req, res, next){
   res.send('用户的详情页');
 });

module.exports = router;
