var Autos = require('../models/AutoModel');
var bodyParser = require('body-parser');


let getAutos = (req, res) => {
    console.log("ejecucion de getAuto");
    Autos.find(function (err, listaAuto) {
        res.status(200).send(listaAuto);
        // si hay error
        (err) => {
            res.status(500).send(err);
            console.log(err);
        }
    });
}
/*
let insertAuto = (req, res) => {
    console.log(req.body);
    var newAuto = Autos({
        marca: 'Chevrolet',
    modelo: 'Aveo LT',
    anio: '2011',
    motor: '1.6',
    combustible: 'Nafta',
    transmision: 'Manual',
    cantidad_puertas: '4',
    capacidad_pasajeros: '5',
    rendimiento_km: '11',
    seguridad: ['Airbag','ABS'],
    complementos_adicionales: ['Aire Acondicionado','Levantavidrios'],
    imagen_auto: 'chevroletaveo.jpg',
    disponible: true,
    categoria_vehiculo: 'Compacto',
    id_duenio: '1',
    precio_dia: '2500'
    });
    newAuto.save().then(
        (newAuto) => {
            res.status(200).send(newAuto); //devuelvo resultado query       
        },
        (err) => {
            res.status(500).send(err);
            console.log(err);
        }
    )
}
*/

let getDatoByBarrio = (req, res) => {
    console.log("Ejecucion de getDatoByBarrio");
    //Obtener id busqueda
    let idBusqueda = { ubicacion: req.body.ubicacion };
    console.log(idBusqueda);
    //Listar resultados
    Autos.find(idBusqueda, function (err, todo) {
        (listaAuto) => {
            res.status(200).send(listaAuto); //devuelvo resultado query    
        },
            (err) => {
                res.status(500).send(err);
                console.log(err);
            }
    })
};


let insertAuto = (req, res) => {
    console.log(req.body);
    var newAuto = Autos({
        marca: req.body.marca,
        modelo: req.body.modelo,
        anio: req.body.anio,
        motor: req.body.motor,
        combustible: req.body.combustible,
        transmision: req.body.transmision,
        cantidad_puertas: req.body.cantidad_puertas,
        capacidad_pasajeros: req.body.capacidad_pasajeros,
        rendimiento_km: req.body.rendimiento_km,
        seguridad: req.body.seguridad,
        complementos_adicionales: req.body.complementos_adicionales,
        imagen_auto: req.body.imagen_auto,
        disponible: req.body.disponible,
        categoria_vehiculo: req.body.categoria_vehiculo,
        id_duenio: req.body.id_duenio,
        precio_dia: req.body.precio_dia
    });
    newAuto.save().
        then
        (
            (newAuto) => {
                res.status(200).send(newAuto); //devuelvo resultado query       
            },
            (err) => {
                res.status(500).send(err);
                console.log(err);
            }
        )
}

let updateAuto = (req, res) => {
    let id = { _id: req.body._id };

    console.log("update", id);

    Contactos.findOneAndUpdate({ _id: req.body._id },
        { $set: { nombre: req.body.newData.nombre } },
        { new: true }, function (err) {
            res.status(200).send({ estado: "Registro modificado" }); //devuelvo resultado query       
            (err) => {
                res.status(500).send(err);
                console.log(err);
            }

        });
}

let deleteAuto = (req,res)=>
{
    let id = { _id : req.body._id};
    Autos.deleteOne(id, function(err)
    {
        res.status(200).send({estado:"Registro eliminado"}); //devuelvo resultado  
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }      
    });
}

module.exports = { getAutos, getDatoByBarrio, insertAuto, updateAuto, deleteAuto };

