
import React from "react";
const AddUserForm = ()=>{return <form className ="agregar"><label for="nombreUsuario" >Nombre</label><input type="text" id="nombreUsuario" />
<label for="documento">Documento</label>

<input type="text" id="documento"/>
<label>Rol</label>
<select ><option value="">--Seleccione el rol--</option>
    <option value="cliente">Cliente</option>
    <option value="vendedor">Vendedor</option>
    <option value="gerente">Gerente</option></select>
    <button className="ui button" type>Registrar</button>
</form> }

export default AddUserForm;