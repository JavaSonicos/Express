const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const BD = require("../conexionBase/conn.js")
const esquemaProductos = require("../Modelo/productos.js");
const { updateOne } = require("../Modelo/productos.js");
const producto = require("../Modelo/productos.js")
const { Number } = require("mongoose/lib/schema/index.js");
//const CORS= require("Cors")// incluimos esta linea para controlar el acceso a puertos

//Constates para usar express
const port = 5000;
const app = express();
//app.use(CORS());
app.use(express.json());


//conctar bd
mongoose.connect(BD.mongoURL, { useNewUrlParser: true })
    .then (()=> console.log("Conectado con la base de datos "))
    .catch(e => console.log(e))


app.listen(port, () => {
    console.log("Ejecuto la app en el puerto " + port)
})

//get Clientes lista de los productos con stock
app.get('/ProductosStock', (req, res) => {
    esquemaProductos.find({ stock: { $gte: 1 } }, function (err, esquemaProductos) {
        if (err) return console.err(err)
        res.send(esquemaProductos);
    })
})
//el codigo es muy similar al admin, pero faltaria agregar como seleccionar los productos, agregarlos o quitarlos
//de un carrito de compras