import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from './State/Slice/CartSlice';



const Shoppingitems = ({ item }) => {
    const dispatch = useDispatch();
    const { id, dec, name, image, price } = item


    return (
        <div>
            <div className=' cursor-pointer h-[300px] flex items-center justify-center  '>
                {/* Sale  */}
                {/* <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                    </div> */}
                <img src={image} alt="" className='w-[200px]' />
            </div>



            <div className="mt-6 flex justify-between items-center " >
                <div>
                    <div className="text-lg font-bold">{name}</div>
                    <div className="text-sm text-gray-600">{dec}</div>
                    <div className="text-sm font-bold mb-2 ">${price}</div>
                </div>
                <button className=' bg-black p-2  text-white' onClick={() => dispatch(add(item))}>Add Bag</button>
            </div>
            {/* <div className="mt-6 flex justify-between items-center px-4">
                <div>
                    <div className="text-lg font-bold">{name}</div>
                    <div className="text-sm text-gray-600">{dec}</div>
                    <div className="text-sm font-bold mb-2 ">${price}</div>
                </div>
                <button className='bg-black text-white p-2 '>Add To Cart</button>
            </div> */}
        </div>

    )
}

export default Shoppingitems;