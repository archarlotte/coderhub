const connection = require('../app/database');

class fileService {
  async createFile(userId, fileName, mimetype, size) {
    try {
      const statement = 'INSERT INTO avatar (user_id, filename, mimetype, size) VALUES (?,?,?,?);';
      const [values] = await connection.execute(statement, [userId, fileName, mimetype, size]);

      return values;
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = new fileService();
