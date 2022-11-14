const mongoose= require("mongoose");

const productosScheme = mongoose.Schema({
    id: String,
    fecha: String,
    cliente:  String,
    productos:[{id,cant}]
    estado:[{carrito,venta}]
})

module.exports = mongoose.model('productos',productosScheme)