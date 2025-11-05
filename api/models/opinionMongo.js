import mongoose from "mongoose";

const opinionSchema = new mongoose.Schema({
  usuario: String,
  producto: String,
  texto: String,
  fecha: { type: Date, default: Date.now },
});

export const OpinionMongo = mongoose.model("Opinion", opinionSchema, "opiniones");
