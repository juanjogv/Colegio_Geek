const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'colegio.academia.geek@gmail.com',
    pass: 'colegio_geek'
  }
});

const mailOptions = {
  from: 'colegio.academia.geek@gmail.com',
  to: 'pablo42r@gmail.com',
  subject: 'Invoice',
  text: 'Bienvenido a nuestra aplicacion'
};


module.exports = transporter, mailOptions
