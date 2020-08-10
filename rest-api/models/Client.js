const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const clientSchema = new Schema({

   
    client: {
        type: String
    },
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        require: true
    },

    time: {
        type: String
    }

  
   

  

});

module.exports = new Model('Client', clientSchema);