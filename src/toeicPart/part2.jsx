import React, { useState } from 'react'
import question7 from '../toeicAudioAndImage/part2/question7.mp3';
import question8 from '../toeicAudioAndImage/part2/question8.mp3';
import question9 from '../toeicAudioAndImage/part2/question9.mp3';
import question10 from '../toeicAudioAndImage/part2/question10.mp3';
import question11 from '../toeicAudioAndImage/part2/question11.mp3';
import question12 from '../toeicAudioAndImage/part2/question12.mp3';
import question13 from '../toeicAudioAndImage/part2/question13.mp3';
import question14 from '../toeicAudioAndImage/part2/question14.mp3';
import question15 from '../toeicAudioAndImage/part2/question15.mp3';
import question16 from '../toeicAudioAndImage/part2/question16.mp3';
import question17 from '../toeicAudioAndImage/part2/question17.mp3';
import question18 from '../toeicAudioAndImage/part2/question18.mp3';
import question19 from '../toeicAudioAndImage/part2/question19.mp3';
import question20 from '../toeicAudioAndImage/part2/question20.mp3';
import question21 from '../toeicAudioAndImage/part2/question21.mp3';
import question22 from '../toeicAudioAndImage/part2/question22.mp3';
import question23 from '../toeicAudioAndImage/part2/question23.mp3';
import question24 from '../toeicAudioAndImage/part2/question24.mp3';
import question25 from '../toeicAudioAndImage/part2/question25.mp3';
import question26 from '../toeicAudioAndImage/part2/question26.mp3';
import question27 from '../toeicAudioAndImage/part2/question27.mp3';
import question28 from '../toeicAudioAndImage/part2/question28.mp3';
import question29 from '../toeicAudioAndImage/part2/question29.mp3';
import question30 from '../toeicAudioAndImage/part2/question30.mp3';
import question31 from '../toeicAudioAndImage/part2/question31.mp3';

const questions = [
    { id: 7, audio: question7 },
    { id: 8, audio: question8 },
    { id: 9, audio: question9 },
    { id: 10, audio: question10 },
    { id: 11, audio: question11 },
    { id: 12, audio: question12 },
    { id: 13, audio: question13 },
    { id: 14, audio: question14 },
    { id: 15, audio: question15 },
    { id: 16, audio: question16 },
    { id: 17, audio: question17 },
    { id: 18, audio: question18 },
    { id: 19, audio: question19 },
    { id: 20, audio: question20 },
    { id: 21, audio: question21 },
    { id: 22, audio: question22 },
    { id: 23, audio: question23 },
    { id: 24, audio: question24 },
    { id: 25, audio: question25 },
    { id: 26, audio: question26 },
    { id: 27, audio: question27 },
    { id: 28, audio: question28 },
    { id: 29, audio: question29 },
    { id: 30, audio: question30 },
    { id: 31, audio: question31 }
]

const part2 = ({ onAnswerChange }) => {
    const handleAnswerChange = (questionId, answer) => {
        onAnswerChange(questionId, answer);
    };
    

    return (
        <div className='m-5'>
            <strong className='bg-blue-100 rounded-lg p-2 text-blue-600 mr-10 flex items-center justify-center mt-10 w-[72px]'>Part 2</strong>
            {questions.map(({ id, audio }) => (
                <div key={id}>
                    <audio controls className="w-full my-10">
                        <source src={audio} type="audio/mp3" />
                        Trình duyệt của bạn không hỗ trợ thẻ audio.
                    </audio>

                    <div className='flex items-start mt-10'>
                        <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                            {id}
                        </strong>

                        <div className='flex flex-col'>
                            {['a', 'b', 'c'].map((choice) => (
                                <label key={choice} className="flex items-center mb-2">
                                    <input
                                        type="radio"
                                        name={`answer${id}`}
                                        className="mr-2"
                                        value={choice}
                                        onChange={() => handleAnswerChange(id, choice)}
                                    /> {choice}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default part2
