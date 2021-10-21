import React,{useState,useEffect} from "react";
import Sidenav from "./Sidenav";
import './styles.css'
import Axios  from 'axios';
import AddSale from "./AddSale";
import UpdateSale from "./UpdateSale";
const Sales =()=>{
// These states toggle depending on whether you want to list sales, or search by code, etc.
const [listSales,setListSales] = useState(false);
const [searchCode,setSearchCode] = useState(false);
const [addSale,setAddSale] = useState(false);
const [updateSale, setUpdateSale] = useState([false,{}]);
const [searchBySale,setSearchBySale] = useState(false);
const [newSale,setNewSale] = useState(false);
const [searchClientId, setSearchClientId] = useState(false);
const [searchClientName, setSearchClientName] = useState(false);

// --------------------- this array will contain the table with all the sales.

var arr = [];
var resultCod;
const [db,setDB]=useState([]);

useEffect(()=>{

  Axios.get("http://localhost:3001/listaventas").then((response)=>{setDB(response.data)})})

function deleteSale(i){
  Axios.delete(`http://localhost:3001/deletesale/${i}`);
} 

// put every element in the sales list in the array, organize it as a html table
for(let i=0;i<db.length;i++){
  arr.push(<tr>
      <td>{db[i].codigo}</td>
     
      <td>{db[i].vendedor}</td>
      <td>{db[i].cliente}</td>
      <td>{db[i].nombrecliente}</td>
      <td>{db[i].valor}</td>
      <td><button class="ui icon button" onClick={()=>{setUpdateSale([!updateSale[0],db[i]]);}}>
  <i class="edit icon"></i>
</button></td>
      <td><button class="ui icon button" onClick={()=>{deleteSale(db[i]._id)}}>
  <i class="trash icon"></i>
</button></td>
    </tr>);
  }

  function searchByCode(cod){
    resultCod =[]
    for (let i=0;i<db.length;i++){
      if(db[i].codigo==cod){
       resultCod.push(<tr>
          <td>{db[i].codigo}</td>
          <td>{db[i].vendedor}</td>
          <td>{db[i].cliente}</td>
          <td>{db[i].nombrecliente}</td>
          <td>{db[i].valor}</td>
          <td><button class="ui icon button" onClick={()=>{setUpdateSale([!updateSale[0],db[i]]);}}>
  <i class="edit icon"></i>
</button></td>
      <td><button class="ui icon button" onClick={()=>{deleteSale(db[i]._id)}}>
  <i class="trash icon"></i>
</button></td>
        </tr>)
      }
    }

    return resultCod;
  }

function searchBySaleCode(cod){
    resultCod =[]
    for (let i=0;i<db.length;i++){
      if(db[i].vendedor==cod){
       resultCod.push(<tr>
          <td>{db[i].codigo}</td>
          <td>{db[i].vendedor}</td>
          <td>{db[i].cliente}</td>
          <td>{db[i].nombrecliente}</td>
          <td>{db[i].valor}</td>
          <td><button class="ui icon button" onClick={()=>{setUpdateSale([!updateSale[0],db[i]]);}}>
  <i class="edit icon"></i>
</button></td>
      <td><button class="ui icon button" onClick={()=>{deleteSale(db[i]._id)}}>
  <i class="trash icon"></i>
</button></td>
        </tr>)
      }
    }

    return resultCod;
  }

function searchByClientId(cod){
    resultCod =[]
    for (let i=0;i<db.length;i++){
      if(db[i].cliente==cod){
       resultCod.push(<tr>
          <td>{db[i].codigo}</td>
          <td>{db[i].vendedor}</td>
          <td>{db[i].cliente}</td>
          <td>{db[i].nombrecliente}</td>
          <td>{db[i].valor}</td>
          <td><button class="ui icon button" onClick={()=>{setUpdateSale([!updateSale[0],db[i]]);}}>
  <i class="edit icon"></i>
</button></td>
      <td><button class="ui icon button" onClick={()=>{deleteSale(db[i]._id)}}>
  <i class="trash icon"></i>
</button></td>
        </tr>)
      }
    }

    return resultCod;
  }
function searchByClientName(nom){
   
    resultCod =[]
    for (let i=0;i<db.length;i++){
      
      if(db[i].nombrecliente.toLowerCase().indexOf(nom)!=-1){
       
        resultCod.push(<tr>
            <td>{db[i].codigo}</td>
          <td>{db[i].vendedor}</td>
          <td>{db[i].cliente}</td>
          <td>{db[i].nombrecliente}</td>
          <td>{db[i].valor}</td>

          <td><button class="ui icon button" onClick={()=>{setUpdateSale([!updateSale[0],db[i]]);}}>
        

  <i class="edit icon"></i>
</button></td>
      <td><button class="ui icon button" onClick={()=>{deleteSale(db[i]._id)}}>
  <i class="trash icon"></i>
</button></td>
        </tr>);
       
      }
    }

    return resultCod;
  }
return(<><Sidenav />
  <div className="content"> 
  <div className="ui fluid icon input searchbar">
  <input type="text" placeholder="Buscar venta" id="searchTxt" />
  <i className="search icon"></i>
  </div><br/>
  <button className="ui button" onClick={()=>{setSearchBySale(true);}}>Buscar por vendedor</button>
  <button className="ui button" onClick={()=>{setSearchClientName(true);}}>Buscar por nombre de cliente</button>
  <button className="ui button" onClick={()=>{setSearchClientId(true);}}>Buscar por documento de cliente</button>
  <button className="ui button" onClick={()=>{setSearchCode(true);}}>Buscar por código de venta</button>
  <br /><br /><button className="ui button secondary" onClick={()=>setNewSale(true)}>Registrar venta</button>
   {newSale? <AddSale />:<></>}
   {updateSale[0]? <UpdateSale venta={updateSale[1]} />:<div />}
  <br/><br/><br/>
  <button className="ui button primary" onClick={()=>{setListSales(true);}}>Todas las ventas</button>
<h2>Listado de Ventas</h2>

<table>
  <tr>
    <th>Código</th>
    <th>Indentificación Vendedor</th>
    <th>Identificación Cliente</th>
    <th>Nombre Cliente</th>
    <th>Valor</th>
  </tr>
  {listSales? arr:<></>}
  {searchCode? searchByCode(parseInt(document.getElementById("searchTxt").value)):<></>}
  {searchBySale? searchBySaleCode(parseInt(document.getElementById("searchTxt").value)):<></>}
  {searchClientId? searchByClientId(parseInt(document.getElementById("searchTxt").value)):<></>}
  {searchClientName? searchByClientName(document.getElementById("searchTxt").value.toLowerCase()):<></>}
</table>
</div></>);}

export default Sales;
     