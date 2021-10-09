import React,{useState} from "react";
import './styles.css'
import data from '../data/data.json'
import AddUserForm from "./AddUserForm";
// users component
const Users =()=>{
const [count,setCount] = useState(false);
const [searchId,setSearchId] = useState(false);
const [addUser,setAddUser] = useState(false);
const arr = [];
var resultId;

for(let i=0;i<data.length;i++){
  arr.push(<tr>
      <td>{data[i].nombre}</td>
      <td>{data[i].id}</td>
      <td>{data[i].rol}</td>
      <td>{data[i].estado}</td>
    </tr>)
  }
function searchById(id){
    resultId =[]
    for (let i=0;i<data.length;i++){
      if(data[i].id==id){
      
        resultId.push(<tr>
          <td>{data[i].nombre}</td>
          <td>{data[i].id}</td>
          <td>{data[i].rol}</td>
          <td>{data[i].estado}</td>
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
  <button className="ui button" onClick={()=>{setSearchId(false);setCount(false);}}>Limpiar Busqueda</button>
  <button className="ui button">Buscar por nombre</button>
  <button className="ui button">Actualizar estado</button>
  <button className="ui button">Actualizar rol</button>
  <br /><br /><button className="ui button secondary" onClick={()=>setAddUser(true)}>Agregar usuario</button>
  {addUser?<AddUserForm/>:<></>}
  <br/><br/><br/><button className="ui button primary" onClick={()=>setCount(true)}>Todos los usuarios</button>
 
<h2>Listado de Usuarios</h2>

<table>
  <tr>
    <th>Nombre</th>
    <th>Documento</th>
    <th>Rol</th>
    <th>Estado</th>
  </tr>
    {count? arr:<></>}
    {searchId? searchById(parseInt(document.getElementById("searchTxt").value)):<></>}
    </table>
   
  



</div>);}

export default Users;
     