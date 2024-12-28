import React, { useState, useEffect } from 'react';
import { FaRegUserCircle } from 'react-icons/fa'; 
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Validator from '../pages/Validator';

const Header = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false); 
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleClick = () => {
    setIsFormVisible(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setIsLoggedIn(false); 
  };

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsMenuVisible(true); 
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsMenuVisible(false); 
    }, 300); 
    setTimeoutId(id); 
  };

  return (
    <>
      <header className='fixed top-0 w-full h-14 bg-neutral-100'>
        <div className='container mx-auto flex items-center h-full justify-between'>
          <Link to="/">
            <img src={Logo} width={100} />
          </Link>

          <div className='flex items-center gap-2 ml-5'>
            <NavLink to="/tests">
              <span className='text-gray-500 hover:text-blue-800 w-full' style={{ whiteSpace: 'nowrap' }}>
                Đề thi online
              </span>
            </NavLink>

            {!isLoggedIn ? (
              <button
                onClick={handleClick}
                className='px-6 py-2 bg-blue-700 rounded-md hover:bg-blue-800 max-w-[150px] text-white font-bold'
              >
                Đăng nhập
              </button>
            ) : (
              <div
                className="relative"
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
              >
                <FaRegUserCircle className="text-2xl text-gray-700 cursor-pointer" />

                {isMenuVisible && (
                  <div className="absolute right-0 mt-2 w-52 bg-white border rounded-md shadow-lg z-10">
                    <ul className="py-2">
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Thông tin cá nhân
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Đăng xuất
                          </button>
                        </Link>

                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      <div>
        {isFormVisible && <Validator setIsFormVisible={setIsFormVisible} />}
      </div>
    </>
  );
};

export default Header;
