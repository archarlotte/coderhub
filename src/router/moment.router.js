const KoaRouter = require('@koa/router');
const momentController = require('../controller/moment.controller');
const { verifyAuth, permission } = require('../middleware/permission.middleware');
const { isLabelExists } = require('../middleware/label.middleware');

const momentRouter = new KoaRouter({ prefix: '/moment' });

momentRouter.post('/', verifyAuth, momentController.create);
momentRouter.get('/', momentController.list);
momentRouter.get('/:momentId', momentController.getMoment);
momentRouter.patch('/:momentId', verifyAuth, permission('moment'), momentController.changeMoment);
momentRouter.delete('/:momentId', verifyAuth, permission('moment'), momentController.remove);
momentRouter.post('/:momentId/labels', verifyAuth, permission('moment'), isLabelExists, momentController.addLabels);

module.exports = momentRouter;
