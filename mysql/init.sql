CREATE TABLE opinion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50),
    producto VARCHAR(100),
    texto TEXT,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP
)  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO opinion (usuario, producto, texto)
VALUES ('@techover', 'Laptop Lenovo', 'Excelente relación precio-calidad');
INSERT INTO opinion (usuario, producto, texto)
VALUES ('@maria123', 'Smartphone Samsung', 'Muy buena cámara y batería duradera');
INSERT INTO opinion (usuario, producto, texto)
VALUES ('@juan_perez', 'Auriculares Sony', 'Comodidad y calidad de sonido excepcionales');
INSERT INTO opinion (usuario, producto, texto)
VALUES ('@luis_gomez', 'Tablet Apple', 'Ideal para trabajo y entretenimiento'); 
