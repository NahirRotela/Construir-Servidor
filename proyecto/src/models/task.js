const { model, Schema } = require('mongoose');

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        required: true,
        unique: true
    },


}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('Task', taskSchema);