import React, { useState, useEffect } from 'react';
import Image1 from '../assets/BannerImage/image1.jpg';
import Image2 from '../assets/BannerImage/image2.jpg';
import Image3 from '../assets/BannerImage/image3.jpg';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const BannerHome = () => {
    const banners = [
        {
            id: 1,
            title: 'Welcome to our Website',
            image: Image1,
        },
        {
            id: 2,
            title: 'Learn TOEIC with us',
            image: Image2,
        },
        {
            id: 3,
            title: '',
            image: Image3,
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const handlePrev = () => {
        setCurrentImage((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentImage((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <section className="w-full h-full">
            <div className="flex min-h-full max-h-[95vh] m-4 overflow-hidden relative">
                {banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className="min-w-full min-h-full duration-700 transition-transform ease-in-out"
                        style={{ transform: `translateX(-${currentImage * 100}%)` }}
                    >
                        <div className="min-w-full min-h-full">
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="h-[394px] w-full object-cover"
                            />
                        </div>
                    </div>
                ))}

                <div className="absolute top-0 w-full h-full flex items-center justify-between px-4">
                    <button
                        onClick={handlePrev}
                        className="bg-white p-2 rounded-full text-xl z-10 text-black"
                    >
                        <FaAngleLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-white p-2 rounded-full text-xl z-10 text-black"
                    >
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BannerHome;
