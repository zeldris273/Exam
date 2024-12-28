import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Part1 from '../toeicPart/part1';
import Part2 from '../toeicPart/part2';
import Part3 from '../toeicPart/part3';
import Part4 from '../toeicPart/part4';
import Part5 from '../toeicPart/part5';
import Part6 from '../toeicPart/part6';
import Part7 from '../toeicPart/part7';
import { jwtDecode } from 'jwt-decode';

const Exam = () => {
  const [timeLeft, setTimeLeft] = useState(120 * 60);
  const [userAnswers, setUserAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/questions');
        setQuestions(response.data);
        console.log('Fetched questions:', response.data);  // Debugging: Print fetched questions
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

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

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleBack = () => {
    const confirm = window.confirm(
      'Bạn có chắc chắn muốn thoát không? Bài làm hiện tại sẽ không được lưu'
    );
    if (confirm) {
      navigate('/tests');
    }
  };

  const handleAnswerChange = (part, questionId, answer) => {
    const optionIdentifier = answer.charAt(0);
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: optionIdentifier,
    }));
    console.log('Updated userAnswers:', { ...userAnswers, [questionId]: optionIdentifier });  // Debugging: Print updated user answers
  };

  const calculateScore = () => {
    let totalCorrectAnswers = 0;

    console.log('Calculating score with userAnswers:', userAnswers); // Debugging: Print user answers before calculating score
    questions.forEach((question) => {
      const userAnswer = userAnswers[question.id];
      console.log(`Question ID: ${question.id}, User Answer: ${userAnswer}, Correct Answer: ${question.answer}`);  // Debugging: Print each question's details
      if (userAnswer === question.answer) {
        totalCorrectAnswers += 1;
      }
    });

    const totalScore = totalCorrectAnswers * 5;

    return {
      score: totalScore,
    };
  };

  const handleSubmit = async () => {
    const { score } = calculateScore();
    const token = localStorage.getItem('token');

    try {
      const decoded = jwtDecode(token);
      const userId = decoded.id;
      await axios.post('http://localhost:5000/api/score/save', {
        userId: userId,
        score,
      });
      alert(`Total Score: ${score}`);
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };

  return (
    <div className="flex bg-gray-200 gap-2">
      <div className="w-[90%] bg-gray-50 ml-2">
        <h2 className="text-xl font-bold flex justify-center bg-gray-200 mb-2 pt-2">
          New Economy TOEIC Test 10
        </h2>

        <Part1
          onAnswerChange={(questionId, answer) => handleAnswerChange('part1', questionId, answer)}
        />
        <Part2
          onAnswerChange={(questionId, answer) => handleAnswerChange('part2', questionId, answer)}
        />
        <Part3
          onAnswerChange={(questionId, answer) => handleAnswerChange('part3', questionId, answer)}
        />
        <Part4
          onAnswerChange={(questionId, answer) => handleAnswerChange('part4', questionId, answer)}
        />
        <Part5
          onAnswerChange={(questionId, answer) => handleAnswerChange('part5', questionId, answer)}
        />
        <Part6
          onAnswerChange={(questionId, answer) => handleAnswerChange('part6', questionId, answer)}
        />
        <Part7
          onAnswerChange={(questionId, answer) => handleAnswerChange('part7', questionId, answer)}
        />
      </div>

      <div className="bg-white fixed top-15 right-0 py-2 translate-y-9 min-w-[127px] text-sm">
        <div className="flex flex-col mt-2 items-center">
          <span>Thời gian làm bài</span>
          <strong>{formatTime(timeLeft)}</strong>
          <button
            onClick={handleSubmit}
            className="mt-3 px-4 py-2 border-2 border-blue-200 rounded hover:bg-blue-500 text-blue-600 hover:text-white"
          >
            Nộp bài
          </button>
          <button
            onClick={handleBack}
            className="mt-3 px-4 py-2 border-2 bg-orange-400 rounded hover:bg-orange-500 font-bold text-white"
          >
            Thoát
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exam;