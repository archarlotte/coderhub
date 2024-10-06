const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../config/screct');
const { NAME_OR_PASSWORD_IS_REQUIRE } = require('../config/error');
const momentService = require('../service/moment.service');
class MomentController {
  async create(ctx, next) {
    const { content } = ctx.request.body;
    if (!content) return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRE, ctx);
    const result = await momentService.createMoment(ctx.user.id, content);

    ctx.body = { result };
  }
  async list(ctx, next) {
    const result = await momentService.getMomentList();

    ctx.body = { result };
  }
  async getMoment(ctx, next) {
    const { momentId } = ctx.request.params;

    const result = await momentService.getMoment(momentId);

    ctx.body = { result };
  }
  async changeMoment(ctx, next) {
    const { content } = ctx.request.body;
    const { momentId } = ctx.request.params;
    if (!content) return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRE, ctx);
    const result = await momentService.changeMoment(content, momentId);

    ctx.body = { result };
  }
  async remove(ctx, next) {
    const { momentId } = ctx.request.params;
    const result = await momentService.removeMoment(momentId);

    ctx.body = { result };
  }
}

module.exports = new MomentController();
