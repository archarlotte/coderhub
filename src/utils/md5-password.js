const crypto = require('crypto');

const md5Password = (password) => {
  const md5 = crypto.createHash('md5');
  const cryptoPassword = md5.update(password).digest('hex');
  return cryptoPassword;
};

module.exports = { md5Password };
