const labelService = require('../service/label.service');

const isLabelExists = async (ctx, next) => {
  const { labels } = ctx.request.body;
  const labelIds = [];
  let result;
  for (const label of labels) {
    result = await labelService.checkLabel(label);
    if (result.length) {
      labelIds.push(result[0].id);
    } else {
      result = await labelService.createLabel(label);
      labelIds.push(result[0].id);
    }
  }
  ctx.labelIds = labelIds;
  await next();
};

module.exports = { isLabelExists };
