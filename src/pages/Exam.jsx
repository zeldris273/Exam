import React, { useEffect, useState } from 'react'
import Part1 from '../toeicPart/part1'
import Part2 from '../toeicPart/part2'
import Part3 from '../toeicPart/part3'
import Part4 from '../toeicPart/part4'
import Part5 from '../toeicPart/part5'
import Part6 from '../toeicPart/part6'
import Part7 from '../toeicPart/part7'
import { useNavigate } from 'react-router-dom'

const Exam = () => {
  const [timeLeft, setTimeLeft] = useState(120 * 60);
  const navigate = useNavigate()

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

  const handleBack = () => {
    const confirm = window.confirm("Bạn có chắc chắn muốn thoát không? Bài làm hiện tại sẽ không được lưu");
    if (confirm) {
      navigate("/tests");
    }
  }

  // const handleAnswerChange = (questionId, answer) => {
  //   setUserAnswers(prevAnswers => ({
  //     ...prevAnswers,
  //     [questionId]: answer
  //   }));
  // };

  return (
    <div className='flex bg-gray-200 gap-2'>
      <div className='w-[90%] bg-gray-50 ml-2'>
        <h2 className="text-xl font-bold flex justify-center bg-gray-200 mb-2 pt-2">New Economy TOEIC Test 10</h2>

        {/*Part 1*/}
        <Part1 />

        {/*Part 2*/}
        <Part2 />

        {/*Part 3*/}
        <Part3 />


        {/*Part 4 */}
        <Part4 />

        {/*Part 5 */}
        <Part5 />

        {/*Part 6 */}
        <Part6 />

        {/*Part 7 */}
        <Part7 />
      </div>

      <div className='bg-white fixed top-15 right-0 py-2 translate-y-9 min-w-[127px] text-sm' >
        <div className='flex flex-col mt-2 items-center'>
          <span>Thời gian làm bài</span>
          <strong>{formatTime(timeLeft)}</strong>
          <button className='mt-3 px-4 py-2 border-2 border-blue-200 rounded hover:bg-blue-500 text-blue-600 hover:text-white'>Nộp bài</button>
          <button onClick={handleBack} className='mt-3 px-4 py-2 border-2 bg-orange-400 rounded hover:bg-orange-500 font-bold text-white'>Thoát</button>
        </div>
      </div>
    </div>
  )
}

export default Exam
