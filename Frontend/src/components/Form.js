import React, {useState} from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const validationSchema = yup.object().shape({
  name: yup.string().required("Ingrese nombre").matches(/^[A-Za-záéíóúÁÉÍÓÚ ,.'-]+$/i, 'Nombre no valido'),
  lastName: yup.string().required("Ingrese nombre").matches(/^[A-Za-záéíóúÁÉÍÓÚ ,.'-]+$/i, 'Apellido no valido'),
  birthday:yup.string(),
  direction:yup.string(),
  city:yup.string(),
  adress:yup.string().matches(/^[0-9A-Za-záéíóúÁÉÍÓÚ #,.'-]+$/i, 'Dirección no valida'),
  phNum:yup.string().matches(/^[0-9]+$/i, 'Número telefónico no valido').min(7,'Número telefónico no valido'),
  celNum:yup.string().matches(/^[0-9]+$/i, 'Número celular no valido').min(10,'min 10'),
  email: yup.string().email('Se debe ingresar un correo valido').required("Ingrese un correo"),
  password: yup.string().required("Ingrese contraseña").min(6,'la contraseña es min de 6 caracteres')
  
});

const handleError=(error)=>{
  return error.message;
}

export default function Form(props) {
  // const [emailReg, setUEmailReg] = useState("");
  // const [passwordReg, setPasswordReg] = useState("");

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");


  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { email: "", password: "" }
  });

  const fRegister = () => {
    // Axios.post("https://kuepj-3001.sse.codesandbox.io/api/register", {      
    Axios.post("http://localhost:3001/api/register", {
      userEmail: userEmailReg,
     // password: sha1(passwordReg),  
       password: passwordReg,       
  
    }).then((response) => {
      console.log(response.data);
    });
  }
  
  const fLogin = (data) => {     
    console.log(data);
    console.log(data.email, data.password);
    // Axios.post("https://kuepj-3001.sse.codesandbox.io/api/login", {
    // Axios.post("http://localhost:3001/api/login", {
    //   userEmail: userEmail,
    //   // password: sha1(password), 
    //   password: password,      
    // }).then((response) => {
    //   console.log(response.data);
    // });
  }

  if(props.page=="2"){
    const {camps,inTypes} = props;
    const arrEr=[
      errors.name,errors.lastName,errors.birthday,errors.adress,errors.city,
      errors.phNum,errors.celNum,errors.email,errors.password
    ];

    return (    
        <div className="container border form-color p-5">
        <form onSubmit={handleSubmit(fLogin)} className="col-md-10 mx-auto align-self-center">
          {camps.map((camp,index)=>{    
            return(
              <div className="form-group" key={index}>
                <label className="formL" htmlFor={Object.keys(camp)}>{Object.values(camp)}</label>
                <input
                  className="form-control"
                  id={Object.keys(camp)}
                  name={Object.keys(camp)}
                  type={inTypes[index]}
                  placeholder={Object.values(camp)}
                  ref={register}
                  error={arrEr[index]} 
                />
                <p className="textErr">{arrEr[index] && `${handleError(arrEr[index])}`}</p>
              </div>
            );
          })}      
          <button className="btn btn-color col-md-12 mt-5">
            Login
          </button>
        </form>
      </div>
      );
  }
  else if(props.page=="1"){
    return (    
        <div className="container border form-color p-5">
        <form onSubmit={handleSubmit(fLogin)} className="col-md-10 mx-auto align-self-center">
          <div className="form-group">
            <label className="formL" htmlFor="idEmail">Correo Electrónico</label>
            <input
              //type="email"
              className="form-control"
              id="idEmail"
              name="email"
              placeholder="Email"
              ref={register}
              error={errors.email}
            />
            <p className="textErr">{errors.email && `${errors.email.message}` }</p>
          </div>
          <div className="form-group">
            <label className="formL" htmlFor="idPass">Password</label>
            <input 
              type="password"
              className="form-control"
              id="idPass"
              name="password"
              type="password"
              placeholder="password"
              ref={register}
              error={errors.password} 
            />
            <p className="textErr">
            {/* <p className="textErr" onError={handleError(error)}> */}
              {errors.password && `${errors.password.message}`}
            </p>
          </div>            
          <button className="btn btn-color col-md-12 mt-5">
            Login
          </button>
        </form>
      </div>
      );
  }
}