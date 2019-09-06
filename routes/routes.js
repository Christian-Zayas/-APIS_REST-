
//  A aquí requerimos express para crear nuestra rutas
const {  Router }  =   require('express');
//  A aquí requerimos nuestro controlador 
const ctrl = require('../controllers/apicontroller');
const router = Router();


//  A aquí requerimos los metodos que tenes en apicontroller
router.get('/' , ctrl.home );
router.get('/:id' , ctrl.findOne);
router.post('/' , ctrl.add);
router.put('/:id' , ctrl.update);
router.delete('/:id' , ctrl.delete);



// Exportamos router
module.exports =  router;

