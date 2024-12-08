import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import Validator from '../pages/Validator'

const Header = () => {

  const [isFormVisible, setIsFormVisible] = useState(false)

  const handleClick = () => {
    setIsFormVisible(true)
  }
  return (
    <>
      <header className='fixed top-0 w-full h-14 bg-neutral-100'>
        <div className='container mx-auto flex items-center h-full justify-between'>
          <Link to="/">
            <img src={Logo}
              width={120}
            />
          </Link>

          <div className='flex items-center gap-2 ml-5'>
            <NavLink to="/tests" >
              <span className='text-gray-500 hover:text-blue-800 w-full'  style={{ whiteSpace: 'nowrap' }}>Đề thi online</span>
            </NavLink>
            <button
              onClick={handleClick}
              className='px-6 py-2 bg-blue-700 rounded-md hover:bg-blue-800 w-full max-w-[150px]'
            >
              <span className='text-white font-bold'>Đăng nhập</span>
            </button>
          </div>
        </div>
      </header>
      <div>
        {isFormVisible && <Validator setIsFormVisible={setIsFormVisible} />}
      </div>
    </>

  )
}

export default Header
