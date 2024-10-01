const Koa = require('koa');
const KoaRouter = require('@koa/router');

const app = new Koa();

const userRouter = new KoaRouter({ prefix: '/user' });

userRouter.get('/', (ctx, next) => {
  ctx.body = 'user information';
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log('coderhub server started');
});
