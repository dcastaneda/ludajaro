import React,{useState} from "react";
import Axios from "axios";

const UpdateUser = (props)=>{
    const [rol,setRol] = useState("");
    const [estado,setEstado] = useState("");


    const updateDB = ()=>{
        
       var update = props.user;
       const id = props.user._id;
       delete update.id;
        if (rol!="" && estado !=""){
            update.rol = rol;
            update.estado = estado;
            
        }
        else if (rol!=""){
            update.rol = rol;
        }
        else if (estado !=""){
           update.estado = estado;
        }
        alert(update.nombre);
        alert(update.estado);
        alert(update.rol);
        Axios.delete(`http://localhost:3001/deleteuser/${id}`);
        Axios.post("http://localhost:3001/nuevousuario",update);
        //alert(update._id);
        //alert("actualización exitosa");
        //alert(update._id);
        
    }

    return <form className ="agregar">
        <h1>{props.nombre}</h1><label htmlFor="nombreUsuario" >Nombre</label>
    <input type="text" id="nombreUsuario" value={props.user.nombre}/>
    <label htmlFor="documento" >Documento</label>
    
    <input type="text" id="documento" value={props.user.cedula} />
    <label>Rol</label>
    <select onChange={(event)=>{setRol(event.target.value);}}><option value="">--Seleccione el rol--</option>
        <option value="cliente">Cliente</option>
        <option value="vendedor">Vendedor</option>
        <option value="gerente">Gerente</option></select>
    <select onChange={(event)=>{setEstado(event.target.value);}}><option value="">--Seleccione el rol--</option>
        <option value="activo">Activo</option>
        <option value="inactivo">Inactivo</option></select>
                <button className="ui button" onClick ={updateDB} type="submit">Actualizar</button>
    </form> }

export default UpdateUser;
