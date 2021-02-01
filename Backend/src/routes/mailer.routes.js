<<<<<<< HEAD
const { Router } = require('express')
const correo = Router()
const { transporter, mailOptions } = require('../correo')

correo.get('/mail-autentication', (req, res) => {
  transporter.sendMail(mailOptions, function (error, info) {
=======
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
>>>>>>> b07dcda6e287288bfe78fe8423853a468bfe9dce
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})

module.exports = correo
