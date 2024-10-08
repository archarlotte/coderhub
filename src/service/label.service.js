const connection = require('../app/database');

class LabelService {
  async createLabel(name) {
    const statement = 'INSERT INTO label (name) VALUES (?);';

    const [values] = await connection.execute(statement, [name]);
    return values;
  }
  async getLabelList() {
    const statement = `SELECT * FROM label;`;

    const [values] = await connection.execute(statement);
    return values;
  }
  async checkLabel(label) {
    const statement = `SELECT * FROM label WHERE name = ?;`;
    const [values] = await connection.execute(statement, [label]);
    return values;
  }
}
module.exports = new LabelService();
