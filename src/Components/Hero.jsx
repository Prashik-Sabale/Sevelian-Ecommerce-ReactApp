import React, { useState } from 'react';
// import background from '../Images/background.jpg';
import cat1 from '../Images/category.jpg';
import cat2 from '../Images/category2.jpg';
import BestSeller from './BestSeller';
import Shoppingitems from './Shoppingitems';
import { Link } from 'react-router-dom';
import Offer from './Offer';
import NewLaunched from './NewLaunched';
import ShirtCompo from './ShirtsCompo';
// import hero from '../Images/category.jpg'



const Hero = () => {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <div>

            <section className="bg-[url(https://cdn.faire.com/fastly/1f86b5a4cf0440587fe48d7f9fb439d6ec65180efa7166d4596407c733578018.jpeg)] bg-cover  bg-center bg-no-repeat" >
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-xl text-center">
                        <div className=' text-white font-extrabold '>UP TO 70% OFF</div>
                        <h1 className="text-3xl text-black font-extrabold sm:text-5xl">
                            Beyond Minimals
                            <strong className="font-extrabold text-red-700 sm:block"> THE VAULT </strong>
                        </h1>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <button onClick={() => { setIsToggled(!isToggled) }} type="button" className="block w-full rounded-full bg-white px-12 py-3 text-sm font-medium text-black shadow sm:w-auto">Shop Now </button>

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
                    <div><Link to="/Shirts"><img src={cat1} className="h-30 w-40 rounded-full cursor-pointer" alt="" /></Link>Shirts</div>
                    <div><Link to="/Products"><img src={cat2} className="h-30 w-40 rounded-full cursor-pointer" alt="" /></Link>T-Shirts</div>
                </div>
            </div>
            <Offer />
            <NewLaunched />
            <BestSeller />

        </div>
    )
}

export default Hero;