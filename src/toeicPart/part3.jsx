import React, { useEffect, useState } from 'react';
import axios from 'axios';
import question32 from '../toeicAudioAndImage/part3/question32.mp3';
import question35 from '../toeicAudioAndImage/part3/question35.mp3';
import question38 from '../toeicAudioAndImage/part3/question38.mp3';
import question41 from '../toeicAudioAndImage/part3/question41.mp3';
import question44 from '../toeicAudioAndImage/part3/question44.mp3';
import question47 from '../toeicAudioAndImage/part3/question47.mp3';
import question50 from '../toeicAudioAndImage/part3/question50.mp3';
import question53 from '../toeicAudioAndImage/part3/question53.mp3';
import question56 from '../toeicAudioAndImage/part3/question56.mp3';
import question59 from '../toeicAudioAndImage/part3/question59.mp3';
import question62 from '../toeicAudioAndImage/part3/question62.mp3';
import question65 from '../toeicAudioAndImage/part3/question65.mp3';
import question68 from '../toeicAudioAndImage/part3/question68.mp3';
import p62 from '../toeicAudioAndImage/part3/p62.png';
import p65 from '../toeicAudioAndImage/part3/p65.png';
import p68 from '../toeicAudioAndImage/part3/p68.png';

const audioAndImage = [
    { id: 32, audio: question32 },
    { id: 35, audio: question35 },
    { id: 38, audio: question38 },
    { id: 41, audio: question41 },
    { id: 44, audio: question44 },
    { id: 47, audio: question47 },
    { id: 50, audio: question50 },
    { id: 53, audio: question53 },
    { id: 56, audio: question56 },
    { id: 59, audio: question59 },
    { id: 62, audio: question62, image: p62 },
    { id: 65, audio: question65, image: p65 },
    { id: 68, audio: question68, image: p68 }
];

const Part3 = ({ onAnswerChange }) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/questions')
            .then(response => {
                setQuestions(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleAnswerChange = (questionId, answer) => {
        onAnswerChange(questionId, answer);
    };

    const groupedQuestions = [];
    for (let i = 32; i <= 61; i += 3) {
        groupedQuestions.push([i, i + 1, i + 2].filter(id => id <= 62));
    }

    const lastQuestions = [];
    for (let i = 62; i <= 70; i++) {
        lastQuestions.push(i);
    }

    return (
        <div className='m-5'>
            <strong className='bg-blue-100 rounded-lg p-2 text-blue-600 flex items-center justify-center mt-10 w-[72px]'>Part 3</strong>

            {groupedQuestions.map((group, index) => {
                const audioData = audioAndImage.find(data => group.includes(data.id));
                return (
                    <div key={index} className='mt-10'>
                        {audioData && (
                            <audio controls className="w-full my-10">
                                <source src={audioData.audio} type="audio/mp3" />
                                Trình duyệt của bạn không hỗ trợ thẻ audio.
                            </audio>
                        )}

                        {group.map((questionId) => {
                            const question = questions.find(q => q.id === questionId);
                            return (
                                <div key={questionId} className='flex items-start mt-5'>
                                    <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>{questionId}</strong>
                                    <div className='flex flex-col'>
                                        <p>{question?.content}</p>
                                        <div>
                                            {['option_a', 'option_b', 'option_c', 'option_d'].map(optionKey => (
                                                <div key={optionKey} className="mb-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name={`answer${questionId}`}
                                                            className="mr-2"
                                                            onChange={() => handleAnswerChange(questionId, question?.[optionKey])}
                                                        />
                                                        {question?.[optionKey]}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}

            {lastQuestions.map((questionId) => {
                const question = questions.find(q => q.id === questionId);
                const audioData = audioAndImage.find(data => data.id === questionId);
                const showImageAudio = (questionId === 62 || questionId === 65 || questionId === 68);

                return (
                    <div key={questionId} className='mt-10'>
                        {showImageAudio && (
                            <div className='rounded-md bg-gray-200 mb-5'>
                                <div className='p-5'>
                                    <audio controls className="w-full mt-5 mb-5">
                                        <source src={audioData?.audio} type="audio/mp3" />
                                        Trình duyệt của bạn không hỗ trợ thẻ audio.
                                    </audio>
                                    <img
                                        src={audioData?.image}
                                        className='w-[624px] h-[440px] mx-auto'
                                        alt="question illustration"
                                    />
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
                                                <input
                                                    type="radio"
                                                    name={`answer${questionId}`}
                                                    className="mr-2"
                                                    onChange={() => handleAnswerChange(questionId, question?.[optionKey])}
                                                />
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
};

export default Part3;