const express = require('express');
const mongoose = require('mongoose');
const ModeloUsuario = require("./models/Usuarios");
const ModeloProducto =require("./models/Productos");
const ModeloVenta =require("./models/Ventas");
const app = express();
const cors = require('cors');
const pw = require("./cred");

app.use(express.json())
app.use(cors());

mongoose.connect(
`mongodb+srv://daniel:${pw.pw}@cluster0.70cs0.mongodb.net/datos?retryWrites=true&w=majority`,{useNewUrlParser: true});

// agregar un nuevo usuario a la base de datos.
app.post('/nuevousuario',async (req,res)=>{
    const nombre = req.body.nombre;
    const cedula = req.body.cedula;
    const rol = req.body.rol;
    const estado = req.body.estado;

    const usuario = new ModeloUsuario(
        {nombre:nombre,cedula : cedula, rol: rol,estado: estado})

    try{await usuario.save()}catch(err){
        console.log(err);
    }
});

// servir la lista de usuarios
app.get('/listausuarios', async (req,res)=>{
    ModeloUsuario.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    })
});
app.get('/listaproductos', async (req,res)=>{
    ModeloProducto.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    })
});
app.delete('/deleteuser/:id',async (req,res)=>{
    const id = req.params.id;
    ModeloUsuario.findByIdAndRemove(id).exec();
   
  

})
app.post('/nuevoproducto',async (req,res)=>{
    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const precio = req.body.precio;
    const stock = req.body.stock; 
    console.log(nombre);
    const producto = new ModeloProducto(
        {nombre:nombre,codigo : codigo, precio: precio,stock: stock})

    try{await producto.save() }catch(err){
        console.log(err);
    }
    
});

app.delete('/deleteproduct/:id',async (req,res)=>{
    const id = req.params.id;
    ModeloProducto.findByIdAndRemove(id).exec();
})


app.get('/nuevaventa',async (req,res)=>{
    const cliente = 12345;
    const id = 1;
    const vendedor = 10000;
    const productos = [{codproduto: 12343,nombreproducto:"café",cantidad: 5},{producto: 12134, cantidad: 5}]; 
    const valor = 50000;
    const venta = new ModeloVenta(
        {cliente:cliente,id : id, valor: valor,vendedor: vendedor,productos: productos});

    try{await venta.save() }catch(err){
        console.log(err);
    }
    
});

app.put('/update',async (req,res)=>{
    const newRol = req.body.rol;
    const newEstado = req.body.estado;
    const id = req.body.id;
    try{
        await console.log(id);
        console.log(newRol);
        console.log(newEstado);
    }catch(err){
        console.log(err);
        
    }

})

app.get('/hello',(req,res)=>{res.send('hello world')});
app.listen(3001, ()=>{
    console.log("Server running on port 3001...")
});