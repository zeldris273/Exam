import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAnswer, calculateScore } from '../redux/examSlice.jsx'

const Part5 = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/questions')
            .then(response => {
                const part5Questions = response.data.filter(q => q.id >= 101 && q.id <= 140);
                setQuestions(part5Questions);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const dispatch = useDispatch();

    const handleAnswerChange = (questionId, answer) => {
        dispatch(setAnswer({ questionId, answer }));
        dispatch(calculateScore(questions));
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
                            {['a', 'b', 'c', 'd'].map(key => (
                                <label key={key} className="flex items-center mb-2">
                                    <input
                                        type='radio'
                                        name={`answer-${question.id}`}
                                        className="mr-2"
                                        value={key}
                                        onChange={() => handleAnswerChange(question.id, key)}
                                    />
                                   {question?.[`option_${key}`]}
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