import React, { useState } from "react";
import {Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FiArrowRight, FiLogOut } from 'react-icons/fi';

import "../css/NavMenu.scss";
import logoImg from "../images/logoImg.png";


const NavMenu=({collapsed,toggled,handleToggleSidebar,links,tLinks})=>{
  

  //create initial menuCollapse state using useState hook
  const [status, setStatus] = useState(false)
  const dominio='localhost:3000/'

  const logOut = () => {
    cookies.remove("nombre_usuario")
    cookies.remove("apellido_usuario")
    cookies.remove("correo_electronico")
    cookies.remove("foto_usuario")
    cookies.remove("rol_usuario")  
    cookies.remove("codigo_usuario")  
    cookies.remove("id_usuario")  
    setStatus(true);   
  }
  if(status){
    return(
      <Redirect to='/'></Redirect>
    );
  }

  return(
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>   
        <img className="LlogoImg shadow rounded m-4" src={logoImg} />       
      </SidebarHeader>
      <SidebarContent>
        {links.map((link,index)=>{

          return(         
            <Link key={index} to={{pathname:`/${link}`}}>       
              <Menu key={index} iconShape="circle">
                <MenuItem icon={ <FiArrowRight /> }> {tLinks[index]} </MenuItem>
              </Menu>
            </Link>
          );
        })}
      </SidebarContent>
      <SidebarFooter>
        <div className="btn" onClick={logOut}>           
          <Menu iconShape="circle">
            <MenuItem icon={<FiLogOut/>}>Logout</MenuItem>
          </Menu>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
}

export default NavMenu;
