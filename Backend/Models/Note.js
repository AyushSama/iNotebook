const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    title :{
        type: String,
        required : true
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