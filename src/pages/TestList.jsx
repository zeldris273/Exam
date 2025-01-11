import React from 'react';
import { FiClock } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const tests = [
    {
        title: 'New Economy TOEIC Test 1',
        duration: '120 phút',
        parts: '7 phần thi | 200 câu hỏi',
    },
    {
        title: 'New Economy TOEIC Test 2',
        duration: '120 phút',
        parts: '7 phần thi | 200 câu hỏi',
    },
    {
        title: 'New Economy TOEIC Test 3',
        duration: '120 phút',
        parts: '7 phần thi | 200 câu hỏi',
    },
    {
        title: 'New Economy TOEIC Test 4',
        duration: '120 phút',
        parts: '7 phần thi | 200 câu hỏi',
    },
    {
        title: 'New Economy TOEIC Test 5',
        duration: '120 phút',
        parts: '7 phần thi | 200 câu hỏi',
    },
];

const TestList = () => {
    const navigate = useNavigate();

    const handleStartTest = async () => {
        try {
            const token = localStorage.getItem('token');
            const decode = jwtDecode(token)
            if (!token) {
                console.log("No token found, redirect to login page");
                return;
            }

            const response = await axios.get('http://localhost:5000/api/auth/user', {
                headers: { 'Authorization': `Bearer ${token}` },
            });

            if (response.status === 204) {
                toast.error('Bạn cần hoàn thành thông tin cá nhân trước khi luyện tập.')
                return
            } else if (response.status === 200) {
                navigate("/exam")
            }

        } catch (error) {
            console.error('Error fetching user info:', error);
            toast.error('Bạn cần hoàn thành thông tin cá nhân trước khi luyện tập.')
        }
    };

    return (
        <>
            <h1 className='text-2xl font-bold my-5 ml-[115px]'>Thư viện đề thi</h1>
            <div className='flex flex-wrap justify-center items-center my-5 gap-10'>
                {tests.map((test, index) => (
                    <div key={index} className='rounded shadow-lg' style={{ border: '1.5px solid gray', padding: '10px' }}>
                        <h4 className='font-bold'>{test.title}</h4>
                        <div className='flex flex-col items-start gap-2'>
                            <div className='flex justify-start items-center gap-1'>
                                <FiClock /> {test.duration}
                            </div>
                            <div className='flex justify-start items-center gap-1'>
                                {test.parts}
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={handleStartTest} className='mt-3 px-4 py-2 border-2 border-blue-200 rounded hover:bg-blue-500 text-gray-500 hover:text-white'>
                                Luyện tập
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TestList;