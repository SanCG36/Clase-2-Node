const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
    res.status(200).json({ mensaje: "hola mundo" });
});

// Ruta GET /datos
app.get("/datos", (req, res) => {
    const json = {
        mensaje: "Creado"
    };
    res.status(200).json(json); // Cambiado a 200 para GET
});

// Ruta POST /datos para manejar req.body
app.post("/datos", (req, res) => {
    console.log("Body:", req.body);
    console.log("Headers:", req.headers);
    console.log("Query:", req.query);
    
    // Verificar si req.body.nombre existe
    const nombre = req.body.nombre || "Desconocido";
    const saludo = {
        mensaje: `Hola, se creó ${nombre}`
    };
    res.status(200).json(saludo);
});

app.listen(3000, function() {
    console.log("Servidor corriendo en http://localhost:3000");
});