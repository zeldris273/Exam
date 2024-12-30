const express = require('express');
const { register, login, setChange, showInfo, updateFacialId, faceLogin, checkFacialID } = require('../controllers/authController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/user/update', authenticateToken, setChange);
//router.post('/user/updateFacialId', authenticateToken, updateFacialId);
router.post('/faceLogin', faceLogin);

router.get('/user', authenticateToken, showInfo);
router.get('/check-facial-id', authenticateToken, checkFacialID)

module.exports = router;
