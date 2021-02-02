import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';


import Form from "../components/Form";

import logo from "../images/logo.png";


const Login=()=>{
  const camposInputs=[{correo_electronico:'Correo'},{contrasena_usuario:'Conatraseña'}];
  const inputType=['text','password'];
  const validation=[{required: true,pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/},{required: true}];
  const errMessage=['Ingrese un correo valido','Ingrese contraseña'];

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
          endpoint="/login"
          method="post"
          btnText="Login"
        />
      </div>
    </div>
  );
}

export default Login;