const connection = require('../app/database');

class MomentService {
  async createMoment(userId, content) {
    const statement = 'INSERT INTO moment (user_id, content) VALUES (?,?);';

    const [values] = await connection.execute(statement, [userId, content]);
    return values;
  }

  async getMomentList(offset = '0', size = '10') {
    const statement = `SELECT moment.id as momentId, content, moment.createAt, moment.updateAt, JSON_OBJECT('userId', users.id, 'username', username) as user FROM moment LEFT JOIN users ON users.id = moment.user_id LIMIT ? OFFSET ?;`;

    const [values] = await connection.execute(statement, [size, offset]);
    return values;
  }

  async getMoment(momentId) {
    const statement = `SELECT moment.id as momentId, content, moment.createAt, moment.updateAt, JSON_OBJECT('userId', users.id, 'username', username) as user FROM moment LEFT JOIN users ON users.id = moment.user_id WHERE moment.id = ?;`;

    const [values] = await connection.execute(statement, [momentId]);
    return values;
  }

  async checkPermisson(userId, momentId) {
    const statement = `SELECT * FROM moment WHERE id = ? AND user_id = ?;`;
    const [result] = await connection.execute(statement, [momentId, userId]);
    console.log(result);

    return result;
  }

  async changeMoment(content, momentId) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?;`;
    const [values] = await connection.execute(statement, [content, momentId]);
    return values;
  }

  async removeMoment(momentId) {
    const statement = `DELETE FROM moment WHERE id = ?;`;
    const [values] = await connection.execute(statement, [momentId]);
    return values;
  }
}
module.exports = new MomentService();
