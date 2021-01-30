import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

import Form from "../components/Form";

import logo from "../images/logo.png";


const Login=()=>{
  const camposInputs=[{email:'Correo'},{password:'Conatraseña'}];
  const inputType=['text','password'];
  const validation=[{required: true},{ required: true}];
  const errMessage=['Error en correo','Error en contraseña'];

  return (
    <div className="row align-items-center">
      <img className="Llogo shadow rounded " src={logo} />
      <Form
        page="1"
        camps={camposInputs}
        inTypes={inputType}
        vals={validation}
        errMes={errMessage}
        endpoint="http://localhost:3001"
        method="post"
        btnText="Login"
      />
    </div>
  );
}
export default Login;