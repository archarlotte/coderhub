const fileService = require('../service/file.service');
const userService = require('../service/user.service');
const { SERVER_HOST, SERVER_PORT } = require('../config/server');

class fileController {
  async create(ctx, next) {
    const { filename, mimetype, size } = ctx.request.file;
    const result = await fileService.createFile(ctx.user.id, filename, mimetype, size);
    const avatarUrl = `${SERVER_HOST}:${SERVER_PORT}/users/avatar/${ctx.user.id}`;

    await userService.updateUserAvatar(avatarUrl, ctx.user.id);
    ctx.body = { result };
  }

}

module.exports = new fileController();
