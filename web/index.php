<!doctype html>
<html lang="es">
  <head>

    <meta charset="UTF-8">



    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  </head>   

<body>
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

</body>
</html>