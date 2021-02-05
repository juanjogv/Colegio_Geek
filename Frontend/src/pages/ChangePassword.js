import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Form from "../components/Form";

import logo from "../images/logo.png";


const ChangePassword=()=>{
  const camposInputs=[{nueva_contrasena:'Nueva contraseña'},{repetir_contrasena:'Repetir contraseña'}];
  const inputType=['password','password'];
  const validation=[{required: true, minLength: 6},{required: true, minLength: 6,pattern:''}];
  const errMessage=['Ingrese una contraseña valida','Los campos deben ser iguales'];

//   useEffect(() => {
//     if (Cookies.get('corre_electronico')) {
//         window.location.href = "../profile"
//     }
// })

  return (
    <div className="row align-items-center">
      <div className="col-12">
        <img className="Llogo shadow rounded " src={logo} />
      </div>
      <div className="col-12">
        <Form
          page="1"
          camps={camposInputs}
          inTypes={inputType}
          vals={validation}
          errMes={errMessage}
          endpoint="/password"
          method="post"
          btnText="Change"
        />
      </div>
    </div>
  );
}
export default ChangePassword;