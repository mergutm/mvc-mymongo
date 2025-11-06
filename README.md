

# MVC

La arquitectura MVC (Modelo–Vista–Controlador) separa las responsabilidades en tres partes principales dentro de una aplicación:

## Modelo (Model)

**Representa los datos y la lógica de negocio.**

* Ejemplo: una clase o módulo que se encarga de consultar, insertar o modificar datos en la base de datos (por ejemplo, las opiniones).
* El modelo no sabe nada de cómo se muestran los datos, solo los maneja.

## Vista (View)
**Recibe las solicitudes del usuario**, usa los modelos para obtener o modificar los datos y finalmente decide qué vista mostrar o qué respuesta devolver (por ejemplo, JSON o HTML).

En este ejemplo el endpoint en Express que recibe POST /opiniones, guarda una opinión usando el modelo y devuelve un mensaje de éxito.


## Controlador (Controller)

**Muestra los datos al usuario.**

Para este ejemplo, se tiene  una página PHP o HTML que muestra la lista de opiniones obtenidas del controlador.

Importante: la vista no debe contener lógica de negocio, solo presentación.


## Flujo de MVC
1. El usuario hace una petición (por ejemplo, “ver opiniones”).
2. El controlador recibe la petición.
3. El modelo obtiene los datos de la base de datos.
4. El controlador pasa esos datos a la vista.
5. La vista muestra la información al usuario.



# Docker comandos

Levantar el contenedor de mongo (-d = detached, sin bloquear la terminal)
```bash
docker compose up --build 
docker compose up -d --build 
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


## Probar Mongo

Dentro del contenedor de mongo usando mongosh:

```mongodb
docker exec -it mongo_srv mongosh 
use opiniones
show collections
db.opiniones.find()
```
### Salida completa
```
$ docker exec -it mongo_srv mongosh 
Current Mongosh Log ID: 690a2ac94a7b04f06dce5f46
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8
Using MongoDB:          7.0.25
Using Mongosh:          2.5.8

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/


To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

------
   The server generated these startup warnings when booting
   2025-11-04T16:31:48.767+00:00: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
   2025-11-04T16:31:49.954+00:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
   2025-11-04T16:31:49.955+00:00: vm.max_map_count is too low
------

test> use opiniones
switched to db opiniones
opiniones> show collections
opiniones
opiniones> db.opiniones.find()
[
  {
    _id: ObjectId('690a2a0fe655366da0ce5f47'),
    usuario: '@coder',
    producto: 'Monitor LG',
    texto: 'Colores vivos y buen tamaño',
    fecha: ISODate('2025-11-04T16:30:07.310Z')
  },
  {
    _id: ObjectId('690a2a0fe655366da0ce5f48'),
    usuario: '@developer',
    producto: 'Portátil ASUS',
    texto: 'Rendimiento excelente para desarrollo',
    fecha: ISODate('2025-11-04T16:30:07.347Z')
  },
  {
    _id: ObjectId('690a2a0fe655366da0ce5f49'),
    usuario: '@techlover',
    producto: 'Smartphone Samsung',
    texto: 'Cámara impresionante y batería duradera',
    fecha: ISODate('2025-11-04T16:30:07.349Z')
  },
  {
    _id: ObjectId('690a2a0fe655366da0ce5f4a'),
    usuario: '@gamer',
    producto: 'Teclado Razer',
    texto: 'Perfecto para gaming, muy cómodo',
    fecha: ISODate('2025-11-04T16:30:07.352Z')
  }
]
```   

# Archivo .env  
```
MYSQL_HOST=mysql
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DATABASE=opiniones
MONGO_URI=mongodb://mongo:27017/opiniones
PORT=3000
```



# Documentación

La forma estándar para documentar APIs REST en Node.js (con Express) es usando Swagger, normalmente a través de:

`swagger-jsdoc` : genera la documentación a partir de comentarios JSDoc en el código.
`swagger-ui-express` : sirve una interfaz web interactiva (como Postman embebido) para visualizar y probar endpoints.

Para instalarlo

```bash
npm install swagger-jsdoc swagger-ui-express
```

### Entrar a la api

http://localhost:3000/api-docs
