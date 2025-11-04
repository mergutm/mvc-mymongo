<?php
$api = "http://api_srv:3000/opiniones";
$data = file_get_contents($api);
$opiniones = json_decode($data, true);
?>
<h1>Opiniones (MySQL y MongoDB)</h1>
<table border="1" cellpadding="5">
    <tr>
        <th>Usuario</th>
        <th>Producto</th>
        <th>Texto</th>
        <th>Origen</th>
    </tr>
    <?php
    foreach ($opiniones["mysql"] as $op) {
        echo "<tr><td>{$op["usuario"]}</td><td>{$op["producto"]}</td><td>{$op["texto"]}</td><td>MySQL</td></tr>";
    }
    foreach ($opiniones["mongo"] as $op) {
        echo "<tr><td>{$op["usuario"]}</td><td>{$op["producto"]}</td><td>{$op["texto"]}</td><td>MongoDB</td></tr>";
    }
    ?>
</table>
<a href="crud.php">Agregar opinión</a>