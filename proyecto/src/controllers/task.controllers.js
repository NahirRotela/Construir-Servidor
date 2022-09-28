const task = require("../models/task");

const ctrlTasks = {};

//CONSULTAR TAREAS
// ctrlTask.getTask =(req, res) => {
//     res.send({
//         message: 'Petición GET'
//     })
// };
 
ctrlTasks.getTasks = async (req, res) => {
    const tasks = await Tasks.find({ isActive: true });

    return res.render('index', {tasks});
};


// ctrlTask.postTask=(req, res) => {
//     res.send({
//         message: 'Petición POST'
//     })
// };

//CREAR NUEVA TAREA
ctrlTasks.postTasks = async (req, res) => {
    const { title, description } = req.body;

    // Instanciar una nueva tarea
    const nuevaTarea = new Tasks({
        title,
        description
    });

    try {
        // Guardar tarea en la base de datos
        const tarea = await nuevaTarea.save();
        return res.json('La tarea fue guardada con éxito');
    } catch (error) {
        console.log(error)
    }
};


//ACTUALIZR UNA TAREA
// ctrlTask.putTask = (req, res) => {
//     res.json({
//         message: "Peticion  PUT"
//     })
// };


ctrlTasks.putTasks = async (req, res) => {
    const id = req.params.id;
    const {title,date, description, ... otroDatos} = req.body;

    if (!id || !description || !title) {
        return res.status(400).json({
            msg: 'No viene Id en la peticion'
        });
    };

   try{
     const tareaActualizada = await task.findByIdAndUpdate(id, {title,date, description})
     
    return res.json({
        msg: 'Tarea actualizada correctamente'
    })

   } catch (error){
    console.log(error.message);
    return res.status(500).json({
        msg: 'Error al actualizar la tarea'
    })
   };

    
};


// ctrlTask.deleteTask = (req, res) => {
//     res.json({
//         message: "Peticion DELETE"
//     })
// };

//CONTROLADOR DE ELIMINACION (LOGICA)
ctrlTasks.deleteTasks = async (req, res) => {
    const id = req.params.id;

    try {
        await task.findByIdAndUpdate(id, { isActive: false })
        return res.json('Tarea eliminada correctamente');
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            msg: 'Error al eliminar la tarea'
        });
    }
};


// ctrlUser.gettask = async (req, res) => {
//     // Se consultan todos los documentos de la base de datos.
//     const tasks = await task.find();

//     // Se devuelve al cliente un arreglo con los datos de las tareas.
//     return res.json(tasks)
// };
// Se exporta el objeto ctrlTask que contiene los métodos getTask, postTask, putTask y deleteTask
module.exports = ctrlTasks;


