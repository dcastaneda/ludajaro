const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema(
    {nombre:{
        type: String,
        required: true
    },
     cedula: {
         type: Number,
         required: true
     },
     rol: {
         type: String,
         required: true
     }  ,
     estado:{
         type: String,
         required: true
     }  
     
    });
const Usuarios =mongoose.model("Usuarios",UsuarioSchema);
module.exports = Usuarios;