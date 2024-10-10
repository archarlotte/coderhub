const connection = require('../app/database');

class UserService {
  async createUser(username, password) {
    const statement = 'INSERT INTO users (username, password) VALUES (?, ?);';

    const [values] = await connection.execute(statement, [username, password]);
    return values;
  }

  async findUserByName(username) {
    const statement = 'SELECT * FROM users WHERE username = ?;';
    const [values] = await connection.execute(statement, [username]);
    return values;
  }

  async updateUserAvatar(avatarUrl, userId) {
    const statement = 'UPDATE users SET avatar_url = ? WHERE id = ?;';
    const [values] = await connection.execute(statement, [avatarUrl, userId]);
    return values;
  }

  async showUserAvatar(userId) {
    try {
      const statement = 'SELECT * FROM avatar WHERE user_id = ?;';
      const [values] = await connection.execute(statement, [userId]);
      return values;
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = new UserService();
