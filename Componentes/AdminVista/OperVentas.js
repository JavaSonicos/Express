const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const BD = require("../conexionBase/conn.js")
const esquemaVentas = require("../Modelo/ventas.js");
const { updateOne } = require("../Modelo/ventas.js");

const { Number } = require("mongoose/lib/schema/index.js");
const ventas = require("../Modelo/ventas.js");
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


//get AdminLista de todos las ventas

app.get('/Ventas', (req, res) => {
    esquemaVentas.find(function (err, esquemaVentas) {
        if (err) return console.err(err)
        res.status(200).json(esquemaVentas);
        //res.send(esquemaProductos);
    })

})

//post para crear nuevas ventas
app.post("/GuardarVenta", (req, res) => {
    nuevaVenta = new ventas(req.body)
    esquemaVentas.create(nuevaVenta)
    res.send("Agrega al carrito ")
    })

//get ventas confirmadas
app.get('/ConfirmaVenta', (req, res) => {
    esquemaVentas.find({estado:    { $gte: 1 } }, function (err, esquemaVentas){
        if (err) return console.err(err)
        res.send(esquemaVentas);
    })
   })