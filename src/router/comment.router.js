const KoaRouter = require('@koa/router');
const commentController = require('../controller/comment.controller');
const { verifyAuth, permission } = require('../middleware/permission.middleware');

const commentRouter = new KoaRouter({ prefix: '/comment' });

commentRouter.post('/', verifyAuth, commentController.create);
commentRouter.post('/reply', verifyAuth, commentController.create);
commentRouter.patch('/:commentId', verifyAuth, permission("comment"), commentController.changeComment);
commentRouter.delete('/:commentId', verifyAuth, permission("comment"), commentController.remove);

module.exports = commentRouter;
