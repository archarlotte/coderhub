const KoaRouter = require('@koa/router');

const userRouter = new KoaRouter({ prefix: '/user' });

userRouter.get('/', (ctx, next) => {
  ctx.body = 'user information';
});

module.exports = userRouter;
