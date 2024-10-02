const app = require('../app');
const { NAME_OR_PASSWORD_IS_REQUIRE, NAME_IS_ALREADY_EXISTS } = require('../config/error');

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
  }
  ctx.body = { code, message };
});
