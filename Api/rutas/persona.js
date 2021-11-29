const express = require('express');
const router = express.Router();

const mysqlConnection = require('../config/bd-conf');


//Visualizar estudiante
router.get("/persona", (req, res) => {
    mysqlConnection.query('Select * from persona', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
            res.send(err);
        }
    });
});

//Ver estudiante Individual
router.get("/persona/:id", (req, res) => {
    mysqlConnection.query('Select * from persona where id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
            res.send('error' + err);
        }
    });
});

//Crear Persona
router.post("/persona", (req, res) => {
    let per = req.body;
    mysqlConnection.query('insert into persona (nombre, apellido,peso_inicial,peso_meta,tallas_iniciales,tallas_metas) values (?,?,?,?,?,?)',
        [per.nombre, per.apellido, per.peso_inicial, per.peso_meta, per.tallas_iniciales,per.tallas_metas], (err, result) => {
            if (!err) {
                console.log(result);
                res.status(201).send("Creado Correctamente");
            } else {
                console.log(err);
                res.send('Error' + err);
            }
        });
});


//Eliminar Persona
router.delete("/persona/:id", (req, res) => {
    mysqlConnection.query('delete from persona where id = ?',
        [ req.params.id], (err, result) => {
            if (!err) {
                console.log(result);
                res.status(202).send("Eliminado Correctamente");
            } else {
                console.log(err);
                res.send('error' + err);
            }
        });
});

module.exports = router;