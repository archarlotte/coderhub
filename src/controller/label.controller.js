const { CONTENT_IS_REQUIRED } = require('../config/error');
const labelService = require('../service/label.service');

class LabelController {
  async create(ctx, next) {
    const { name } = ctx.request.body;
    if (!name) return ctx.app.emit('error', CONTENT_IS_REQUIRED, ctx);
    const result = await labelService.createLabel(name);

    ctx.body = { result };
  }

  async list(ctx, next) {
    const result = await labelService.getLabelList();
    ctx.body = { result };
  }

}

module.exports = new LabelController();
