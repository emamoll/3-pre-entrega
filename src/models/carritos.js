import { Schema, model } from "mongoose";

const CarritoSchema = new Schema({}, { timestamps: true, versionKey: false });

export const CartModel = model("carts", CarritoSchema);
 
