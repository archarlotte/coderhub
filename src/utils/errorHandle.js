const app = require('../app');
const { NAME_OR_PASSWORD_IS_REQUIRE, NAME_IS_ALREADY_EXISTS, NAME_IS_NOT_EXISTS,PASSWORD_IS_WRONG } = require('../config/error');

app.on('error', (error, ctx) => {
  let code = 0;
  let message = '';

  switch (error) {
    case NAME_OR_PASSWORD_IS_REQUIRE:
      code = -1001;
      message = NAME_OR_PASSWORD_IS_REQUIRE;
      break;
    case NAME_IS_ALREADY_EXISTS:
      code = -1002;
      message = NAME_IS_ALREADY_EXISTS;
      break;
    case NAME_IS_NOT_EXISTS:
      code = -1003;
      message = NAME_IS_NOT_EXISTS;
      break;
    case PASSWORD_IS_WRONG:
      code = -1004;
      message = PASSWORD_IS_WRONG;
      break;
  }
  ctx.body = { code, message };
});
