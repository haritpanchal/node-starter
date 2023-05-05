const mongoDB = require("mongodb");
const getDb = require("../util/database").getDb;
class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = +price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongoDB.ObjectId(id) : null;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      dbOp = db
        .collection("products")
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection("products").insertOne(this);
    }
    return dbOp
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => console.log(err));
  }

  static findById(prodID) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new mongoDB.ObjectId(prodID) })
      .next()
      .then((product) => {
        console.log(product);
        return product;
      })
      .catch((err) => console.log(err));
  }

  static deleteById(prodID) {
    const db = getDb();
    return db
      .collection("products")
      .deleteOne({ _id: new mongoDB.ObjectId(prodID) })
      .then((product) => {
        console.log("product deleted");
      })
      .catch((err) => console.log(err));
  }
}

module.exports = Product;
