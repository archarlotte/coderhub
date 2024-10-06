const { AUTHORIZATION_TOKEN_IS_REQUIRED, PERMISSION_DENIED, INVALID_TOKEN } = require('../config/error');
const { PUBLIC_KEY } = require('../config/screct');
const jwt = require('jsonwebtoken');
const permissionService = require('../service/permission.service');

const verifyAuth = async (ctx, next) => {
  const authorization = ctx.headers.authorization;
  if (!authorization) {
    return ctx.app.emit('error', AUTHORIZATION_TOKEN_IS_REQUIRED, ctx);
  }
  try {
    const token = authorization.replace('Bearer ', '');
    const result = jwt.verify(token, PUBLIC_KEY, { algorithm: 'RS256' });
    ctx.user = result;
  } catch (err) {
    return ctx.app.emit('error', INVALID_TOKEN, ctx);
  }

  await next();
};

const permission = (tableName) => {
  return async (ctx, next) => {
    const keyId = ctx.params[0];
    const result = await permissionService.checkPermisson(tableName, ctx.user.id, keyId);

    if (!result.length) {
      return ctx.app.emit('error', PERMISSION_DENIED, ctx);
    }
    await next();
  };
};

module.exports = { verifyAuth, permission };
