const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    title: {type: String, required: true, unique: true},
    description: String,
    price: {type: Number, min: [0, 'wrong price'], required: true},
    discountPercentage: {type: Number, min: [0, 'wrong min discount'], max:[50, 'wrong max discount']},
    rating: {type: Number, min: [0, 'wrong min rating'], max:[5, 'wrong max rating']},
    stock: Number,
    brand: {type: String, required: true},
    category: {type: String, required: true},
    thumbnail: {type: String, required: true},
})

// productSchema.set('toJSON', { virtual: true, versionKey: false,
//     transform: (doc, ret) =>
//     {delete ret._id}} );

exports.Product = mongoose.model('Product', productSchema);

/*
User:
[
  { _id: 1, name: 'John', age: 30 },
  { _id: 2, name: 'Alice', age: 25 },
  { _id: 3, name: 'Bob', age: 35 },
  { _id: 4, name: 'Emily', age: 40 },
  { _id: 5, name: 'Charlie', age: 28 }
]

orders:
[
  { _id: ObjectId('65c76a8429f92520bbfd237c'), userId: 1, amount: 100 },
  { _id: ObjectId('65c76a8429f92520bbfd237d'), userId: 2, amount: 150 },
  { _id: ObjectId('65c76a8429f92520bbfd237e'), userId: 1, amount: 200 },
  { _id: ObjectId('65c76a8429f92520bbfd237f'), userId: 3, amount: 120 },
  { _id: ObjectId('65c76a8429f92520bbfd2380'), userId: 4, amount: 180 }
]
db.users.aggregate([
{
  $lookup: {
    from: "orders",
    localField: "_id",
    foreignField: "userId",
    as: "user_orders"
  }
 },
 { $group: { _id: null, maxAmount: { $max: "$amount" } } }
])

db.orders.aggregate([
  { $group: { _id: "$userId", totalRevenue: { $sum: "$amount" } } },
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "_id",
      as: "user_info"
    }
  }
])

db.orders.aggregate([
  { $group: { _id: "$userId", totalOrders: { $sum: 1 } } },
  { $sort: {totalOrders: -1 } }])



*/


