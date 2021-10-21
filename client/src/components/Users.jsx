import React,{useState, useEffect} from "react";
import './styles.css'
import data from '../data/data.json'
import AddUserForm from "./AddUserForm";
import Axios from "axios";
import UpdateUser from "./UpdateUser";
// users component
const Users =()=>{
const [listUsers,setListUsers] = useState(false);
const [searchId,setSearchId] = useState(false);
const [searchNombre,setSearchNombre] = useState(false);
const [addUser,setAddUser] = useState(false);
const [updateUser, setUpdateUser] = useState([false,{}]);
var arr = [];
const [db,setDB]=useState([]);

var resultId;
var resultName;
useEffect(()=>{

Axios.get("http://localhost:3001/listausuarios").then((response)=>{setDB(response.data)})})

const deleteUser = (i)=>{Axios.delete(`http://localhost:3001/deleteuser/${i}`);alert(i);};


// creando la lista de todos los usuarios

for(let i=0;i<db.length;i++){
  arr.push(<tr>
      <td>{db[i].nombre}</td>
      <td>{db[i].cedula}</td>
      <td>{db[i].rol}</td>
      <td>{db[i].estado}</td>
      <td><button class="ui icon button" onClick={()=>{setUpdateUser([!updateUser[0],db[i]]);}}>
  <i class="edit icon"></i>
</button></td>
      <td><button class="ui icon button" onClick={()=>{deleteUser(db[i]._id)}}>
  <i class="trash icon"></i>
</button></td>
    </tr>)
  }

// Buscando usuario por cédula 
function searchById(id){
    resultId =[]
    for (let i=0;i<db.length;i++){
      if(db[i].cedula==id){
      
        resultId.push(<tr>
          <td>{db[i].nombre}</td>
          <td>{db[i].cedula}</td>
          <td>{db[i].rol}</td>
          <td>{db[i].estado}</td>
          <td><button class="ui icon button" onClick={()=>{setUpdateUser([!updateUser[0],db[i]]);}}>

  <i class="edit icon"></i>
</button></td>
      <td><button class="ui icon button" onClick={()=>{deleteUser(db[i]._id)}}>
  <i class="trash icon"></i>
</button></td>
        </tr>)
      }
    }

    return resultId;
  }
//buscando usuario por nombre

  function searchByName(nom){
   
    resultName =[]
    for (let i=0;i<db.length;i++){
      
      if(db[i].nombre.toLowerCase().indexOf(nom)!=-1){
       
        resultName.push(<tr>
          <td>{db[i].nombre}</td>
          <td>{db[i].cedula}</td>
          <td>{db[i].rol}</td>
          <td>{db[i].estado}</td>
          <td><button class="ui icon button" onClick={()=>{setUpdateUser(db[i]);}}>
  <i class="edit icon"></i>
</button></td>
      <td><button class="ui icon button" onClick={()=>{deleteUser(db[i]._id)}}>
  <i class="trash icon"></i>
</button></td>
        </tr>);
       
      }
    }

    return resultName;
  }

  
   
      
      
    
    
return(
<div className="content">    
  <div className="ui fluid icon input searchbar">
  <input type="text" placeholder="Buscar" id="searchTxt" />
  <i className="search icon"></i>
  </div><br/>
<<<<<<< HEAD
  <button className="ui button" onClick={()=>{setSearchId(true);setListUsers(false);setSearchNombre(false);}}>Buscar por documento</button>
=======
  <button className="ui button" onClick={()=>{setSearchId(true);setListUsers(false);}}>Buscar por documento</button>
>>>>>>> 74d136c1db00b5e18ad3f867fbc504bada432240
  <button className="ui button" onClick={()=>{setSearchId(false);setListUsers(false);setSearchNombre(false);}}>Limpiar Busqueda</button>
  <button className="ui button" onClick={()=>{setSearchNombre(true);setSearchId(false);setListUsers(false);}}>Buscar por nombre</button>

  <br /><br /><button className="ui button secondary" onClick={()=>setAddUser(!addUser)}>Agregar usuario</button>
  {addUser?<AddUserForm/>:<></>}
  {updateUser[0]?<UpdateUser user={updateUser[1]}/>:<></>}
  <br/><br/><br/><button className="ui button primary" onClick={()=>{setListUsers(true);setSearchId(false);setSearchNombre(false);}}>Todos los usuarios</button>
 
<h2>Listado de Usuarios</h2>

<table>
  <tr>
    <th>Nombre</th>
    <th>Documento</th>
    <th>Rol</th>
    <th>Estado</th>
    <th>Actualizar</th>
    <th>Eliminar</th>
  </tr>
   
    {listUsers? arr:<></>}
    {searchId? searchById(parseInt(document.getElementById("searchTxt").value)):<></>}
    {searchNombre? searchByName(document.getElementById("searchTxt").value.toLowerCase()):<></>}
    </table>
   
  



</div>);}

export default Users;
     