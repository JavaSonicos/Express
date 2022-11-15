const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const BD = require("../conexionBase/conn.js")
const esquemaProductos = require("../Modelo/producto.js");
const { updateOne } = require("../Modelo/producto.js");
const producto = require("../Modelo/producto.js")
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


//get AdminLista de todos los productos

app.get('/Productos', (req, res) => {
    esquemaProductos.find(function (err, esquemaProductos) {
        if (err) return console.err(err)
        res.status(200).json(esquemaProductos);
        //res.send(esquemaProductos);
    })

})

//get Clientes lista de los productos con stock
app.get('/ProductosStock', (req, res) => {
    esquemaProductos.find({ stock: { $gte: 1 } }, function (err, esquemaProductos) {
        if (err) return console.err(err)
        res.send(esquemaProductos);
    })

})

//post para crear nuevos productos
app.post("/GuardarProducto", (req, res) => {
    nuevoProducto = new producto(req.body)
    esquemaProductos.create(nuevoProducto)
    res.send("Producto Alamacenado correctamente ")
})


//put para actualizar el stock
app.put('/modificarStock', (req, res) => {
    //id del producto a modifcar
    //nueva cantidad de stock

    esquemaProductos.updateOne({ id: "666777888" }, { stock: 2000 }, function (err) {
        if (err) return console.error(err);

    })
    res.send("Dato Actualizado")

})

//put para actulziar los productos
app.post('/modificarAll',( req , res ) =>{
    const {id, nombre, stock, descripcion,valor, imagen}= req.body
    console.log(id+" "+nombre+" "+stock+""+descripcion+""+valor+""+imagen);
    esquemaProductos.update({id:"1"},{ nombre, stock, descripcion,valor, imagen}, function(err){
        if (err) return console.error(err);
       }) 
    res.send("se actualizo  todos los datos el dato ")
})