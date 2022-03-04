const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a name']
    },
    desc:{
        type: String,
        required: [true, 'Please add your description']
    },
    email:{
        type: String,
        required: [true, 'Please add your email']
    },
    ingredients:{
        type: Array,
        required: [true, 'Please add the ingredients!']
    },
    category:{
        type: String,
        enum: ['BBQ & Grill','Breakfest', 'Pasta', 'Snacks', 'Starters', 'Mains', 'Desserts'],
        required: [true, 'Please choose a category']
    },
    image: {
        type:String,
        required: [true, 'Please add an image']
    }
    
})

recipeSchema.index({ name: 'text', description: 'text'})

module.exports = mongoose.model('Recipe', recipeSchema)