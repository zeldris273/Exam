const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../models/db');

require('dotenv').config();

const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(username);
};

const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};


// Đăng ký người dùng
const register = async (req, res) => {
    const { username, password, email } = req.body;

    if (!validateUsername(username)) {
        return res.status(400).json({ message: 'Invalid username. Username must be 3-20 characters long and can only contain letters, numbers, and underscores.' });
    }

    if (!validatePassword(password)) {
        return res.status(400).json({ message: 'Weak password. Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.' });
    }

    try {
        const userCheck = await pool.query('SELECT * FROM accountuser WHERE username = $1', [username]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            'INSERT INTO accountuser (username, password, mail) VALUES ($1, $2, $3) RETURNING *',
            [username, hashedPassword, email]
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

        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET ,{ expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Thay đổi thông tin người dùng
const setChange = async (req, res) => {
    const { hoten, gioitinh, ngaysinh, cccd } = req.body;
    const cccdRegex = /^[0-9]{12}$/;

    if (!cccdRegex.test(cccd)) {
        return res.status(400).json({ message: 'CCCD must be exactly 12 digits' });
    }

    try {
        const userId = req.user.id;

        const cccdCheck = await pool.query(
            'SELECT * FROM accountuser WHERE cccd = $1 AND id != $2',
            [cccd, userId]
        );
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

        const userResult = await pool.query(
            'SELECT id, hoten, gioitinh, ngaysinh, cccd FROM accountuser WHERE id = $1',
            [userId]
        );
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error updating user' });
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

        const userInfo = result.rows[0];

        // Kiểm tra nếu bất kỳ trường nào là null
        if (!userInfo.hoten || !userInfo.gioitinh || !userInfo.ngaysinh || !userInfo.cccd) {
            return res.status(204).json({ message: 'User information is incomplete', data: userInfo });
        }

        // Trả về thông tin người dùng nếu tất cả các trường đều không phải là null
        return res.status(200).json(userInfo);
    } catch (error) {
        console.error('Error fetching user info:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports = { register, login, setChange, showInfo };