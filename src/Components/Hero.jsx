import React from 'react';
import background from '../Images/background.jpg';
import BestSeller from './BestSeller';


const Hero = () => {
    return (
        <div>
            <div class="flex items-center space-x-2">
                <img src={background} className="w-full " alt="" srcset="" />

            </div>
            <div class="mx-auto max-w-7xl px-4  p-10 sm:px-6 lg:px-8 relative text-center">
                Shop by category
            </div>
            <BestSeller/>

        </div>
    )
}

export default Hero