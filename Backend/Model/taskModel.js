const   {mongoose, Schema }  = require('mongoose')
// const mongoose = require('mongoose')

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "Pending",
        enum: ['Pending', 'Running', 'Completed', 'Failed']
    }
}, { timestamps: true })

const taskModel = new mongoose.model('task', taskSchema)

module.exports = taskModel;