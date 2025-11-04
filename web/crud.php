<?php
if ($_POST) {
    $data = json_encode($_POST);
    $ch = curl_init("http://api_srv:3000/opiniones");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
    curl_exec($ch);
    curl_close($ch);
    echo "Opinión registrada";
}
?>
<form method="post">
    Usuario: <input name="usuario"><br>
    Producto: <input name="producto"><br>
    Texto: <textarea name="texto"></textarea><br>
    <button type="submit">Enviar</button>
</form>