const { Router } = require('express')
const correo = Router()
const { transporter, mailOptions } = require('../correo')

correo.get('/mail-autentication', (req, res) => {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

module.exports = correo
