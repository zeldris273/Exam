const express = require('express');
const { query } = require('./models/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const scoreRoutes = require('./routes/score');

const app = express();

app.use(cors({
    origin: '*',
}));
app.use(express.json());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Server is running on port 5000!');
});

app.get('/questions', async (req, res) => {
  try {
    const result = await query('SELECT * FROM question_list');
    res.json(result.rows); 
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.use('/api/auth', authRoutes);

app.use('/api/score', scoreRoutes);


// Khởi động server
const PORT = 5000;
app.listen(PORT, () => {
 
});
