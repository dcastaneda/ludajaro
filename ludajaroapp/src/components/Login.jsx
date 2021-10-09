import React from "react";
import './styles.css'
import Greeting from './Greeting'

const Login = ()=>{


    return (
    <>
    <Greeting></Greeting>
    <div className="content">
    <form action="/ventas">
    
    <input type="text" id="username" /><br/>
    <div className="ui pointing above label">
     Usuario
    </div><br /><br />
    
    <input type="password" id="password" /><br/>
   <div className="ui pointing above label">
    Contraseña
    </div>
    <br/> <br/>
    <button type="submit" className="ui secondary button">Ingresar</button>

    </form>

</div></>);

}
export default Login;