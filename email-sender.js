const nodemailer = require('nodemailer');

// Configure transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password',
  },
});

// Configure email options
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js using Nodemailer.',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
