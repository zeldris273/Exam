import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [isFaceRegistered, setIsFaceRegistered] = useState(false);
    const navigate = useNavigate();

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        return date.toLocaleDateString('vi-VN');
    };

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const response = await axios.get('http://localhost:5000/api/auth/user', {
                        headers: { 'Authorization': `Bearer ${token}` },
                    });

                    if (response.status === 200) {
                        setUserInfo(response.data);
                    }
                } else {
                    console.log("No token found, redirect to login page");
                    navigate('/');
                    toast.error("Bạn cần đăng nhập trước!");
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchUserInfo();
    }, []);

    useEffect(() => {
        const checkFacialId = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;

                const response = await axios.get('http://localhost:5000/api/auth/check-facial-id', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (response.status === 200) {
                    setIsFaceRegistered(response.data.isFaceRegistered);
                }
            } catch (error) {
                console.error('Error checking facialId:', error);
            }
        };

        checkFacialId();
    }, []);

    const handleSave = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
    
        try {
            const response = await axios.post(
                'http://localhost:5000/api/auth/user/update',
                userInfo,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
    
            if (response.status === 200) {
                const newToken = response.data.token;
                localStorage.setItem('token', newToken);
    
                toast.success('Cập nhật thông tin thành công!');
            } else {
                toast.error('Cập nhật thất bại!');
            }
        } catch (error) {
            if (error.response?.data?.message === 'CCCD must be exactly 12 digits') {
                toast.error('Số CCCD phải đủ 12 số');
            } else if (error.response?.data?.message === 'CCCD already exists') {
                toast.error('CCCD đã tồn tại');
            } else {
                toast.error('Có lỗi xảy ra trong quá trình lưu.');
            }
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="m-5">
                {/* Mục thông tin người dùng */}
                <div className="text-black flex flex-col mb-5">
                    <span>Họ tên: <strong>{userInfo?.hoten}</strong></span>
                    <span>Giới tính:
                        <strong>
                            {userInfo?.gioitinh === 'M' ? 'Nam' : userInfo?.gioitinh === 'F' ? 'Nữ' : ''}
                        </strong>
                    </span>
                    <span>Ngày sinh: <strong>{formatDate(userInfo?.ngaysinh)}</strong></span>
                    <span>Số CCCD: <strong>{userInfo?.cccd}</strong></span>
                </div>

                {/* Tiêu đề thông tin thí sinh */}
                <h1 className="text-xl font-bold uppercase mt-5 mb-5">Thông tin thí sinh</h1>

                {/* Form thông tin thí sinh */}
                <form
                    className="flex flex-col w-[400px]"
                    style={{ border: '1.5px solid gray', padding: '10px' }}
                    onSubmit={handleSave}
                >
                    {/* Họ tên */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Họ tên</label>
                        <input
                            type="text"
                            name="hoten"
                            value={userInfo?.hoten || ''}
                            onChange={(e) => setUserInfo({ ...userInfo, hoten: e.target.value })}
                            required
                            className="w-[250px] p-1 border border-gray-300 rounded mt-1"
                        />
                    </div>

                    {/* Giới tính */}
                    <div className="flex flex-col mb-4">
                        <span className="mb-1">Giới tính:</span>
                        <div className="flex items-center gap-3">
                            <label>
                                <input
                                    type="radio"
                                    name="gioitinh"
                                    value="M"
                                    required
                                    checked={userInfo?.gioitinh === 'M'}
                                    onChange={(e) => setUserInfo({ ...userInfo, gioitinh: e.target.value })}
                                    className="mr-2"
                                /> Nam
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gioitinh"
                                    value="F"
                                    required
                                    checked={userInfo?.gioitinh === 'F'}
                                    onChange={(e) => setUserInfo({ ...userInfo, gioitinh: e.target.value })}
                                    className="mr-2"
                                /> Nữ
                            </label>
                        </div>
                    </div>

                    {/* Ngày sinh */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-1" htmlFor="birthdate">Ngày sinh:</label>
                        <input
                            type="date"
                            id="birthdate"
                            name="ngaysinh"
                            required
                            value={userInfo?.ngaysinh || ''}
                            onChange={(e) => setUserInfo({ ...userInfo, ngaysinh: e.target.value })}
                            className="w-[250px] p-1 border border-gray-300 rounded mt-1"
                        />
                    </div>

                    {/* Số CCCD */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Số CCCD:</label>
                        <input
                            type="text"
                            name="cccd"
                            value={userInfo?.cccd || ''}
                            required
                            onChange={(e) => setUserInfo({ ...userInfo, cccd: e.target.value })}
                            className="w-[250px] p-1 border border-gray-300 rounded mt-1"
                        />
                    </div>

                    {isFaceRegistered ? (
                        <div className="text-green-500 text-center mb-2">Đã xác thực khuôn mặt</div>
                    ) : (
                        <button
                            type="button"
                            className="py-3 px-30 bg-green-400 text-white w-[150px] mx-auto mb-3 rounded-md"
                        >
                            Đăng ký khuôn mặt
                        </button>
                    )}

                    <button
                        type="submit"
                        className="mx-auto px-6 py-2 bg-blue-700 rounded-md hover:bg-blue-800 text-white w-[150px]"
                    >
                        Lưu
                    </button>
                </form>
            </div>
        </div>
    );
};

export default User;
