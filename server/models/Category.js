const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add your name']
    },
    image:{
        type: String,
        required: [true, 'Please add your image']
    }
})

module.exports = mongoose.model('Category', categorySchema)