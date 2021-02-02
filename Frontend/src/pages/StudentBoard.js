import React, {useState} from "react";
import Cookies from 'universal-cookie';

import NavMenu from "../components/NavMenu";
import Dashboard from "../components/Dashboard";


const StudentBoard=()=>{
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const urlText=['Inicio','Mis Notas','Mis Materias','Historial Academico','Cambiar contraseña'];
  const url=['student-board/','student-board/grades','student-board/signatures','student-board/history','student-board/password']

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`row ${toggled ? 'toggled' : ''}`} id='board'>
      <NavMenu
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
  );
}
export default StudentBoard;