var mongoose = require('mongoose');
mongoose.set('debug', true);

var Schema = mongoose.Schema;

var autoSchema = new Schema({
    marca: String,
    modelo: String,
    anio: String,
    motor: String,
    combustible: String,
    transmision: String,
    cantidad_puertas: String,
    capacidad_pasajeros: String,
    rendimiento_km: String,
    seguridad: [],
    complementos_adicionales: [],
    imagen_auto: String,
    disponible: Boolean,
    categoria_vehiculo: String,
    id_duenio: String,
    precio_dia: String
});

var Autos = mongoose.model('autos', autoSchema,'autos');
console.log("se creo modelo");
module.exports = Autos;