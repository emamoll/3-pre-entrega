import { Schema, model } from "mongoose";

const CarritoSchema = new Schema({}, { timestamps: true, versionKey: false });

export const CarritoModel = model("carts", CarritoSchema);
