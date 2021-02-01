import React, {useState} from "react";
import {FaBars } from 'react-icons/fa';

const Dashboard =({handleToggleSidebar})=>{
  return (   
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>    
  );
}

export default Dashboard;