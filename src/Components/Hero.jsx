import React from 'react';
import background from '../Images/background.jpg';
import cat1 from '../Images/category.jpg';
import cat2 from '../Images/category2.jpg';
import BestSeller from './BestSeller';
import Shoppingitems from './Shoppingitems';
import { Link } from 'react-router-dom';
import Offer from './Offer';

const Hero = () => {
    return (
        <div>
            {/* <div className="flex items-center space-x-2">
                <img src={background} className="w-full  " alt="" />
            </div> */}



            <section className="bg-gray-50" >
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-xl text-center">
                        <div className=' text-gray-700'>UP TO 70% OFF</div>
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Beyond Minimals
                            <strong className="font-thin text-red-700 sm:block"> THE VAULT </strong>
                        </h1>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <button type="button" className="block w-full rounded-full bg-black px-12 py-3 text-sm font-medium text-white shadow sm:w-auto">Shop Now</button>

                        </div>
                    </div>
                </div>
            </section>
            <div className="mx-auto max-w-7xl px-4  p-10 sm:px-6 lg:px-8 relative text-center">
                <span className="relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                    ></div>
                    <span className="relative z-10 bg-white px-6 pb-10">Shop By Category</span>
                </span>

                <div className='container flex justify-center gap-20'>
                    <div><img src={cat1} className="h-30 w-40 rounded-full cursor-pointer" alt="" />Shirts</div>
                    <div><Link to="/Products"><img src={cat2} className="h-30 w-40 rounded-full cursor-pointer" alt="" /></Link>T-Shirts</div>
                </div>
            </div>
            <Offer />
            <BestSeller />
        </div>
    )
}

export default Hero