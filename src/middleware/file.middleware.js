const KoaRouter = require('@koa/router');
const multer = require('@koa/multer');

const upload = multer({ dest: './upload' });
const uploadSingleFile = upload.single('avatar');

module.exports = {
  uploadSingleFile,
};
