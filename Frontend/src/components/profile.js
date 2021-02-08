import React, {useState,useEffect} from "react";
import Cookies from 'universal-cookie';

const Profile =({handleToggleSidebar})=>{
  
  const [profile,setProfile]=useState({});
  const [loading,setLoading] = useState (true);
  const cookies = new Cookies();


  useEffect(() => {
    const getData=()=>{
      setProfile({
        nombre_usuario: cookies.get('nombre_usuario'),
        apellido_usuario: cookies.get('apellido_usuario'),
        foto_usuario: cookies.get('foto_usuario'),
        rol_usuario: cookies.get('rol_usuario')
      });
    }
    if(loading){
      getData();
      setLoading(false);
    }    
  },[]);

  console.log(profile);
  return (   
<div className="row about-section align-items-center justify-content-center">
    <div className="col-12">
        <img className="profile-image mx-auto" src={profile.foto_usuario} alt="Still me"/>
    </div>
    <div className="col-lg-8 col-md-12 col-sm-12">
        <div className="card-style card">
            <div className="card-body">
                <h2 className="font-weight-bold">Bienvenid@ {profile.nombre_usuario+' '+profile.apellido_usuario}</h2>
                <p className='text-white'>My full name is <b>Thinh Phan Ngoc</b>. I am a simple, creative, enthusiastic and fun-loving person.</p>
            </div>
        </div>
    </div>
</div>  
  );
}

export default Profile;