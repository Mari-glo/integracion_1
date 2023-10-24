import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const productsCollection = "products";

const productsSchema = new Schema({

    title: { type: String, max: 100, required: true},
    description: { type: String, max: 250, required: true},
    image: {type: String, max: 100, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    
});

const productModel = model (productsCollection, productsSchema);

export default { productModel };