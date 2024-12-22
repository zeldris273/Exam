import React, { useState } from 'react'
import Benefit1 from '../assets/BenefitImage/benefit1.png'
import Benefit2 from '../assets/BenefitImage/benefit2.png'
import Benefit3 from '../assets/BenefitImage/benefit3.png'
import Ad from '../assets/ad.jpg'
import { FcDocument } from "react-icons/fc";
import { SlEarphones } from "react-icons/sl";
import Divider from './Divider'
import Validator from '../pages/Validator'
import { useNavigate } from 'react-router-dom'

const BenefitsSection = () => {

    const benefits = [
        {
            id: 1,
            title: "Take TOEIC mock test",
            paragarph: "TOEIC listening and ielts reading test following the Cambridge IELTS book format.",
            image: Benefit1
        },
        {
            id: 2,
            title: "FREE to use",
            paragarph: "Our online ielts test are always free. We are here to help users for study abroad, immigration and finding jobs.",
            image: Benefit2
        },
        {
            id: 3,
            title: "Increase your TOEIC band score",
            paragarph: "Using our online test for TOEIC preparation is proven to help students improve by 500-900.",
            image: Benefit3
        }
    ]

    const [isFormVisible, setIsFormVisible] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate("/tests")
        } else {
            setIsFormVisible(true);
        }

    }

    return (
        <div className='mt-20'>
            <Divider />
            <div className='flex gap-10 items-center justify-center mt-20'>

                {benefits.map(benefit => (
                    <div key={benefit.id}>
                        <img
                            src={benefit.image}
                            className='mx-auto mb-4'
                        />
                        <p className='text-center text-base font-bold'>{benefit.title}</p>
                        <p className='text-center'>{benefit.paragarph}</p>
                    </div>
                ))}
            </div>

            <div className='mt-20'>
                <Divider />
            </div>

            <div className='mt-20'>
                <h1 className='font-bold text-4xl text-center my-10'>Free Self Study Material</h1>
                <div className='flex items-center justify-center gap-60'>
                    <div className='mb-8 mr-10'>
                        <span style={{ fontSize: "150px" }}>
                            <FcDocument />
                        </span>
                        <p className='mt-8 font-bold text-center'>READING</p>
                    </div>
                    <div className='mb-8 ml-8'>
                        <span className='text-pink-600' style={{ fontSize: "150px" }}>
                            <SlEarphones />
                        </span>
                        <p className='mt-8 font-bold text-center'>LISTENING</p>
                    </div>
                </div>
            </div>

            <img className='mx-auto h-[200px] w-[1000px]'
                src={Ad}
            />

            <div className='flex items-center justify-center my-5'>
                <button onClick={handleClick} className='px-6 py-2 bg-red-500 rounded-full hover:bg-red-800 w-full max-w-[150px] text-white font-bold'>
                    Practice Now
                </button>
            </div>

            {isFormVisible && (
                <Validator setIsFormVisible={setIsFormVisible} />
            )}
        </div>
    )
}

export default BenefitsSection
