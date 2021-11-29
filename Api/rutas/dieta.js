const express = require('express');
const router = express.Router();

const mysqlConnection = require('../config/bd-conf');


//Visualizar dieta
router.get("/dieta", (req, res) => {
    mysqlConnection.query('Select * from dieta', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
            res.send(err);
        }
    });
});

//Ver estudiante dieta
router.get("/dieta/:id", (req, res) => {
    mysqlConnection.query('Select * from dieta where id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
            res.send('error' + err);
        }
    });
});

//Crear dieta
router.post("/dieta", (req, res) => {
    let per = req.body;
    mysqlConnection.query('insert into dieta (id_persona, nombre,fecha_inicio,fecha_fin,completada) values (?,?,?,?,?)',
        [per.nombre, per.id_persona, per.nombre, per.fecha_inicio, per.fecha_fin,per.completada], (err, result) => {
            if (!err) {
                console.log(result);
                res.status(201).send("Creado Correctamente");
            } else {
                console.log(err);
                res.send('Error' + err);
            }
        });
});



//Eliminar dieta
router.delete("/dieta/:id", (req, res) => {
    mysqlConnection.query('delete from dieta where id = ?',
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