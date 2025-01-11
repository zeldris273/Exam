const express = require('express');
const { sendOtpEmail, verifyOtp } = require('../controllers/emailController');

const router = express.Router();

router.post('/send-otp', sendOtpEmail);
router.post('/verify-otp', verifyOtp);

module.exports = router;
