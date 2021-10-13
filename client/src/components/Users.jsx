import React,{useState, useEffect} from "react";
import './styles.css'
import data from '../data/data.json'
import AddUserForm from "./AddUserForm";
import Axios from "axios";
// users component
const Users =()=>{
const [listUsers,setListUsers] = useState(false);
const [searchId,setSearchId] = useState(false);
const [addUser,setAddUser] = useState(false);
var arr = [];
const [db,setDB]=useState([]);

var resultId;
useEffect(()=>{

Axios.get("http://localhost:3001/listausuarios").then((response)=>{setDB(response.data)})})



for(let i=0;i<db.length;i++){
  arr.push(<tr>
      <td>{db[i].nombre}</td>
      <td>{db[i].id}</td>
      <td>{db[i].rol}</td>
      <td>{db[i].estado}</td>
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
  <br/><br/><br/><button className="ui button primary" onClick={()=>setListUsers(true)}>Todos los usuarios</button>
 
<h2>Listado de Usuarios</h2>

<table>
  <tr>
    <th>Nombre</th>
    <th>Documento</th>
    <th>Rol</th>
    <th>Estado</th>
  </tr>
    {listUsers? arr:<></>}
    {searchId? searchById(parseInt(document.getElementById("searchTxt").value)):<></>}
    </table>
   
  



</div>);}

export default Users;
     