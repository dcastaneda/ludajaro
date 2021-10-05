import React from "react";
import './styles.css'

const Login = ()=>{


    return (<div class="content">
    <form action="./sales.html">
    
    <input type="text" id="username" /><br/>
    <div class="ui pointing above label">
     Usuario
    </div><br /><br />
    
    <input type="password" id="password" /><br/>
   <div class="ui pointing above label">
    Contraseña
    </div>
    <br/> <br/>
    <button type="submit" class="ui secondary button">Ingresar</button>

    </form>

</div>);

}
export default Login;