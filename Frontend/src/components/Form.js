import Axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, Redirect, useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";



const Form=(props)=>{
  const {page,camps,inTypes,btnText,vals,errMes,endpoint} = props;
  let arrEr=[];

  const { register,errors, handleSubmit } = useForm();

  const fSend = async (data) => {    
    const {endpoint}=props;
    try {
      await Axios.post(`http://localhost:8080${endpoint}`,data);
      fileSend(data.foto_estudiante[0]);
      fileSend(data.copia_documento[0]);
    }
    catch (error) {
      console.log('Error while sending data.');
    }
  }

  const fileSend= async (file)=>{
    const formData = new FormData();
    formData.append("file", file);
    try {
      await Axios.post(`http://localhost:8080/imageupload`,formData);      
    }catch (error) {
      console.log('Error updating file.');
    }
  }


  const inputMaker=(camps,inTypes,arrEr,vals,errMes)=>{
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
            ref={register(vals[index])}
          />
          <p className="textErr">{arrEr[index] && errMes[index]}</p>
        </div>
      );
    });
  }

  const radioMaker=(name,elements)=>{
    return elements.map((element,index)=>{
      return(
        <div className="form-radio" key={index} id={element+index}>
          <input 
            className="form-radio-input" 
            type="radio" name={name[0]} 
            value={element}
            ref={register({ required: true })}
          />
          <label className="form-radio-label" htmlFor={element+index}>
            {element}
          </label>
        </div>
      );
    });
  }

  const checkMaker=(name,elements)=>{
    return elements.map((element,index)=>{
      return(
        <div className="form-checkbox" key={index} id={element+index}>
          <input 
            className="form-checkbox-input" 
            type="checkbox" name={name} 
            value={element}
            ref={register({ required: true })}
          />
          <label className="form-checkbox-label" htmlFor={element+index}>
            {element}
          </label>
        </div>
      );
    });
  }

  const inFileMaker=(files)=>{
    return files.map((file,index)=>{
      return(
        <input ref={register} type="file" name={file} key={index} />
      );
    });
  }

  
  if(page=="1"){
    arrEr=[errors.correo_electronico, errors.contrasena];
    return (    
      <div className="container border form-color p-5">
        <form onSubmit={handleSubmit(fSend)} className="col-md-10 mx-auto align-self-center">
          {inputMaker(camps,inTypes,arrEr,vals,errMes)}   
          {/* <Redirect to='/student-board'>       */}
            <button type="submit" className="btn btn-color col-md-12 mt-5">{btnText}</button>
          {/* </Redirect> */}
        </form>
      </div>
      );
  }

  else if(page=="2"){
    const {uTypes,idT,s,files} = props;
    arrEr=[
      errors.nombre_usuario,errors.apellido_usuario,errors.fecha_nacimiento,errors.direccion_residencia,
      errors.ciudad_residencia,errors.telefono_residencia,errors.telefono_celular,errors.correo_electronico
    ];
    return (    
      <div className="container border form-color p-5">
        <form onSubmit={handleSubmit(fSend)} className="col-md-10 mx-auto align-self-center">
          {inputMaker(camps,inTypes,arrEr,vals,errMes)}            
          <div className="d-flex justify-content-center">
            {radioMaker(Object.keys(idT),idT.tipo_documento)}
          </div> 
          <div className="d-flex justify-content-center">
            {radioMaker(Object.keys(s),s.genero)}
          </div>
          <div className="d-flex justify-content-center">
            {radioMaker(Object.keys(uTypes),uTypes.rol)}
          </div>
            {inFileMaker(files)}
          <button type="submit" className="btn btn-color col-md-12 mt-5">{btnText}</button>
        </form>
      </div>
      );
  }
  
  else if(page=="3"){
    const {grA} = props;
    arrEr=[errors.codigo_materia, errors.nombre_materia];
    return (    
      <div className="container border form-color p-5">
        <form onSubmit={handleSubmit(fSend)} className="col-md-10 mx-auto align-self-center">
          {inputMaker(camps,inTypes,arrEr,vals,errMes)}       
          <div className="d-flex justify-content-center">
            {checkMaker('grupos',grA)}
          </div>   
          <button type="submit" className="btn btn-color col-md-12 mt-5">{btnText}</button>
        </form>
      </div>
      );
  }

  else if(page=="4"){
    const {j} = props;
    arrEr=[errors.codigo_grupo];
    return (    
      <div className="container border form-color p-5">
        <form onSubmit={handleSubmit(fSend)} className="col-md-10 mx-auto align-self-center">
          {inputMaker(camps,inTypes,arrEr,vals,errMes)}       
          <div className="d-flex justify-content-center">
            {radioMaker(Object.keys(j),j.jornada)}
          </div>   
          <button type="submit" className="btn btn-color col-md-12 mt-5">{btnText}</button>
        </form>
      </div>
      );
  }
  
}

export default Form;
