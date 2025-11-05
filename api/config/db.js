import mongoose from "mongoose";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();


// Conexión MongoDB 
export async function connectMongo() {
  try {
    console.log("Conectando a MongoDB:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // evita bloqueos largos
    });
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error.message);
    process.exit(1);
  }
}


// conexiones MySQL 
export const mysqlPool = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root",
  database: process.env.MYSQL_DATABASE || "opiniones",
  waitForConnections: true,
  charset: "utf8mb4",
  connectionLimit: 10,
  queueLimit: 0,
});


// Verificación de conexión MySQL 
export async function testMySQLConnection() {
  try {
    const conn = await mysqlPool.getConnection();
    await conn.ping();
    conn.release();
    console.log("Conectado a MySQL");
  } catch (error) {
    console.error("Error conectando a MySQL:", error.message);
    process.exit(1);
  }
}
