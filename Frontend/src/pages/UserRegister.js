import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import Form from "../components/Form";

import logo from "../images/logo.png";


const UserRegister=()=>{
  const camposInputs=[
    {nombre_usuario:'Nombres'},{apellido_usuario:'Apellidos'},{fecha_nacimiento:'Fecha de nacimiento'},
    {direccion_residencia:'Dirección'},{ciudad_residencia:'Municipio'},{telefono_residencia:'Teléfono'},
    {telefono_celular:'Celular'},{correo_electronico:'Correo'},{contrasena:'Conatraseña'},
    {documento_usuario:'documento de identidad'}
  ];
  const validation=[
    {required: true, pattern: /^[A-Za-záéíóúÁÉÍÓÚ ,.'-]+$/i},
    {required: true, pattern: /^[A-Za-záéíóúÁÉÍÓÚ ,.'-]+$/i},
    {required: true},
    {required: false, pattern: /^[0-9A-Za-záéíóúÁÉÍÓÚ #,.'-]+$/i},
    {required: false, pattern: /^[A-Za-záéíóúÁÉÍÓÚ ,.'-]+$/i}, 
    {required: false, pattern: /^[0-9]+$/i,minLength: 7},
    {required: false, pattern: /^[0-9]+$/i,minLength: 10}, 
    {required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}, 
    {required: true, minLength: 6},
    {required: true, pattern: /^[0-9]+$/i},
  ];
  const errMessage=[
    'Ingrese nombre valido','Ingrese apellido valido','','','','Número telefónico no valido',
    'Número celular no valido','Se debe ingresar un correo valido','La contraseña es min de 6 caracteres',
    'Debe ingresar número de identidad'
  ];
  const inputType=['text','text','date','text','text','text','text','text','password'];
  const userType={rol:['ESTUDIANTE','DOCENTE','ADMINISTRATIVO']};
  const typeID={tipo_documento:['TI','CC','NUIP']};
  const sex={genero:['MASCULINO','FEMENINO','OTRO']};
  const file=['foto_estudiante','copia_documento'];

  return (
    <div className="row align-items-start">
     < div className="col-12">
        <img className="Llogo shadow rounded my-5" src={logo} />
      </div>
      <div className="col-12">
        <Form
          page="2"
          camps={camposInputs}
          inTypes={inputType}
          uTypes={userType}
          idT={typeID}
          s={sex}
          vals={validation}
          errMes={errMessage}
          files={file}
          endpoint="/signin"
          method="post"
          btnText="Register"
        />
      </div>
    </div>
  );
}
export default UserRegister;