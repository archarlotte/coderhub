const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../config/screct');

class LoginController {
  createToken(ctx, next) {
    const { username } = ctx.request.body;
    const payload = { username, id: ctx.user.id };
    try {
      const token = jwt.sign(payload, PRIVATE_KEY, { expiresIn: 60 * 10, algorithm: 'RS256' });
      ctx.body = {
        token,
      };
    } catch (err) {
      console.log('login err', err);
    }
  }
}

module.exports = new LoginController();
