const {Router} = require('express')
const format = require('pg-format')
const correo = Router()
const transporter = require('../correo')
const pool = require('../database')

correo.post('/',(req,res)=>{
  const correo =''
  const enlace = "www.facebook.com"+correo

  const mailOptions = {
    from: 'colegio.academia.geek@gmail.com',
    to: 'pablo42r@gmail.com',
    subject: 'Invoice',
    html: '<a href='+enlace+'>hola</a>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
	    console.log(error);
    }else {
       console.log('Email sent: ' + info.response);
    }
  });
})

module.exports = correo
