import React ,{useState, useEffect} from "react";
import AddProduct from "./AddProduct";
import Axios from 'axios';

const Products =()=>{
const [nuevo, setNuevo]=useState(false);
const [listProducts,setListProducts] = useState(false);
const [searchId,setSearchId] = useState(false);
const [db,setDB] = useState([]);
var arr = [];
useEffect(()=>{Axios.get("http://localhost:3001/listaproductos").then((response)=>{setDB(response.data)})});

const deleteProduct = (id)=>{Axios.delete(`http://localhost:3001/deleteproduct/${id}`);alert(id);};

for(let i=0;i<db.length;i++){
    arr.push(<tr>
        <td>{db[i].nombre}</td>
        <td>{db[i].codigo}</td>
        <td>{db[i].precio}</td>
        <td>{db[i].stock}</td>
        <td><button class="ui icon button" onClick={()=>{}}>
    <i class="edit icon"></i>
  </button></td>
        <td><button class="ui icon button" onClick={()=>{deleteProduct(db[i]._id)}}>
    <i class="trash icon"></i>
  </button></td>
      </tr>)
    }
 


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
  <br/><br/><br/><button className="ui button primary" onClick={()=>{setListProducts(true);}}>Mostrar todos los productos</button>
<h2>Listado de productos</h2>

<table>
  <tr>
    <th>Número de producto</th>
    <th>Código</th>
    <th>Precio</th>
    <th>Stock</th>
  </tr>
  {listProducts?arr:<></>}
</table>
</div>);}

export default Products;
     