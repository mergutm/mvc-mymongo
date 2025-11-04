import { mysqlConn } from "../server.js";

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
