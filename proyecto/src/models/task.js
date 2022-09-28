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
    isActive:{
        type: Boolean,
        default: true
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User'
    }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('Task', taskSchema);