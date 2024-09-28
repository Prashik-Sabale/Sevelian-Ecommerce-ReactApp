import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from './State/Slice/CartSlice';


const ProductCard = () => {
    const dispatch = useDispatch();
    const { id, dec, name, image, price } = item;

    return (
        <>
            <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a class="relative mx-3 mt-3 flex  overflow-hidden rounded-xl" href="#">
                    <img class="object-cover" src={image} alt="product image" />
                    {/* <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
                </a>
                <div class="mt-4 px-5 pb-5">
                    <div className='flex justify-start items-start  '>
                        <div class="text-xl font-bold text-black">{name}</div>
                    </div>
                    <div className='flex justify-start '>
                        <div className='text-gray-600'>{dec}</div>
                    </div>

                    <div class="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span class="text-2xl font-bold text-slate-900">${price}</span>
                            <span class="text-sm text-slate-900 line-through px-2">$699</span>
                            <span className='text-green-600'>49% off</span>
                        </p>
                    </div>
                    <a href="#" class="flex items-center justify-center rounded-md bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        Add to cart </a
                    >
                </div>
            </div>

        </>
    )
}

export default ProductCard;