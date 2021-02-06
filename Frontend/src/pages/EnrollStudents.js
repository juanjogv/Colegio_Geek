import React, { useState, useEffect } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Table from "../components/Table";
import logo from "../images/logo.png";

const EnrollStudent=()=>{
  const [loading,setLoading] = useState (true);
  const [studentList, setStudentList]=useState([]);
  const [groupList, setGroupList]=useState([]);

  const urlBack='http://35.237.174.137:8080'

  useEffect(async() => {
    //     if (Cookies.get('corre_electronico')) {
    //         window.location.href = "../profile"
    //     }
    const getData = async () => {
      const {data}= await Axios.get(`${urlBack}/students/`);            
      setStudentList(data);
    }
    if(loading){
      getData();
      setLoading(false);
    }
  },[]);

  return (
    <div className="row align-items-center">
      <div className="col-12">
        <img className="Llogo shadow rounded my-5" src={logo} />
      </div>
      <div className="col-12">
        <Table
          // page="4"
          // camps={camposInputs}
          // inTypes={inputType}
          // vals={validation}
          // errMes={errMessage}
          // j={jor}
          // tList={list}
          // endpoint="/grupos"
          // method="post"
          // btnText="Register"
        />
      </div>
    </div>
  );



}
export default EnrollStudent;