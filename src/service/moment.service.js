const connection = require('../app/database');

class MomentService {
  async createMoment(userId, content) {
    const statement = 'INSERT INTO moment (user_id, content) VALUES (?,?);';

    const [values] = await connection.execute(statement, [userId, content]);
    return values;
  }

  async getMomentList(offset = '0', size = '10') {
    const statement = `SELECT moment.id as momentId, content, moment.createAt, moment.updateAt, JSON_OBJECT('userId', users.id, 'username', username) as user,
    (SELECT COUNT(*) FROM comment WHERE momentId=comment.moment_id) as commentCount,
    (SELECT COUNT(*) FROM moment_label WHERE momentId=moment_label.moment_id) as labelCount
    FROM moment LEFT JOIN users ON users.id = moment.user_id LIMIT ? OFFSET ?;`;

    const [values] = await connection.execute(statement, [size, offset]);
    return values;
  }

  async getMoment(momentId) {
    const statement = `
    SELECT moment.id as momentId, moment.content as momentContent, moment.createAt, moment.updateAt, JSON_OBJECT('userId', mUser.id, 'username', mUser.username) as user,
    JSON_ARRAYAGG(JSON_OBJECT("id", comment.id, "content", comment.content, "commentId", comment.comment_id, "user", JSON_OBJECT('userId', users.id, 'username', users.username))) as comments,
    (
      SELECT JSON_ARRAYAGG(JSON_OBJECT("id", label.id, "labelName", label.name))
		  FROM label
      LEFT JOIN moment_label ON moment_label.label_id = label.id
      WHERE moment.id = moment_label.moment_id
    ) as labels
    FROM moment
    LEFT JOIN users as mUser ON mUser.id = moment.user_id
    LEFT JOIN comment ON comment.moment_id = moment.id
    LEFT JOIN users ON users.id = comment.user_id
    WHERE moment.id = ?
    GROUP BY moment.id;
    `;
    console.log(momentId);
    const [values] = await connection.execute(statement, [momentId]);
    return values;
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
  async addLabels(momentId, labelId) {
    const statement = `INSERT INTO moment_label (moment_id,label_id) VALUES (?,?);`;
    const [values] = await connection.execute(statement, [momentId, labelId]);
    return values;
  }
}
module.exports = new MomentService();
