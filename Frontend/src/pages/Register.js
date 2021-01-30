import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

import LoginForm from "../components/Form";

import logo from "../images/logo.png";


const Register=()=>{
  const camposInputs=[
    {name:'Nombres'},{lastName:'Apellidos'},{birthday:'Fecha de nacimiento'},{adress:'Dirección'},
    {city:'Municipio'},{phNum:'Teléfono'},{celNum:'Celular'},{email:'Correo'},{password:'Conatraseña'}
  ];
  const validation=[{required: true, pattern: /^[A-Za-záéíóúÁÉÍÓÚ ,.'-]+$/i},{required: true, pattern: /^[A-Za-záéíóúÁÉÍÓÚ ,.'-]+$/i},{ required: true},
  {required: false, pattern: /^[A-Za-záéíóúÁÉÍÓÚ ,.'-]+$/i}, {required: false, pattern: /^[A-Za-záéíóúÁÉÍÓÚ ,.'-]+$/i}, {required: true, pattern: /^[0-9]+$/i,minLength: 7},
  {required: true, pattern: /^[0-9]+$/i,minLength: 10}, {required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}, {required: true,minLength: 6}
  ];
  const errMessage=['Ingrese nombre valido','Ingrese apellido valido','','',];
  const inputType=['text','text','date','text','text','text','text','text','password'];
  const typID=['TI','CC','NUIP'];
  const sex=['F','M','Otro'];
  const fCamps=['userPic','copyID'];

  return (
    <div className="row align-items-start">
      <img className="Llogo shadow my-5 rounded " src={logo} />
      <LoginForm
        page="2"
        camps={camposInputs}
        inTypes={inputType}
        vals={validation}
        errMes={errMessage}
        fileCamps={fCamps}
        endpoint="http://localhost:3001"
        method="post"
        btnText="Register"
      />
    </div>
  );
}
export default Register;