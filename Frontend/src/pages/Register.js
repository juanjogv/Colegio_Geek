import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

import LoginForm from "../components/Form";

import logo from "../images/logo.png";



function Login() {
  const camposInputs=['name','sex','birthday','direction','city','tel','cel','foto','pdfID']
  return (
    <div className="row align-items-start">
      <img className="Llogo shadow my-5 rounded " src={logo} />
      <LoginForm
        page="2"
        camps={camposInputs}
        endpoint="http://localhost:3001"
        method="post"
        btnText="Login"
      />
    </div>
  );
};

export default Login;