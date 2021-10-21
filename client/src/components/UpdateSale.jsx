import React,{useState} from "react";
import Axios from "axios";

const UpdateSale = (props)=>{
    const [vendedor,setVendedor] = useState(0);
    const [cliente,setCliente] = useState(0);
    const [valor, setValor] = useState(0);
    const [nombrecliente, setNombreCliente] = useState("");


    const updateDB = ()=>{
        
       var update = props.venta;
       alert(update.nombrecliente);
       const id = props.venta._id;
       delete update._id;
        if (nombrecliente!=""){
            update.nombrecliente = nombrecliente;
                     
        }
        if (valor>0){
            update.valor = valor;
            
                     
        }
        if (cliente>0){
            update.cliente = cliente;
            
        }
        if (vendedor>0){
            update.vendedor = vendedor;
            
        }
       
       alert(update.nombrecliente);
        Axios.delete(`http://localhost:3001/deletesale/${id}`);
        
       Axios.post("http://localhost:3001/nuevaventa",update);
        //alert(update._id);
        //alert("actualización exitosa");
        //alert(update._id);
        
    }

    return <form className ="agregar">
    <label >Codigo Venta</label>
    <input type='text' value={props.venta.codigo}/>
    <label >Id Vendedor</label>
    <input type='number' onChange={(event)=>{setVendedor(event.target.value)}}/>
    <label >Id Clienter</label>
    <input type='number' onChange={(event)=>{setCliente(event.target.value)}}/>
    <label >Nombre Cliente</label>
    <input type='text' onChange={(event)=>{setNombreCliente(event.target.value)}}/>
    <label >Valor</label>
    <input type='number' onChange={(event)=>{setValor(event.target.value)}}/>
    <button className="ui button" onClick ={updateDB} type="submit">Actualizar</button>
    </form> }

export default UpdateSale;
