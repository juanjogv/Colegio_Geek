import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

import Form from "../components/Form";

import logo from "../images/logo.png";



function Login() {

  return (
    <div className="row align-items-center">
      <img className="Llogo shadow rounded " src={logo} />
      <Form
        page="1"
        endpoint="http://localhost:3001"
        method="post"
        btnText="Login"
      />
    </div>
  );
};

export default Login;