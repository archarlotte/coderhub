const { CONTENT_OR_MOMENT_ID_IS_REQUIRED, COMMENT_ID_IS_REQUIRED, CONTENT_IS_REQUIRED } = require('../config/error');
const commentService = require('../service/comment.service');

class CommentController {
  async create(ctx, next) {
    const { content, momentId } = ctx.request.body;

    if (!content || !momentId) return ctx.app.emit('error', CONTENT_OR_MOMENT_ID_IS_REQUIRED, ctx);

    const result = await commentService.createComment(ctx.user.id, momentId, content);

    ctx.body = { result };
  }

  async reply(ctx, next) {
    const { content, momentId, commentId } = ctx.request.body;

    if (!content || !momentId) return ctx.app.emit('error', CONTENT_OR_MOMENT_ID_IS_REQUIRED, ctx);
    if (!commentId) return ctx.app.emit('error', COMMENT_ID_IS_REQUIRED, ctx);

    const result = await commentService.replyComment(ctx.user.id, momentId, commentId, content);

    ctx.body = { result };
  }
  // async list(ctx, next) {
  //   const result = await momentService.getMomentList();

  //   ctx.body = { result };
  // }
  // async getMoment(ctx, next) {
  //   const { momentId } = ctx.request.params;

  //   const result = await momentService.getMoment(momentId);

  //   ctx.body = { result };
  // }
  async changeComment(ctx, next) {
    const { content } = ctx.request.body;
    const { commentId } = ctx.request.params;
    if (!content) return ctx.app.emit('error', CONTENT_IS_REQUIRED, ctx);
    if (!commentId) return ctx.app.emit('error', COMMENT_ID_IS_REQUIRED, ctx);
    const result = await commentService.changeComment(content, commentId);

    ctx.body = { result };
  }
  async remove(ctx, next) {
    const { commentId } = ctx.request.params;
    const result = await commentService.removeComment(commentId);

    ctx.body = { result };
  }
}

module.exports = new CommentController();
