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
$mensaje = "";

if ($_POST) {
    $data = json_encode($_POST);
    $ch = curl_init("http://api_srv:3000/opiniones");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
    curl_exec($ch);
    curl_close($ch);
    $mensaje = "Opinión registrada";
}
?>

<div class="container mt-4">
  <h4 class="mb-3">Enviar opinión</h4>
  
  <form method="post" class="border rounded p-4 bg-light shadow-sm">
    <div class="mb-3">
      <label for="usuario" class="form-label">Usuario</label>
      <input type="text" class="form-control" id="usuario" name="usuario" placeholder="@usuario123" required>
    </div>

    <div class="mb-3">
      <label for="producto" class="form-label">Producto</label>
      <input type="text" class="form-control" id="producto" name="producto" placeholder="Nombre del producto" required>
    </div>

    <div class="mb-3">
      <label for="texto" class="form-label">Opinión</label>
      <textarea class="form-control" id="texto" name="texto" rows="3" placeholder="Escribe tu opinión aquí..." required></textarea>
    </div>

    <div class="d-grid">
      <button type="submit" class="btn btn-primary">Enviar</button>
    </div>
  </form>
</div>

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
  <div id="toastConfirmacion" class="toast align-items-center text-white bg-success border-0" role="alert">
    <div class="d-flex">
      <div class="toast-body">
        <?= htmlspecialchars($mensaje) ?>
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<script>
<?php if ($mensaje): ?>
  const toastEl = document.getElementById('toastConfirmacion');
  const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
  toast.show();
<?php endif; ?>
</script>



</body>
</html>