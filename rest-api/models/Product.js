const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const productSchema = new Schema({

    description: {
        type: String,
        required: true
    },
    quantity:{

        type: Number,
        required: true,
    },

    price: {
        type: Number,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
   

    author: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Product', productSchema);