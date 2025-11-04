import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import opinionRoutes from "./routes/opinionRoutes.js";
import mongoose from "mongoose";
import mysql from "mysql2/promise";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexión MongoDB
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri);

// Conexión MySQL
export const mysqlConn = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

app.use("/opiniones", opinionRoutes);

app.listen(3000, () => console.log("API corriendo en puerto 3000"));
