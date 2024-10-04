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
}
module.exports = new UserService();
