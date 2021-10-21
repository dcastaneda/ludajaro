const mongoose = require('mongoose');

const VentaSchema = new mongoose.Schema(
    {codigo:{
        type: Number,
        required: true
    },
     vendedor: {
         type: Number,
         required: true
     },
     cliente: {
         type: Number,
         required: true
     }  ,
     nombrecliente:{
         type: String,
         required: true
     }  ,
     valor: {
         type: Number,
         required: true
     }
     
    });
const Ventas =mongoose.model("Ventas",VentaSchema);
module.exports = Ventas;