import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Part5 = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/questions')
            .then(response => {
                setQuestions(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='m-5'>
            <strong className='bg-blue-100 rounded-lg p-2 text-blue-600 mr-10 flex items-center justify-center mt-10 w-[72px]'>
                Part 5
            </strong>

            <div className='mt-5'>
                {questions.map((question) => {
                    if (question.id >= 101) {
                        return (
                            <div key={question.id} className='flex items-start mt-5'>
                                <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                                    {question.id}
                                </strong>

                                <div className='flex flex-col'>
                                    <p>{question.content}</p>
                                    <label className="flex items-center mb-2">
                                        <input type='radio' name={`answer-${question.id}`} className="mr-2" />
                                        {question.option_a}
                                    </label>
                                    <label className="flex items-center mb-2">
                                        <input type='radio' name={`answer-${question.id}`} className="mr-2" />
                                        {question.option_b}
                                    </label>
                                    <label className="flex items-center mb-2">
                                        <input type='radio' name={`answer-${question.id}`} className="mr-2" />
                                        {question.option_c}
                                    </label>
                                    <label className="flex items-center">
                                        <input type='radio' name={`answer-${question.id}`} className="mr-2" />
                                        {question.option_d}
                                    </label>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Part5;
