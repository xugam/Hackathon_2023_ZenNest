const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

//Configure Nodemailer
const transporter = nodemailer.createTransport({
//Your email configuration
});

// Mock data for illustration purposes
const periodData = {
  nextPeriodDate: new Date('2023-12-15'),
};

// Calculate remaining days until the next period
function getRemainingDays() {
  const today = new Date();
  const remainingDays = Math.ceil((periodData.nextPeriodDate - today) / (1000 * 60 * 60 * 24));
  return remainingDays;
}

// Send email if remaining days are within a certain threshold
function sendNotificationEmail() {
  const remainingDays = getRemainingDays();
  if (remainingDays <= 3) {
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'recipient-email@example.com',
      subject: 'Upcoming Period Notification',
      text: `Your period is coming in ${remainingDays} days.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.error('Error sending email:', error);
      }
      console.log('Email sent:', info.response);
    });
  }
}

// Schedule the email check to run daily
setInterval(sendNotificationEmail, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});