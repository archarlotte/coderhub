const KoaRouter = require('@koa/router');
const labelController = require('../controller/label.controller');
const { verifyAuth, permission } = require('../middleware/permission.middleware');

const labelRouter = new KoaRouter({ prefix: '/label' });

labelRouter.post('/', verifyAuth, labelController.create);
labelRouter.get('/', labelController.list);

module.exports = labelRouter;
