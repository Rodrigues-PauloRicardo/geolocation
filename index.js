var nodemailer = require('nodemailer');

const SMTP_CONFIG = require("./smtp");

var transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    service: 'yahoo',          
            
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,  
  },
  tls: {
    rejectUnauthorized: false,
  }            
});

var mailOptions = {
  from: 'dev_pauloricardo@yahoo.com',
  to: 'igas.aplicativo@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'IMAP é a tecnologia de ponta para conectar sua conta do Yahoo Mail a um cliente de e-mail de área de trabalho ou aplicativo móvel.!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});