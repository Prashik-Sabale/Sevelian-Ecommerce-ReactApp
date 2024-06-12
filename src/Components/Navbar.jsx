import React, { useEffect, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import Modal from '../Pages/Modal';

const Navbar = () => {
    const [showModal, setshowModal] = useState(false);

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);


    return (
        <div>
            <div className='main'>
                <div className='container'>
                    <div class="header__bar bg-black text-white">
                        <marquee scrollamount="10">
                            <pre>AVAIL 15% OFF ON ALL ORDERS ABOVE ₹3500                                                    AVAIL 15% OFF ON ALL ORDERS ABOVE ₹3500                                                      AVAIL 15% OFF ON ALL ORDERS ABOVE ₹3500  </pre>
                        </marquee>
                    </div>
                    <div class="top-0 py-1  sticky  lg:py-2 w-full  lg:relative ">
                        <nav class={`${scroll ? "fixed bg-white w-full  rounded-full  top-5 left-0 right-0 " : ""}z-10 top-0  left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4`}>
                            <div class="flex  items-center justify-between">
                                <button>
                                    <div class="flex items-center space-x-2">
                                        <Link to='/Home'><img src={logo} className="w-40" alt="" srcset="" /></Link>
                                    </div>
                                </button>
                                <div class="hidden lg:block">
                                    <ul class="flex space-x-10 text-base font-bold text-black ">
                                        <li
                                            class="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                            <Link to="/Home">Home</Link>
                                        </li>
                                        <li
                                            class="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                            <Link to="/Products">Product</Link>
                                        </li>
                                        <li
                                            class="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                            <Link to="/About-Us">About</Link>
                                        </li>
                                        <li
                                            class="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                            <Link to="/Contact-Us">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="hidden lg:flex lg:items-center gap-x-3">

                                    <button onClick={() => { setshowModal(true) }} class="flex items-center text-black  justify-center px-2 py-2 font-semibold"><IoSearch className='text-xl' /></button>

                                    {showModal && <Modal onclose={() => { setshowModal(false) }} />}

                                    <button class="flex items-center text-black  justify-center px-2 py-2 font-semibold" ><Link to='./Login'><FaRegUser className='text-xl' /></Link></button>

                                    <div className=' relative cursor-pointer' >
                                        <IoBagOutline className='text-2xl' />

                                        <div className=' absolute w-3 h-3 rounded-full z-10 right-[-3px] bottom-[-3px] flex items-center justify-center text-[10px] bg-black text-white'>0</div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center lg:hidden">
                                    <button class="focus:outline-none text-slate-200 dark:text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="text-2xl text-slate-800 :outline-none active:scale-110 active:text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default Navbar

{/* <div class="hidden lg:flex lg:items-center gap-x-2">
<button class="flex items-center text-black  justify-center px-6 py-2.5 font-semibold"><Link to="./SignUp">Sign Up</Link></button>
<FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000", }} />
<button class="flex items-center justify-center rounded-full bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"><Link to="./Login">Log In</Link></button>
</div>
<div class="flex items-center justify-center lg:hidden">
<FontAwesomeIcon icon={faCartShopping} style={{ color: "#000000", }} />
<button class="focus:outline-none text-slate-200 dark:text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="text-2xl text-slate-800 :outline-none active:scale-110 active:text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button>
</div> */}

// <button class="flex items-center text-black  justify-center px-6 py-2.5 font-semibold"><Link to="./SignUp"> <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000", }} /></Link></button>
// <button  ><FontAwesomeIcon icon={faUser} style={{color: "#000000",}} /></button>
//  <button><Link to="./Login"><FontAwesomeIcon icon={faCartShopping} style={{ color: "#000000", }} /></Link></button>


{/* <FontAwesomeIcon icon={faUser} style={{ color: "#000000", }} /> */ }