import React from 'react';
import { FiClock } from "react-icons/fi";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TestList = () => {
    const navigate = useNavigate();
    
    const handleStartTest = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error("Bạn cần đăng nhập trước!");
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