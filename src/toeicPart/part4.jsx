import React, { useEffect, useState } from 'react';
import axios from 'axios';
import question71 from '../toeicAudioAndImage/part4/question71.m4a';
import question74 from '../toeicAudioAndImage/part4/question74.m4a';
import question77 from '../toeicAudioAndImage/part4/question77.m4a';
import question80 from '../toeicAudioAndImage/part4/question80.m4a';
import question83 from '../toeicAudioAndImage/part4/question83.m4a';
import question86 from '../toeicAudioAndImage/part4/question86.m4a';
import question89 from '../toeicAudioAndImage/part4/question89.m4a';
import question92 from '../toeicAudioAndImage/part4/question92.m4a';
import question95 from '../toeicAudioAndImage/part4/question95.m4a';
import question98 from '../toeicAudioAndImage/part4/question98.m4a';
import p95 from '../toeicAudioAndImage/part4/p95.png';
import p98 from '../toeicAudioAndImage/part4/p98.png';

const audioAndImage = [
  { id: 71, audio: question71 },
  { id: 74, audio: question74 },
  { id: 77, audio: question77 },
  { id: 80, audio: question80 },
  { id: 83, audio: question83 },
  { id: 86, audio: question86 },
  { id: 89, audio: question89 },
  { id: 92, audio: question92 },
  { id: 95, audio: question95, image: p95 },
  { id: 98, audio: question98, image: p98 },
];

const Part4 = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/questions')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const groupedQuestions = [];
  for (let i = 71; i <= 94; i += 3) {
      groupedQuestions.push([i, i + 1, i + 2].filter(id => id <= 91));
  }

  const allQuestions = [];
  for (let i = 95; i <= 100; i++) {
    allQuestions.push(i);
  }

  return (
    <div className='m-5'>
      <strong className='bg-blue-100 rounded-lg p-2 text-blue-600 flex items-center justify-center mt-10 w-[72px]'>Part 4</strong>

      {groupedQuestions.map((group, index) => {
                const audioData = audioAndImage.find(data => group.includes(data.id));
                return (
                    <div key={index} className='mt-10'>
                        {audioData && (
                            <audio controls className="w-full my-10">
                                <source src={audioData.audio} type="audio/m4a" />
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
                                                        <input type="radio" name={`answer${questionId}`} className="mr-2" />
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

      {allQuestions.map((questionId) => {
        const question = questions.find(q => q.id === questionId);
        const audioData = audioAndImage.find(data => data.id === questionId);
        const showImageAudio = (questionId === 95 || questionId === 98);

        return (
          <div key={questionId} className='mt-10'>
            {showImageAudio && (
              <div className='rounded-md bg-gray-200 mb-5'>
                <div className='p-5'>
                  <audio controls className="w-full mt-5 mb-5">
                    <source src={audioData?.audio} type="audio/m4a" />
                    Trình duyệt của bạn không hỗ trợ thẻ audio.
                  </audio>
                  <img
                    src={audioData?.image}
                    className='w-[624px] h-[440px] mx-auto'
                    alt={`question ${questionId} illustration`}
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
  )
}

export default Part4;