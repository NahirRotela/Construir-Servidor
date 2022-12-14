// El método Router() de Express nos permite crear rutas
const router = require('express').Router(); 

// Importando controladores
const {
    getHome,
    postHome,
    putHome,
    deleteHome
} = require('../controllers/home.controllers');

// Definiendo rutas
router.get('/getHome', getHome);
router.post('/postHome', postHome);
router.put('/putHome', putHome);
router.delete('/deleteHome', deleteHome);

// Se exporta el objeto router que contiene las rutas
module.exports = router;