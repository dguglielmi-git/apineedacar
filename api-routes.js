// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/apiControllers');
let autoController = require('./controllers/autoController');

// Agregar un controller por cada Modelo
// let modelController = require('./controllers/modelController');

//EndPoint para leer toda la base
router.get('/leerAutos',function(req,res)
{
    console.log("leer Autos");
    autoController.getAutos(req,res);
});

router.get('/leerMarcas',function(req,res)
{
    console.log("leer Marcas");
    autoController.getMarcas(req,res);
});

router.post('/insertAuto/Auto',function(req,res)
{
    console.log(req.body);
    autoController.insertAuto(req,res);
});
// Endepoints de Ejemplo
//EndPoint para leer con filtro
router.post('/leerBarrio/?idBusqueda',function(req,res)
{
    console.log("leer con filtro");
    autoController.getAutoByBarrio(req,res);
});

router.post('/getModelo/?idBusqueda',function(req,res)
{
    console.log("leer modelo");
    autoController.getModelos(req,res);
});
// Set default API response
router.get('/', function (req, res) 
{
    res.json(
    {
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

//EndPoint para leer toda la base
router.get('/leerAgenda',function(req,res)
{
    console.log("leer");
    apiController.getContactos(req,res);
});

//EndPoint para leer con filtro
router.post('/leerAgenda/?idBusqueda',function(req,res)
{
    console.log("leer con filtro");
    apiController.getContactosById(req,res);
});
//EndPoint para insertar en la BD
router.post('/insertContacto/Contacto',function(req,res)
{
    console.log(req.body);
    apiController.insertContacto(req,res);
});

//EndPoint para modificar en la BD
router.post('/updateContacto/Contacto',function(req,res)
{
    apiController.updateContacto(req,res);
});

//EndPoint para eliminar en la BD
router.delete('/deleteContacto/Contacto',function(req,res)
{
    apiController.deleteContacto(req,res);
});
// Export API routes
module.exports = router;