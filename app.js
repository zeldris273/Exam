const express = require('express');
const { query } = require('./models/db');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
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

// Cấu hình Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 phút
  max: 100, // Tối đa 100 requests mỗi 15 phút
  message: 'Quá nhiều yêu cầu từ IP này, vui lòng thử lại sau.',
  standardHeaders: true, // Gửi thông tin rate limit trong headers
  legacyHeaders: false,  // Không gửi thông tin legacy headers
});

// Áp dụng Rate Limiting cho tất cả các routes
app.use(limiter);

// Khởi động server
const PORT = 5000;
app.listen(PORT, () => {
 
});
