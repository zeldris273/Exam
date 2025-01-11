import React, { useEffect, useState, useRef } from 'react';
import Part1 from '../toeicPart/part1';
import Part2 from '../toeicPart/part2';
import Part3 from '../toeicPart/part3';
import Part4 from '../toeicPart/part4';
import Part5 from '../toeicPart/part5';
import Part6 from '../toeicPart/part6';
import Part7 from '../toeicPart/part7';
import { NavLink, useNavigate } from 'react-router-dom';

const Exam = () => {
  const [timeLeft, setTimeLeft] = useState(120 * 60);
  const navigate = useNavigate();

  const part1Ref = useRef(null);
  const part2Ref = useRef(null);
  const part3Ref = useRef(null);
  const part4Ref = useRef(null);
  const part5Ref = useRef(null);
  const part6Ref = useRef(null);
  const part7Ref = useRef(null);

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
  };

  const scrollToPart = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
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
          <button className='mt-3 px-4 py-2 border-2 border-blue-200 rounded hover:bg-blue-500 text-blue-600 hover:text-white'>Nộp bài</button>
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