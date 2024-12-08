import React from 'react'

const User = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='m-5'>
                {/* Mục thông tin người dùng */}
                <div className='text-black flex flex-col mb-5'>
                    <span>Họ tên: <strong>Nguyễn Văn Hiếu</strong></span>
                    <span>Giới tính: <strong>Nam</strong></span>
                    <span>Ngày sinh: <strong>27/03/2004</strong></span>
                    <span>Số CCCD: <strong>077204004897</strong></span>
                </div>

                {/* Tiêu đề thông tin thí sinh */}
                <h1 className='text-xl font-bold uppercase mt-5 mb-5'>Thông tin thí sinh</h1>

                {/* Form thông tin thí sinh */}
                <div className='flex flex-col w-[400px]' style={{ border: '1.5px solid gray', padding: '10px' }}>

                    {/* Họ tên */}
                    <div className='flex flex-col mb-4'>
                        <label className='mb-1'>Họ tên</label>
                        <input
                            type='text'
                            className="w-[250px] p-1 border border-gray-300 rounded mt-1"
                        />
                    </div>

                    {/* Giới tính */}
                    <div className='flex flex-col mb-4'>
                        <span className='mb-1'>Giới tính:</span>
                        <div className='flex items-center gap-3'>
                            <label>
                                <input type='radio' name='gender' className="mr-2" /> Nam
                            </label>
                            <label>
                                <input type='radio' name='gender' className="mr-2" /> Nữ
                            </label>
                        </div>
                    </div>

                    {/* Ngày sinh */}
                    <div className='flex flex-col mb-4'>
                        <label className='mb-1' htmlFor="birthdate">Ngày sinh:</label>
                        <input type="date" id="birthdate" name="birthdate" className="w-[250px] p-1 border border-gray-300 rounded mt-1" />
                    </div>

                    {/* Số CCCD */}
                    <div className='flex flex-col mb-4'>
                        <label className='mb-1'>Số CCCD:</label>
                        <input
                            type='text'
                            className="w-[250px] p-1 border border-gray-300 rounded mt-1"
                        />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default User
