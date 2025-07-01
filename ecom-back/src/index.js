import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import setTZ from "set-tz";
import jwt from "jsonwebtoken";
// import jwtValidate from "./middlewares/jwtValidate.js";
import productRoutes from './routes/productRoutes.js';
import connectDB from './config/mongodb.mjs'
import mongoose from "mongoose";

setTZ("Asia/Bangkok");
dotenv.config();

const corsOptions = {
  origin: "http://localhost:5000",
  methods: "GET,POST,DELETE,PUT",
  allowedHeaders: "Content-Type,Authorization",
};

const HOSTNAME = process.env.SERVER_IP || "localhost";
const PORT = process.env.SERVER_PORT || 5000;
const SALT = 10;

const webServer = express();
webServer.use(cors(corsOptions));
webServer.use(express.json());

// route registration
webServer.use('/api/products', productRoutes);

webServer.get('/api/product', (req, res) => {
  res.json([
    { id: 1, name: "Urban Stride Sneakers", price: 1800 },
    { id: 2, name: "Classic Leather Boots", price: 2500 },
    // ...more
  ]);
});

async function startServer() {
  await connectDB(); // Wait for MongoDB to connect first!

  webServer.listen(PORT, HOSTNAME, () => {
    console.log(`SERVER IS ONLINE => http://${HOSTNAME}:${PORT}`);
    console.log(`DATABASE IS CONNECTED: NAME => ${mongoose.connection.db?.databaseName}`);
  });
}

startServer();