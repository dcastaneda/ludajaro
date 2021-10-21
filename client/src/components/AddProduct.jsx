
import React,{useState} from "react";
import Axios from "axios";
const AddProduct = ()=>{
const [nombre,setNombre] = useState("");
const [id,setId] = useState(0);
const[precio,setPrecio] = useState("activo");
const[stock,setStock] = useState(0); 

const saveToDB = ()=>{
    Axios.post('http://localhost:3001/nuevoproducto',{nombre: nombre,codigo: id,precio: precio,stock: stock});
    alert("usuario guardado con éxito");
    alert(nombre);
    
}



return <form className ="agregar"><label htmlFor="nombre" >Descripcion </label>
<input type="text" id="nombre" onChange={(event)=>{
    setNombre(event.target.value);
}}/>
<label htmlFor="codigo">  Codigo </label>

<input type="text" id="codigo" onChange={(event)=>{
    setId(event.target.value);
}}/>
<br /> <br />
<label>Stock </label>
<input type="number" id="stock" onChange={(event)=>{setStock(event.target.value);}}></input>
<label>  Precio </label>
<input type="number" id="precio" onChange={(event)=>{setPrecio(event.target.value);}}></input>
<br /> <br/>
    <button className="ui button" type="submit" onClick={saveToDB}>Registrar</button>
</form> }

export default AddProduct;