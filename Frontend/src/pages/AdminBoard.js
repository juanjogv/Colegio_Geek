import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';

import NavMenu from "../components/NavMenu";
import Dashboard from "../components/Dashboard";


const AdminBoard = ({ children }) => {
  const cookies = new Cookies();
  const [profile, setProfile] = useState({});
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const urlText = ['Inicio', 'Grupos', 'Matricular Grupos', 'Registrar Usuarios', 'Materias', 'Cambiar clave'];
  const url = ['admin-board/', 'admin-board/group-register/', 'admin-board/enroll-students/', 'admin-board/user-register/', 'admin-board/subject-register/', 'admin-board/change-password/']

  // useEffect(() => {
  //   if (!cookies.get('correo_electronico')) {
  //     window.location.href = "/"
  //     console.log('Necesita iniciar sesion para usar esta función');
  //   }
  // })

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className="row h-100 m-0 justify-content-center">
      <div className={`p-0 ${toggled ? 'toggled' : ''} col-1 col-md-2`} id='board'>
        <NavMenu id='navmenu'
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          links={url}
          tLinks={urlText}
        />
        <Dashboard
          handleToggleSidebar={handleToggleSidebar}
        />
      </div>
      <div id='form' className="col-10 col-sm-11 col-md-7 col-lg-8 p-0">{children}</div>
    </div>
  );
}
export default AdminBoard;