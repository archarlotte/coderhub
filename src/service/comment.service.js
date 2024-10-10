const connection = require('../app/database');

class CommentService {
  async createComment(userId, momentId, content) {
    const statement = 'INSERT INTO comment (user_id, moment_id, content) VALUES (?,?,?);';
    const [values] = await connection.execute(statement, [userId, momentId, content]);
    return values;
  }
  
  async replyComment(userId, momentId, commentId, content) {
    const statement = 'INSERT INTO comment (user_id, moment_id, comment_id, content) VALUES (?,?,?,?);';
    const [values] = await connection.execute(statement, [userId, momentId, commentId, content]);
    return values;
  }

  async changeMoment(content, commentId) {
    const statement = `UPDATE comment SET content = ? WHERE id = ?;`;
    const [values] = await connection.execute(statement, [content, commentId]);
    return values;
  }

  async removeComment(commentId) {
    const statement = `DELETE FROM comment WHERE id = ?;`;
    const [values] = await connection.execute(statement, [commentId]);
    return values;
  }
}
module.exports = new CommentService();
