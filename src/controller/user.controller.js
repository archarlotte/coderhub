const userService = require('../service/user.service');

class UserController {
  async create(ctx, next) {
    const { username, password } = ctx.request.body;
    await userService.createUser(username, password);
    ctx.body = 'user information';
  }
}

module.exports = new UserController();
