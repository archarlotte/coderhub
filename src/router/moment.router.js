const KoaRouter = require('@koa/router');
const momentController = require('../controller/moment.controller');
const { verifyAuth, permission } = require('../middleware/permission.middleware');

const momentRouter = new KoaRouter({ prefix: '/moment' });

momentRouter.post('/', verifyAuth, momentController.create);
momentRouter.get('/', momentController.list);
momentRouter.get('/:momentId', momentController.getMoment);
momentRouter.patch('/:momentId', verifyAuth, permission, momentController.changeMoment);
momentRouter.delete('/:momentId', verifyAuth, permission, momentController.remove);

module.exports = momentRouter;
