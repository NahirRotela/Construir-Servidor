// El método Router() de Express nos permite crear rutas
const router = require('express').Router();

// Importando controladores
const {
    getUsers,
    postUser,
    putUser,
    deleteUser,

} = require('../controllers/user.controllers');

// Definiendo rutas

// Ruta para obtener todos los usuarios
router.get('/getUsers', getUsers);

// Crear nuevo usuario
router.post('/postUser', postUser);

// Editar usuario, requiere ID de usuario
router.put('/putUser', putUser);

// Eliminar usuario, requiere ID de usuario
router.delete('/deleteUser', deleteUser);



// Se exporta el objeto router que contiene las rutas
module.exports = router;