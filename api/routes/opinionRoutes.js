import express from "express";
import { listarOpiniones, 
    crearOpinion,
    listarOpinionesPorFuente,
 } from "../controllers/opinionController.js";

const router = express.Router();
router.get("/", listarOpiniones);
router.post("/", crearOpinion);

// Obtener opiniones según origen (mysql | mongo | todas)
router.get("/fuente/:origen", listarOpinionesPorFuente);

console.log("rutas ok");

export default router;
