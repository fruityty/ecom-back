import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // If you have a User collection
    ref: "User",
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId, // reference to Product collection
        ref: "Product",
        required: true,
      },
      name: String,          // snapshot name at order time
      price: Number,         // snapshot price at order time
      quantity: Number,
      image: String,         // product image at order time
      color: String,         // selected color
      size: String,          // selected size
    }
  ],
  shippingAddress: {
    fullName: String,
    address: String,
    city: String,
    postalCode: String,
    country: String,
    phone: String,
  },
  paymentMethod: { type: String, default: "cash" }, // or "credit", "paypal", etc.
  paymentStatus: { type: String, default: "pending" }, // "pending", "paid", etc.
  itemsPrice: Number,      // subtotal before delivery/discount
  discount: Number,        // total discount
  deliveryFee: Number,
  totalPrice: Number,      // subtotal + delivery - discount
  isDelivered: { type: Boolean, default: false },
  deliveredAt: Date,
  createdAt: { type: Date, default: Date.now }
});

// collection: orders
const Order = mongoose.model("Order", OrderSchema, 'orders');

export default Order;

// user: Who placed the order (refers to User collection).

// items: Each item includes product info at order time (not just the product id).

// shippingAddress: For delivery.

// paymentMethod, paymentStatus: To manage payment.

// itemsPrice, discount, deliveryFee, totalPrice: For calculation and summary.

// isDelivered, deliveredAt: For tracking.

// createdAt: Auto timestamp.