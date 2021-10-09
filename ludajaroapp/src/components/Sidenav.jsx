import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const Sidenav = ()=>{

    return(<div className="sidemenu">
    <h3>Menú</h3> <hr/>
    <Link to="/ventas">Gestion de ventas</Link> <br/><hr/>
    <Link to="/productos">Gestion de productos</Link><br /><hr />
    <Link to="/usuarios">Gestion de usuarios</Link><br /><hr />
    <Link to="/login">Cerrar Sesión</Link>
    </div> );


}
export default Sidenav;