const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const BD = require("../conexionBase/conn.js")
const esquemaVentas = require("../Modelo/ventas.js");
const { updateOne } = require("../Modelo/ventas.js");

const { Number } = require("mongoose/lib/schema/index.js");
//const CORS= require("Cors")// incluimos esta linea para controlar el acceso a puertos

//Constates para usar express
const port = 3001;
const app = express();
//app.use(CORS());
app.use(express.json());
mongoose.connect(BD.mongoURL, { useNewUrlParser: true })
    .then (()=> console.log("Conectada"))
    .catch(e => console.log(e))


app.listen(port, () => {
    console.log("Ejecuto la app en el puerto " + port)
})
//el codigo es muy similar al admin, pero faltaria agregar como seleccionar los productos para ventas