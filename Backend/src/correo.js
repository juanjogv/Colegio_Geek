const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'colegio.academia.geek@gmail.com',
    pass: 'colegio_geek'
  }
});

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

module.exports = transporter
