import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";

const Validator = ({ setIsFormVisible }) => {
    const [isVisibleRegister, setIsVisibleRegister] = useState(false)
    const [otpToken, setOtpToken] = useState("");
    const navigate = useNavigate()

    const handleClose = () => {
        setIsFormVisible(false)
    }

    const handleRegister = () => {
        setIsVisibleRegister(true)
    }

    const handleBackToLogin = () => {
        setIsVisibleRegister(false)
    }

    useEffect(() => {
        document.body.style.overflow = isVisibleRegister ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisibleRegister]);

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const email = e.target.email.value;
        const otp = e.target.otp.value;

        try {
            const otpResponse = await axios.post('http://localhost:5000/api/verify-otp', {
                email,
                otp,
                otpToken
            });

            if (otpResponse.status === 200) {
                const response = await axios.post('http://localhost:5000/api/auth/register', {
                    username,
                    password,
                    email,
                });
                toast.success(response.data.message);
                setIsFormVisible(false);
            }
        } catch (error) {
            if (error.response?.data?.message === 'Username already exists') {
                toast.error('Username already exists');
            } else if (error.response?.data?.message === 'Email already exists') {
                toast.error('Email already exists');
            } else if (error.response?.data?.message === 'Invalid OTP' || error.response?.data?.message === 'Invalid or expired OTP token') {
                toast.error('Invalid or expired OTP');
            } else {
                toast.error(error.response?.data?.error || 'Registration failed');
            }
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                username,
                password,
            });
            console.log('Login response:', response);
            if (response && response.data && response.data.token) {
                const token = response.data.token;
                const decodedToken = jwtDecode(token);
                localStorage.setItem('token', response.data.token);
                handleClose()
                console.log(response.data)
                navigate("/profile")
                window.location.reload();
                toast.success(`Welcome, ${decodedToken.username}!`);
            }

        } catch (error) {
            console.error('Error during login request:', error);
            toast.error(error.response?.data?.error || 'Login failed');
        }
    };


    const handleOTP = async (e) => {
        try {
            e.preventDefault()
            const emailInput = document.getElementById('email');
            const email = emailInput.value;
            const response = await axios.post('http://localhost:5000/api/send-otp', {
                email
            })
            setOtpToken(response.data.otpToken);
            const decode = jwtDecod(response.data.otpToken)
            console.log("OTP Token:", decode);
            toast.success('OTP sent to your email. Please enter the OTP to complete registration.')
        } catch (error) {
            if (error.response?.data?.message === 'Email already exists') {
                toast.error('Email already exists');
            }
        }

    }

    return (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-20'>
            {!isVisibleRegister ? (
                // Form Đăng nhập
                <form onSubmit={handleLoginSubmit} className='bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative'>
                    <button
                        type="button"
                        onClick={handleClose}
                        className="absolute top-2 right-2 text-xl text-gray-700 hover:text-gray-900"
                    >
                        <FaTimes />
                    </button>

                    <h2 className="text-center text-xl font-bold mb-4">Đăng nhập</h2>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Tên tài khoản:</label>
                        <input
                            id="username"
                            type="text"
                            className="w-full p-1 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Mật khẩu:</label>
                        <input
                            id="password"
                            type="password"
                            className="w-full p-1 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>

                    {/* <div className='mb-4'>
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full p-1 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div> */}

                    <div className='flex justify-between -mb-4'>
                        <p className='text-gray-700 mb-4'>Bạn chưa có tài khoản?</p>
                        <span className='text-blue-400 hover:cursor-pointer hover:underline hover:text-blue-500' onClick={handleRegister}>
                            Đăng ký
                        </span>
                    </div>

                    <span className='text-blue-400 hover:cursor-pointer hover:underline hover:text-blue-500'>Quên mật khẩu?</span>

                    <button className="w-[150px] mx-auto block p-1 bg-blue-500 text-white rounded hover:bg-blue-700 mt-2"
                        type="submit"
                    >
                        Đăng nhập
                    </button>
                </form>
            ) : (
                // Form Đăng ký
                <form onSubmit={handleRegisterSubmit} className='bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative'>
                    <button
                        type="button"
                        onClick={handleClose}
                        className="absolute top-2 right-2 text-xl text-gray-700 hover:text-gray-900"
                    >
                        <FaTimes />
                    </button>

                    <h2 className="text-center text-xl font-bold mb-4">Đăng ký</h2>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Tên tài khoản:</label>
                        <input
                            id="username"
                            type="text"
                            className="w-full p-1 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Mật khẩu:</label>
                        <input
                            id="password"
                            type="password"
                            className="w-full p-1 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full p-1 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="otp" className="block text-gray-700">Mã OTP</label>
                        <div className='flex justify-between'>
                            <input
                                id="otp"
                                type="text"
                                className="w-[150px] p-1 border border-gray-300 rounded mt-1"
                                placeholder="Nhập mã OTP"
                                required
                            />
                            <button
                                type='button'
                                onClick={handleOTP}
                                className="w-[100px] p-1 bg-blue-500 text-white rounded hover:bg-blue-700">
                                Lấy mã
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <p className='text-gray-700 mb-4'>Bạn đã có tài khoản?</p>
                        <span className='text-blue-400 hover:cursor-pointer hover:underline hover:text-blue-500' onClick={handleBackToLogin}>
                            Đăng nhập
                        </span>
                    </div>

                    <button className="w-[150px] mx-auto block p-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                        type="submit"
                    >
                        Đăng ký
                    </button>
                </form>
            )}
        </div>
    )
}

export default Validator
