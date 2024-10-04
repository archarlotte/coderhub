const { NAME_OR_PASSWORD_IS_REQUIRE, NAME_IS_NOT_EXISTS, PASSWORD_IS_WRONG } = require('../config/error');
const userService = require('../service/user.service');
const { md5Password } = require('../utils/md5-password');

const verifyUser = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRE, ctx);
  }

  const users = await userService.findUserByName(username);
  if (!users.length) {
    return ctx.app.emit('error', NAME_IS_NOT_EXISTS, ctx);
  }

  if(users[0].password !== md5Password(password)) {
    return ctx.app.emit('error', PASSWORD_IS_WRONG, ctx);
  }
  await next();
};

module.exports = { verifyUser };
