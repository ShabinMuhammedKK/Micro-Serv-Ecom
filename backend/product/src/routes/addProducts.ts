import express from "express";
import { Product } from "../models/product";

const router = express();

router.post("/api/products/addproduct", async (req, res) => {
    try {
        const { name, description, price, category} = req.body;

        if (name && description && price && category) {
            const newProduct = Product.build({
                name,
                description,
                price,
                category
            });


            await newProduct.save();


            res.status(201).json({ message: "Product added successfully", product: newProduct });
        } else {

            res.status(400).json({ message: "All fields are required" });
        }
    } catch (error) {

        console.error("Error adding product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

export { router as addProduct };




