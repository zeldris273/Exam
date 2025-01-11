import React from 'react';
import Jake from '../assets/Feedback/Jake.jpg';
import BaoLoi from '../assets/Feedback/BaoLoi.png';
import Dung from '../assets/Feedback/Dung.jpg';
import Hieu from '../assets/Feedback/Hieu.jpg';
import Trung from '../assets/Feedback/Trung.png';
import Tinh from '../assets/Feedback/Tinh.jpg';

const Feedback = () => {

    const customerFeedback = [
        {
            id: 1, image: Jake, name: 'Trần Hữu Phúc', p: 'Nhờ ngudaikage, tôi mới biết tôi là bố TOEIC.'
        },
        {
            id: 2, image: BaoLoi, name: 'Nguyễn Bảo Lợi', p: 'Nhờ ngudaikage tôi có thể làm trong 5p và ngủ trong 115p còn lại.'
        },
        {
            id: 3, image: Dung, name: "Cù Đức Dũng", p: 'Từ khi biết đến trang web ngudaikage tôi đéo sợ TOEIC nữa.'
        },
        {
            id: 4, image: Trung, name: 'Nguyễn Đức Trung', p: 'Vì TOEIC kỉ nên 0 IELTS.'
        }, 
        {
            id: 5, image: Tinh, name: 'Trần Thanh Tịnh', p: 'Nhờ ngudaikage, người già như tôi đã đạt 1000 điểm TOEIC trong 1 ngày.'
        },
        {
            id: 6, image: Hieu, name: 'Nguyễn Văn Hiếu', p: 'Tôi là người tạo ra TOEIC.'
        }
    ];

    return (
        <div className='mt-10'>
             <h1 className='text-4xl flex justify-center font-bold'>Feedback</h1>
            <div className='flex flex-wrap items-center justify-around'>     
                {
                    customerFeedback.map((feedback) => (
                        <div key={feedback.id} className="m-4 p-4 border rounded shadow w-[400px] h-[262px]">
                            <img
                                src={feedback.image}
                                alt={feedback.name}
                                className="w-32 h-32 rounded-full object-cover mx-auto"
                            />
                            <h3 className="mt-4 text-xl font-semibold text-center">{feedback.name}</h3>
                            <p className="mt-2 text-gray-600 text-center">{feedback.p}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Feedback;