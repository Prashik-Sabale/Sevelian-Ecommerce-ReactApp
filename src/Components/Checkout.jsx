import React from 'react';
import { HiChevronLeft } from 'react-icons/hi';
import { open } from './State/Slice/CheckOutSlice';
import { useDispatch, useSelector } from 'react-redux';
import CheckOutItems from './CheckOutItems';

const Checkout = () => {
  const dispatch = useDispatch();
  const { cart, totalPrice, totalQuantity } = useSelector((state) => state.cart);
  console.log(cart);
  const toggle = useSelector(store => store.toggle);
  console.log(toggle);
  return (
    <>
      {
        toggle ?
          <div className=' bg-transparentBlack fixed z-50 top-0 left-0 w-full h-screen '>
            <div className=" h-full bg-white sm:w-[40rem] min-[15rem] overflow-y-auto: ">
              <div className="p-6 ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center cursor-pointer" onClick={() => dispatch(open())}>
                    <HiChevronLeft />
                    <span className=' uppercase text-[0.95rem] select-none'>Continue Shooping</span>
                  </div>
                  <div>Shooping Bag(0)</div>
                </div>
                <div className="mt-8">
                  {cart.length === 0 ? (
                    <div className="uppercase text-center text-3xl"> Your Cart feels lonely.</div>

                  ) : (
                    <>
                      {cart.map(cartItem => {
                        return (
                          <CheckOutItems
                            key={cartItem.id}
                            cartItem={cartItem}
                            totalPrice={totalPrice}
                            totalQuantity={totalQuantity}
                          />
                        )
                      })}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div> : ""
      }
    </>
  )
}

export default Checkout