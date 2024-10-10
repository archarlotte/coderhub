const KoaRouter = require('@koa/router');
const fileController = require('../controller/file.controller');
const { verifyAuth, permission } = require('../middleware/permission.middleware');
const { uploadSingleFile } = require('../middleware/file.middleware');

const fileRouter = new KoaRouter({ prefix: '/file' });

fileRouter.post('/avatar', verifyAuth, uploadSingleFile, fileController.create);

module.exports = fileRouter;
