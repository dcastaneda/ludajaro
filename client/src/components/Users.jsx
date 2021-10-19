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
const [addUser,setAddUser] = useState(false);
const [updateUser, setUpdateUser] = useState({});
var arr = [];
const [db,setDB]=useState([]);

var resultId;
useEffect(()=>{

Axios.get("http://localhost:3001/listausuarios").then((response)=>{setDB(response.data)})})

const deleteUser = (i)=>{Axios.delete(`http://localhost:3001/deleteuser/${i}`);alert(i);};




for(let i=0;i<db.length;i++){
  arr.push(<tr>
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
    </tr>)
  }
function searchById(id){
    resultId =[]
    for (let i=0;i<db.length;i++){
      if(db[i].id==id){
      
        resultId.push(<tr>
          <td>{db[i].nombre}</td>
          <td>{db[i].id}</td>
          <td>{db[i].rol}</td>
          <td>{db[i].estado}</td>
        </tr>)
      }
    }

    return resultId;
  }

  
   
      
      
    
    
return(<div className="content">    
  <div className="ui fluid icon input searchbar">
  <input type="text" placeholder="Buscar venta" id="searchTxt" />
  <i className="search icon"></i>
  </div><br/>
  <button className="ui button" onClick={()=>setSearchId(true)}>Buscar por documento</button>
  <button className="ui button" onClick={()=>{setSearchId(false);setListUsers(false);}}>Limpiar Busqueda</button>
  <button className="ui button">Buscar por nombre</button>
  <button className="ui button">Actualizar estado</button>
  <button className="ui button">Actualizar rol</button>
  <br /><br /><button className="ui button secondary" onClick={()=>setAddUser(true)}>Agregar usuario</button>
  {addUser?<AddUserForm/>:<></>}
  {Object.keys(updateUser).length!=0? <UpdateUser user={updateUser}/>:<></>}
  <br/><br/><br/><button className="ui button primary" onClick={()=>setListUsers(true)}>Todos los usuarios</button>
 
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
    </table>
   
  



</div>);}

export default Users;
     