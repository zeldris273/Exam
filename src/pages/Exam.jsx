import React, { useEffect, useState, useRef } from 'react';
import Part1 from '../toeicPart/part1';
import Part2 from '../toeicPart/part2';
import Part3 from '../toeicPart/part3';
import Part4 from '../toeicPart/part4';
import Part5 from '../toeicPart/part5';
import Part6 from '../toeicPart/part6';
import Part7 from '../toeicPart/part7';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { calculateScore, setQuestions } from '../redux/examSlice.jsx'
import { toast } from 'react-toastify';

const Exam = () => {
  const [timeLeft, setTimeLeft] = useState(120 * 60);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const part1Ref = useRef(null);
  const part2Ref = useRef(null);
  const part3Ref = useRef(null);
  const part4Ref = useRef(null);
  const part5Ref = useRef(null);
  const part6Ref = useRef(null);
  const part7Ref = useRef(null);

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

            if (response.status === 204) {
                toast.error('Bạn cần hoàn thành thông tin cá nhân trước khi luyện tập.');
                navigate("/tests")
            } else if (response.status === 200) {
                navigate("/exam");
            }
        } catch (error) {
            console.error('Error fetching user info:', error);
            toast.error('Bạn cần hoàn thành thông tin cá nhân trước khi luyện tập.');
        }
    };

    fetchUserInfo(); 
}, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/questions');
        dispatch(setQuestions(response.data));
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBack = () => {
    const confirm = window.confirm("Bạn có chắc chắn muốn thoát không? Bài làm hiện tại sẽ không được lưu");
    if (confirm) {
      navigate("/tests");
    }
  };

  const scrollToPart = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const score = useSelector(state => state.exam.score)
  

  const handleSubmit = async () => {
    dispatch(calculateScore());

    const token = localStorage.getItem('token');

    try {
      const decoded = jwtDecode(token);
      const userId = decoded.id;
      await axios.post('http://localhost:5000/api/score/save', {
        userId: userId,
        score,
      });
      Swal.fire({
        title: "Đã nộp thành công!",
        text: `Total Score: ${score}`,
        icon: "success"
      });
      navigate("/tests")
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };


  return (
    <div className='flex bg-gray-200 gap-2'>
      <div className='w-[90%] bg-gray-50 ml-2'>
        <h2 className="text-xl font-bold flex justify-center bg-gray-200 mb-2 pt-2">New Economy TOEIC Test 10</h2>

        {/* Part 1 */}
        <div ref={part1Ref}>
          <Part1 />
        </div>

        {/* Part 2 */}
        <div ref={part2Ref}>
          <Part2 />
        </div>

        {/* Part 3 */}
        <div ref={part3Ref}>
          <Part3 />
        </div>

        {/* Part 4 */}
        <div ref={part4Ref}>
          <Part4 />
        </div>

        {/* Part 5 */}
        <div ref={part5Ref}>
          <Part5 />
        </div>

        {/* Part 6 */}
        <div ref={part6Ref}>
          <Part6 />
        </div>

        {/* Part 7 */}
        <div ref={part7Ref}>
          <Part7 />
        </div>
      </div>

      <div className='bg-white fixed top-15 right-0 py-2 translate-y-9 min-w-[127px] text-sm'>
        <div className='flex flex-col mt-2 items-center'>
          <span>Thời gian làm bài</span>
          <strong>{formatTime(timeLeft)}</strong>
          <button className='mt-3 px-4 py-2 border-2 border-blue-200 rounded hover:bg-blue-500 text-blue-600 hover:text-white'
            onClick={handleSubmit}
          >
            Nộp bài</button>
          <button onClick={handleBack} className='my-3 px-4 py-2 border-2 bg-orange-400 rounded hover:bg-orange-500 font-bold text-white'>Thoát</button>
          <button className='px-4 py-2 border-black rounded border-2 text-blue-500' onClick={() => scrollToPart(part1Ref)}>Part 1</button>
          <button className='px-4 py-2 border-black rounded border-2 mt-2 text-blue-500' onClick={() => scrollToPart(part2Ref)}>Part 2</button>
          <button className='px-4 py-2 border-black rounded border-2 mt-2 text-blue-500' onClick={() => scrollToPart(part3Ref)}>Part 3</button>
          <button className='px-4 py-2 border-black rounded border-2 mt-2 text-blue-500' onClick={() => scrollToPart(part4Ref)}>Part 4</button>
          <button className='px-4 py-2 border-black rounded border-2 mt-2 text-blue-500' onClick={() => scrollToPart(part5Ref)}>Part 5</button>
          <button className='px-4 py-2 border-black rounded border-2 mt-2 text-blue-500' onClick={() => scrollToPart(part6Ref)}>Part 6</button>
          <button className='px-4 py-2 border-black rounded border-2 mt-2 text-blue-500' onClick={() => scrollToPart(part7Ref)}>Part 7</button>
        </div>
      </div>
    </div>
  );
};

export default Exam;