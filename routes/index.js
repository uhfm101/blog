var express = require('express');
var router = express.Router();
const articleController = require('../controllers/articleController')
const commentController = require('../controllers/commentController')
const userController = require('../controllers/userController')
 router.get('/', function(req, res){
   res.redirect('/article')
 })
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/article/add', articleController.renderAddForm)
router.post('/article/add', articleController.addForm)

router.get('/article/:articleId', articleController.displayArticle)
router.get('/article/', articleController.displayAll)

router.get("/article/:articleId/edit", articleController.renderEditForm)
router.post('/article/:articleId/edit', articleController.updateArticle)

router.get('/article/:articleId/delete', articleController.deleteArticle)

router.post('/article/:articleId/comment/create', commentController.createComment)

router.post('/comment/:commentId/reply/create', commentController.addRelpy)


router.get('/register', userController.renderRegistrationForm)
router.post('/register', userController.register)

router.get('/login', userController.login)
module.exports = router;
