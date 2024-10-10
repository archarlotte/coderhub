const app = require('../app');
const {
  NAME_OR_PASSWORD_IS_REQUIRE,
  NAME_IS_ALREADY_EXISTS,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_WRONG,
  AUTHORIZATION_TOKEN_IS_REQUIRED,
  INVALID_TOKEN,
  PERMISSION_DENIED,
  CONTENT_IS_REQUIRED,
  CONTENT_OR_MOMENT_ID_IS_REQUIRED,
  COMMENT_ID_IS_REQUIRED,
  AVATAR_ID_IS_REQUIRED,
} = require('../config/error');

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
    case AUTHORIZATION_TOKEN_IS_REQUIRED:
      code = -1005;
      message = AUTHORIZATION_TOKEN_IS_REQUIRED;
      break;
    case INVALID_TOKEN:
      code = -1006;
      message = INVALID_TOKEN;
      break;
    case PERMISSION_DENIED:
      code = -1007;
      message = PERMISSION_DENIED;
      break;
    case CONTENT_IS_REQUIRED:
      code = -1008;
      message = CONTENT_IS_REQUIRED;
      break;
    case CONTENT_OR_MOMENT_ID_IS_REQUIRED:
      code = -1009;
      message = CONTENT_OR_MOMENT_ID_IS_REQUIRED;
      break;
    case COMMENT_ID_IS_REQUIRED:
      code = -1010;
      message = COMMENT_ID_IS_REQUIRED;
      break;
    case AVATAR_ID_IS_REQUIRED:
      code = -1011;
      message = AVATAR_ID_IS_REQUIRED;
      break;
  }
  ctx.body = { code, message };
});
