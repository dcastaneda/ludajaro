import React from "react";
import Sidenav from "./Sidenav";
import './styles.css'

const Sales =()=>{
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
     