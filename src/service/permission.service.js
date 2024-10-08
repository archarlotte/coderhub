const connection = require('../app/database');

class PermissionService {
  async checkPermisson(tableName, userId, commentId) {
    const statement = `SELECT * FROM ${tableName} WHERE id = ? AND user_id = ?;`;
    console.log(tableName, commentId, userId);
    let result;
    try {
      [result] = await connection.execute(statement, [commentId, userId]);
    } catch (err) {
      console.log(err);
    }
    return result;
  }
}

module.exports = new PermissionService();
