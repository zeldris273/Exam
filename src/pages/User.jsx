import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

//Github ngu vcl

const User = () => {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        hoten: '',
        gioitinh: '',
        ngaysinh: '',
        cccd: ''
    });

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        return date.toLocaleDateString('vi-VN');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decodedToken = jwtDecode(token);
            setUserInfo(decodedToken);
            setFormData({
                hoten: decodedToken.hoten || '',
                gioitinh: decodedToken.gioitinh || '',
                ngaysinh: decodedToken.ngaysinh || '',
                cccd: decodedToken.cccd || ''
            });
        } else {
            console.log("No token found, redirect to login page");
            navigate('/')
            toast.error("Bạn cần đăng nhập trước!");
        }
    }, []);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.log("No token found, redirect to login page");
                    return;
                }

                const response = await axios.get('http://localhost:5000/api/auth/user', {
                    headers: { 'Authorization': `Bearer ${token}` },
                });

                if (response.status === 200) {
                    setUserInfo(response.data);
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchUserInfo();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = async () => {
        const token = localStorage.getItem('token');
        console.log(token);

        try {
            const response = await axios.post('http://localhost:5000/api/auth/user/update',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            if (response.status === 200) {
                toast.success('Cập nhật thông tin thành công!');
                setUserInfo({ ...userInfo, ...formData });
            } else {
                alert('Cập nhật thất bại!');
            }
        } catch (error) {
            console.error('Error saving data:', error);
            toast.error('Có lỗi xảy ra trong quá trình lưu.');
        }
    };

    return (
        <div className='flex justify-center items-center'>
            <div className='m-5'>
                {/* Mục thông tin người dùng */}
                <div className='text-black flex flex-col mb-5'>
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
                <h1 className='text-xl font-bold uppercase mt-5 mb-5'>Thông tin thí sinh</h1>

                {/* Form thông tin thí sinh */}
                <div className='flex flex-col w-[400px]' style={{ border: '1.5px solid gray', padding: '10px' }}>

                    {/* Họ tên */}
                    <div className='flex flex-col mb-4'>
                        <label className='mb-1'>Họ tên</label>
                        <input
                            type='text'
                            name='hoten'
                            value={formData.hoten}
                            onChange={handleChange}
                            className="w-[250px] p-1 border border-gray-300 rounded mt-1"
                        />
                    </div>

                    {/* Giới tính */}
                    <div className='flex flex-col mb-4'>
                        <span className='mb-1'>Giới tính:</span>
                        <div className='flex items-center gap-3'>
                            <label>
                                <input
                                    type='radio'
                                    name='gioitinh'
                                    value='M'
                                    checked={formData.gioitinh === 'M'}
                                    onChange={handleChange}
                                    className="mr-2"
                                /> Nam
                            </label>
                            <label>
                                <input
                                    type='radio'
                                    name='gioitinh'
                                    value='F'
                                    checked={formData.gioitinh === 'F'}
                                    onChange={handleChange}
                                    className="mr-2"
                                /> Nữ
                            </label>
                        </div>
                    </div>

                    {/* Ngày sinh */}
                    <div className='flex flex-col mb-4'>
                        <label className='mb-1' htmlFor="birthdate">Ngày sinh:</label>
                        <input
                            type="date"
                            id="birthdate"
                            name="ngaysinh"
                            value={formData.ngaysinh}
                            onChange={handleChange}
                            className="w-[250px] p-1 border border-gray-300 rounded mt-1"
                        />
                    </div>

                    {/* Số CCCD */}
                    <div className='flex flex-col mb-4'>
                        <label className='mb-1'>Số CCCD:</label>
                        <input
                            type='text'
                            name='cccd'
                            value={formData.cccd}
                            onChange={handleChange}
                            className="w-[250px] p-1 border border-gray-300 rounded mt-1"
                        />
                    </div>

                    <button
                        className='mx-auto px-6 py-2 bg-blue-700 rounded-md hover:bg-blue-800 text-white w-[150px]'
                        onClick={handleSave}
                    >
                        Lưu
                    </button>

                </div>
            </div>
        </div>
    );
};

export default User;
