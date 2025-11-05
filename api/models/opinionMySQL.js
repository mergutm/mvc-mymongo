//import { mysqlConn } from "../server.js";
import { mysqlPool } from "../config/db.js";
const mysqlConn = mysqlPool;


export async function getOpinionesMySQL() {
  const [rows] = await mysqlConn.query("SELECT * FROM opinion");
  return rows;
}

export async function addOpinionMySQL({ usuario, producto, texto }) {
  await mysqlConn.query(
    "INSERT INTO opinion (usuario, producto, texto) VALUES (?, ?, ?)",
    [usuario, producto, texto]
  );
}
