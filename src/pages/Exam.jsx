import React from 'react'

const Exam = () => {
  return (
    <div>
    <div className='m-5'>
                <h2 className="text-xl font-bold">Âm thanh nền</h2>

                {/* Thẻ audio để nhúng âm thanh */}
                <audio controls className="w-full mt-2">
                    <source src="path/to/your/audiofile.mp3" type="audio/mp3" />
                    Trình duyệt của bạn không hỗ trợ thẻ audio.
                </audio>

            </div>
    </div>
  )
}

export default Exam
