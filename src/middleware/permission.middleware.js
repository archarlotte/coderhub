const { NAME_OR_PASSWORD_IS_REQUIRE } = require('../config/error');
const { PUBLIC_KEY } = require('../config/screct');
const jwt = require('jsonwebtoken');
const momentService = require('../service/moment.service');

const verifyAuth = async (ctx, next) => {
  const authorization = ctx.headers.authorization;
  if (!authorization) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRE, ctx);
  }
  try {
    const token = authorization.replace('Bearer ', '');
    const result = jwt.verify(token, PUBLIC_KEY, { algorithm: 'RS256' });
    ctx.user = result;
  } catch (err) {
    console.log('verify auth err');
  }

  await next();
};

const permission = async (ctx, next) => {
  const result = await momentService.checkPermisson(ctx.user.id, ctx.params.momentId);
  console.log('success', result, ctx.params.momentId, ctx.user.id);

  if (!result.length) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRE, ctx);
  }
  console.log('success');
  await next();
};

module.exports = { verifyAuth, permission };
