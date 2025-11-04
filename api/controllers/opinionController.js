import { OpinionMongo } from "../models/opinionMongo.js";
import { getOpinionesMySQL, addOpinionMySQL } from "../models/opinionMySQL.js";

export async function listarOpiniones(req, res) {
  const mysqlData = await getOpinionesMySQL();
  const mongoData = await OpinionMongo.find();
  res.json({ mysql: mysqlData, mongo: mongoData });
}

export async function crearOpinion(req, res) {
  const { usuario, producto, texto } = req.body;
  await addOpinionMySQL({ usuario, producto, texto });
  await OpinionMongo.create({ usuario, producto, texto });
  res.json({ mensaje: "Opinión agregada en ambas bases de datos" });
}
