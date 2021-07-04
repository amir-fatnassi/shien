const nodemailer = require('nodemailer');

const sendEmail = async options => {

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  
  // 2) Define the email options
  const mailOptions = {
    from: 'wissem <wissem@yahoo.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
    // html:
  };

  // 3) Actually send the email
  await transport.sendMail(mailOptions);
};

module.exports = sendEmail;
