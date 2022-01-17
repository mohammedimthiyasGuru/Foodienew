const nodemailer = require('nodemailer');
const authconfig = require('../configs/auth.config');

let transport = nodemailer.createTransport({
  // service: 'Godaddy',
  // host: authconfig.smtp.host,
  // port: 465,
  // auth: {
  //   user: authconfig.smtp.sender,
  //   pass: authconfig.smtp.password
  // },
  // tls: {
  //   rejectUnauthorized: false
  // }
  service: 'gmail',
  auth: {
    user: 'syncorpenquiry@gmail.com',
    pass: 'foodie@2021'
  }
});

exports.sendEmail = function (message) {
  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });
}