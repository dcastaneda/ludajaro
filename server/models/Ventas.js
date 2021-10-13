const mongoose = require('mongoose');

const VentaSchema = new mongoose.Schema(
    {id:{
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
     productos:{
         type: Array,
         required: true
     }  ,
     valor: {
         type: Number,
         required: true
     }
     
    });
const Ventas =mongoose.model("Ventas",VentaSchema);
module.exports = Ventas;