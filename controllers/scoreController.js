const pool = require('../models/db');

const saveScore = async (req, res) => {
  const { userId, score } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO scores (user_id, score) VALUES ($1, $2) RETURNING *',
      [userId, score]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error saving score:', error);
    res.status(500).json({ error: 'Error saving score' });
  }
};

module.exports = { saveScore };