import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectMongo, mysqlPool, testMySQLConnection } from "./config/db.js";
//import opinionRoutes from "./routes/opinionRoutes.js"; // habilítalo cuando esté listo

dotenv.config(); // Cargar variables de entorno

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // para entender peticiones JSON

// Conexiones a bases de datos 
await connectMongo();
await testMySQLConnection();

// Rutas
app.get("/", (req, res) => {
    res.send(`
    <h2> API corriendo correctamente</h2>
    <p>Entorno: <b>${process.env.NODE_ENV || "development"}</b></p>
    <p>Puerto: <b>${process.env.PORT}</b></p>`);
});

// Endpoint de salud (para monitoreo en Docker, Render, etc.)
app.get("/health", async (req, res) => {
    const mysqlOk = await mysqlPool
        .query("SELECT 1")
        .then(() => true)
        .catch(() => false);
    const mongoOk = mongoose.connection.readyState === 1;

    res.json({
        status: mysqlOk && mongoOk ? "ok" : "error",
        services: {
            mongo: mongoOk ? "connected" : "disconnected",
            mysql: mysqlOk ? "connected" : "disconnected",
        },
        timestamp: new Date().toISOString(),
    });
});

// Rutas 
//app.use("/opiniones", opinionRoutes);

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
    console.log(`http://localhost:${PORT}/`);
});

