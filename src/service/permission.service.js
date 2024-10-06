const connection = require('../app/database');

class PermissionService {
  async checkPermisson(tableName, userId, commentId) {
    const statement = `SELECT * FROM ? WHERE id = ? AND user_id = ?;`;
    const [result] = await connection.execute(statement, [tableName, commentId, userId]);

    return result;
  }
}

module.exports = new PermissionService();
