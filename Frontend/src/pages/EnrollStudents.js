import React, { useState, useEffect } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Table from "../components/Table";
import logo from "../images/logo.png";

const EnrollStudent=()=>{
  const [loading,setLoading] = useState (false);
  const [studentList, setStudentList]=useState([]);
  const [listColumns, setListColumns]=useState([]);

  const urlBack='http://35.237.174.137:8080'
  let cols=[];

  useEffect(() => {
    setLoading(true);
    //     if (Cookies.get('corre_electronico')) {
    //         window.location.href = "../profile"
    //     }
    const getData = async () => {
      try {
        const {data}= await Axios.get(`${urlBack}/students/`);              
        setStudentList(data);
        return (data[0]);
      } catch (error) {
        console.log(error)
      }
      // const {data}= await Axios.get(`http://localhost:8080/students-groups`);            
      // setStudentList(data);
      // return (data[0]);
    }

    const getKeys=async ()=>{
      try {
        const res= await getData();  
        Object.keys(res).map((keyName,index) => {
          cols[index]={
            Header:keyName,
            accessor:keyName 
          }
        });
        setListColumns(cols);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }    
    }
    getKeys();
  },[]);


  return (    
    <div className="row align-items-center">
      <div className="col-12">
        <img className="Llogo shadow rounded my-5" src={logo} />
      </div>
      <div className="col-12">
      {!loading && <Table
          listRows={studentList}
          listColumns={listColumns}
          // page="4"
          // endpoint="/grupos"
          // method="post"
          // btnText="Register"
        />}
      </div>
    </div>
  );
}

export default EnrollStudent;