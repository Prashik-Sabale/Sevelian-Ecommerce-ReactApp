import React from 'react';
import { HiX } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './State/Slice/CartSlice';

const CheckOutItems = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cart, totalPrice, totalQuantity } = useSelector((state) => state.cart);
  const { id, price, amount, name, image } = cartItem;
  console.log(cartItem);
  return (
    <>
      <div className='flex justify-between items-center broder border-solid broder-glass p-4 mb-6' key={id}>
        <div className="flex items-center gap-4">
          <img src={image} alt="" className=' w-20 h-20 object-cover' />
        </div>
        <div className="flex flex-col items-start max-w-[6.8rem]">
          <div>{name}</div>
          <div className="flex items-center gap-4 mt-2">
            <button className='w-8 h-8 text-white bg-black rounded-full' onClick={() => dispatch(decreaseItemQuantity())}>-</button>
            <div>{totalQuantity}</div>
            <button className='w-8 h-8 text-white bg-black rounded-full' onClick={() => dispatch(increaseItemQuantity())}>+</button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <HiX className=' cursor-pointer text-xl' />
          {/* <div>₹{(price * amount).toFixed(2)}</div> */}
          <div>₹{totalPrice}</div>
        </div>
      </div>
    </>
  )
}

export default CheckOutItems;

{/* <h1>{name}</h1>
      <h1>{price}</h1>
      <img src={image} height={50} width={50} alt="" /> */}