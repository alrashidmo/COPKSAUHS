const nodemailer = require('nodemailer');

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Send verification email
const sendVerificationEmail = async (email, token) => {
  const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
  
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Clinical Affairs Portal - Verify Your Email',
    html: `
      <h2>Welcome to Clinical Affairs Portal!</h2>
      <p>Please verify your email to complete your registration.</p>
      <a href="${verificationLink}" style="background: #1B5E20; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Verify Email</a>
      <p>Or copy this link: ${verificationLink}</p>
    `
  };

  return transporter.sendMail(mailOptions);
};

// Send low hours alert
const sendLowHoursAlert = async (email, userName, hoursLogged, hoursNeeded) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: '⚠️ Clinical Affairs - Low Hours Alert',
    html: `
      <h2>Hi ${userName},</h2>
      <p>You have logged <strong>${hoursLogged} hours</strong> this week.</p>
      <p>Your target is <strong>40 hours</strong>. You need <strong>${hoursNeeded} more hours</strong> to stay on track.</p>
      <p><a href="${process.env.FRONTEND_URL}">Log in to add hours</a></p>
    `
  };

  return transporter.sendMail(mailOptions);
};

// Send task reminder
const sendTaskReminder = async (email, userName, pendingTasks) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: '📋 Clinical Affairs - Pending Tasks',
    html: `
      <h2>Hi ${userName},</h2>
      <p>You have <strong>${pendingTasks}</strong> pending task(s):</p>
      <p><a href="${process.env.FRONTEND_URL}">View your tasks</a></p>
    `
  };

  return transporter.sendMail(mailOptions);
};

// Send rotation completion email
const sendRotationCompletion = async (email, userName, rotationName) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: `✅ Clinical Affairs - ${rotationName} Completed`,
    html: `
      <h2>Congratulations ${userName}!</h2>
      <p>You have successfully completed the <strong>${rotationName}</strong> rotation.</p>
      <p><a href="${process.env.FRONTEND_URL}">View your progress</a></p>
    `
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendVerificationEmail,
  sendLowHoursAlert,
  sendTaskReminder,
  sendRotationCompletion
};
