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

  useEffect(async() => {
    //     if (Cookies.get('corre_electronico')) {
    //         window.location.href = "../profile"
    //     }
    const getData = async () => {
      const {data}= await Axios.get(`http://localhost:8080/students-groups`);            
      setStudentList(data);
    }
    if(loading){
      getData();
      setLoading(false);
    }
  },[]);

  return (    
    <div className="row align-items-center">
      {console.log(studentList)}
      <div className="col-12">
        <img className="Llogo shadow rounded my-5" src={logo} />
      </div>
      <div className="col-12">
        <Table
          studentList={studentList}
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