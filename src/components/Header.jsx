import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { TbClockHour4 } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Header = ({ length }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const [isDropdownVisible2, setDropdownVisible2] = useState(false);

    const toggleDropdown2 = () => {
        setDropdownVisible2(!isDropdownVisible2);
    };

    return (
        <>
            <div className='sticky top-0 bg-[#FFFBED] z-50'>
                <div className='flex justify-between'>
                    <div className='flex items-start gap-5'>
                        <div>
                            <div className='flex items-center gap-3'>
                                <CiLocationOn />
                                <button id="dropdownDefaultButton" onClick={toggleDropdown} className="text-black font-medium rounded-lg text-sm text-center inline-flex items-center" type="button">
                                    Your city: Indore
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
                                </button>
                            </div>
                            <div id="dropdown" className={`z-10 ${isDropdownVisible ? '' : 'hidden'} bg-white divide-y divide-gray-500 rounded-lg shadow w-44 block absolute`}>
                                <ul className="py-2 text-sm text-black" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex items-center flex-wrap gap-2'>
                            <TbClockHour4 />
                            <p>Mon-Fri 9:00 - 19:00</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-3'>
                        <p>About Us</p>
                        <p>Benefits</p>
                        <p>Sale Items</p>
                        <Link to={"/login"}>
                            <p className='flex items-center gap-1 hover:text-[#FD9339]'>
                                <IoPersonCircleOutline />
                                Log in
                            </p>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center my-5'>
                    <Link to={"/"}>
                        <img style={{ width: '150px', height: 'auto' }} src="https://t4.ftcdn.net/jpg/01/15/27/23/360_F_115272378_fv3P6LkGJcKbssLsNxyUehZeywIB0HvW.jpg" alt="" />
                    </Link>
                    <div className='flex items-center'>
                        <h1 className='text-xl m-2'><i class="ri-box-3-fill"></i></h1>
                        <p className='w-[80px] text-[#808080] text-[14px]'>Free delivery</p>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='text-xl m-2'><i class="ri-bank-card-fill"></i></h1>
                        <p className='w-[120px] text-[#808080] text-[14px]'>Discount for online payment</p>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='text-xl m-2'><i class="ri-shield-user-fill"></i></h1>
                        <p className='w-[80px] text-[#808080] text-[14px]'>Buyer protection</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <h1 className='text-2xl m-2'><i class="ri-telegram-fill"></i></h1>
                        <h1 className='text-2xl m-2'><i class="ri-whatsapp-fill"></i></h1>
                        <h1 className='text-2xl m-2'><i class="ri-facebook-box-fill"></i></h1>
                    </div>
                    <div>
                        <p className='font-bold'>+91 91672 46019</p>
                        <button type="button" className="text-[#FD9339] flex items-center gap-3 border border-[#FD9339] rounded-lg text-sm px-2 py-2 text-center me-2 mb-2 hover:bg-[#FD9339] hover:text-white">
                            <FiPhone />
                            Request a call
                        </button>
                    </div>
                    <div className='flex items-center'>
                        <p className='w-[120px]'>Your cart <span className='text-[#FD9339]'>1680 rub.</span> </p>
                        <div className='flex items-start'>
                            <Link to={"/card"}>
                                <h1 className='text-4xl m-2'><i class="ri-shopping-cart-fill"></i></h1>
                                <p className='bg-[#FD9339] text-white rounded-full w-5 h-5 flex items-center justify-center relative bottom-12 left-8'>{length}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex flex-wrap items-center gap-4'>
                    <div>
                        <div>
                            <button id="dropdownDefaultButton" onClick={toggleDropdown2} className="text-black font-medium rounded-lg text-sm text-center inline-flex items-center" type="button">
                                Recipes
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
                            </button>
                        </div>
                        <div id="dropdown" className={`z-10 ${isDropdownVisible2 ? '' : 'hidden'} bg-white divide-y divide-gray-500 rounded-lg shadow w-44 block absolute`}>
                            <ul className="py-2 text-sm text-black" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Young cheeses</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Semi-hard cheeses</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Pasta Filata</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Whey cheeses</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Blue cheeses</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Hard cheeses</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Cottage cheeses</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Fermented milk products</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">All recipes</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p>Delivery and Payment</p>
                    <p>Cheesemaker Calculator</p>
                    <p>Reviews</p>
                    <p>FAQ</p>
                    <p>Contact Us</p>
                </div>

                {/* input */}
                <div>
                    <form className="max-w-md mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-[300px] px-5 ps-10 py-2 text-sm bg-inherit outline-none rounded-lg border border-solid border-[#FD9339]" placeholder="Enter product name or article number" required />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Header;