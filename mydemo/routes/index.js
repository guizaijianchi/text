var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '后台管理界面' });
});

router.get('/list',function (req, res, next){
  // 伪数据,将来在数据库中读取
  let data = {
    head:'文章列表显示',
    itemLists:[
      { title:'express原理', author:'tom'},
      { title:'express路由', author:'alice'},
      { title:'express中 request方法',author:'tom'},
      { title:'express中 response的方法',authorr:'tom'},
      { title:'express的ejs的使用',author:'tom'}
    ]
  }
  res.render('list', { data: data});
});
router.get('/show/:id', function (req, res, next){
  // 将来查询数据库 中具体的id对应的详情页
  res.send('我是详情页' + req.params.id);
});
router.get('/demo1',function (req, res, next){
  res.send('我是 send方法');//发送字符串
});
router.get('/demo2',function (req,res, next){
  res.render('html/demo');//渲染
});
router.get('/demo3',function (req, res, next){
  res.redirect('/users/list');//重定向
});
router.get('/demo4',function (req, res, next){
  res.json({
    code:200, itemList:[
      { title:'express原理', author:'tom'},
      { title:'express路由',author:'alice'}
    ]
  });
});

//  传值:
router.get('/demo5/:user/:age',function (req, res, next){
  console.log(req.params);
  res.send('req.params的传值' + req.params.user);
})
router.get('/demo6',function (req, res, next){
  console.log(req.query);
  res.send('req.query的传值' + req.query.user);
})

//登录的操作
// 1.登录的显示 (get)
router.get('/login',function (req, res, next){
  res.render('login');
}) 
// 2.登录的操作(post 接受表单信息)
router.post('/login',function (req, res, next){
  // 表单信息
  console.log(req.body);
  res.send('表单信息req.body的传值');
})
module.exports = router;
