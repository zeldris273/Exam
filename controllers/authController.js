const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../models/db');

// Đăng ký người dùng
const register = async (req, res) => {
    const { username, password, mail, cccd } = req.body;

    try {
        const userCheck = await pool.query('SELECT * FROM accountuser WHERE username = $1', [username]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const mailCheck = await pool.query('SELECT * FROM accountuser WHERE mail = $1', [mail]);
        if (mailCheck.rows.length > 0) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query(
            'INSERT INTO accountuser (username, password, mail, cccd) VALUES ($1, $2, $3, $4)',
            [username, hashedPassword, mail, cccd]
        );
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Đăng nhập người dùng
const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM accountuser WHERE username = $1', [username]);
        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        
        await pool.query(
            'UPDATE accountuser SET login_count = login_count + 1, last_login_date = NOW() WHERE id = $1',
            [user.id]
        );

        const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ token, message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Thay đổi thông tin người dùng
const setChange = async (req, res) => {
    const { hoten, gioitinh, ngaysinh, cccd } = req.body;
    const cccdRegex = /^[0-9]{12}$/;

    // Validate CCCD format
    if (!cccdRegex.test(cccd)) {
        return res.status(400).json({ message: 'CCCD must be exactly 12 digits' });
    }

    try {
        const userId = req.user.id;

        const cccdCheck = await pool.query('SELECT * FROM accountuser WHERE cccd = $1 AND id != $2', [cccd, userId]);
        if (cccdCheck.rows.length > 0) {
            return res.status(400).json({ message: 'CCCD already exists' });
        }

        const query = `
            UPDATE accountuser
            SET hoten = $1, gioitinh = $2, ngaysinh = $3, cccd = $4
            WHERE id = $5
        `;
        const values = [hoten, gioitinh, ngaysinh, cccd, userId];

        await pool.query(query, values);
        res.status(200).json({ message: 'Update successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error updating user' });
    }
};

// Hiển thị thông tin người dùng
const showInfo = async (req, res) => {
    try {
        const userId = req.user.id;

        const result = await pool.query('SELECT hoten, gioitinh, ngaysinh, cccd FROM accountuser WHERE id = $1', [userId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching user info:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Cập nhật Facial ID của người dùng
const updateFacialId = async (req, res) => {
    const { facialId } = req.body;
    const userId = req.user.id;

    try {
        await pool.query('UPDATE accountuser SET facialId = $1 WHERE id = $2', [facialId, userId]);
        res.status(200).json({ message: 'Facial ID updated successfully' });
    } catch (error) {
        console.error('Error updating Facial ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Đăng nhập bằng nhận diện khuôn mặt
const faceLogin = async (req, res) => {
    const { facialId } = req.body;

    try {
        const result = await pool.query('SELECT * FROM accountuser WHERE facialId = $1', [facialId]);
        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'User not found' });
        }

        const user = result.rows[0];
        const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(200).json({ token, message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in with facial ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const checkFacialID = async (req, res) => {
    // Check if req.user is defined
    if (!req.user) {
        return res.status(401).json({ error: 'User not authenticated' });
    }

    const { id } = req.user;

    try {
        const user = await pool.query('SELECT facialId FROM accountuser WHERE id = $1', [id]);
        if (user.rows.length > 0 && user.rows[0].facialid) {
            return res.status(200).json({ isFaceRegistered: true });
        } else {
            return res.status(200).json({ isFaceRegistered: false });
        }
    } catch (error) {
        console.error('Error checking facialId:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = { register, login, setChange, showInfo, updateFacialId, faceLogin, checkFacialID };