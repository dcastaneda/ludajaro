import React,{useState,useEffect} from "react";
import Sidenav from "./Sidenav";
import './styles.css'
import Axios  from 'axios';
const Sales =()=>{
// These states toggle depending on whether you want to list sales, or search by code, etc.
const [listSales,setListSales] = useState(false);
const [searchCode,setSearchCode] = useState(false);
const [addSale,setAddSale] = useState(false);
const [updateSale, setUpdateSale] = useState({});

// --------------------- this array will contain the table with all the sales.

var arr = [];
const [db,setDB]=useState([]);

useEffect(()=>{

  Axios.get("http://localhost:3001/listaventas").then((response)=>{setDB(response.data)})})

function deleteSale(db){} 

// put every element in the sales list in the array, organize it as a html table
for(let i=0;i<db.length;i++){
  arr.push(<tr>
      <td>{db[i].codigo}</td>
      <td>{db[i].cliente}</td>
      <td>{db[i].vendedor}</td>
      <td>{db[i].valor}</td>
      <td><button class="ui icon button" onClick={()=>{setUpdateSale(db[i]);}}>
  <i class="edit icon"></i>
</button></td>
      <td><button class="ui icon button" onClick={()=>{deleteSale(db[i]._id)}}>
  <i class="trash icon"></i>
</button></td>
    </tr>)
  }


return(<><Sidenav />
  <div className="content"> 
  <div className="ui fluid icon input searchbar">
  <input type="text" placeholder="Buscar venta" />
  <i className="search icon"></i>
  </div><br/>
  <button className="ui button">Buscar por vendedor</button>
  <button className="ui button">Buscar por nombre de cliente</button>
  <button className="ui button">Buscar por documento de cliente</button>
  <button className="ui button">Buscar por número de venta</button>
  <br /><br /><button className="ui button secondary">Registrar venta</button>
  <br/><br/><br/><button className="ui button primary">Todas las ventas</button>
<h2>Listado de Ventas</h2>

<table>
  <tr>
    <th>Número de Venta</th>
    <th>Usuario</th>
    <th>Vendedor</th>
    <th>Cantidad</th>
  </tr>
  
</table>
</div></>);}

export default Sales;
     