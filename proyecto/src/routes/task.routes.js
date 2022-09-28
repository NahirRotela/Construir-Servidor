// El método Router() de Express nos permite crear rutas
const router = require('express').Router(); 

// Importando controladores
const {
    getTasks,
    postTasks,
    putTasks,
    deleteTasks
} = require('../controllers/task.controllers');

// Definiendo rutas
router.get('/getTask',  getTasks);
router.post('/postTask', postTasks);
router.put('/putTask/:id', putTasks);
router.delete('/deleteTask/:id', deleteTasks);

// Se exporta el objeto router que contiene las rutas
module.exports = router;