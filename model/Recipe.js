const mongoose = require('mongoose')
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        minLength: 2,
        maxLenth: 100,
    },
    instuructions: {
        type: String,
    },
    prepTime: {
        type: Number,
        required:true,
        min :5,
        max :500,
    },
    country:{
     type: String,
     enum:['Easy' , 'Medium' , 'Hard']
    }
}, {timestamps:true})
const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe