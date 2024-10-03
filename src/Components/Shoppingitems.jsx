import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from './State/Slice/CartSlice';




const Shoppingitems = ({ item }) => {
    const dispatch = useDispatch();
    const { id, dec, name, image, price, off } = item


    return (
        <div>
            <div className=' cursor-pointer rounded-2xl h-[300px] flex items-center justify-center  '>

                <img class="object-cover w-[200px]" src={image} alt="product image" />
            </div>
            <div class="mt-4 px-5 pb-5">
                <div className='flex justify-start items-start  '>
                    <div class="text-xl font-bold text-black">{name}</div>
                </div>
                <div className='flex justify-start '>
                    <div className='text-gray-600'>{dec}</div>
                </div>

                <div class="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span class="text-2xl font-bold text-slate-900">₹{price}</span>
                        <span class="text-sm text-slate-900 line-through px-2">₹699</span>
                        <span className='text-green-600'>{off}</span>
                    </p>
                </div>
                <button className='flex items-center w-full justify-center rounded-md bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300' onClick={() => dispatch(add(item))}>Add Bag</button>
            </div>
        </div>

    )
}

export default Shoppingitems;