import React from "react";
import { Link } from "react-router-dom";

const Sidenav = ()=>{

    return(<div class="sidemenu">
    <h3>Menú</h3> <hr/>
    <a href="#">Gestion de ventas</a> <br/><hr/>
    <a href="./salespeople.html">Gestion de vendedores</a><br /><hr />
    <a href="#">Gestion de usuarios</a><br /><hr />
    <Link to="/login">Cerrar Sesión</Link>
    </div> );


}
export default Sidenav;