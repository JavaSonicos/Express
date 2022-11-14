const mongoose= require("mongoose");
const { Number } = require("mongoose/lib/schema/index");

const ventasSchema = mongoose.Schema({
    id: Number,
    client: String,
    price:  String,
    products: [{id_product: Number,name_product:String, units: Number}]
})

module.exports = mongoose.model('ventas',ventasSchema)