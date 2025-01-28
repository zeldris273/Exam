import React, { useState } from 'react';
import question1 from '../toeicAudioAndImage/part1/question1.mp3'
import { useDispatch } from 'react-redux';
import { setAnswer, calculateScore } from '../redux/examSlice.jsx'
import p1 from '../toeicAudioAndImage/part1/p1.png'
import question2 from '../toeicAudioAndImage/part1/question2.mp3'
import p2 from '../toeicAudioAndImage/part1/p2.png'
import question3 from '../toeicAudioAndImage/part1/question3.mp3'
import p3 from '../toeicAudioAndImage/part1/p3.png'
import question4 from '../toeicAudioAndImage/part1/question4.mp3'
import p4 from '../toeicAudioAndImage/part1/p4.png'
import question5 from '../toeicAudioAndImage/part1/question5.mp3'
import p5 from '../toeicAudioAndImage/part1/p5.png'
import question6 from '../toeicAudioAndImage/part1/question6.mp3'
import p6 from '../toeicAudioAndImage/part1/p6.png'

const questions = [
    { id: 1, audio: question1, image: p1 },
    { id: 2, audio: question2, image: p2 },
    { id: 3, audio: question3, image: p3 },
    { id: 4, audio: question4, image: p4 },
    { id: 5, audio: question5, image: p5 },
    { id: 6, audio: question6, image: p6 }
];

const Part1 = () => {

    const dispatch = useDispatch();

    const handleAnswerChange = (questionId, answer) => {
        dispatch(setAnswer({ questionId, answer }));
        dispatch(calculateScore(questions));
    };

    return (
        <div className="m-5">
            <strong className="bg-blue-100 rounded-lg p-2 text-blue-600 flex items-center justify-center mt-10 w-[72px]">
                Part 1
            </strong>
            {questions.map(({ id, audio, image }) => (

                <div key={id}>
                    <audio controls className="w-full my-10">
                        <source src={audio} type="audio/mp3" />
                        Trình duyệt của bạn không hỗ trợ thẻ audio.
                    </audio>

                    {image && (
                        <img src={image} alt={`Question ${id}`} className="w-[624px] h-[440px]" />
                    )}

                    <div className="flex items-start mt-10">
                        <strong className="bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]">
                            {id}
                        </strong>
                        <div className="flex flex-col">
                            {['a', 'b', 'c', 'd'].map((choice) => (
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
    );
};

export default Part1;
