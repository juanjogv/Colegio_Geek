const {Router} = require('express')
const format = require('pg-format')
const correo = Router()
const transporter = require('../correo')
const pool = require('../database')

correo.get('/mail-autentication',async (req,res)=>{

  const mailOptions = {
    from: 'colegio.academia.geek@gmail.com',
    to: 'pablo42r@gmail.com',
    subject: 'Invoice',
    text: 'Bienvenido a nuestra aplicacion'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
	    console.log(error);
    }else {
       console.log('Email sent: ' + info.response);
    }
  });
})

correo.get('/autentication',(req,res)=>{})

module.exports = correo
