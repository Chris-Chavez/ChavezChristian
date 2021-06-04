const express = require('express');
const rutas = express.Router();
const BD = require('../config/BD.js');

rutas.get('/Autos', (req, res) => {
    if (BD) {
        let sql = 'select * from AUTOS';
        BD.query(sql, (err, autos) => {
            if (err) {
                res.send(err)
            } else {
                res.json(autos);
            }
        })
    }
}
);

rutas.post('/Agregar-Autos', (req, res) => {
    if (BD) {
        const Auto = req.body;
        if (!Auto.Modelo) {
            return res.status(400).send({ error: true, mensaje: "El nombre es obligatorio" })
        }
        if (!Auto.Marca) {
            return res.status(400).send({ error: true, mensaje: "El nombre es obligatorio" })
        }
        if (Auto.Año.length < 4) {
            return res.status(400).send({ error: true, mensaje: "La longitud del año es incorrecta" })
        }
        
        let sql = 'INSERT INTO AUTOS set ?';
        BD.query(sql, [Auto], (err, rows) => {
            if (err) {
                res.json(err);
            } else {
                res.json({ error: false, data: rows, mensaje: "Auto insertado correctamente" })
            }
        })

    }
});
module.exports = rutas;