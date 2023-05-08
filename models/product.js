const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
// const mongoDB = require("mongodb");
// // const getDb = require("../util/database").getDb;
// class Product {
//   constructor(title, price, description, imageUrl, id, userId) {
//     this.title = title;
//     this.price = +price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this._id = id ? new mongoDB.ObjectId(id) : null;
//     this.userId = userId;
//   }

//   save() {
//     const db = getDb();
//     let dbOp;
//     if (this._id) {
//       dbOp = db
//         .collection("products")
//         .updateOne({ _id: this._id }, { $set: this });
//     } else {
//       dbOp = db.collection("products").insertOne(this);
//     }
//     return dbOp
//       .then((result) => {
//         console.log('Product Save');
//       })
//       .catch((err) => console.log(err));
//   }

//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection("products")
//       .find()
//       .toArray()
//       .then((products) => {
//         return products;
//       })
//       .catch((err) => console.log(err));
//   }

//   static findById(prodID) {
//     const db = getDb();
//     return db
//       .collection("products")
//       .find({ _id: new mongoDB.ObjectId(prodID) })
//       .next()
//       .then((product) => {
//         console.log('product found');
//         return product;
//       })
//       .catch((err) => console.log(err));
//   }

//   static deleteById(prodID) {
//     const db = getDb();
//     return db
//       .collection("products")
//       .deleteOne({ _id: new mongoDB.ObjectId(prodID) })
//       .then((product) => {
//         console.log("product deleted");
//       })
//       .catch((err) => console.log(err));
//   }
// }

// module.exports = Product;
