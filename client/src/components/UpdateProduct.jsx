import React,{useState} from "react";
import Axios from "axios";

const UpdateProduct = (props)=>{
    const [desc,setDesc] = useState("");
    const [precio,setPrecio] = useState(0);
    const [stock, setStock] = useState(0);


    const updateDB = ()=>{
        
       var update = props.product;
       alert(props.product._id);
       const id = props.product._id;
       delete update._id;
        if (desc!=""){
            update.nombre = desc;
                     
        }
        if (precio>0){
            update.precio = precio;
            alert(update.precio);
                     
        }
        if (stock>0){
            update.stock = stock;
            alert(update.stock);
        }
       
       
        Axios.delete(`http://localhost:3001/deleteproduct/${id}`);
        
      Axios.post("http://localhost:3001/nuevoproducto",update);
        //alert(update._id);
        //alert("actualización exitosa");
        //alert(update._id);
        
    }

    return <form className ="agregar">
        <h1>{props.nombre}</h1><label htmlFor="nombreUsuario" >Descripción</label>
    <input type="text" id="nombreUsuario" onChange={(event)=>{setDesc(event.target.value);}}/>
    <label htmlFor="documento" >Codigo</label>
    
    <input type="text" id="documento" value={props.product.codigo} />
    <label>Stock</label>    
    <input onChange={(event)=>{setStock(event.target.value);}} />
        
    <label>Precio</label>
    <input type="number" onChange={(event)=>{setPrecio(event.target.value);}} />
    
    <button className="ui button" onClick ={updateDB} type="submit">Actualizar</button>
    </form> }

export default UpdateProduct;
