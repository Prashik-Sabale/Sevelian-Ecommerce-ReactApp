import React from 'react';
import mainimg from '../Images/Shirts/mainimg.jpg';
import mainimg2 from '../Images/Shirts/mainimg2.jpg';
import mainimg3 from '../Images/Shirts/mainimg3.jpg';





export const items = [
    {
        id: 1,
        dec: "Best Seller",
        name: "Oversized Tee - Black",
        image: mainimg,

    },
    {
        id: 2,
        dec: "Best Seller",
        name: "Oversized Tee - CherryRed",
        image: mainimg2,
    },
    {
        id: 3,
        dec: "Best Seller",
        name: "Oversized Tee - AcidWash",
        image: mainimg3,
    },

]

const NewLaunched = () => {

    return (

        <div>
            <header className="text-center">
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl pt-10">Product Collection</h2>

                <p className="mx-auto mt-4 max-w-md text-gray-500">
                    All new Oversized-Tee's , Exclusively launched in sale. With stretch & an elevated look.
                </p>
            </header>
            <div className='flex justify-center items-center gap-10 p-10'>
                <img src={mainimg} className=' rounded-xl h-1/4  w-1/4 cursor-pointer' alt="" srcset="" />
                <img src={mainimg2} className=' rounded-xl h-1/4  w-1/4 cursor-pointer' alt="" srcset="" />
                <img src={mainimg3} className=' rounded-xl h-1/4  w-1/4 cursor-pointer' alt="" srcset="" />
            </div>
        </div>

    )
}

export default NewLaunched;