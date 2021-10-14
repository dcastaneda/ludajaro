
import React,{useState} from "react";
import Axios from "axios";
const AddUserForm = ()=>{
const [nombre,setNombre] = useState("");
const [id,setId] = useState(0);
const[estado,setEstado] = useState("activo");
const[rol,setRol] = useState(""); 

const saveToDB = ()=>{
    Axios.post("http://localhost:3001/nuevousuario",{nombre: nombre,cedula: id,rol: rol,estado: estado});
    alert("usuario guardado con éxito");
    
}



return <form className ="agregar"><label htmlFor="nombreUsuario" >Nombre</label>
<input type="text" id="nombreUsuario" onChange={(event)=>{
    setNombre(event.target.value);
}}/>
<label htmlFor="documento">Documento</label>

<input type="text" id="documento" onChange={(event)=>{
    setId(event.target.value);
}}/>
<label>Rol</label>
<select onChange={(event)=>{
    setRol(event.target.value);
}} ><option value="">--Seleccione el rol--</option>
    <option value="cliente">Cliente</option>
    <option value="vendedor">Vendedor</option>
    <option value="gerente">Gerente</option></select>
    <button className="ui button" type="submit" onClick={saveToDB}>Registrar</button>
</form> }

export default AddUserForm;