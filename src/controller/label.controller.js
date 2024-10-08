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

  // async getlabel(ctx, next) {
  //   const { labelId } = ctx.request.params;

  //   const result = await labelService.getlabel(labelId);

  //   ctx.body = { result };
  // }

  // async changelabel(ctx, next) {
  //   const { content } = ctx.request.body;
  //   const { labelId } = ctx.request.params;
  //   if (!content || !labelId) return ctx.app.emit('error', CONTENT_OR_label_ID_IS_REQUIRED, ctx);
  //   const result = await labelService.changelabel(content, labelId);

  //   ctx.body = { result };
  // }

  // async remove(ctx, next) {
  //   const { labelId } = ctx.request.params;
  //   const result = await labelService.removelabel(labelId);

  //   ctx.body = { result };
  // }
}

module.exports = new LabelController();
