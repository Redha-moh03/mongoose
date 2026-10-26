const mongoose = require('mongoose')
async function connectToDataBase() {
    try {
        await mongoose.connect(process.env.DATABASE_URRI)
        console.log('Connected to Database')
    }
    catch (err) {
        console.log('Error:', err)
    }
}
module.exports = connectToDataBase