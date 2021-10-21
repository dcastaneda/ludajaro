import React ,{useState, useEffect} from "react";
import AddProduct from "./AddProduct";
import Axios from 'axios';
import UpdateProduct from "./UpdateProduct";

const Products =()=>{
const [nuevo, setNuevo]=useState(false);
const [listProducts,setListProducts] = useState(false);
const [searchId,setSearchId] = useState(false);
const [searchDesc,setSearchDesc] = useState(false);
const [updateProduct, setUpdateProduct] = useState([false,{}]);

const [db,setDB] = useState([]);
var arr = [];
var resultId;
var resultName;
useEffect(()=>{Axios.get("http://localhost:3001/listaproductos").then((response)=>{setDB(response.data)})});

const deleteProduct = (id)=>{Axios.delete(`http://localhost:3001/deleteproduct/${id}`);alert('product deleted');};

for(let i=0;i<db.length;i++){
    arr.push(<tr>
        <td>{db[i].nombre}</td>
        <td>{db[i].codigo}</td>
        <td>{db[i].precio}</td>
        <td>{db[i].stock}</td>
        <td><button class="ui icon button" onClick={()=>{setUpdateProduct([!updateProduct[0],db[i]]);}}>
    <i class="edit icon"></i>
  </button></td>
        <td><button class="ui icon button" onClick={()=>{deleteProduct(db[i]._id)}}>
    <i class="trash icon"></i>
  </button></td>
      </tr>)
    }
 
function searchById(id){
      resultId =[]
      for (let i=0;i<db.length;i++){
        if(db[i].codigo==id){
         resultId.push(<tr>
            <td>{db[i].nombre}</td>
            <td>{db[i].codigo}</td>
            <td>{db[i].precio}</td>
            <td>{db[i].stock}</td>
            <td><button class="ui icon button" onClick={()=>{setUpdateProduct([!updateProduct[0],db[i]]);}}>
    <i class="edit icon"></i>
  </button></td>
        <td><button class="ui icon button" onClick={()=>{deleteProduct(db[i]._id)}}>
    <i class="trash icon"></i>
  </button></td>
          </tr>)
        }
      }
  
      return resultId;
    }

  function searchByDesc(nom){
   
      resultName =[]
      for (let i=0;i<db.length;i++){
        
        if(db[i].nombre.toLowerCase().indexOf(nom)!=-1){
         
          resultName.push(<tr>
            <td>{db[i].nombre}</td>
            <td>{db[i].codigo}</td>
            <td>{db[i].precio}</td>
            <td>{db[i].stock}</td>

            <td><button class="ui icon button" onClick={()=>{setUpdateProduct([!updateProduct[0],db[i]]);}}>
          

    <i class="edit icon"></i>
  </button></td>
        <td><button class="ui icon button" onClick={()=>{deleteProduct(db[i]._id)}}>
    <i class="trash icon"></i>
  </button></td>
          </tr>);
         
        }
      }
  
      return resultName;
    }

return(<div className="content">    
  <div className="ui fluid icon input searchbar">
  <input type="text" placeholder="Buscar producto" id="searchTxt" />
  <i className="search icon"></i>
  </div><br/>
  <button className="ui button" onClick={()=>{setSearchId(true);setListProducts(false);setSearchDesc(false);}}>Buscar producto por código</button>
  <button className="ui button" onClick={()=>{setListProducts(false);setSearchId(false);setSearchDesc(true);}}>Buscar producto por descripción</button>
  <button className="ui button" onClick={()=>{setSearchId(false);setListProducts(false);setSearchDesc(false);}}>Limpiar Busqueda</button>
    <button className="ui button" onClick={()=>{setNuevo(!nuevo)}}>Agregar producto</button>
  
 
  {nuevo?<AddProduct />:<></>}
  {updateProduct[0]?<UpdateProduct product={updateProduct[1]}/>:<></>}
  <br/><br/><br/><button className="ui button primary" onClick={()=>{setListProducts(true);setSearchId(false);setSearchDesc(false);}}>Mostrar todos los productos</button>

<h2>Listado de productos</h2>

<table>
  <tr>
    <th>Descripción del producto</th>
    <th>Código</th>
    <th>Precio</th>
    <th>Stock</th>
    <th>Actualizar</th>
    <th>Eliminar</th>
  </tr>
  {listProducts?arr:<></>}
  {searchId? searchById(parseInt(document.getElementById("searchTxt").value)):<></>}
  {searchDesc? searchByDesc(document.getElementById("searchTxt").value.toLowerCase()):<></>}
</table>
</div>);}

export default Products;
     