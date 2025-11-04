# Docker comandos

Levantar el contenedor de mongo (-d = detached, sin bloquear la terminal)
```bash
docker compose up 
docker compose up -d
```

Para ver logs
```bash
docker logs <contenedor>
```


```bash
docker exec -it <id-contenedor> <comando>
docker exec -it mongo-mvc bash
docker exec -it mongo-mvc mongosh --username root --password root
```

```bash
docker exec -it mongo-mvc bash
mongosh --username root --password root
```
## En mongo

Dentro del contenedor de mongo usando mongosh:

```mongodb
use opiniones
show collections
db.opiniones.find()
```



# MVC

La arquitectura MVC (Modelo–Vista–Controlador) separa las responsabilidades en tres partes principales dentro de una aplicación:

# Modelo (Model)

**Representa los datos y la lógica de negocio.**

* Ejemplo: una clase o módulo que se encarga de consultar, insertar o modificar datos en la base de datos (por ejemplo, las opiniones).
* El modelo no sabe nada de cómo se muestran los datos, solo los maneja.

# Vista (View)
**Recibe las solicitudes del usuario**, usa los modelos para obtener o modificar los datos y finalmente decide qué vista mostrar o qué respuesta devolver (por ejemplo, JSON o HTML).

En este ejemplo el endpoint en Express que recibe POST /opiniones, guarda una opinión usando el modelo y devuelve un mensaje de éxito.


# Controlador (Controller)

**Muestra los datos al usuario.**

Para este ejemplo, se tiene  una página PHP o HTML que muestra la lista de opiniones obtenidas del controlador.

Importante: la vista no debe contener lógica de negocio, solo presentación.


# Flujo de MVC
1. El usuario hace una petición (por ejemplo, “ver opiniones”).
2. El controlador recibe la petición.
3. El modelo obtiene los datos de la base de datos.
4. El controlador pasa esos datos a la vista.
5. La vista muestra la información al usuario.


# Probar MySQL

```bash
docker exec -it eebf2c719acf mysql -uroot -proot
```

```mysql
show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| opiniones          |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.00 sec)
```

```mysql
mysql> use opiniones;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
```

```mysql
mysql> show tables;
+---------------------+
| Tables_in_opiniones |
+---------------------+
| opinion             |
+---------------------+
1 row in set (0.00 sec)
```

```mysql
mysql> select * from opiniones;
ERROR 1146 (42S02): Table 'opiniones.opiniones' doesn't exist
mysql> select * from opinion;
+----+-------------+--------------------+---------------------------------------------+---------------------+
| id | usuario     | producto           | texto                                       | fecha               |
+----+-------------+--------------------+---------------------------------------------+---------------------+
|  1 | @techover   | Laptop Lenovo      | Excelente relación precio-calidad          | 2025-11-04 13:42:06 |
|  2 | @maria123   | Smartphone Samsung | Muy buena cámara y batería duradera       | 2025-11-04 13:42:06 |
|  3 | @juan_perez | Auriculares Sony   | Comodidad y calidad de sonido excepcionales | 2025-11-04 13:42:06 |
|  4 | @luis_gomez | Tablet Apple       | Ideal para trabajo y entretenimiento        | 2025-11-04 13:42:06 |
+----+-------------+--------------------+---------------------------------------------+---------------------+
4 rows in set (0.00 sec)
```

