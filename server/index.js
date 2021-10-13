const express = require('express');
const mongoose = require('mongoose');
const ModeloUsuario = require("./models/Usuarios");
const ModeloProducto =require("./models/Productos");
const ModeloVenta =require("./models/Ventas");
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors());

mongoose.connect(
"mongodb+srv://daniel:atotburu@cluster0.70cs0.mongodb.net/datos?retryWrites=true&w=majority",{useNewUrlParser: true});

// agregar un nuevo usuario a la base de datos.
app.post('/nuevousuario',async (req,res)=>{
    const nombre = req.body.nombre;
    const id = req.body.id;
    const rol = req.body.rol;

    const usuario = new ModeloUsuario(
        {nombre:nombre,id : id, rol: rol,estado: "activo"})

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

app.get('/nuevoproducto',async (req,res)=>{
    const nombre = "Café";
    const id = 12129;
    const precio = 10000;
    const stock = 10; 
    const producto = new ModeloProducto(
        {nombre:nombre,id : id, precio: precio,stock: stock})

    try{await producto.save() }catch(err){
        console.log(err);
    }
    
});


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

app.get('/hello',(req,res)=>{res.send('hello world')});
app.listen(3001, ()=>{
    console.log("Server running on port 3001...")
});