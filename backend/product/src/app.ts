import express from "express";
require("dotenv").config();
import { routers } from "./routes";
import mongoose from "mongoose";

const start = async () => {
  try {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const port = process.env.PORT || 3001;

    app.use(routers.addProduct)
    app.use(routers.listProducts)


    await mongoose.connect("mongodb://product-mongo-srv:27017/product");
    console.log("Connected to MongoDB from  product !!!");

    app.listen(port, () => {
      console.log("product port running on port 3001 !!!");
    });

    return app;
  } catch (error) {
    console.error(error)
  }
};

export default start;
