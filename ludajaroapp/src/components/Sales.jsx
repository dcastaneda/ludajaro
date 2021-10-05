import React from "react";

const Sales =()=>{
return(<div class="content">    
  <div class="ui fluid icon input searchbar">
  <input type="text" placeholder="Buscar venta" />
  <i class="search icon"></i>
  </div><br/>
  <button class="ui button">Buscar por vendedor</button>
  <button class="ui button">Buscar por usuario</button>
  <button class="ui button">Buscar por número de venta</button>
  <br/><br/><br/><button class="ui button primary">Todas las ventas</button>
<h2>Listado de Ventas</h2>

<table>
  <tr>
    <th>Número de Venta</th>
    <th>Usuario</th>
    <th>Vendedor</th>
    <th>Cantidad</th>
  </tr>
  
</table>
</div>);}

export default Sales;
     