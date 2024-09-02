import express from "express";
import mongoose from "mongoose";
import categoryRoutes from './routes/categoryRoutes.js';
import clothingItemRoutes from './routes/clothingItemRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

import cors from "cors";

import "dotenv/config";
const app = express();
app.use(express.urlencoded({ extended: false })); //middleware for forms - to use req.body
app.use(cors()); //middleware enable cors

app.use(express.json()); //middleware parses incoming req with json payloads
app.use(express.static("public")); //middleware serves static files.


app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/api/categories", categoryRoutes);
app.use("/api/clothing-items", clothingItemRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);
app.listen(process.env.PORT || 8000, async () => {
  console.log("Server has started");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Listening on port ${process.env.PORT}...`);
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.log("Error during connecting to MongoDB", err);
  }
});
