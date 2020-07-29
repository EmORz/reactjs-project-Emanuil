const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const clientSchema = new Schema({

   
    client: {
        type: String,
        required: true
    }
  
   

  

});

module.exports = new Model('Client', clientSchema);