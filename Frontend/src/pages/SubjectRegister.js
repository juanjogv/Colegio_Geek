import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Form from "../components/Form";

import logo from "../images/logo.png";


const SubjectRegister=()=>{
  const camposInputs=[{codigo_materia:'Código de la asignatura'},{nombre_materia:'Nombre de la asignatura'}];
  const inputType=['text','text'];
  const validation=[{required: true},{required: false, pattern: /^[0-9A-Za-záéíóúÁÉÍÓÚ .-]+$/i}];
  const groupsAsig=['sexto', 'septimo', 'octavo', 'noveno', 'decimo', 'once'];
  const errMessage=['Ingrese código de la asignatura','Ingrese nombre de la asignatura'];
 
  return (
    <div className="row align-items-center">
        <div className="col-12">
          <img className="Llogo shadow rounded " src={logo} />
        </div>
          <div className="col-12">
          <Form
          page="3"
          camps={camposInputs}
          inTypes={inputType}
          vals={validation}
          errMes={errMessage}
          grA={groupsAsig}
          endpoint="/subject-register"
          method="post"
          btnText="Register"
        />
        </div>
    </div>
  );
}
export default SubjectRegister;