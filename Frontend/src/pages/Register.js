import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

import LoginForm from "../components/Form";

import logo from "../images/logo.png";



function Login() {
  const camposInputs=[
    {name:'Nombres'},{lastName:'Apellidos'},{birthday:'Fecha de nacimiento'},{adress:'Dirección'},
    {city:'Municipio'},{phNum:'Teléfono'},{celNum:'Celular'},{email:'Correo'},{password:'Conatraseña'}
  ];
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
        fileCamps={fCamps}
        petter="/^[A-Za-záéíóúÁÉÍÓÚ ,.'-]+$/i "
        endpoint="http://localhost:3001"
        method="post"
        btnText="Register"
      />
    </div>
  );
};

export default Login;