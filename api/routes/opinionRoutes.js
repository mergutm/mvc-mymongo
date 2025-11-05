import express from "express";
import { listarOpiniones, crearOpinion } from "../controllers/opinionController.js";

const router = express.Router();
router.get("/", listarOpiniones);
router.post("/", crearOpinion);
console.log("rutas ok");

export default router;
