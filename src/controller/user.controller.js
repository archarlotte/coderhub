const userService = require('../service/user.service');
const fs = require('fs');
const UPLOAD_PATH = './upload/';

class UserController {
  async create(ctx, next) {
    const { username, password } = ctx.request.body;
    await userService.createUser(username, password);
    ctx.body = 'user information';
  }

  async showAvatar(ctx, next) {
    const { userId } = ctx.request.params;
    if (!userId) return ctx.app.emit('error', USER_ID_IS_REQUIRED, ctx);

    const result = await userService.showUserAvatar(userId);
    const { filename, mimetype } = result.pop();

    try {
      const readStream = fs.createReadStream(`${UPLOAD_PATH}${filename}`);
      ctx.type = mimetype;
      ctx.body = readStream;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new UserController();
