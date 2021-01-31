import React, {useState} from "react";
import NavMenu from "../components/NavMenu";
import Dashboard from "../components/Dashboard";


const StudentBoard=()=>{
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`row ${toggled ? 'toggled' : ''}`} id='board'>
      <NavMenu
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Dashboard
        handleToggleSidebar={handleToggleSidebar}
      />
    </div>
  );
}
export default StudentBoard;