const express = require('express');
const router = express.Router();
const { saveScore } = require('../controllers/scoreController');

router.post('/save', saveScore);

module.exports = router;