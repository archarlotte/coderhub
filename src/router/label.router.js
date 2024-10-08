const KoaRouter = require('@koa/router');
const labelController = require('../controller/label.controller');
const { verifyAuth, permission } = require('../middleware/permission.middleware');

const labelRouter = new KoaRouter({ prefix: '/label' });

labelRouter.post('/', verifyAuth, labelController.create);
labelRouter.get('/', labelController.list);

// labelRouter.post('/reply', verifyAuth, labelController.create);
// labelRouter.patch('/:labelId', verifyAuth, permission("label"), labelController.changelabel);
// labelRouter.delete('/:labelId', verifyAuth, permission("label"), labelController.remove);
// labelRouter.get('/', momentController.list);
// labelRouter.get('/:momentId', momentController.getMoment);

module.exports = labelRouter;
