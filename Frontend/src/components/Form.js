import React, {useState} from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const validationSchema = yup.object().shape({
  name: yup.string().required("Ingrese nombre").matches(/^[A-Za-záéíóúÁÉÍÓÚ ,.'-]+$/i, 'Nombre no valido'),
  lastName: yup.string().required("Ingrese apellido").matches(/^[A-Za-záéíóúÁÉÍÓÚ ,.'-]+$/i, 'Apellido no valido'),
  birthday:yup.string(),
  direction:yup.string(),
  city:yup.string(),
  adress:yup.string().matches(/^[0-9A-Za-záéíóúÁÉÍÓÚ #,.'-]+$/i, 'Dirección no valida'),
  phNum:yup.string().matches(/^[0-9]+$/i, 'Número telefónico no valido').min(7,'Número telefónico no valido'),
  celNum:yup.string().matches(/^[0-9]+$/i, 'Número celular no valido').min(10,'min 10'),
  email: yup.string().email('Se debe ingresar un correo valido').required("Ingrese un correo"),
  password: yup.string().required("Ingrese contraseña").min(6,'la contraseña es min de 6 caracteres')
  
});

export default function Form(props) {
  const {page,camps,inTypes,btnText,vals,errMes} = props;
  let arrEr=[];

  const { register,errors, handleSubmit } = useForm();
  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(validationSchema),
  //   defaultValues: {
  //     name:'',lastName:'',birthday:'',adress:'',city:'',phNum:'',celNum:'',email:'',password:''
  //   }
  // });


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
  
  
  const fSend = (data) => {     
    console.log(data);
    //console.log(data.email, data.password);
    // Axios.post("https://kuepj-3001.sse.codesandbox.io/api/login", {
    // Axios.post("http://localhost:3001/api/login", {
    //   userEmail: userEmail,
    //   // password: sha1(password), 
    //   password: password,      
    // }).then((response) => {
    //   console.log(response.data);
    // });
  }

  
  // const inputMaker=(camps,inTypes,arrEr)=>{
  //   return camps.map((camp,index)=>{    
  //     return(
  //       <div className="form-group" key={index}>
  //         <label className="formL" htmlFor={Object.keys(camp)}>{Object.values(camp)}</label>
  //         <input
  //           className="form-control"
  //           id={Object.keys(camp)}
  //           name={Object.keys(camp)}
  //           type={inTypes[index]}
  //           placeholder={Object.values(camp)}
  //           ref={register}
  //           error={arrEr[index]} 
  //         />
  //         <p className="textErr">{arrEr[index] && `${handleError(arrEr[index])}`}</p>
  //       </div>
  //     );
  //   });
  // }


  const inputMaker=(camps,inTypes,arrEr,vals,errMes)=>{
    console.log(page,vals[0],errMes[0])
    return camps.map((camp,index)=>{    
      return(
        <div className="form-group" key={index}>
          <label className="formL" htmlFor={Object.keys(camp)}>{Object.values(camp)}</label>
          <input
            className="form-control"
            id={Object.keys(camp)}
            name={Object.keys(camp)}
            type={inTypes[index]}
            placeholder={Object.values(camp)}
            ref={register({ required: true })}
            error={arrEr[index]} 
          />
          <p className="textErr">{arrEr[index] && errMes[index]}</p>
        </div>
      );
    });
  }





  const handleError=(err)=>{
    return err.message;
  }

  if(page=="1"){
    arrEr=[errors.email,errors.password];
  }
  else if(page=="2"){
    arrEr=[
      errors.name,errors.lastName,errors.birthday,errors.adress,errors.city,
      errors.phNum,errors.celNum,errors.email,errors.password
    ];
  }

  return (    
    <div className="container border form-color p-5">
      <form onSubmit={handleSubmit(data => console.log(data))} className="col-md-10 mx-auto align-self-center">
        {inputMaker(camps,inTypes,arrEr,vals,errMes)}          
        <button type="submit" className="btn btn-color col-md-12 mt-5">{btnText}</button>
      </form>
    </div>
    );
  // const onSubmit = data => console.log(data);
  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <input name="firstName" ref={register({ required: true })} />
  //     {errors.firstName && "First name is required"}
  //     <input name="lastName" ref={register({ required: true })} />
  //     {errors.lastName && "Last name is required"}
  //     <input type="submit" />
  //   </form>
  // );
}