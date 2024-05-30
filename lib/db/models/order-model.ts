import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
  },
  watchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Watch",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["processing", "shipped", "delivered"],
    default: "processing",
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  shippedDate: Date,
  deliveredDate: Date,
});

module.exports = mongoose.model("Order", orderSchema);
