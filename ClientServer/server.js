const express = require('express');
const { request } = require('http');
const path = require("path");
const app = express()
const PUERTO = 3001;

// midellware bodyparser
app.use(express.urlencoded({ extended: true}));
/*Con esta funcion pasamos los parametros ingresados al form*/
// midellware para archivos linkeados 
app.use(express.static(__dirname));
/*linkeados en html como css o js o imagen ... */

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "formulario.html"));
})

app.post('/login', function (req,res) {
    if (req.body.nom !== "" && req.body.apo !== "" && req.body.ape !== "") {
        res.send(`Hola ${req.body.nom} "${req.body.apo}" ${req.body.ape}`);
    } else {
        res.send("FALTAN DATOS");
    }
})
app.listen(PUERTO , function(){
    console.log(`server iniciado en el puerto ${PUERTO}...`)
})