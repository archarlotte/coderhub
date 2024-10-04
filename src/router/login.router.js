const KoaRouter = require('@koa/router');
const loginController = require('../controller/login.controller');
const { verifyUser } = require('../middleware/login.middleware');

const loginRouter = new KoaRouter({ prefix: '/login' });

loginRouter.post('/', verifyUser, loginController.createToken);

module.exports = loginRouter;
