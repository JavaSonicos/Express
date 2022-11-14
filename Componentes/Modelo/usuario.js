const mongoose= require("mongoose");
const { Number } = require("mongoose/lib/schema/index");

const userSchema = mongoose.Schema({
    user:String,
    pass:String,
    Rol:String
})

module.exports = mongoose.model('Users',userSchema)