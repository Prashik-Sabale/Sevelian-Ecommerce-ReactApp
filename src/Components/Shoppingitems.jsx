import React from 'react';
import { useDispatch } from 'react-redux';



const Shoppingitems = ({ item }) => {
    const dispatch = useDispatch();
    const { id, dec, name, image, price } = item
    return (
        <div>
            <div className=' cursor-pointer h-[300px] flex items-center justify-center '>
                <div class="relative ">
                    <img src={image} alt="" className='w-[200px]' />
                    {/* <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-small">Best Seller</div> */}
                </div>
            </div>
            <div className="mt-6 flex justify-between  items-center px-4 " >
                <div  >
                    <div className='text-sm font-bold  text-zinc-600'>{dec}</div>
                    <div className='text-sm font-bold mb-3'>{name}</div>
                    <div className='text-xl font-bold'>₹{price}</div>
                </div>
                <button className=' bg-black p-3  text-white' onClick={() => dispatch((item))}>Add to Bag</button>
            </div>
        </div>
    )
}

export default Shoppingitems;