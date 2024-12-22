import React, { useEffect, useState } from 'react';
import p131 from '../toeicAudioAndImage/part6/p131.png';
import p135 from '../toeicAudioAndImage/part6/p135.png';
import p139 from '../toeicAudioAndImage/part6/p139.png';
import p143 from '../toeicAudioAndImage/part6/p143.png';
import axios from 'axios';

const imageArray = [
  { id: 131, image: p131 },
  { id: 135, image: p135 },
  { id: 139, image: p139 },
  { id: 143, image: p143 },
];

const Part6 = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/questions')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const allQuestions = [];
  for (let i = 131; i <= 146; i++) {
    allQuestions.push(i);
  }

  return (
    <div className='m-5'>
      <strong className='bg-blue-100 rounded-lg p-2 text-blue-600 flex items-center justify-center mt-10 w-[72px]'>Part 6</strong>

      {allQuestions.map((questionId) => {
        const question = questions.find(q => q.id === questionId);
        const imageData = imageArray.find(data => data.id === questionId);

        return (
          <div key={questionId} className='mt-10'>
            {imageData && (
              <div className='rounded-md bg-gray-200 mb-5'>
                <div className='p-5'>
                  <img
                    src={imageData.image}
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
  );
}

export default Part6;