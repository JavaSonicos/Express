const mongoose= require("mongoose");
const { Number } = require("mongoose/lib/schema/index");
// poner en estado 1 la venta confirmada, pone en cero la pendiente
const ventasSchema = mongoose.Schema({
    id: Number,
    client: String,
    price:  String,
    idventa: String,
    estado: Boolean,
    products: [{id_product: Number,name_product:String, units: Number,valor:Number}]
})

module.exports = mongoose.model('ventas',ventasSchema)