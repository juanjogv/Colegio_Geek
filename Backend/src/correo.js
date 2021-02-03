const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'colegio.academia.geek@gmail.com',
    pass: 'colegio_geek'
  }
});

module.exports = transporter
