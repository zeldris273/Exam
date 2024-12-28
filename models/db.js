const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool(config.database);

pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', (err) => {
  console.error('Error with database connection', err);
});

// Sử dụng pool để truy vấn
const query = (text, params) => pool.query(text, params);

module.exports = { query };
