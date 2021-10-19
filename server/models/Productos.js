const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema(
    {nombre:{
        type: String,
        required: true
    },
     codigo: {
         type: Number,
         required: true
     },
     precio: {
         type: Number,
         required: true
     }  ,
     stock:{
         type: Number,
         required: true
     }  
     
    });
const Productos =mongoose.model("Productos",ProductoSchema);
module.exports = Productos;