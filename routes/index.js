var express = require('express');
var router = express.Router();
const articleController = require('../controllers/articleController')
const commentController = require('../controllers/commentController')
const userController = require('../controllers/userController')
const ensureUserAuthenticated = require('../middleware/ensureUserAuthenticated')
const userHasRole = require('../middleware/userHasRole')
 router.get('/', function(req, res){
   res.redirect('/article')
 })
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/article/add', ensureUserAuthenticated, userHasRole('author'), articleController.renderAddForm)
router.post('/article/add', ensureUserAuthenticated, userHasRole('author'), articleController.addForm)

router.get('/article/:articleId', articleController.displayArticle)
router.get('/article/', articleController.displayAll)

router.get("/article/:articleId/edit", ensureUserAuthenticated, userHasRole('author'), articleController.renderEditForm)
router.post('/article/:articleId/edit', ensureUserAuthenticated, userHasRole('author'), articleController.updateArticle)

router.get('/article/:articleId/delete', ensureUserAuthenticated, articleController.deleteArticle)

router.post('/article/:articleId/comment/create', commentController.createComment)

router.post('/comment/:commentId/reply/create', commentController.addRelpy)

router.get('/comment/:commentId/delete', commentController.deleteComment)


router.get('/register', userController.renderRegistrationForm)
router.post('/register', userController.register)

router.get('/login', userController.renderLogin)
router.post('/login', userController.login)

router.get('/logout', userController.logout)

module.exports = router;
