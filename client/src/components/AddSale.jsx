
import React,{useState} from "react";
import Axios from "axios";
const AddSale = ()=>{
const [codigo,setCodigo] = useState(0);
const [cliente,setCliente] = useState(0);
const[vendedor,setVendedor] = useState(0);
const[valor,setValor] = useState(0);
const[nombrecliente,setNombreCliente] = useState(""); 

const saveToDB = ()=>{
    Axios.post('http://localhost:3001/nuevaventa',{codigo:codigo,cliente: cliente,vendedor: vendedor,nombrecliente: nombrecliente,valor: valor});
    alert("venta guardada con éxito");
    
    
}



return <form className ="agregar"><label htmlFor="nombre" >Codigo Venta </label>
<input type="number" id="nombre" onChange={(event)=>{
    setCodigo(event.target.value);
}}/>
<label htmlFor="vendedor">  Id Vendedor </label>

<input type="number" id="vendedor" onChange={(event)=>{
    setVendedor(event.target.value);
}}/>
<br /> <br />
<label>Id Cliente </label>
<input type="number" id="stock" onChange={(event)=>{setCliente(event.target.value);}}></input>
<label>Nombre Cliente </label>
<input type="text" id="stock" onChange={(event)=>{setNombreCliente(event.target.value);}}></input>
<label>  Valor </label>
<input type="number" id="precio" onChange={(event)=>{setValor(event.target.value);}}></input>
<br /> <br/>
    <button className="ui button" type="submit" onClick={saveToDB}>Registrar</button>
</form> }

export default AddSale;