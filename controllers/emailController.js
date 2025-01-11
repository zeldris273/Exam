const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const pool = require('../models/db');


require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOtpEmail = async (req, res) => {
  const { email } = req.body;
  const mailCheck = await pool.query('SELECT * FROM accountuser WHERE mail = $1', [email]);
  if (mailCheck.rows.length > 0) {
    return res.status(400).json({ message: 'Email already exists' });
  }
  const otp = Math.floor(100000 + Math.random() * 900000);
  const otpToken = jwt.sign({ email, otp }, process.env.JWT_SECRET, { expiresIn: '10m' });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'OTP sent successfully', otpToken });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};

const verifyOtp = (req, res) => {
  const { email, otp, otpToken } = req.body;

  console.log(otp)

  try {
    const decoded = jwt.verify(otpToken, process.env.JWT_SECRET);

    if (decoded.email === email && decoded.otp.toString() === otp.toString()) {
      return res.status(200).json({ message: 'OTP verified successfully', otpToken });
    } else {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(400).json({ message: 'Invalid or expired OTP token' });
  }
};

module.exports = { sendOtpEmail, verifyOtp };
