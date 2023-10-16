const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = Schema({
    title :{
        type: String,
        required : true,
        unique : true
    },
    description :{
        type: String,
        required : true
    },
    date:{
        type : Date,
        default : Date.now
    }
  });

module.exports = mongoose.model('Note',noteSchema);