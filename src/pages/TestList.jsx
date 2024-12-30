import React, { useEffect } from 'react';
import { FiClock } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

const TestList = () => {
    const navigate = useNavigate();

    const handleStartTest = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error("Bạn cần đăng nhập trước!");
            return;
        }
    
        let user;
        try {
            user = jwtDecode(token);
            console.log(user);
        } catch (error) {
            toast.error("Token không hợp lệ. Bạn cần đăng nhập lại.");
            console.error("Error decoding token:", error);
            return;
        }
    
        const { hoten, cccd, gioitinh, ngaysinh, facialId } = user;
        console.log("Họ tên:", hoten);
        console.log("CCCD:", cccd);
        console.log("Giới tính:", gioitinh);
        console.log("Ngày sinh:", ngaysinh);
        console.log("Facial ID:", facialId);
    
        if (!hoten || !cccd || !gioitinh || !ngaysinh || !facialId) {
            toast.error("Bạn cần hoàn thành thông tin cá nhân trước khi luyện tập.");
            return;
        }
    
        navigate('/exam');
    };
    

    return (
        <>
            <h1 className='text-2xl font-bold my-5 ml-[115px]'>Thư viện đề thi</h1>
            <div className='flex flex-wrap justify-center items-center my-5 gap-10'>
                <div className='rounded shadow-lg' style={{ border: '1.5px solid gray', padding: '10px' }}>
                    <h4 className='font-bold'>New Economy TOEIC Test 1</h4>
                    <div className='flex flex-col items-start gap-2'>
                        <div className='flex justify-start items-center gap-1'>
                            <FiClock /> 120 phút
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            7 phần thi | 200 câu hỏi
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={handleStartTest} className='mt-3 px-4 py-2 border-2 border-blue-200 rounded hover:bg-blue-500 text-gray-500 hover:text-white'>
                            Luyện tập
                        </button>
                    </div>
                </div>
                {/* Các thẻ bài thi khác */}
                {/* ... */}
            </div>
        </>
    );
};

export default TestList;