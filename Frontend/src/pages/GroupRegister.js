import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import Form from "../components/Form";

import logo from "../images/logo.png";


const GroupRegister=()=>{
  const camposInputs=[{codigo_grupo:'Código grupo'}];
  const inputType=['text'];
  const jor={jornada:['MAÑANA','TARDE']};
  const validation=[{required: true}];
  const errMessage=['Ingrese código del grupo'];
  return (
    <div className="row align-items-center">
      <div className="col-12">
        <img className="Llogo shadow rounded " src={logo} />
      </div>
      <div className="col-12">
        <Form
          page="4"
          camps={camposInputs}
          inTypes={inputType}
          vals={validation}
          errMes={errMessage}
          j={jor}
          endpoint="/group-register"
          method="post"
          btnText="Register"
        />
      </div>
    </div>
  );
}
export default GroupRegister;