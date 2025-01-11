const express = require('express');
const { register, login, setChange, showInfo } = require('../controllers/authController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/user/update', authenticateToken, setChange);

router.get('/user', authenticateToken, showInfo);
module.exports = router;
