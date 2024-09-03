const nodemailer = require('nodemailer');
require('dotenv').config(); 
console.log("hii from subscriber")
const sendThankYouEmail = async (email) => {
  
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, 
    auth: {
      user: process.env.ETHEREAL_USER, 
      pass: process.env.ETHEREAL_PASS, 
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER, 
    to: email,
    subject: 'Thank You for Subscribing',
    text: 'Thank you for subscribing! We appreciate your support.',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Thank-you email sent');
    
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending thank-you email', error);
  }
};

module.exports = { sendThankYouEmail };
