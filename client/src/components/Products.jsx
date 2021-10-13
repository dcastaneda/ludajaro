import React ,{useState} from "react";
import AddProduct from "./AddProduct";

const Products =()=>{
const [nuevo, setNuevo]=useState(false);
return(<div className="content">    
  <div className="ui fluid icon input searchbar">
  <input type="text" placeholder="Buscar producto" />
  <i className="search icon"></i>
  </div><br/>
  <button className="ui button">Buscar producto por código</button>
  <button className="ui button">Buscar producto por descripción</button>
  <button className="ui button" onClick={()=>{setNuevo(true)}}>Agregar producto</button>
  
  <button className="ui button">Modificar producto</button>
  {nuevo?<AddProduct />:<></>}
  <br/><br/><br/><button className="ui button primary">Mostrar todos los productos</button>
<h2>Listado de productos</h2>

<table>
  <tr>
    <th>Número de producto</th>
    <th>Descripción</th>
    <th>Precio</th>
    <th>Stock</th>
  </tr>
  
</table>
</div>);}

export default Products;
     