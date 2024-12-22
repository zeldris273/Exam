import axios from 'axios';
import React, { useEffect, useState } from 'react';
import p147 from '../toeicAudioAndImage/part7/p147.png';
import p149 from '../toeicAudioAndImage/part7/p149.png';
import p151 from '../toeicAudioAndImage/part7/p151.png';
import p153 from '../toeicAudioAndImage/part7/p153.png';
import p155 from '../toeicAudioAndImage/part7/p155.png';
import p158 from '../toeicAudioAndImage/part7/p158.png';
import p161 from '../toeicAudioAndImage/part7/p161.png';
import p165 from '../toeicAudioAndImage/part7/p165.png';
import p168 from '../toeicAudioAndImage/part7/p168.png';
import p172 from '../toeicAudioAndImage/part7/p172.png';
import p176_2 from '../toeicAudioAndImage/part7/p176_2.png';
import p176 from '../toeicAudioAndImage/part7/p176.png';
import p181 from '../toeicAudioAndImage/part7/p181.png';
import p181_2 from '../toeicAudioAndImage/part7/p181_2.png';
import p186 from '../toeicAudioAndImage/part7/p186.png';
import p186_2 from '../toeicAudioAndImage/part7/p186_2.png';
import p186_3 from '../toeicAudioAndImage/part7/p186_3.png';
import p191 from '../toeicAudioAndImage/part7/p191.png';
import p191_2 from '../toeicAudioAndImage/part7/p191_2.png';
import p191_3 from '../toeicAudioAndImage/part7/p191_3.png';
import p196 from '../toeicAudioAndImage/part7/p196.png';
import p196_2 from '../toeicAudioAndImage/part7/p196_2.png';
import p196_3 from '../toeicAudioAndImage/part7/p196_3.png';

const imageArray = [
    { id: 147, image: [p147] },
    { id: 149, image: [p149] },
    { id: 151, image: [p151] },
    { id: 153, image: [p153] },
    { id: 155, image: [p155] },
    { id: 158, image: [p158] },
    { id: 161, image: [p161] },
    { id: 165, image: [p165] },
    { id: 168, image: [p168] },
    { id: 172, image: [p172] },
    { id: 176, image: [p176, p176_2] },
    { id: 181, image: [p181, p181_2] },
    { id: 186, image: [p186, p186_2, p186_3] },
    { id: 191, image: [p191, p191_2, p191_3] },
    { id: 196, image: [p196, p196_2, p196_3] },
];

const Part7 = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/questions')
            .then(response => {
                setQuestions(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const allQuestions = [];
    for (let i = 147; i <= 200; i++) {
        allQuestions.push(i);
    }

    return (
        <div className='m-5'>
            <strong className='bg-blue-100 rounded-lg p-2 text-blue-600 flex items-center justify-center mt-10 w-[72px]'>Part 7</strong>

            {allQuestions.map((questionId) => {
                const question = questions.find(q => q.id === questionId);
                const imageData = imageArray.find(data => data.id === questionId);

                return (
                    <div key={questionId} className='mt-10'>
                        {imageData && (
                            <div className='rounded-md bg-gray-200 mb-5'>
                                <div className='p-5'>
                                    {imageData.image.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            className='w-[624px] h-[440px] mx-auto'
                                            alt={`question ${questionId} illustration ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className='mt-5'>
                            <div className='flex items-start'>
                                <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>{questionId}</strong>
                                <div className='flex flex-col'>
                                    <p>{question?.content}</p>
                                    {['option_a', 'option_b', 'option_c', 'option_d'].map(optionKey => (
                                        <div key={optionKey} className="mb-2">
                                            <label className="flex items-center">
                                                <input type="radio" name={`answer${questionId}`} className="mr-2" />
                                                {question?.[optionKey]}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Part7;