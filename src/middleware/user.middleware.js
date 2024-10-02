const connection = require('../app/database');
const { NAME_OR_PASSWORD_IS_REQUIRE, NAME_IS_ALREADY_EXISTS } = require('../config/error');
const userService = require('../service/user.service');
const { md5Password } = require('../utils/md5-password');

const verifyUser = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRE, ctx);
  }
  console.log(username, password);

  const users = await userService.findUserByName(username);
  console.log(users.length, username, password);
  if (users.length) {
    return ctx.app.emit('error', NAME_IS_ALREADY_EXISTS, ctx);
  }
  await next();
};

const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  ctx.request.body.password = md5Password(password);
  await next();
};

module.exports = { verifyUser, handlePassword };
