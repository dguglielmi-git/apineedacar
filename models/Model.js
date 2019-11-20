// Este es un Modelo de ejemplo para crear los mismos a partir de este.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tablaSchema = new Schema({
    nombre:String,
    apellido: String,
    mail: String
});

var Tabla = mongoose.model('Tabla', tablaSchema);
console.log("se creo modelo");
module.exports = Tabla;