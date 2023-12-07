const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// Reminder email content
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient-email@example.com',
  subject: 'Daily Reminder',
  text: 'Don\'t forget to do your tasks today!',
};

// Send email function
function sendReminderEmail() {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error('Error sending email:', error);
    }
    console.log('Email sent:', info.response);
  });
}

// Schedule the email to be sent daily
setInterval(sendReminderEmail, 24 * 60 * 60 * 1000); 