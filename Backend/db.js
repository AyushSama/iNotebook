const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017';

const connectToMongo = async()=>{
    try{
        mongoose.connect(mongoURI)
        console.log('Connected to DB')
    }
    catch{
        console.log('error');
    }
}

module.exports = connectToMongo;