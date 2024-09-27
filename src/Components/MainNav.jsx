import React, { useEffect, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { open } from './State/Slice/CheckOutSlice';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import Modal from '../Pages/Modal';
import { useDispatch, useSelector } from 'react-redux';

import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";


const MainNav = () => {
    const dispatch = useDispatch();
    const cartItem = useSelector((store) => store.cart)

    const toggle = useSelector(store => store.toggle);
    const [showModal, setshowModal] = useState(false);
    // ***********************Sidebar******************
    const [sidebar, setsidebar] = useState(false);
    const showsidebar = () => setsidebar(!sidebar);

    // ***********************************************************************************
    const [isSideMenuOpen, setMenu] = useState(false);
    console.log(setMenu);


    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);

    //Navbar*************************************************
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };



    return (
        <div>
            <div className="header__bar bg-black text-white">
                <marquee scrollamount="10">
                    <pre>AVAIL 15% OFF ON ALL ORDERS ABOVE ₹3500                                                    AVAIL 15% OFF ON ALL ORDERS ABOVE ₹3500                                                      AVAIL 15% OFF ON ALL ORDERS ABOVE ₹3500  </pre>
                </marquee>
            </div>
            <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50">
                <nav className={`${scroll ? "fixed bg-white w-full  rounded-full  top-5 left-0 right-0 " : ""}z-10 top-0  left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4`}>
                    <div className="flex items-center justify-between">
                        <button>
                            <div class="flex items-center space-x-2">
                                <Link to='/Home'><img src={logo} className="w-40" alt="" /></Link>
                            </div>
                        </button>
                        <div className="hidden lg:block">
                            <ul className="flex space-x-10 text-base font-bold text-black ">
                                <li
                                    className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <Link to="/Home">Home</Link>
                                </li>
                                <li
                                    className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <Link to="/Products">Product</Link>
                                </li>
                                <li
                                    className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <Link to="/About-Us">About</Link>
                                </li>
                                <li
                                    className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <Link to="/Contact-Us">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:flex lg:items-center gap-x-3">

                            <button onClick={() => { setshowModal(true) }} className="flex items-center text-black  justify-center px-2 py-2 font-semibold"><IoSearch className='text-xl' /></button>

                            {showModal && <Modal onclose={() => { setshowModal(false) }} />}

                            <button className="flex items-center text-black  justify-center px-2 py-2 font-semibold" ><Link to='./Login'><FaRegUser className='text-xl' /></Link></button>

                            <div className=' relative cursor-pointer'  >
                                <IoBagOutline className='text-2xl' onClick={() => dispatch(open())} />

                                <div className=' absolute w-3 h-3 rounded-full z-10 right-[-3px] bottom-[-3px] flex items-center justify-center text-[10px] bg-black text-white'>{cartItem.cart.length}</div>
                            </div>
                        </div>

                        {/* NavLinks Resonsive  */}
                        {/* Sidebar (for mobile view) */}
                        <div
                            className={`fixed top-0 left-0 h-full w-64 z-50 bg-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                                } transition-transform duration-300 ease-in-out md:hidden`}
                        >
                            <ul className="flex flex-col items-start mt-16 space-y-6 pl-8">
                                <li>
                                    <Link to="/Home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/Products">Product</Link>
                                </li>
                                <li>
                                    <Link to="/About-Us">About</Link>
                                </li>
                                <li>
                                    <Link to="/Contact-Us">Contact</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="md:hidden text-black text-2xl cursor-pointer" onClick={toggleSidebar}>
                            {isOpen ? <RxCross2 size={30} /> : <HiOutlineMenuAlt3 size={30} className='cursor-pointer' />}
                        </div>


                    </div>
                </nav>
            </div>
        </div>
    )
}

export default MainNav;

{/* <button className="focus:outline-none text-slate-200 dark:text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-2xl text-slate-800 :outline-none active:scale-110 active:text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button> */ }