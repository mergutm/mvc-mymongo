db = db.getSiblingDB('opiniones');
db.opiniones.insertOne({
    usuario: "@coder",
    producto: "Monitor LG",
    texto: "Colores vivos y buen tamaño",
    fecha: new Date()
});
db.opiniones.insertOne({
    usuario: "@developer",
    producto: "Portátil ASUS",
    texto: "Rendimiento excelente para desarrollo",
    fecha: new Date()
});
db.opiniones.insertOne({
    usuario: "@techlover",
    producto: "Smartphone Samsung",
    texto: "Cámara impresionante y batería duradera",
    fecha: new Date()
});
db.opiniones.insertOne({
    usuario: "@gamer",
    producto: "Teclado Razer",
    texto: "Perfecto para gaming, muy cómodo",
    fecha: new Date()
});