import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
import {Link} from 'react-router-dom';


import Form from "../components/Form";

import logo from "../images/logo.png";


const Login=()=>{

  const [user_id,setUser_id]=useState('');
  const [user_rol,setUser_rol]=useState('');

  const camposInputs=[{correo_electronico:'Correo'},{contrasena_usuario:'Conatraseña'}];
  const inputType=['text','password'];
  const validation=[{required: true,pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/},{required: true}];
  const errMessage=['Ingrese un correo valido','Ingrese contraseña'];
  const userType={rol:['ESTUDIANTE','DOCENTE','ADMINISTRATIVO']};
  //   useEffect(() => {
//     if (cookies.get('correo_electronico') ===null ||  cookies.get('correo_electronico')===undefined) {
//         // window.location.href = "../profile"
//         console.log("No existe data");
//     }
// })

  return (
    <div className="row align-items-center">
      <div className="col-12 py-4">
        <img className="Llogo shadow rounded" src={logo} />
      </div>
      <div className="col-12">
        <Form
          setUser_id={setUser_id}
          setUser_rol={setUser_rol}
          page="1"
          camps={camposInputs}
          inTypes={inputType}
          vals={validation}
          uTypes={userType}
          errMes={errMessage}
          endpoint="/login"
          method="post"
          btnText="Login"
        />
        <div className="d-flex font-weight-bold pt-4 spacing">
          <Link to='/' className="col-6 btn-log mb-4">
            ¿Olvidaste tu contraseña?
          </Link>
          {/* <Link to='/register' className="col-6 btn-log ">
            Registrarme
          </Link> */}
          </div>
        </div>      
    </div>
  );
}

export default Login;