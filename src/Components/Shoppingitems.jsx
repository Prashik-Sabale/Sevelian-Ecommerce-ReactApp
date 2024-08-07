import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from './State/Slice/CartSlice';



const Shoppingitems = ({ item }) => {
    const dispatch = useDispatch();
    const { id, dec, name, image, price } = item


    return (
        <div>
            <div className=' cursor-pointer h-[300px] flex items-center justify-center '>
                <div className="relative ">
                    <img src={image} alt="" className='w-[200px]' />
                </div>
            </div>
            <div className="mt-6 flex justify-between  items-center px-4 " >
                <div  >
                    <div className='text-sm font-bold  text-zinc-600'>{dec}</div>
                    <div className='text-sm font-bold text-zinc-800 mb-3'>{name}</div>
                    <div className='text-xl font-bold'>₹{price}</div>
                </div>
                <button className=' bg-black p-3  text-white' onClick={() => dispatch(add(item))}>Add Bag</button>
            </div>
        </div>
    )
}

export default Shoppingitems;