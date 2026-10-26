const Recipe = require('./model/Recipe')
const dotenv = require('dotenv').config()
const connectToDataBase = require('./dp')

connectToDataBase()
async function createRecipe(newRecipe) {
    try {
        const newRecipe =await Recipe.create  ({
            name: "Um Ali",
            instructions: "bake at 180C",
            prepTime: 120,
            difficulty: "Medium"
        })
       console.log(newRecipe)
    }
    catch (err) {
        console.log("Failed to create recipe")
    }
}
async function getAllRecipe() {
    try{
        const allRecipe = await Recipe.find({})
        console.log(allRecipe)
    }

    catch{
        console.timeLog('notfound')
    }
}
async function getReciprById(Id) {
    try {
        const foundRecipe = await Recipe.findById('6adf3c01c219f4d3e6411a7b')
        console.log(foundRecipe )
    }
catch(err){
    console.log('No recipe with this ID exists.')
}}
async function updateRecipe(recipeId ,newReceData) {
    try{
        const updatedRecipe = await Recipe.findByIdAndUpdate('6adf3cb4e5b6d1e402fd1552',{prepTime:15} ,{new:true}  )
    console.log(updatedRecipe)
    }
     catch (err){
        console.log('ERROR')
     }
}
async function deleteRecipe(recipe) {
    try{
        const deletedrecipe = await Recipe.findByIdAndDelete('6adf3cb4e5b6d1e402fd1552')
        console.log('Recipe successfully deleted.')
    }
    catch{

    }
}
deleteRecipe()
updateRecipe()
getAllRecipe() 
getReciprById()
createRecipe()


