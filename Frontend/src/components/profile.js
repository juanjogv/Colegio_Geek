import React, {useState,useEffect} from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Profile =({handleToggleSidebar})=>{
  
  const [profile,setProfile]=useState({});

  useEffect(() => {
    const setProfile=({
      nombre_usuario: cookies.get('nombre_usuario'),
      apellido_usuario: cookies.get('apellido_usuario'),
      foto_usuario: cookies.get('foto_usuario')
      });
  });

  console.log(profile);
  return (   
<div className="row about-section align-items-center justify-content-center">
    <div className="col-12">
        <img className="profile-image mx-auto" src={profile.foto_usuario} alt="Still me"/>
    </div>
    <div className="col-lg-8 col-md-12 col-sm-12">
        <div className="card-style card">
            <div className="card-body">
                <h2>Bienvenid@</h2>
                <p>My full name is <b>Thinh Phan Ngoc</b>. I am a simple, creative, enthusiastic and fun-loving person.</p>
                <p>My objective is constantly improving programming skills and understanding of technologies to become a professional front-end developer. </p>

            </div>
        </div>
    </div>
</div>  
  );
}

export default Profile;