import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Part5 = ({ onAnswerChange }) => {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/questions')
            .then(response => {
                // Filter questions specific to Part 5
                const part5Questions = response.data.filter(q => q.id >= 101 && q.id <= 140);
                setQuestions(part5Questions);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleAnswerChange = (questionId, answer) => {
        setUserAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answer
        }));
        if (onAnswerChange) {
            onAnswerChange(questionId, answer);
        }
    };

    return (
        <div className='m-5'>
            <strong className='bg-blue-100 rounded-lg p-2 text-blue-600 mr-10 flex items-center justify-center mt-10 w-[72px]'>
                Part 5
            </strong>

            <div className='mt-5'>
                {questions.map((question) => (
                    <div key={question.id} className='flex items-start mt-5'>
                        <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                            {question.id}
                        </strong>

                        <div className='flex flex-col'>
                            <p>{question.content}</p>
                            {['option_a', 'option_b', 'option_c', 'option_d'].map(optionKey => (
                                <label key={optionKey} className="flex items-center mb-2">
                                    <input
                                        type='radio'
                                        name={`answer-${question.id}`}
                                        className="mr-2"
                                        value={optionKey}
                                        onChange={() => handleAnswerChange(question.id, optionKey)}
                                    />
                                    {question[optionKey]}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Part5;