import Axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, Redirect, useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Form=(props)=>{
  const {page,camps,inTypes,btnText,vals,errMes,endpoint,id} = props;
  const urlBack='http://35.237.174.137:8080'
  let arrEr=[];
  const { register,errors, handleSubmit } = useForm();
  const history = useHistory();
  
  const fSend = async (info) => {
    console.log(info);
    try {
      if(endpoint ==='/signin/'){        
        const files=[];
        let ind=0, urlFiles=['',''];
        if(info.copia_documento[0] !== undefined) { files.push(info.copia_documento[0]); ind=1}
        if(info.foto_usuario[0] !== undefined) { files.push(info.foto_usuario[0]);ind=0}
        await Promise.all(files.map(async (file,index)=>{
          urlFiles[index+ind]=`${await fileSend(file)}`;
        }));
        console.log(urlFiles[1]);
        console.log(urlFiles[0]);    
        info.foto_usuario=`${urlFiles[0]}`;  info.copia_documento=`${urlFiles[1]}`;
        console.log(info)     
        Axios.post(`${urlBack + endpoint}`,info);
        window.alert('Usuario Creado');
      }
      
      else if (endpoint ==='/login/'){
        const {data}=await Axios.post(`${urlBack+endpoint}`,info);
        console.log(data);         
        // cookies.set('correo_electronico', info.correo_electronico, { path: "/" });
        if (data!=null && data!=undefined && data[1].validPass===true){
          console.log(info.rol)
          switch (info.rol) {
            case 'ESTUDIANTE':
              history.push("/student-board/")
              break;
            case 'ADMINISTRATIVO':
              history.push("/admin-board/")
              break;
            case 'DOCENTE':
              history.push("/teacher-board/")
              break;
          }        
        }
      }
      
      else if(endpoint !=='/signin/' && endpoint !=='/login/'){
        const {data}=await Axios.post(`${urlBack + endpoint}`,info);
        if(data!=undefined){
          if(endpoint==='/password/' && info.contrasena===info.repetir){
            alert('Contraseña actualizada');
          }else if(endpoint==='/password/' && info.contrasena!==info.repetir){
            alert('Verifique que los campos ingresados sean iguales');
          }
        }
        console.log(data);
      }
    }
    catch (error) {
      console.log(error)
      console.log('Error while sending data.');
    }
  }

  const fileSend= async (file)=>{
    let formData = new FormData();
    formData.append("file", file);
    let res=''
    try {
      console.log(`${urlBack}/imageupload/`)
     res = await Axios.post(`${urlBack}/imageupload/`,formData); 
           
    }catch (error) {
      console.log('Error updating file.');
    }
    return res.data
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
        <input ref={register} type="file" name={file} title="" key={index} />
      );
    });
  }

  const selectMaker=(tList)=>{
    return tList.map((t,ind)=>{
      return(
        <option key={ind} value={t.id_docente}>{t.nombre}</option>
      );
    });
  }


  
  if(page=="1"){
    const {uTypes} = props;
    arrEr=[errors.correo_electronico, errors.contrasena];
    return (    
      <div className="container border form-color p-3">
        <form onSubmit={handleSubmit(fSend)} className="col-md-10 mx-auto align-self-center">
          {inputMaker(camps,inTypes,arrEr,vals,errMes)}
          <div className="d-flex justify-content-center">
            {radioMaker(Object.keys(uTypes),uTypes.rol)}
          </div>   
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
      errors.nombre_usuario,errors.apellido_usuario,errors.fecha_nacimiento,errors.direccion_residencia,errors.ciudad_residencia,
      errors.telefono_residencia,errors.telefono_celular,errors.correo_electronico,errors.documento_usuario
    ];
    return (    
      <div className="container border form-color p-3">
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
    const {grA,tList} = props;
    arrEr=[errors.codigo_materia, errors.nombre_materia];
    return (    
      <div className="container border form-color p-3">
        <form onSubmit={handleSubmit(fSend)} className="col-md-10 mx-auto align-self-center">
          {inputMaker(camps,inTypes,arrEr,vals,errMes)}       
          <div className="d-flex justify-content-center">
            {checkMaker('grupos',grA)}
          </div>
          <label htmlFor="list">Titular</label>
          <select id="list" name="id_profesor" ref={register}>
            {selectMaker(tList)}
          </select>   
          <button type="submit" className="btn btn-color col-md-12 mt-5">{btnText}</button>
        </form>
      </div>
      );
  }

  else if(page=="4"){
    const {j,tList,grades} = props;
    arrEr=[errors.codigo_grupo];
    return (    
      <div className="container border form-color p-3">
        <form onSubmit={handleSubmit(fSend)} className="col-md-10 mx-auto align-self-center">
          {inputMaker(camps,inTypes,arrEr,vals,errMes)}
          <label htmlFor="list">Titular</label>
          <select id="list" name="id_profesor" ref={register}>
            {selectMaker(tList)}
          </select>
          <div className="d-flex justify-content-center mt-5">
            {radioMaker(Object.keys(j),j.jornada)}
          </div>
          <div className="d-flex justify-content-center mt-4">
            {radioMaker(Object.keys(grades),grades.grupo)}
          </div>    
          <button type="submit" className="btn btn-color col-md-12 mt-5">{btnText}</button>
        </form>
      </div>
    );
  }
  if(page=="5"){
    arrEr=[errors.correo_electronico, errors.contrasena];
    return (    
      <div className="container border form-color p-3">
        <form onSubmit={handleSubmit(fSend)} className="col-md-10 mx-auto align-self-center">
          {inputMaker(camps,inTypes,arrEr,vals,errMes)}  
          {/* <Redirect to='/student-board'>       */}
            <button type="submit" className="btn btn-color col-md-12 mt-5">{btnText}</button>
          {/* </Redirect> */}
        </form>
      </div>
      );
  }
  
}

export default Form;
