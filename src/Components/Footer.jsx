import React from 'react';
import logo from '../Images/logo.png';
import shorthand from '../Images/shorthand.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='container'>
            <div className="main">
                <div className="footer">
                    <footer class="bg-white rounded-lg shadow  m-4">
                        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                            <div class="sm:flex sm:items-center sm:justify-between">
                                <Link to="/Home" target='blank' class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                    <img src={shorthand} class="h-8" alt="Flowbite Logo" />
                                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-black"><img src={logo} className="w-40" alt="" srcset="" /></span>
                                </Link>
                                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-black">
                                    <li>
                                        <Link to="/About-Us" class="hover:underline me-4 md:me-6">About</Link>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                                    </li>
                                    <li>
                                        <Link to="/Contact-Us" class="hover:underline">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                            <span class="block text-sm  sm:text-center text-black">© 2024 <Link to="/Home" target='blank' class="hover:underline">Sevelian™</Link>. All Rights Reserved.</span>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Footer