const task = require("../models/task");

const ctrlTask = {};


ctrlTask.getHome =(req, res) => {
    res.send({
        message: 'Petición GET'
    })
};

ctrlTask.postHome =(req, res) => {
    res.send({
        message: 'Petición POST'
    })
};

ctrlTask.putHome = (req, res) => {
    res.json({
        message: "Peticion  PUT"
    })
};

ctrlTask.deleteHome = (req, res) => {
    res.json({
        message: "Peticion DELETE"
    })
};


ctrlUser.gettask = async (req, res) => {
    // Se consultan todos los documentos de la base de datos.
    const tasks = await task.find();

    // Se devuelve al cliente un arreglo con los datos de las tareas.
    return res.json(tasks)
};
// Se exporta el objeto ctrlHome que contiene los métodos getHome, postHome, putHome y deleteHome
module.exports = ctrlTask;


