const mongoDB = require("mongodb");
const getDb = require("../util/database").getDb;
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  static findUserById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .findOnr({ _id: new mongoDB.ObjectId(userId) });
  }
}
module.exports = User;
