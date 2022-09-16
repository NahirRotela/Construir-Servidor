// El método Router() de Express nos permite crear rutas
const router = require('express').Router(); 

// Importando controladores
const {
    getStack,
    postStack,
    putStack,
    deleteStack
} = require('../controllers/task.controllers');

// Definiendo rutas
router.get('/getStack', getStack);
router.post('/postStack', postStack);
router.put('/putStack', putStack);
router.delete('/deleteStack', deleteStack);

// Se exporta el objeto router que contiene las rutas
module.exports = router;