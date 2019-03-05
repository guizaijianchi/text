var express = require('express');
var router = express.Router();
/**  GET users listing. /cate */
router.get('/list',function (req,res, next){
    res.send('分类的列表页');
});
router.get('/show',function (req, res, next){
    res.send('分类的详情页');
});
module.exports = router;