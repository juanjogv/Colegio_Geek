const nodemailer = require('nodemailer');
smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: 'colegio.academia.geek@gmail.com',
        pass: 'colegio_geek'
    }
}));

module.exports = {
    transporter
}