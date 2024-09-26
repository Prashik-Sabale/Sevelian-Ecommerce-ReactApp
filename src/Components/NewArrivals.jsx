import React from 'react';
import Trending from './Trending';

const NewArrivals = () => {
    const [isToggle, setIsToggle] = useState(false);
    return (
        <div>
            <div className='p-10'>
                <h1
                    className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
                    The Best Sellers
                </h1>
                <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-red-700 mb-9">
                    ALL TIME FAVOURITE
                </p>
                <Trending />
                <button onClick={() => { setIsToggle(!isToggle) }} className="w-full md:w-auto mt-10 mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-black shadow-xs  transition-all duration-500">Shop all
                </button>
            </div>
        </div>
    )
}

export default NewArrivals