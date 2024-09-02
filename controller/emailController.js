const nodemailer = require('nodemailer');

const sendThankYouEmail = async (email) => {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  }); 

 console.log("hii from sub");

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank You for Subscribing',
    text: 'Thank you for subscribing! We appreciate your support.',
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Thank-you email sent');
  } catch (error) {
    console.error('Error sending thank-you email', error);
  }
};

module.exports = { sendThankYouEmail };
