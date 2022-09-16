const mongoose = require('mongoose');

const dbConnect = () => {
    try {
        mongoose.connect('mongodb+srv://Nahir1601:55206322Nr@cluster0.pfxyn4o.mongodb.net/prueba_server?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Conectado a la Base de Datos');
    } catch (error) {
        console.log('Error al conectar la Base de Datos');
        console.log(error.message);
    }
}

module.exports = dbConnect;