import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Form from "../components/Form";

import logo from "../images/logo.png";


const ChangePassword=()=>{
  const [profile,setProfile]=useState({});
  const [loading,setLoading] = useState (true);

  const camposInputs=[{contrasena:'Nueva contraseña'},{repetir:'Repetir contraseña'}];
  const inputType=['password','password'];
  const validation=[{required: true, minLength: 6},{required: true, minLength: 6}];
  const errMessage=['Ingrese una contraseña valida','Los campos deben ser iguales'];

  // useEffect(() => {
  //   const getData=()=>{
  //     setProfile({
  //       correo_electronico: cookies.get('correo_electronico'),
  //       rol_usuario: cookies.get('rol_usuario')
  //     });
  //   }
  //   if(loading){
  //     getData();
  //     setLoading(false);
  //   }    
  // },[]);

  return (
    <div className="row align-items-center">
      <div className="col-12">
        <img className="Llogo shadow rounded " src={logo} />
      </div>
      <div className="col-12">
        <Form
          page="5"
          camps={camposInputs}
          inTypes={inputType}
          vals={validation}
          errMes={errMessage}
          profile={profile}
          endpoint="/password"
          method="post"
          btnText="Change"
        />
      </div>
    </div>
  );
}
export default ChangePassword;