const { Router } = require('express')
const correo = Router()
const transporter = require('../correo')

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
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})
*/

module.exports = correo
