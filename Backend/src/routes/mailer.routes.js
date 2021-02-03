const { Router } = require('express')
const correo = Router()
const transporter = require('../correo')

<<<<<<< HEAD
/*correo.post('/validar-correo',(req,res)=>{
  const dato ='juan'
  const enlace = "www.facebook.com"+dato

  const mailOptions = {
    from: 'colegio.academia.geek@gmail.com',
    to: 'pablo42r@gmail.com',
    subject: 'Invoice',
    html: '<a href='+enlace+'>hola</a>'
  };

  transporter.sendMail(mailOptions, function(error, info){
  correo.get('/mail-autentication', (req, res) => {
=======
correo.get('/mail-autentication', (req, res) => {
>>>>>>> 5d32d6f7b29aa1892e807bfd18b53ccd73c56f86
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})
<<<<<<< HEAD
*/
=======
>>>>>>> 5d32d6f7b29aa1892e807bfd18b53ccd73c56f86

module.exports = correo
