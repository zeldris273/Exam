import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className='bg-green-500 p-2 mt-20'>
      <div className='flex text-white gap-2 justify-center items-center -mt-10'>
        <img
          src={Logo}
          width={120}
        />
        <Link className='hover:underline' to='/'> Về chúng tôi | </Link>
        <Link className='hover:underline' to='/'>Điều khoản sử dụng | </Link>
        <Link className='hover:underline' to='/'>Riêng tư va cookies | </Link>
        <Link className='hover:underline' to='https://www.facebook.com/nvh.913'>Liên hệ chúng tôi </Link>
      </div>
      <div className="text-center text-white -mt-12">
        <p>Email: support@example.com</p>
        <p>Phone: +123 456 789</p>
        <p className='text-white text-center'>© 2024 Your Company. All rights reserved.</p>
        <p className='text-white text-center'>Created by Ngũ Đại Kage.</p>
      </div>
     
    </footer>
  )
}

export default Footer
