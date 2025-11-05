import { OpinionMongo } from "../models/opinionMongo.js";
import { getOpinionesMySQL, addOpinionMySQL } from "../models/opinionMySQL.js";



/**
 * @openapi
 * /opiniones:
 *   get:
 *     summary: Obtiene opiniones desde ambas bases de datos
 *     tags: [Opiniones]
 */
export async function listarOpiniones(req, res) {
  const mysqlData = await getOpinionesMySQL();
  const mongoData = await OpinionMongo.find();
  res.json({ mysql: mysqlData, mongo: mongoData });
}


/**
 * @openapi
 * /opiniones:
 *   post:
 *     summary: Crea una nueva opinión en ambas bases de datos
 *     tags: [Opiniones]
 */
export async function crearOpinion(req, res) {
  const { usuario, producto, texto } = req.body;
  await addOpinionMySQL({ usuario, producto, texto });
  await OpinionMongo.create({ usuario, producto, texto });
  res.json({ mensaje: "Opinión agregada en ambas bases de datos" });
}



/**
 * @openapi
 * /opiniones/fuente/{origen}:
 *   get:
 *     summary: Obtiene opiniones desde una fuente específica (mysql, mongo o todas)
 *     tags: [Opiniones]
 */

export async function listarOpinionesPorFuente(req, res) {
  const origen = req.params.origen?.toLowerCase();

  try {
    let resultado;

    switch (origen) {
      case "mysql":
        resultado = await getOpinionesMySQL();
        break;

      case "mongo":
        resultado = await OpinionMongo.find();
        break;

      case "todas":
        const [mysqlData, mongoData] = await Promise.all([
          getOpinionesMySQL(),
          OpinionMongo.find(),
        ]);
        resultado = { mysql: mysqlData, mongo: mongoData };
        break;

      default:
        return res.status(400).json({
          error: "Origen no válido. Usa 'mysql', 'mongo' o 'todas'.",
        });
    }

    res.json(resultado);
  } catch (err) {
    console.error("Error al obtener opiniones por fuente:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}
